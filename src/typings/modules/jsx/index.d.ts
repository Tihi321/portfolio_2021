declare namespace JSX {
  interface IntrinsicElements {
    "ts-path-grid": ITsPathGridProps;
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
