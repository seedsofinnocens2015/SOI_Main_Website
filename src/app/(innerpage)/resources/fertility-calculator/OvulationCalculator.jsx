import Image from 'next/image';
import { useMemo, useState } from 'react';
import AccentHeading from '@/app/Components/AccentHeading';
import { addDays, formatDateHuman, parseDateInputToLocalNoon } from './dateUtils';
import styles from '@/app/sass/shortcode/fertility-calculator.module.scss';
import { getAssetPathClient } from '@/app/utils/assetPath';

export default function OvulationCalculator() {
  const [lmp, setLmp] = useState('');
  const [cycleLength, setCycleLength] = useState(28);
  const [submitted, setSubmitted] = useState(false);

  const result = useMemo(() => {
    if (!submitted) return null;
    const lmpDate = parseDateInputToLocalNoon(lmp);
    const cl = Number(cycleLength || 28);
    if (!lmpDate || Number.isNaN(cl) || cl < 20 || cl > 45) return null;

    const ovulationDate = addDays(lmpDate, cl - 14);
    const fertileStart = addDays(ovulationDate, -5);
    const fertileEnd = ovulationDate;

    return { ovulationDate, fertileStart, fertileEnd };
  }, [cycleLength, lmp, submitted]);

  const onCalculate = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const onReset = () => {
    setLmp('');
    setCycleLength(28);
    setSubmitted(false);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <AccentHeading className={styles.accentCalcTitle}>Ovulation Calculator</AccentHeading>
        <p className={styles.desc}>
          Estimate your ovulation date and fertile window using the first day of your last period (LMP) and your average cycle length.
        </p>

        <form onSubmit={onCalculate} className={styles.card}>
          <div className={styles.cardPad}>
            <div className={`${styles.formGrid} ${styles.formGrid2}`}>
              <div className={styles.field}>
                <label className={styles.label}>
                  First day of last period <span className={styles.required}>*</span>
                </label>
                <input value={lmp} onChange={(e) => setLmp(e.target.value)} className="cs_form_field w-full" type="date" required />
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
                  <div className={`${styles.resultGrid} ${styles.resultGrid2}`}>
                    <div className={styles.resultTile} style={{ background: '#f7fbff', borderColor: 'rgba(33,150,243,0.15)' }}>
                      <div className={styles.tileLabel}>Estimated ovulation date</div>
                      <div className={`${styles.tileValue} ${styles.tileValueBig}`}>{formatDateHuman(result.ovulationDate)}</div>
                    </div>
                    <div className={styles.resultTile} style={{ background: '#fff5f5', borderColor: 'rgba(228,83,82,0.18)' }}>
                      <div className={styles.tileLabel}>Fertile window</div>
                      <div className={`${styles.tileValue} ${styles.tileValueBig}`} style={{ color: 'var(--accent-color)' }}>
                        {formatDateHuman(result.fertileStart)} – {formatDateHuman(result.fertileEnd)}
                      </div>
                    </div>
                  </div>
                  <p className={styles.hint} style={{ marginTop: 12 }}>
                    This is an estimate. Ovulation can vary month to month; tracking symptoms or using ovulation kits can improve accuracy.
                  </p>
                </div>
              </div>
            ) : (
              <div className={styles.alert}>Please enter a valid date and cycle length (20–45 days).</div>
            )}
          </div>
        )}
      </div>

      <div className={styles.mediaCard}>
        <Image src={getAssetPathClient('/assets/img/Fertility Calculator.jpg')} alt="Ovulation illustration" width={900} height={720} className="w-full h-auto object-cover" />
      </div>
    </div>
  );
}

