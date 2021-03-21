import * as React from "react";

import { SvgIcon } from "@material-ui/core";



function SvgPartIcon(props: any) {
  return (
    <SvgIcon viewBox="0 0 20 20" width="2em" height="2em" {...props}>
      <path d="M9 1l6 .003L19 5v14H5l-4-4V9h8V1z" fill="#333" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 2h4.5L18 5.5V18H5.5L2 14.5V10h8V2z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.68 1.32l3.924 3.93H18.5v.5h-4.75v8h-8v4.75h-.5v-4.896L1.323 9.677l.354-.354 3.927 3.927h7.292L9.323 9.677l.354-.354 3.573 3.573V5.604L9.32 1.68l.36-.36z"
        fill="#333"
      />
    </SvgIcon>
  );
}

export default SvgPartIcon;