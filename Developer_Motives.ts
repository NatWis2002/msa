export type DevelopabilityMotif =
  | "cystine"
  | "n_linked_glycosylation"
  | "asn_deamidation"
  | "asp_isomerization"
  | "asn_deamidation_low"
  | "asp_isomerization_low"
  | "lys_glycation"
  | "met_oxidation"
  | "integrin_binding"
  | "CD11c/CD18_binding";
 
export const DEVELOPABILITY_MOTIF_REGEXES: {
  [k in DevelopabilityMotif]: RegExp;
} = {
  // 'cystine' regex is used to find every Cystine in a sequence but not every Cystine is "free"
  // we use additional logic inside of "colorMarkFreeCysDevelopabilityMotifs" function to calculate free_cys
  cystine: /C/g,
  n_linked_glycosylation: /N[^P][ST]/g,
  asn_deamidation: /N[GST]/g,
  asp_isomerization: /D[GST]/g,
  asn_deamidation_low: /N[NH]/g,
  asp_isomerization_low: /D[DH]/g,
  lys_glycation: /KD|KE|EK/g,
  met_oxidation: /M(?!DVW)/g,
  integrin_binding: /RGD|RYD/g,
  "CD11c/CD18_binding": /GPR/g,
};
 
export const getDevelopabilityMotifColors = (theme: "dark" | "light") =>
  theme === "light"
    ? DEVELOPABILITY_MOTIF_COLORS
    : DEVELOPABILITY_MOTIF_COLORS_DARK;
 
export const DEVELOPABILITY_MOTIF_COLORS: {
  [k in DevelopabilityMotif]: string;
} = {
  cystine: "#ffffb6", // Light yellow
  n_linked_glycosylation: "#accfbf", // Gray-green
  asn_deamidation: "#ff9cee", // Light pink
  asp_isomerization: "#85e3ff", // Light blue
  asn_deamidation_low: "#ffb5e8", // Light pink
  asp_isomerization_low: "#ace7ff", // Lighter blue
  lys_glycation: "#aff8d8", // Light pastel green
  met_oxidation: "#e7ffac", // Light pastel green-yellow
  integrin_binding: "#9f73ff", // Purple
  "CD11c/CD18_binding": "#ffa673", // Pastel orange
};
 
export const DEVELOPABILITY_MOTIF_COLORS_DARK: {
  [k in DevelopabilityMotif]: string;
} = {
  cystine: "#878761", // Dark yellow
  n_linked_glycosylation: "#799186", // Gray-green
  asn_deamidation: "#a8689d", // Dark pink
  asp_isomerization: "#5a9aad", // Dark blue
  asn_deamidation_low: "#7a566f", // Darker pink
  asp_isomerization_low: "#688d9c", // Dark blue
  lys_glycation: "#6b9985", // Dark pastel green
  met_oxidation: "#8a9967", // Dark pastel green-yellow
  integrin_binding: "#6347a1", // Purple
  "CD11c/CD18_binding": "#966345", // Pastel orange
};