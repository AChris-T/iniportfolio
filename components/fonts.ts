import { Bricolage_Grotesque, Hanken_Grotesk, Instrument_Serif } from "next/font/google";

// Headlines and numbers
export const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

// Italic accent words
export const accent = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

// Body copy, nav and UI
export const body = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
