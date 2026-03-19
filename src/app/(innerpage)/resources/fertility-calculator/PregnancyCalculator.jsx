import Image from 'next/image';
import { useMemo, useState } from 'react';
import AccentHeading from '@/app/Components/AccentHeading';
import {
  addDays,
  diffDays,
  formatDateHuman,
  getTrimesterByGestationalWeeks,
  parseDateInputToLocalNoon,
} from './dateUtils';
import styles from '@/app/sass/shortcode/fertility-calculator.module.scss';
import { getAssetPathClient } from '@/app/utils/assetPath';

export default function PregnancyCalculator() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [lmp, setLmp] = useState('');
  const [cycleLength, setCycleLength] = useState(28);
  const [submitted, setSubmitted] = useState(false);

  const result = useMemo(() => {
    if (!submitted) return null;
    const lmpDate = parseDateInputToLocalNoon(lmp);
    const cl = Number(cycleLength || 28);
    if (!lmpDate || Number.isNaN(cl) || cl < 20 || cl > 45) return null;

    const dueDate = addDays(lmpDate, 280);
    const ovulationDate = addDays(lmpDate, cl - 14);

    const today = new Date();
    const todayNoon = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 0, 0, 0);
    const daysPregnant = Math.max(0, diffDays(todayNoon, lmpDate));
    const weeksCompleted = Math.floor(daysPregnant / 7);
    const currentWeek = weeksCompleted + 1;
    const trimester = getTrimesterByGestationalWeeks(currentWeek);

    return {
      dueDate,
      ovulationDate,
      currentWeek,
      weeksCompleted,
      daysIntoWeek: daysPregnant % 7,
      trimester,
    };
  }, [cycleLength, lmp, submitted]);

  const onCalculate = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const onReset = () => {
    setName('');
    setPhone('');
    setEmail('');
    setLmp('');
    setCycleLength(28);
    setSubmitted(false);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <AccentHeading className={styles.accentCalcTitle}>Due Date (Pregnancy) Calculator</AccentHeading>
        <p className={styles.desc}>
          Enter the first day of your last menstrual period (LMP) and your average cycle length to estimate your due date,
          ovulation date and current pregnancy week.
        </p>

        <form onSubmit={onCalculate} className={styles.card}>
          <div className={styles.cardPad}>
            <div className={`${styles.formGrid} ${styles.formGrid2}`}>
              <div className={styles.field}>
                <label className={styles.label}>Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} className="cs_form_field w-full" placeholder="Your name" />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Phone</label>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} className="cs_form_field w-full" placeholder="Phone number" />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="cs_form_field w-full"
                  placeholder="Email address"
                  type="email"
                />
                <p className={styles.hint}>Optional — we don’t store this unless you submit a request elsewhere.</p>
              </div>
              <div className={styles.field}>
                <label className={styles.label}>
                  First day of last period <span className={styles.required}>*</span>
                </label>
                <input value={lmp} onChange={(e) => setLmp(e.target.value)} className="cs_form_field w-full" type="date" required />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>
                  Average cycle length (days) <span className={styles.required}>*</span>
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
                  <div className={`${styles.resultGrid} ${styles.resultGrid3}`}>
                    <div className={styles.resultTile} style={{ background: '#fff5f5', borderColor: 'rgba(228,83,82,0.18)' }}>
                      <div className={styles.tileLabel}>Estimated due date</div>
                      <div className={`${styles.tileValue} ${styles.tileValueBig}`} style={{ color: 'var(--accent-color)' }}>
                        {formatDateHuman(result.dueDate)}
                      </div>
                    </div>
                    <div className={styles.resultTile} style={{ background: '#f7fbff', borderColor: 'rgba(33,150,243,0.15)' }}>
                      <div className={styles.tileLabel}>Estimated ovulation date</div>
                      <div className={`${styles.tileValue} ${styles.tileValueBig}`}>{formatDateHuman(result.ovulationDate)}</div>
                    </div>
                    <div className={styles.resultTile} style={{ background: '#f4fff7', borderColor: 'rgba(76,175,80,0.16)' }}>
                      <div className={styles.tileLabel}>Pregnancy week</div>
                      <div className={`${styles.tileValue} ${styles.tileValueBig}`}>
                        Week {result.currentWeek}
                      </div>
                      <div className={styles.hint} style={{ marginTop: 6 }}>
                        {result.weeksCompleted}w {result.daysIntoWeek}d completed
                      </div>
                    </div>
                  </div>
                  <div className={styles.hint} style={{ marginTop: 12, color: '#444', fontSize: 14 }}>
                    <span style={{ fontWeight: 800 }}>Trimester:</span> {result.trimester}
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.alert}>Please enter a valid date and cycle length (20–45 days).</div>
            )}
          </div>
        )}
      </div>

      <div className="relative">
        <div className={styles.mediaCard}>
          <Image
            src={getAssetPathClient('/assets/img/Fertility Calculator.jpg')}
            alt="Fertility illustration"
            width={900}
            height={720}
            className="w-full h-auto object-cover"
            priority={false}
          />
        </div>
      </div>
    </div>
  );
}

