import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={34.5}
    height={34.25}
    {...props}
  >
    <g data-name="Group 9759">
      <g
        data-name="Group 44"
        transform="translate(1.25 1.25)"
        fill="none"
        stroke="#ffd03b"
        strokeMiterlimit={10}
        strokeWidth={2.5}
      >
        <ellipse
          data-name="Ellipse 45"
          cx={5.484}
          cy={5.503}
          rx={5.484}
          ry={5.503}
          transform="translate(21.032)"
        />
        <ellipse
          data-name="Ellipse 46"
          cx={5.484}
          cy={5.503}
          rx={5.484}
          ry={5.503}
        />
      </g>
      <g data-name="Group 43">
        <path
          data-name="Path 10457"
          d="M17.25 8.056A11.517 11.517 0 1 1 5.772 19.573 11.5 11.5 0 0 1 17.25 8.056Z"
          fill="#27262c"
          stroke="#ffd03b"
          strokeWidth={2.5}
        />
      </g>
      <g data-name="Group 45" transform="translate(3.619 5.882)">
        <ellipse
          data-name="Ellipse 47"
          cx={13.637}
          cy={13.684}
          rx={13.637}
          ry={13.684}
          fill="none"
          stroke="#27262c"
          strokeMiterlimit={10}
          strokeWidth={2}
        />
      </g>
      <g data-name="Group 46">
        <path
          data-name="Path 239"
          d="M12.586 14.672H15.4l3.673 5.416v-5.416h2.841v9.789h-2.846l-3.653-5.375v5.375h-2.834Z"
          fill="#ffd03b"
        />
      </g>
    </g>
  </svg>
  );
};

export default Icon;
