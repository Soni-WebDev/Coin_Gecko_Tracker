import axiosInstance from "../helpers/axiosInstance";

export async function fetchCoinHistoricalChartData(id, vs_currency = 'usd', days = 7, interval) {
    try {
        const response = await axiosInstance.get(`/coins/${id}/market_chart?vs_currency=${vs_currency}&days=${days}&interval=${interval}`)
        console.log(response);
        return response.data;

    } catch (error) {
        console.log(error);
        return null;

    }
}