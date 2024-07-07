import axios, { AxiosResponse } from "axios";
import { ObjectId } from "mongoose";

const url: string = "http://localhost:4007";

export const createCard = async (
  blogID: any,
  title: string,
  author: string,
  description: string,
  image: string,
  category: string,
  content: string
) => {
  try {
    return await axios
      .post(`${url}/card/create-card/${blogID}`, {
        title,
        author,
        description,
        image,
        category,
        content,
      })
      .then((res: AxiosResponse<any, any>) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const editCard = async (
  cardID: any,
  title: string,
  description: string,
  image: string,
  category: string,
  content: string
) => {
  try {
    return await axios
      .post(`${url}/card/create-card/${cardID}`, {
        title,
        description,
        image,
        category,
        content,
      })
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};

export const getAllCards = async () => {
  try {
    return await axios.get(`${url}/card/get-all-card`).then((res: any) => {
      return res?.data;
    });
  } catch (error: any) {
    return error;
  }
};

export const getOneCard = async (cardID: any) => {
  try {
    return await axios
      .get(`${url}/card/get-one-card/${cardID}`)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error: any) {
    return error;
  }
};

export const getByCategory = async () => {
  try {
    return await axios.get(`${url}/card/get-by-category`).then((res: any) => {
      return res?.data;
    });
  } catch (error: any) {
    return error;
  }
};

export const getFiction = async () => {
  try {
    return await axios.get(`${url}/card/fiction`).then((res: any) => {
      return res?.data;
    });
  } catch (error: any) {
    return error;
  }
};

export const getNonFiction = async () => {
  try {
    return await axios.get(`${url}/card/non-fiction`).then((res: any) => {
      return res?.data;
    });
  } catch (error: any) {
    return error;
  }
};

export const getReligious = async () => {
  try {
    return await axios.get(`${url}/card/religious`).then((res: any) => {
      return res?.data;
    });
  } catch (error: any) {
    return error;
  }
};

export const getAdventure = async () => {
  try {
    return await axios.get(`${url}/card/adventure`).then((res: any) => {
      return res?.data;
    });
  } catch (error: any) {
    return error;
  }
};

export const addBookmark = async (cardID: any) => {
  try {
    const response = await axios.post(`${url}/bookmark/add-bookmark/${cardID}`);

    return response;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};
export const removeBookmark = async (cardID: any) => {
  try {
    const response = await axios.delete(
      `${url}/bookmark/remove-bookmark/${cardID}`
    );

    return response;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

export const getBookmarks = async () => {
  try {
    return await axios.get(`${url}/bookmark/get-bookmarks`).then((res: any) => {
      return res?.data;
    });
  } catch (error: any) {
    return error;
  }
};

export const deleteCard = async (cardID: ObjectId) => {
  try {
    return await axios
      .delete(`${url}/card/delete-card/${cardID}`)
      .then((res) => {
        return res?.data;
      });
  } catch (error: any) {
    return error;
  }
};
