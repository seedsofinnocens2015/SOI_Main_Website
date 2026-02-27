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

  // Per-counter color mapping (based on original display string)
  const getCounterColor = (original) => {
    const normalized = (original || '').toString().replace(/\s+/g, '');

    // Requested mapping:
    // 20,000 => #df3655
    // 35+    => #53A7A7
    // 78%    => #E1B41A
    // 30+    => #38425B
    if (normalized.startsWith('20,000') || normalized.startsWith('20000')) return '#df3655';
    if ((normalized.startsWith('35') || normalized === '35+') && normalized.includes('+')) return '#53A7A7';
    if ((normalized.startsWith('78') || normalized === '78%') && normalized.includes('%')) return '#E1B41A';
    if ((normalized.startsWith('30') || normalized === '30+') && normalized.includes('+')) return '#38425B';

    return '#df3655';
  };

  useEffect(() => {
    // Handle both old format (array) and new format (object with counters array)
    const countersArray = data?.counters || data || [];
    if (!countersArray || countersArray.length === 0) return;

    // Always initialize with 0 for animation, never skip animation on mount
    const initialCounters = countersArray.map(counter => {
      const targetValue = parseNumber(counter.number);
      return {
        ...counter,
        displayValue: 0,
        targetValue: targetValue || 0,
        originalFormat: counter.number,
      };
    });
    setCounters(initialCounters);
    // Reset animation state on new data
    setHasAnimated(false);
    setAnimationCompleted(false);
    animationCompletedRef.current = false;
  }, [data]);

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
    if (counters.length === 0) return;

    // Force animation to start after component mounts (production fallback)
    const forceStartTimer = setTimeout(() => {
      if (!hasAnimated && !animationCompleted && counters.length > 0) {
        setHasAnimated(true);
        animateCounters();
      }
    }, 500);

    // Check if IntersectionObserver is supported
    if (typeof window === 'undefined' || !window.IntersectionObserver) {
      // Fallback: Start animation immediately if IntersectionObserver is not available
      setTimeout(() => {
        if (!hasAnimated && !animationCompleted) {
          setHasAnimated(true);
          animateCounters();
        }
      }, 300);
      return () => {
        clearTimeout(forceStartTimer);
        timersRef.current.forEach(timer => clearInterval(timer));
        timersRef.current = [];
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated && !animationCompleted) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
      
      // Fallback: If element is already visible, start animation immediately
      const checkVisibility = () => {
        if (currentRef) {
          const rect = currentRef.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight + 100 && rect.bottom > -100;
          
          if (isVisible && !hasAnimated && !animationCompleted) {
            setTimeout(() => {
              if (!hasAnimated && !animationCompleted) {
                setHasAnimated(true);
                animateCounters();
              }
            }, 200);
          }
        }
      };
      
      // Check immediately and multiple times
      checkVisibility();
      setTimeout(checkVisibility, 100);
      setTimeout(checkVisibility, 300);
      
      // Aggressive fallback: Always start animation after 1.5 seconds regardless
      const aggressiveFallback = setTimeout(() => {
        if (!hasAnimated && !animationCompleted && currentRef) {
          setHasAnimated(true);
          animateCounters();
        }
      }, 1500);
      
      return () => {
        clearTimeout(forceStartTimer);
        clearTimeout(aggressiveFallback);
        if (currentRef) {
          observer.unobserve(currentRef);
        }
        // Cleanup timers
        timersRef.current.forEach(timer => clearInterval(timer));
        timersRef.current = [];
      };
    }

    return () => {
      clearTimeout(forceStartTimer);
      // Cleanup timers
      timersRef.current.forEach(timer => clearInterval(timer));
      timersRef.current = [];
    };
  }, [counters.length, hasAnimated, animationCompleted, animateCounters]);

  // Handle both old format (array) and new format (object with counters array)
  const countersArray = data?.counters || data || [];
  if (!countersArray || countersArray.length === 0) return null;
  
  // Ensure we always show the correct value
  const displayCounters = counters.length > 0 
    ? counters.map(counter => ({
        ...counter,
        // If animation completed, ensure displayValue is targetValue
        displayValue: animationCompleted 
          ? (counter.targetValue || parseNumber(counter.number))
          : (counter.displayValue !== undefined ? counter.displayValue : 0),
        targetValue: counter.targetValue || parseNumber(counter.number),
        originalFormat: counter.originalFormat || counter.number,
      }))
    : countersArray.map(counter => {
        const targetValue = parseNumber(counter.number);
        return {
          ...counter,
          displayValue: animationCompleted ? targetValue : 0,
          targetValue: targetValue || 0,
          originalFormat: counter.number,
        };
      });

  return (
    <div className="cs_counter_figma_wrapper" ref={sectionRef}>
      <div className="container">
        {/* Top Badge */}
        {data?.badgeText && (
          <div className="cs_counter_badge">
            {data.badgeText}
          </div>
        )}

        {/* Main Heading */}
        {data?.heading && (
          <div className="cs_counter_heading">
            <span className="cs_counter_heading_highlighted">
              {data.heading.highlighted}
            </span>
            <span className="cs_counter_heading_rest">
              {' '}{data.heading.rest}
            </span>
          </div>
        )}

        {/* Counter Items */}
        <div className="cs_counter_simple_line">
          {displayCounters.map((counter, index) => {
            // Always use targetValue if animation is completed, otherwise use displayValue
            // Fallback to targetValue if displayValue is 0 and we have a valid targetValue
            let valueToDisplay = animationCompleted 
              ? (counter.targetValue || parseNumber(counter.number))
              : (counter.displayValue !== undefined ? counter.displayValue : 0);
            
            // Safety fallback: if valueToDisplay is 0 but we have a targetValue, use targetValue
            if (valueToDisplay === 0 && counter.targetValue && counter.targetValue > 0) {
              valueToDisplay = counter.targetValue;
            }
            
            // Final fallback: parse from original number if still 0
            if (valueToDisplay === 0 && counter.number) {
              const parsed = parseNumber(counter.number);
              if (parsed > 0) {
                valueToDisplay = parsed;
              }
            }
            
            return (
              <div
                key={index}
                className="cs_counter_item"
                style={{ '--counter-color': getCounterColor(counter.originalFormat || counter.number) }}
              >
                <div className="cs_counter_content">
                  <div className="cs_counter_number">
                    {formatNumber(valueToDisplay, counter.originalFormat || counter.number)}
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
