import Image from 'next/image';
import { useMemo, useState } from 'react';
import AccentHeading from '@/app/Components/AccentHeading';
import { addDays, formatDateHuman, parseDateInputToLocalNoon } from './dateUtils';
import styles from '@/app/sass/shortcode/fertility-calculator.module.scss';
import { getAssetPathClient } from '@/app/utils/assetPath';

export default function PeriodCalculator() {
  const [lastPeriod, setLastPeriod] = useState('');
  const [cycleLength, setCycleLength] = useState(28);
  const [submitted, setSubmitted] = useState(false);

  const result = useMemo(() => {
    if (!submitted) return null;
    const lmpDate = parseDateInputToLocalNoon(lastPeriod);
    const cl = Number(cycleLength || 28);
    if (!lmpDate || Number.isNaN(cl) || cl < 20 || cl > 45) return null;

    const next = addDays(lmpDate, cl);
    const upcoming = [next, addDays(next, cl), addDays(addDays(next, cl), cl)];
    return { next, upcoming };
  }, [cycleLength, lastPeriod, submitted]);

  const onCalculate = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const onReset = () => {
    setLastPeriod('');
    setCycleLength(28);
    setSubmitted(false);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <AccentHeading className={styles.accentCalcTitle}>Period Calculator</AccentHeading>
        <p className={styles.desc}>
          Predict your next period date based on your last period start date and your average cycle length. We also show the next 3 expected
          cycle start dates.
        </p>

        <form onSubmit={onCalculate} className={styles.card}>
          <div className={styles.cardPad}>
            <div className={`${styles.formGrid} ${styles.formGrid2}`}>
              <div className={styles.field}>
                <label className={styles.label}>
                  Last period date <span className={styles.required}>*</span>
                </label>
                <input
                  value={lastPeriod}
                  onChange={(e) => setLastPeriod(e.target.value)}
                  className="cs_form_field w-full"
                  type="date"
                  required
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>
                  Cycle length (days) <span className={styles.required}>*</span>
                </label>
                <input
                  value={cycleLength}
                  onChange={(e) => setCycleLength(e.target.value)}
                  className="cs_form_field w-full"
                  type="number"
                  min={20}
                  max={45}
                  required
                />
                <p className={styles.hint}>Typical range is 21–35 days (default 28)</p>
              </div>
            </div>

            <div className={styles.actions}>
              <button type="submit" className={styles.primaryBtn}>
                Calculate
              </button>
              <button type="button" onClick={onReset} className={styles.secondaryBtn}>
                Reset
              </button>
            </div>
          </div>
        </form>

        {submitted && (
          <div className={styles.resultsWrap}>
            {result ? (
              <div className={styles.card}>
                <div className={styles.cardPad}>
                  <AccentHeading level={3} className={styles.accentCalcResults}>
                    Your results
                  </AccentHeading>
                  <div className={styles.resultGrid}>
                    <div className={styles.resultTile} style={{ background: '#fff5f5', borderColor: 'rgba(228,83,82,0.18)' }}>
                      <div className={styles.tileLabel}>Next period date</div>
                      <div className={`${styles.tileValue} ${styles.tileValueBig}`} style={{ color: 'var(--accent-color)' }}>
                        {formatDateHuman(result.next)}
                      </div>
                    </div>
                    <div className={styles.resultTile}>
                      <div className={styles.tileLabel} style={{ marginBottom: 10 }}>
                        Upcoming cycle start dates (next 3)
                      </div>
                      <ul className="m-0 pl-4 text-[14px] text-[#333] space-y-1">
                        {result.upcoming.map((d, idx) => (
                          <li key={idx}>{formatDateHuman(d)}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.alert}>Please enter a valid date and cycle length (20–45 days).</div>
            )}
          </div>
        )}
      </div>

      <div className={styles.mediaCard}>
        <Image src={getAssetPathClient('/assets/img/Fertility Calculator.jpg')} alt="Period illustration" width={900} height={720} className="w-full h-auto object-cover" />
      </div>
    </div>
  );
}

