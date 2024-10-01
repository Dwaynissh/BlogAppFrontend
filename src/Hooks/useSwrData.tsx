import useSWR from "swr";
import { getAllCards } from "../Api/CardApi";

export const useGetAllCards = () => {
  try {
    const { data: allCards } = useSWR(
      `card/get-all-card`,
      async () => {
        return await getAllCards().then((res) => {
          return res?.data || [];
        });
      },
      { refreshInterval: 2000 }
    );
    return {
      data: allCards || [],
    };
  } catch (error) {
    console.error();
    return error;
  }
};
