import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Icon: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={153.363}
      height={26.481}
      {...props}
    >
      <g data-name="Group 9712">
        <g data-name="Group 9711">
          <g data-name="Group 47">
            <g
              data-name="Group 44"
              transform="translate(1 1)"
              fill="none"
              stroke="#ffd03b"
              strokeMiterlimit={10}
              strokeWidth={2}
            >
              <circle
                data-name="Ellipse 45"
                cx={4.253}
                cy={4.253}
                r={4.253}
                transform="translate(17.855)"
              />
              <circle data-name="Ellipse 46" cx={4.253} cy={4.253} r={4.253} />
            </g>
            <g data-name="Group 43">
              <path
                data-name="Path 10457"
                d="M14.18 6.26a8.9 8.9 0 11-8.9 8.9 8.9 8.9 0 018.9-8.9z"
                fill="none"
                stroke="#ffd03b"
                strokeWidth={2}
              />
            </g>
            <g data-name="Group 45">
              <circle
                data-name="Ellipse 47"
                cx={10.576}
                cy={10.576}
                r={10.576}
                transform="translate(3.61 4.58)"
                fill="none"
                stroke="#27262c"
                strokeMiterlimit={10}
                strokeWidth={1.5}
              />
            </g>
            <g data-name="Group 46">
              <path
                data-name="Path 239"
                d="M10.564 11.373h2.183l2.848 4.185v-4.185h2.2v7.565h-2.2l-2.833-4.154v4.154h-2.2z"
                fill="#ffd03b"
              />
            </g>
          </g>
          <g data-name="Group 9710" fill="#ffd03b">
            <path
              data-name="Path 10385"
              d="M33.362 7.717h4.028l5.719 9.349h.038V7.717h2.964V21.17h-3.876l-5.871-9.577h-.038v9.577h-2.964z"
            />
            <path
              data-name="Path 10386"
              d="M48.295 9.029a1.592 1.592 0 01.485-1.169 1.589 1.589 0 011.168-.484 1.6 1.6 0 011.169.484 1.591 1.591 0 01.484 1.169 1.591 1.591 0 01-.484 1.168 1.6 1.6 0 01-1.169.485 1.59 1.59 0 01-1.168-.485 1.592 1.592 0 01-.485-1.168zm.228 2.907h2.85v9.234H48.52z"
            />
            <path
              data-name="Path 10387"
              d="M59.735 14.919a1.6 1.6 0 00-.589-.5 1.729 1.729 0 00-.817-.2 2.176 2.176 0 00-1.681.646 2.386 2.386 0 00-.6 1.69 2.391 2.391 0 00.6 1.692 2.176 2.176 0 001.681.646 1.536 1.536 0 00.817-.209 2.494 2.494 0 00.589-.494l1.881 1.976a3.627 3.627 0 01-1.567.959 5.917 5.917 0 01-1.72.276 5.841 5.841 0 01-2-.342 4.811 4.811 0 01-1.634-.979 4.565 4.565 0 01-1.092-1.529 4.844 4.844 0 01-.4-2 4.834 4.834 0 01.4-1.994 4.578 4.578 0 011.092-1.53 4.825 4.825 0 011.634-.978 5.8 5.8 0 012-.342 5.915 5.915 0 011.72.275 3.639 3.639 0 011.567.96z"
            />
            <path
              data-name="Path 10388"
              d="M62.673 6.806h2.85v8.778l3.153-3.648h3.5l-3.667 4.16 3.761 5.074h-3.591l-3.116-4.674h-.037v4.674h-2.85z"
            />
            <path
              data-name="Path 10389"
              d="M82.008 19.573a4.547 4.547 0 01-1.729 1.35 5.189 5.189 0 01-2.166.475 5.841 5.841 0 01-2-.342 4.811 4.811 0 01-1.634-.979 4.581 4.581 0 01-1.093-1.529 4.86 4.86 0 01-.4-2 4.849 4.849 0 01.4-1.994 4.594 4.594 0 011.093-1.53 4.825 4.825 0 011.634-.978 5.794 5.794 0 012-.342 4.545 4.545 0 011.8.342 3.746 3.746 0 011.368.978 4.481 4.481 0 01.864 1.53 6.177 6.177 0 01.3 1.994v.894h-6.612a2.252 2.252 0 00.742 1.3 2.091 2.091 0 001.405.485 2.136 2.136 0 001.187-.314 3.173 3.173 0 00.846-.807zm-2.413-4.065a1.645 1.645 0 00-.475-1.235 1.69 1.69 0 00-1.273-.514 2.127 2.127 0 00-.836.153 2.086 2.086 0 00-.617.389 1.7 1.7 0 00-.4.551 1.8 1.8 0 00-.162.656z"
            />
            <path
              data-name="Path 10390"
              d="M89.528 22.671q-.287.741-.551 1.311a3.166 3.166 0 01-.675.959 2.638 2.638 0 01-1.035.589 5.6 5.6 0 01-1.654.2 6.677 6.677 0 01-2.127-.343l.379-2.337a3.264 3.264 0 001.33.286 2.463 2.463 0 00.78-.1 1.3 1.3 0 00.5-.3 1.687 1.687 0 00.333-.484q.132-.285.284-.665l.209-.532-4.047-9.31h3.078l2.375 6.1h.038l2.033-6.1h2.926z"
            />
            <path
              data-name="Path 10391"
              d="M95.179 7.717h4.483l3.1 8.779h.038l3.115-8.779h4.466V21.17h-2.965V10.853h-.037l-3.534 10.317h-2.261l-3.4-10.317h-.038V21.17h-2.964z"
            />
            <path
              data-name="Path 10392"
              d="M112.455 16.552a4.818 4.818 0 01.4-1.994 4.592 4.592 0 011.092-1.53 4.83 4.83 0 011.633-.978 5.8 5.8 0 012.005-.342 5.8 5.8 0 012.005.342 4.835 4.835 0 011.634.978 4.622 4.622 0 011.093 1.53 4.849 4.849 0 01.4 1.994 4.859 4.859 0 01-.4 2 4.609 4.609 0 01-1.093 1.529 4.821 4.821 0 01-1.634.979 5.847 5.847 0 01-2.005.342 5.851 5.851 0 01-2.005-.342 4.816 4.816 0 01-1.633-.979 4.579 4.579 0 01-1.092-1.529 4.828 4.828 0 01-.4-2zm2.85 0a2.392 2.392 0 00.6 1.692 2.177 2.177 0 001.681.646 2.179 2.179 0 001.682-.646 2.392 2.392 0 00.6-1.692 2.387 2.387 0 00-.6-1.69 2.179 2.179 0 00-1.682-.646 2.177 2.177 0 00-1.681.646 2.387 2.387 0 00-.6 1.69z"
            />
            <path
              data-name="Path 10393"
              d="M133.314 21.17h-2.737v-1.254h-.038a3.144 3.144 0 01-.389.531 2.579 2.579 0 01-.58.476 3.405 3.405 0 01-.779.342 3.27 3.27 0 01-.95.133 3.978 3.978 0 01-1.757-.333 2.523 2.523 0 01-1.046-.921 3.625 3.625 0 01-.493-1.387 11.237 11.237 0 01-.124-1.729v-5.092h2.851v4.522c0 .266.008.541.028.826a2.6 2.6 0 00.171.788 1.368 1.368 0 00.436.59 1.361 1.361 0 00.846.228 1.767 1.767 0 00.894-.2 1.368 1.368 0 00.522-.532 2.18 2.18 0 00.237-.751 6.457 6.457 0 00.057-.874v-4.6h2.851z"
            />
            <path
              data-name="Path 10394"
              d="M140.614 14.653a2.017 2.017 0 00-1.653-.779 1.555 1.555 0 00-.7.171.6.6 0 00-.341.588.53.53 0 00.351.5 4.617 4.617 0 00.893.285l1.159.266a4.383 4.383 0 011.159.446 2.626 2.626 0 01.893.827 2.47 2.47 0 01.351 1.4 2.589 2.589 0 01-.389 1.472 2.993 2.993 0 01-1 .931 4.283 4.283 0 01-1.369.494 8.111 8.111 0 01-1.5.143 7.3 7.3 0 01-1.957-.276 3.65 3.65 0 01-1.671-.978l1.728-1.919a2.884 2.884 0 00.884.75 2.385 2.385 0 001.131.257 2.633 2.633 0 00.892-.143.525.525 0 00.4-.522.581.581 0 00-.352-.542 3.845 3.845 0 00-.893-.3l-1.159-.266a4.824 4.824 0 01-1.159-.427 2.418 2.418 0 01-.893-.808 2.461 2.461 0 01-.352-1.4 2.809 2.809 0 01.333-1.4 2.932 2.932 0 01.874-.97 3.8 3.8 0 011.244-.56 5.727 5.727 0 011.425-.18 6.706 6.706 0 011.844.266 3.417 3.417 0 011.577.95z"
            />
            <path
              data-name="Path 10395"
              d="M152.925 19.573a4.548 4.548 0 01-1.729 1.35 5.187 5.187 0 01-2.166.475 5.841 5.841 0 01-2-.342 4.813 4.813 0 01-1.634-.979 4.583 4.583 0 01-1.093-1.529 4.862 4.862 0 01-.4-2 4.851 4.851 0 01.4-1.994 4.6 4.6 0 011.093-1.53 4.826 4.826 0 011.634-.978 5.8 5.8 0 012-.342 4.543 4.543 0 011.8.342 3.745 3.745 0 011.368.978 4.481 4.481 0 01.864 1.53 6.177 6.177 0 01.3 1.994v.894h-6.611a2.245 2.245 0 00.741 1.3 2.092 2.092 0 001.4.485 2.142 2.142 0 001.188-.314 3.185 3.185 0 00.845-.807zm-2.413-4.065a1.647 1.647 0 00-.474-1.235 1.692 1.692 0 00-1.274-.514 2.131 2.131 0 00-.836.153 2.087 2.087 0 00-.617.389 1.7 1.7 0 00-.4.551 1.778 1.778 0 00-.161.656z"
            />
          </g>
        </g>
      </g>
    </svg>
  )
};

export default Icon
