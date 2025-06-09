export const formatEGPWithPound = (value: number): string => {
  const formatted = new Intl.NumberFormat("en-EG", {
    style: "currency",
    currency: "EGP",
  }).format(value);
  return formatted.replace("EGP", "£");
};
