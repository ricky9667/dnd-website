export interface RoomPrice {
  weekday: number;
  weekend: number;
  holiday: number;
}

export interface PriceData {
  room2F: RoomPrice;
  room2A: RoomPrice;
  room2B: RoomPrice;
  room2C: RoomPrice;
}

export const fetchPriceData = async (): Promise<PriceData> => {
  const response = await fetch(
    "https://raw.githubusercontent.com/enquestor-family/dnd-data/main/price.json",
  );
  const data = (await response.json()) as PriceData;

  return data;
};
