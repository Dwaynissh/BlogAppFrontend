import useSWR from "swr";
import { getAllCards } from "../Api/CardApi";
import { getOneUser } from "../Api/AuthApi";

export const useUserProfile = (userID: string) => {
  try {
    const { data: user } = useSWR(`get-one-user/${userID}`, async () => {
      return await getOneUser(userID).then((res) => {
        return res?.data;
      });
    });

    return {
      data: user,
    };
  } catch (error) {
    console.error();
    return error;
  }
};

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
