import Image from 'next/image';
import { useMemo, useState } from 'react';
import AccentHeading from '@/app/Components/AccentHeading';
import { getAssetPathClient } from '@/app/utils/assetPath';
import { diffDays, formatDateHuman, getTrimesterByGestationalWeeks, parseDateInputToLocalNoon } from './dateUtils';
import styles from '@/app/sass/shortcode/fertility-calculator.module.scss';

export default function PregnancyWeekCalculator() {
  const [lmp, setLmp] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const result = useMemo(() => {
    if (!submitted) return null;
    const lmpDate = parseDateInputToLocalNoon(lmp);
    if (!lmpDate) return null;

    const today = new Date();
    const todayNoon = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 0, 0, 0);
    const daysPregnant = Math.max(0, diffDays(todayNoon, lmpDate));
    const weeksCompleted = Math.floor(daysPregnant / 7);
    const currentWeek = weeksCompleted + 1;
    const daysCompleted = daysPregnant % 7;
    const trimester = getTrimesterByGestationalWeeks(currentWeek);

    return {
      lmpDate,
      currentWeek,
      weeksCompleted,
      daysCompleted,
      trimester,
    };
  }, [lmp, submitted]);

  const onCalculate = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const onReset = () => {
    setLmp('');
    setSubmitted(false);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <AccentHeading className={styles.accentCalcTitle}>Pregnancy Week Calculator</AccentHeading>
        <p className={styles.desc}>
          Calculate how many weeks pregnant you are based on the first day of your last menstrual period (LMP).
        </p>

        <form onSubmit={onCalculate} className={styles.card}>
          <div className={styles.cardPad}>
            <div className={styles.formGrid}>
              <div className={styles.field}>
                <label className={styles.label}>
                  First day of last period <span className={styles.required}>*</span>
                </label>
                <input value={lmp} onChange={(e) => setLmp(e.target.value)} className="cs_form_field w-full" type="date" required />
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
                  <div className={`${styles.resultGrid} ${styles.resultGrid3}`}>
                    <div className={styles.resultTile} style={{ background: '#f7fbff', borderColor: 'rgba(33,150,243,0.15)' }}>
                      <div className={styles.tileLabel}>LMP date</div>
                      <div className={styles.tileValue}>{formatDateHuman(result.lmpDate)}</div>
                    </div>
                    <div className={styles.resultTile} style={{ background: '#fff5f5', borderColor: 'rgba(228,83,82,0.18)' }}>
                      <div className={styles.tileLabel}>Current pregnancy week</div>
                      <div className={`${styles.tileValue} ${styles.tileValueBig}`} style={{ color: 'var(--accent-color)' }}>
                        Week {result.currentWeek}
                      </div>
                      <div className={styles.hint} style={{ marginTop: 6 }}>
                        {result.weeksCompleted}w {result.daysCompleted}d completed
                      </div>
                    </div>
                    <div className={styles.resultTile} style={{ background: '#f4fff7', borderColor: 'rgba(76,175,80,0.16)' }}>
                      <div className={styles.tileLabel}>Trimester</div>
                      <div className={styles.tileValue}>{result.trimester}</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.alert}>Please enter a valid date.</div>
            )}
          </div>
        )}
      </div>

      <div className={styles.mediaCard}>
        <Image src={getAssetPathClient('/assets/img/Fertility Calculator.jpg')} alt="Pregnancy week illustration" width={900} height={720} className="w-full h-auto object-cover" />
      </div>
    </div>
  );
}

