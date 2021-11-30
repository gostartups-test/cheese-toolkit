// import React from "react";
// import { SvgProps } from "../types";
// import priceBUSD from'./cheese.svg';

// const Icon: React.FC<SvgProps> = () => {
//   return (
//     <img  src={priceBUSD} alt="img"/>
//   );
// };

// export default Icon;

import React from "react";
import { useTheme } from "styled-components";
import cheese from'./cheese.svg';

import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
  const secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";

  return (
    <img  src={cheese} alt="img"/>
  );
};

export default Icon;