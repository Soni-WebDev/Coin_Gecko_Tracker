import { useQuery } from "react-query";
import { fetchCoinHistoricalChartData } from "../../services/fetchCoinHistoricalChartData"
import { useParams } from "react-router-dom";

function CoinHistoricalData() {
    const { coinId } = useParams();
    console.log({ coinId });

    const { data, isLoading, isError } = useQuery(['coins'], () => fetchCoinHistoricalChartData(coinId), {
        refetchOnWindowFocus: false,
        // Prevent refetching on network reconnect
        refetchOnReconnect: false,
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2
    })

    console.log({ data });

    if (isLoading) {
        return <div>Loading Chart...</div>
    }

    if (isError) {
        return <div>Error: Something went wrong</div>
    }

    return (
        <>
            <div>
                {data.prices}
            </div>


        </>
    )
}

export default CoinHistoricalData;