"use client";
import { useState, useEffect, useRef, useCallback } from 'react';

const parseNumber = (str) => {
  if (!str) return 0;
  const numStr = str.toString().replace(/[,\+%]/g, '');
  const num = parseFloat(numStr);
  return isNaN(num) ? 0 : num;
};

const formatNumber = (value, original) => {
  if (!original) return value.toString();

  const hasComma = original.includes(',');
  const hasPlus = original.includes('+');
  const hasPercent = original.includes('%');

  let formatted = value.toFixed(0);

  if (hasComma && value >= 1000) {
    formatted = formatted.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  if (hasPercent) {
    formatted += '%';
  } else if (hasPlus) {
    formatted += '+';
  }

  return formatted;
};

const getCounterColor = (original) => {
  const normalized = (original || '').toString().replace(/\s+/g, '');

  if (normalized.startsWith('21000') || normalized.startsWith('20000')) return '#df3655';
  if ((normalized.startsWith('35') || normalized === '35+') && normalized.includes('+')) return '#4cacae';
  if ((normalized.startsWith('78') || normalized === '78%') && normalized.includes('%')) return '#fcca1d';
  if ((normalized.startsWith('30') || normalized === '30+') && normalized.includes('+')) return '#45536e';

  return '#df3655';
};

const buildCounterState = (data) => {
  const countersArray = data?.counters || data || [];
  if (!countersArray.length) return [];

  return countersArray.map((counter) => {
    const targetValue = parseNumber(counter.number);
    return {
      ...counter,
      displayValue: 0,
      targetValue: targetValue || 0,
      originalFormat: counter.number,
    };
  });
};

const CounterSection = ({ data, inline = false }) => {
  const countersArray = data?.counters || data || [];
  const [counters, setCounters] = useState(() => buildCounterState(data));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const frameRef = useRef(null);
  const startTimeRef = useRef(null);

  useEffect(() => {
    setCounters(buildCounterState(data));
    setHasAnimated(false);
    startTimeRef.current = null;
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
  }, [data]);

  const animateCounters = useCallback(() => {
    if (hasAnimated) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setCounters((prev) =>
        prev.map((counter) => ({
          ...counter,
          displayValue: counter.targetValue,
        }))
      );
      setHasAnimated(true);
      return;
    }

    const duration = 2000;

    const tick = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;

      setCounters((prev) =>
        prev.map((counter) => ({
          ...counter,
          displayValue: counter.targetValue * eased,
        }))
      );

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        setCounters((prev) =>
          prev.map((counter) => ({
            ...counter,
            displayValue: counter.targetValue,
          }))
        );
        setHasAnimated(true);
        frameRef.current = null;
      }
    };

    frameRef.current = requestAnimationFrame(tick);
  }, [hasAnimated]);

  useEffect(() => {
    if (!counters.length || hasAnimated) return undefined;

    const node = sectionRef.current;
    if (!node) return undefined;

    if (typeof window === 'undefined' || !window.IntersectionObserver) {
      animateCounters();
      return () => {
        if (frameRef.current) cancelAnimationFrame(frameRef.current);
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '40px 0px' }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [counters.length, hasAnimated, animateCounters]);

  if (!countersArray.length) return null;

  const displayCounters = counters.length ? counters : buildCounterState(data);

  return (
    <div
      className={`cs_counter_figma_wrapper${inline ? ' cs_counter_inline' : ''}`}
      ref={sectionRef}
    >
      <div className="container">
        {data?.badgeText && (
          <div className="cs_counter_badge">
            {data.badgeText}
          </div>
        )}

        {data?.heading && (
          <h2 className="cs_counter_heading">
            <span className="cs_counter_heading_highlighted">
              {data.heading.highlighted}
            </span>
            <span className="cs_counter_heading_rest">
              {' '}{data.heading.rest}
            </span>
          </h2>
        )}

        <div className="cs_counter_simple_line">
          {displayCounters.map((counter, index) => {
            const originalFormat = counter.originalFormat || counter.number;
            const finalText = formatNumber(counter.targetValue, originalFormat);
            const valueToDisplay = hasAnimated
              ? counter.targetValue
              : counter.displayValue;

            return (
              <div
                key={index}
                className="cs_counter_item"
                style={{ '--counter-color': getCounterColor(originalFormat) }}
              >
                <div className="cs_counter_content">
                  <div className="cs_counter_number_wrap" aria-label={finalText}>
                    <span className="cs_counter_number_sizer" aria-hidden="true">
                      {finalText}
                    </span>
                    <span className="cs_counter_number">
                      {formatNumber(valueToDisplay, originalFormat)}
                    </span>
                  </div>
                  <div className="cs_counter_text">{counter.title}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
