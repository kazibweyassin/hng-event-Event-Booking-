import React from 'react';

interface StepIndicatorProps {
  currentStep: string;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep }) => {
  return (
    <div className="text-center text-lg font-semibold mb-6">
      {currentStep}
    </div>
  );
};

export default StepIndicator;