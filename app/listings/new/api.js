import axios from "axios";

export const MyAxios = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 60 * 1 * 1000,
  timeoutErrorMessage: "network_error",
  headers: {
    "Content-Type": "application/json",
  },
});

const APARTMENTS_ENDPOINT = "/apartments";

export const createApartment = (apartmentData) => {
  return MyAxios.post(APARTMENTS_ENDPOINT, apartmentData)
    .then((response) => response.data)
    .catch((error) => {
      handleApiError(error, "Error creating apartment");
      throw error;
    });
};
