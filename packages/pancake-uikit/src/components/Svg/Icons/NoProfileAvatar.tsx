import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
  const secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} {...props}>
      <g data-name="Group 53">
        <g data-name="Group 9709">
          <path data-name="Path 238" d="M-.001.001v32h32v-32z" fill="#fdfcfa" />
          <g data-name="Group 47">
            <g data-name="Group 43">
              <path
                data-name="Path 244"
                d="M15.618 9.447a8.375 8.375 0 11-8.375 8.375 8.375 8.375 0 018.375-8.375z"
                fill="#fdfcfa"
                stroke="#0e1018"
                strokeWidth={2}
              />
            </g>
            <g
              data-name="Group 44"
              transform="translate(1.999 4.22)"
              fill="#fdfcfa"
              stroke="#0e1018"
              strokeMiterlimit={10}
              strokeWidth={2}
            >
              <circle
                data-name="Ellipse 45"
                cx={4.551}
                cy={4.551}
                r={4.551}
                transform="translate(18.279 -.219)"
              />
              <circle
                data-name="Ellipse 46"
                cx={4.424}
                cy={4.424}
                r={4.424}
                transform="translate(0 -.219)"
              />
            </g>
            <g data-name="Group 45">
              <path
                data-name="Path 10384"
                d="M15.618 7.959a9.862 9.862 0 11-9.862 9.862 9.862 9.862 0 019.862-9.862z"
                fill="none"
                stroke="#fdfcfa"
                strokeWidth={1.5}
              />
            </g>
            <g data-name="Group 46">
              <path
                data-name="Path 239"
                d="M12.122 14.162h2.112l2.756 4.05v-4.05h2.132v7.32H16.99l-2.741-4.019v4.019h-2.127z"
                fill="#0e1018"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
};

export default Icon;
