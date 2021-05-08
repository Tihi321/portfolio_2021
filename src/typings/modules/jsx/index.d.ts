declare namespace JSX {
  interface IntrinsicElements {
    "ts-path-grid": ITsPathGridProps;
    "a-scene": any;
    "a-camera": any;
    "a-box": any;
    "a-plane": any;
  }

  interface ITsPathGridProps {
    fill: string;
    opacity: number;
    stroke: string;
    strokewidth: number;
    vbx: number;
    vby: number;
    path: string;
  }
}
