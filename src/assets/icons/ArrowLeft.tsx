import * as React from 'react';
import { SVGProps } from 'react';

const IconArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-arrow-left"
    {...props}
  >
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

export default IconArrowLeft;
