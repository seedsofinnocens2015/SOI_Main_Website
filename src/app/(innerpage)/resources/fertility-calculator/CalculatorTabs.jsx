import styles from '@/app/sass/shortcode/fertility-calculator.module.scss';

export default function CalculatorTabs({ tabs, activeTab, onChange }) {
  return (
    <div className="w-full">
      <div className={`mx-auto ${styles.tabsWrap}`}>
        <div className={styles.tabsScroller} role="tablist" aria-label="Fertility calculators">
          {tabs.map((t) => {
            const isActive = t.key === activeTab;
            return (
              <button
                key={t.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`${styles.tabBtn} ${isActive ? styles.active : ''}`}
                onClick={() => onChange(t.key)}
              >
                {t.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
