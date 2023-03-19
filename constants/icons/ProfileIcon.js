import * as React from "react";
import Svg, { Circle, Rect, Path } from "react-native-svg";

export default function SvgComponent(props) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        id="Stroke 1"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.0002 2.75012C17.1082 2.75012 21.2502 6.89112 21.2502 12.0001C21.2502 17.1081 17.1082 21.2501 12.0002 21.2501C6.89124 21.2501 2.75024 17.1081 2.75024 12.0001C2.75024 6.89212 6.89224 2.75012 12.0002 2.75012Z"
        stroke="#FF9431"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        id="Stroke 11"
        d="M15.9395 12.013H15.9485"
        stroke="#FF9431"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        id="Stroke 13"
        d="M11.9304 12.013H11.9394"
        stroke="#FF9431"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        id="Stroke 15"
        d="M7.9214 12.013H7.9304"
        stroke="#FF9431"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
