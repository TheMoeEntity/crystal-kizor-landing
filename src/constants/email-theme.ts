// Email clients can't read CSS variables or load our stylesheet, so the palette is
// repeated here as plain hex values. Keep in sync with @theme in src/app/globals.css.
export const EMAIL_THEME = {
  ink: "#241207",
  canopy: "#1e2b25",
  concrete: "#e6e4de",
  limewash: "#f6f6f3",
  stone: "#5c5850",
  ochre: "#b8862b",
  rule: "#dcd9d2",
  fontStack: "'Helvetica Neue', Helvetica, Arial, sans-serif",
} as const;
