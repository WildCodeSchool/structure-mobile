import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const HandSvg = (props: SvgProps) => (
  <Svg
    width={100}
    height={100}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fill="#0D9488"
      d="M100.667 103.374.226 100.894 2.705.455l100.441 2.479z"
    />
    <Path
      d="m68.692 41.567 7.45 7.454a6.524 6.524 0 0 0 9.414-.2v0a6.522 6.522 0 0 0 .07-8.758L61.413 12.924a8.382 8.382 0 0 0-6.04-2.796L35.978 9.65c-10.044-.248-16.947 7.956-17.154 16.327l-.885 35.87"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m30.554 57.87-.06 2.39c-.236 9.566-12.79 9.256-12.555-.31m25.17-1.77-.177 7.173c-.236 9.567-12.792 9.257-12.556-.31l.178-7.174m25.11.62-.258 10.463c-.236 9.567-12.792 9.257-12.556-.31l.259-10.463m25.583-18.51-1.144 46.333a6.28 6.28 0 0 1-6.433 6.123v0a6.275 6.275 0 0 1-6.123-6.428l.672-27.208"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default HandSvg;
