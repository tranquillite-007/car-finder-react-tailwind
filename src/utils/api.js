import { fetchMockCars, fetchMockCarDetails } from "./mockData";

export const fetchCars = async (params = {}) => {
  return await fetchMockCars(params);
};

export const fetchCarDetails = async (id) => {
  return await fetchMockCarDetails(id);
};
