import React from 'react';

interface DeleteIconProps {}

const DeleteIcon: React.FunctionComponent<DeleteIconProps> = (props) => {
  return (
    <span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="action-button_icon__KfKvy"
      >
        <path
          d="M4.00016 12.6667C4.00016 13.4 4.60016 14 5.3335 14H10.6668C11.4002 14 12.0002 13.4 12.0002 12.6667V4.66667H4.00016V12.6667ZM12.6668 2.66667H10.3335L9.66683 2H6.3335L5.66683 2.66667H3.3335V4H12.6668V2.66667Z"
          fill="#EBECF0"
        ></path>
      </svg>
    </span>
  );
};

export default DeleteIcon;
