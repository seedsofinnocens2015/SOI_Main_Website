import Image from 'next/image';
import { useMemo, useState } from 'react';
import AccentHeading from '@/app/Components/AccentHeading';
import styles from '@/app/sass/shortcode/fertility-calculator.module.scss';
import { getAssetPathClient } from '@/app/utils/assetPath';

function bmiCategory(bmi) {
  if (bmi < 18.5) return { label: 'Underweight', tone: 'info' };
  if (bmi < 25) return { label: 'Normal', tone: 'success' };
  if (bmi < 30) return { label: 'Overweight', tone: 'warn' };
  return { label: 'Obese', tone: 'danger' };
}

export default function BMICalculator() {
  const [heightCm, setHeightCm] = useState('');
  const [weightKg, setWeightKg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const result = useMemo(() => {
    if (!submitted) return null;
    const h = Number(heightCm);
    const w = Number(weightKg);
    if (!h || !w || Number.isNaN(h) || Number.isNaN(w) || h < 80 || h > 220 || w < 20 || w > 250) return null;
    const bmi = w / Math.pow(h / 100, 2);
    const rounded = Math.round(bmi * 10) / 10;
    return { bmi: rounded, ...bmiCategory(rounded) };
  }, [heightCm, submitted, weightKg]);

  const onCalculate = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const onReset = () => {
    setHeightCm('');
    setWeightKg('');
    setSubmitted(false);
  };

  const toneClasses = {
    info: 'bg-[#f7fbff] border-[rgba(33,150,243,0.15)]',
    success: 'bg-[#f4fff7] border-[rgba(76,175,80,0.16)]',
    warn: 'bg-[#fff8e1] border-[rgba(255,152,0,0.18)]',
    danger: 'bg-[#fff5f5] border-[rgba(228,83,82,0.18)]',
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <AccentHeading className={styles.accentCalcTitle}>BMI Calculator (Women)</AccentHeading>
        <p className={styles.desc}>
          Calculate your Body Mass Index (BMI) using height and weight. BMI is one of the indicators that can be discussed during fertility and
          pregnancy planning.
        </p>

        <form onSubmit={onCalculate} className={styles.card}>
          <div className={styles.cardPad}>
            <div className={`${styles.formGrid} ${styles.formGrid2}`}>
              <div className={styles.field}>
                <label className={styles.label}>
                  Height (cm) <span className={styles.required}>*</span>
                </label>
                <input
                  value={heightCm}
                  onChange={(e) => setHeightCm(e.target.value)}
                  className="cs_form_field w-full"
                  type="number"
                  min={80}
                  max={220}
                  placeholder="e.g. 160"
                  required
                />
                <p className={styles.hint}>Allowed range: 80–220 cm</p>
              </div>
              <div className={styles.field}>
                <label className={styles.label}>
                  Weight (kg) <span className={styles.required}>*</span>
                </label>
                <input
                  value={weightKg}
                  onChange={(e) => setWeightKg(e.target.value)}
                  className="cs_form_field w-full"
                  type="number"
                  min={20}
                  max={250}
                  placeholder="e.g. 58"
                  required
                />
                <p className={styles.hint}>Allowed range: 20–250 kg</p>
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
                    <div className={styles.resultTile}>
                      <div className={styles.tileLabel}>BMI value</div>
                      <div className={`${styles.tileValue} ${styles.tileValueBig}`} style={{ fontSize: 26 }}>
                        {result.bmi}
                      </div>
                    </div>
                    <div className={`${styles.resultTile} ${toneClasses[result.tone]}`}>
                      <div className={styles.tileLabel}>Category</div>
                      <div className={`${styles.tileValue} ${styles.tileValueBig}`} style={{ fontSize: 20 }}>
                        {result.label}
                      </div>
                      <div className={styles.hint}>
                        Underweight (&lt;18.5), Normal (18.5–24.9), Overweight (25–29.9), Obese (30+)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.alert}>Please enter valid height (80–220 cm) and weight (20–250 kg).</div>
            )}
          </div>
        )}
      </div>

      <div className={styles.mediaCard}>
        <Image src={getAssetPathClient('/assets/img/Fertility Calculator.jpg')} alt="BMI illustration" width={900} height={720} className="w-full h-auto object-cover" />
      </div>
    </div>
  );
}

