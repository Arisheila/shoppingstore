// import axios from "../config/axiosConfig";

// export const login = async (login, pass) => {
//   try {
//     const response = await axios.post("/auth/login", {
//       login,
//       pass
//     });
//     return response.data;
//   } catch (error) {
//     console.log("Error: ", error);
//   }
// };

// export const logout = async () => {
//   try {
//     const response = await axios.post("/auth/logout");
//     return response.data;
//   } catch (error) {
//     console.log("Error: ", error);
//   }
// };

// export const refreshToken = async () => {
//   try {
//     let refreshToken = localStorage.getItem("refreshToken");

//     // const { data } = await api.post("/auth/refresh", {
//     //   refreshToken: refreshToken
//     // });
//     const { data } = await api.post("/auth/refresh", {
//       refreshToken: refreshToken
//     });

//     localStorage.setItem("accessToken", data.access_token);
//     localStorage.setItem("refreshToken", data.refresh_token);
//   } catch (err) {
//     console.error(err);
//   }
// };

// export const testRequest = async () => {
//   try {
//     const response = await axios.post("/dashboard");
//     return response.data;
//   } catch (error) {
//     console.log("Error: ", error);
//   }
// };

// /*
//  lifespan of AT = 1h
//  lifespan of RT = 24h

//  1. Logged in -> access token
//  2. expired access token
//  3. if access token is expired you get 401 (Unauthorized)
//  4. request to endpoint /refresh-token with your 
//  refresh token in the header +
//  5. It will return you, a new access token and a new refresh token + 
 
//   lifespan of AT = 1h
//   lifespan of RT = 24h

//   2. expired access token
//   3. if access token is expired you get 401 (Unauthorized)
//   4. request to endpoint /refresh-token with your 
//  refresh token in the header
//   5. It will return you, a new access token and a new refresh token

//   lifespan of AT = 1h
//   lifespan of RT = 24h

//  */


import axios from "../config/axiosConfig";

export const login = async (email, password) => {
  try {
    const response = await axios.post("/auth/login", {
      email,
      password
    });
    return response.data;
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const logout = async () => {
  try {
    const response = await axios.post("/auth/logout");
    return response.data;
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const refreshToken = async () => {
  try {
    const refreshToken = localStorage.getItem("refreshToken");

    const response = await axios.post("/auth/refresh", {
      refreshToken
    });

    localStorage.setItem("accessToken", response.data.access_token);
    localStorage.setItem("refreshToken", response.data.refresh_token);
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const testRequest = async () => {
  try {
    const response = await axios.post("/dashboard");
    return response.data;
  } catch (error) {
    console.error("Error: ", error);
  }
};
