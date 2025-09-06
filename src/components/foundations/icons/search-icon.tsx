import React from 'react';

interface SearchIconProps {
  className?: string;
  size?: number;
}

export const SearchIcon: React.FC<SearchIconProps> = ({ 
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
        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
