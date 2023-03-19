import * as React from "react";
import Svg, { Circle, Rect, Path } from "react-native-svg";

export default function FilterIcon(props) {
  return (
    <Svg
      width="10"
      height="16"
      viewBox="0 0 10 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M8.5 15L1.5 8L8.5 1"
        stroke="#0D0D0D"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
