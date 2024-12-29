import axiosInstance from "../helpers/axiosInstance";

export async function fetchCoinData(page = 1, currency = 'usd') {
    const perPage = 10
    try {
        const responce = await axiosInstance.get(`/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perPage}&page=${page}`);

        console.log(responce.data);
        return responce.data;

    } catch (error) {
        console.log(error);
        return null;

    }
}