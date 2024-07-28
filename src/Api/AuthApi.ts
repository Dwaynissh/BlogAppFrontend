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
      .post(`${url}/login-user`, { email, password })
      .then((res: AxiosResponse) => {
        console.log("viewing api login res", res?.data);
        return res?.data;
      });
  } catch (error) {
    console.log(error);
  }
};

// export const userCookieAPI = async () => {
//     try {
//       return await axios
//         .get(`${URL}/user-cookie`, { withCredentials: true })
//         .then((res: any) => {
//           return res.data.data;
//         });
//     } catch (error) {
//       return error;
//     }
//   };

//   export const userLogOutAPI = async () => {
//     try {
//       return await axios.delete(`${URL}/logout`, { withCredentials: true });
//     } catch (error) {
//       return error;
//     }
//   };
