import React from 'react';

interface LostPageIllustrationProps {
  className?: string;
  width?: number;
  height?: number;
}

export const LostPageIllustration: React.FC<LostPageIllustrationProps> = ({ 
  className = '',
  width = 240,
  height = 240
}) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 240 240" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background circle */}
      <circle cx="120" cy="120" r="120" fill="#F9FAFB"/>
      
      {/* Document with question mark */}
      <rect x="75" y="60" width="90" height="120" rx="8" fill="white" stroke="#E5E7EB" strokeWidth="2"/>
      
      {/* Fold corner */}
      <path d="M155 60L155 80L175 80Z" fill="#F3F4F6" stroke="#E5E7EB" strokeWidth="2"/>
      
      {/* Question mark */}
      <circle cx="120" cy="110" r="12" fill="#EF4444"/>
      <path 
        d="M116 106c0-2.5 2-4.5 4-4.5s4 2 4 4.5c0 1.5-1 2.5-2 3l-1 1v2m0 4v2" 
        stroke="white" 
        strokeWidth="2" 
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Floating elements */}
      <circle cx="90" cy="90" r="4" fill="#F59E0B" opacity="0.6"/>
      <circle cx="150" cy="140" r="3" fill="#10B981" opacity="0.6"/>
      <circle cx="180" cy="100" r="2" fill="#3B82F6" opacity="0.6"/>
      
      {/* Search magnifying glass */}
      <circle cx="60" cy="170" r="8" fill="none" stroke="#6B7280" strokeWidth="2"/>
      <path d="M66 176l4 4" stroke="#6B7280" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
};
