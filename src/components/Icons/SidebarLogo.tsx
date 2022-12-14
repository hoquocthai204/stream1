import React from 'react';

export interface SidebarLogoProps {}

export const SidebarLogo = (props: SidebarLogoProps) => {
  return (
    <span className="siderbar__logo--m">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        fill="none"
        viewBox="0 0 60 60"
      >
        <circle cx="30" cy="30" r="30" fill="#fff" />
        <path
          fill="#000"
          d="M18.75 45h8.56V34.259h2.013L35.407 45h9.063l-7.175-12.42c3.147-1.216 5.413-3.608 5.413-7.888v-.168c0-6.335-4.364-9.524-12.21-9.524H18.75v30zm8.56-16.322v-7.216h2.81c2.77 0 4.28.965 4.28 3.398v.168c0 2.434-1.426 3.65-4.321 3.65h-2.77z"
        />
      </svg>
    </span>
  );
};
