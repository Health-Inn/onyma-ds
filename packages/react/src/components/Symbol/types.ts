export type SymbolProps = {
  name: string;
  type?: "outlined" | "rounded" | "sharp";
  fill?: 0 | 1;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;
  size?: number;
} & React.HTMLAttributes<HTMLSpanElement>;
