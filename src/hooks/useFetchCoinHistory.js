import { useParams } from "react-router-dom";
import store from "../state/store";
import { useState } from "react";
import { useQuery } from "react-query";
import { fetchCoinHistoricalChartData } from "../services/fetchCoinHistoricalChartData";

function useFetchCoinHistory() {

    const { currency } = store();
    const { coinId } = useParams();
    const [days, setDays] = useState(1);
    const [interval, setCoinInterval] = useState('')

    const { data: historicData, isLoading, isError } = useQuery(['historicData', coinId, currency, days, interval], () => fetchCoinHistoricalChartData(coinId, currency, days, interval), {
        refetchOnWindowFocus: false,
        // Prevent refetching on network reconnect
        refetchOnReconnect: false,
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2
    })

    return {
        historicData, isLoading, isError, setDays, setCoinInterval, coinId, currency, days
    }
}

export default useFetchCoinHistory;