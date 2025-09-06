import React from 'react';

interface ArrowLeftIconProps {
  className?: string;
  size?: number;
}

export const ArrowLeftIcon: React.FC<ArrowLeftIconProps> = ({ 
  className = '',
  size = 20 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 20 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="m15 18-8-8 8-8"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
