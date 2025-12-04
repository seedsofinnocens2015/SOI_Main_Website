"use client";
import { useState, useEffect, useRef, useCallback } from 'react';

const CounterSection = ({ data }) => {
  const [counters, setCounters] = useState([]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const sectionRef = useRef(null);
  const timersRef = useRef([]);
  const animationCompletedRef = useRef(false);
  const isPageVisibleRef = useRef(true);

  // Parse number from string like "20,000+", "35+", "78%"
  const parseNumber = (str) => {
    if (!str) return 0;
    // Remove commas, +, % and extract numeric value
    const numStr = str.toString().replace(/[,\+%]/g, '');
    const num = parseFloat(numStr);
    return isNaN(num) ? 0 : num;
  };

  // Format number back with original suffix
  const formatNumber = (value, original) => {
    if (!original) return value.toString();
    
    // Check if original had comma formatting
    const hasComma = original.includes(',');
    // Check for suffix
    const hasPlus = original.includes('+');
    const hasPercent = original.includes('%');
    
    let formatted = value.toFixed(0);
    
    // Add comma formatting for large numbers
    if (hasComma && value >= 1000) {
      formatted = formatted.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    
    // Add suffix
    if (hasPercent) {
      formatted += '%';
    } else if (hasPlus) {
      formatted += '+';
    }
    
    return formatted;
  };

  useEffect(() => {
    if (!data || data.length === 0) return;

    // If animation was already completed, set to target values immediately
    if (animationCompletedRef.current || animationCompleted) {
      const initialCounters = data.map(counter => ({
        ...counter,
        displayValue: parseNumber(counter.number),
        targetValue: parseNumber(counter.number),
        originalFormat: counter.number,
      }));
      setCounters(initialCounters);
      setHasAnimated(true);
      setAnimationCompleted(true);
    } else {
      // Initialize counters with 0
      const initialCounters = data.map(counter => ({
        ...counter,
        displayValue: 0,
        targetValue: parseNumber(counter.number),
        originalFormat: counter.number,
      }));
      setCounters(initialCounters);
    }
  }, [data, animationCompleted]);

  const animateCounters = useCallback(() => {
    if (animationCompletedRef.current || !isPageVisibleRef.current) return;
    
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    setCounters((prevCounters) => {
      const newTimers = [];
      let completedCount = 0;
      
      prevCounters.forEach((counter, index) => {
        const targetValue = counter.targetValue;
        const startValue = counter.displayValue || 0;
        const increment = (targetValue - startValue) / steps;
        let currentStep = 0;

        const timer = setInterval(() => {
          // Skip if page is not visible
          if (!isPageVisibleRef.current) {
            clearInterval(timer);
            // Set to target value immediately when page is hidden
            setCounters((prev) => {
              const updated = [...prev];
              if (updated[index]) {
                updated[index] = {
                  ...updated[index],
                  displayValue: targetValue,
                };
              }
              return updated;
            });
            return;
          }

          currentStep++;
          const currentValue = Math.min(
            startValue + increment * currentStep,
            targetValue
          );

          setCounters((prev) => {
            const updated = [...prev];
            if (updated[index]) {
              updated[index] = {
                ...updated[index],
                displayValue: currentValue,
              };
            }
            return updated;
          });

          if (currentStep >= steps) {
            clearInterval(timer);
            completedCount++;
            
            // Ensure final value is exact
            setCounters((prev) => {
              const updated = [...prev];
              if (updated[index]) {
                updated[index] = {
                  ...updated[index],
                  displayValue: targetValue,
                };
              }
              
              // Mark animation as completed when all counters are done
              if (completedCount === prevCounters.length) {
                animationCompletedRef.current = true;
                setAnimationCompleted(true);
              }
              
              return updated;
            });
          }
        }, stepDuration);

        newTimers.push(timer);
      });

      timersRef.current = newTimers;
      return prevCounters;
    });
  }, []);

  // Handle page visibility changes
  useEffect(() => {
    const handleVisibilityChange = () => {
      isPageVisibleRef.current = !document.hidden;
      
      // If page becomes visible and animation was completed, ensure values are set
      if (!document.hidden && (animationCompletedRef.current || animationCompleted) && counters.length > 0) {
        setCounters((prev) => {
          return prev.map(counter => ({
            ...counter,
            displayValue: counter.targetValue,
          }));
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [counters.length, animationCompleted]);

  useEffect(() => {
    if (counters.length === 0 || hasAnimated || animationCompleted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated && !animationCompleted) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.2 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      // Cleanup timers
      timersRef.current.forEach(timer => clearInterval(timer));
      timersRef.current = [];
    };
  }, [counters.length, hasAnimated, animationCompleted, animateCounters]);

  if (!data || data.length === 0) return null;

  // Ensure we always show the correct value
  const displayCounters = counters.length > 0 
    ? counters.map(counter => ({
        ...counter,
        // If animation completed, ensure displayValue is targetValue
        displayValue: animationCompleted 
          ? counter.targetValue 
          : (counter.displayValue !== undefined ? counter.displayValue : 0)
      }))
    : data.map(counter => ({
        ...counter,
        displayValue: animationCompleted ? parseNumber(counter.number) : 0,
        targetValue: parseNumber(counter.number),
        originalFormat: counter.number,
      }));

  return (
    <div className="container" ref={sectionRef}>
      <div className="cs_counter_simple_line">
        {displayCounters.map((counter, index) => {
          // Always use targetValue if animation is completed, otherwise use displayValue
          const valueToDisplay = animationCompleted 
            ? counter.targetValue 
            : (counter.displayValue !== undefined ? counter.displayValue : 0);
          
          return (
            <div key={index} className="cs_counter_item">
              <div className="cs_counter_content">
                <div className="cs_counter_number">
                  {formatNumber(valueToDisplay, counter.originalFormat || counter.number)}
                </div>
                <div className="cs_counter_text">{counter.title}</div>
              </div>
              {index < displayCounters.length - 1 && <span className="cs_counter_separator">|</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CounterSection;
