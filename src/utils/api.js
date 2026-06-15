export const fetchPriceData = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/enquestor-family/dnd-data/main/price.json",
  );
  const data = await response.json();

  return data;
};
