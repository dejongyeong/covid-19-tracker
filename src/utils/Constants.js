const SIZE = {
  xs: "0px",
  sm: "480px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
};

/* eslint-disable */
export const MEDIA_QUERIES = {
  xs: `(min-width:${SIZE.xs})`,
  sm: `(max-width:calc(${SIZE.sm} - 0.02px))`,
  md: `(max-width:calc(${SIZE.md} - 0.02px))`,
  lg: `(max-width:calc(${SIZE.lg} - 0.02px))`,
  xl: `(min-width:${SIZE.xl})`,
};
