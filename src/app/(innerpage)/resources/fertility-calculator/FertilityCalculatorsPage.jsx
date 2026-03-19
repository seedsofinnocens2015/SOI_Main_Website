"use client";

import { useMemo, useState } from 'react';
import CalculatorTabs from './CalculatorTabs';
import PregnancyCalculator from './PregnancyCalculator';
import OvulationCalculator from './OvulationCalculator';
import PeriodCalculator from './PeriodCalculator';
import PregnancyWeekCalculator from './PregnancyWeekCalculator';
import BMICalculator from './BMICalculator';

const TABS = [
  { key: 'pregnancy-week', label: 'Pregnancy Calculator' },
  { key: 'due-date', label: 'Due Date Calculator' },
  { key: 'ovulation', label: 'Ovulation Calculator' },
  { key: 'period', label: 'Period Calculator' },
  { key: 'bmi', label: 'BMI Calculator' },
];

export default function FertilityCalculatorsPage() {
  const [activeTab, setActiveTab] = useState(TABS[0].key);

  const ActiveComponent = useMemo(() => {
    switch (activeTab) {
      case 'due-date':
        return PregnancyCalculator;
      case 'ovulation':
        return OvulationCalculator;
      case 'period':
        return PeriodCalculator;
      case 'bmi':
        return BMICalculator;
      case 'pregnancy-week':
      default:
        return PregnancyWeekCalculator;
    }
  }, [activeTab]);

  return (
    <div className="container">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-6">
          <CalculatorTabs tabs={TABS} activeTab={activeTab} onChange={setActiveTab} />
        </div>

        <div className="bg-white rounded-[16px] border border-[#eee] shadow-[0_2px_20px_rgba(0,0,0,0.06)] p-5 sm:p-7">
          <div key={activeTab} className="animate-[panelIn_240ms_ease-out]">
            <ActiveComponent />
          </div>
        </div>

        <div className="mt-6 rounded-[14px] border border-[#ffe6e6] bg-[#fff7f7] p-5 text-[14px] text-[#7a2a2a] leading-[1.75]">
          <span className="font-semibold">Important:</span> These calculators provide estimates only. For medical advice or personalized guidance,
          please consult your fertility specialist.
        </div>
      </div>

      <style jsx global>{`
        @keyframes panelIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

