import * as React from "react";
import Svg, { Circle, Rect, Path } from "react-native-svg";

export default function FilterIcon(props) {
  return (
    <Svg
      width="29"
      height="28"
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.766 25.0833H10.0269C6.44946 25.0833 3.70499 23.7912 4.48455 18.5906L5.39225 11.5425C5.8728 8.94754 7.52803 7.95441 8.98035 7.95441H20.8553C22.3289 7.95441 23.8881 9.02229 24.4434 11.5425L25.3511 18.5906C26.0132 23.2038 23.3434 25.0833 19.766 25.0833Z"
        stroke="#FF9431"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M19.9262 7.69813C19.9262 4.91437 17.6695 2.6577 14.8858 2.6577V2.6577C13.5453 2.65202 12.2577 3.18055 11.3078 4.12643C10.3579 5.07231 9.82396 6.35761 9.82397 7.69813H9.82397"
        stroke="#FF9431"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M18.3457 12.9522H18.2923"
        stroke="#FF9431"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M11.5433 12.9522H11.4899"
        stroke="#FF9431"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
