import axios, { AxiosResponse } from "axios";

const url: string = "http://localhost:4007/main";

export const registerUser = async (email: string, password: string) => {
  try {
    return await axios
      .post(`${url}/create-user`, { email, password })
      .then((res: AxiosResponse) => {
        return res?.data;
      });
  } catch (error) {
    console.log(error);
  }
};
export const loginUser = async (email: string, password: string) => {
  try {
    return await axios
      .post(`${url}/login-user`, { email, password }, { withCredentials: true })
      .then((res: AxiosResponse) => {
        console.log("viewing api login res", res?.data);
        return res?.data;
      });
  } catch (error) {
    console.log(error);
  }
};

export const createProfile = async (
  userID: any,
  fullName: string,
  gender: string,
  bio: string,
  profession: string
) => {
  try {
    return await axios
      .post(`${url}/create-profile/${userID}`, {
        fullName,
        gender,
        bio,
        profession,
      })
      .then((res: AxiosResponse<any, any>) => {
        console.log("Api checking Profile response", res?.data);
        return res?.data;
      });
  } catch (error) {
    console.error();
    return error;
  }
};

export const getOneUser = async (userID: any) => {
  try {
    return await axios
      .get(`${url}/get-one-user/${userID}`)
      .then((res: AxiosResponse<any, any>) => {
        console.log("Reading User data", res.data);
        return res.data;
      });
  } catch (error) {
    console.error();
    return error;
  }
};

export const readUserCookie = async () => {
  try {
    return await axios
      .get(`${URL}/read-cookie`, { withCredentials: true })
      .then((res: AxiosResponse<any, any>) => {
        return res.data.data;
      });
  } catch (error) {
    return error;
  }
};

export const logoutUser = async () => {
  try {
    return await axios.delete(`${URL}/logout`, { withCredentials: true });
  } catch (error) {
    return error;
  }
};
