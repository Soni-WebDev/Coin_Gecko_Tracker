import axiosInstance from "../helpers/axiosInstance";

export async function fetchCoinDetails(id) {
    try {
        const responce = await axiosInstance.get(`/coins/${id}`);
        return responce.data;
    } catch (error) {
        console.log(error);

    }
}