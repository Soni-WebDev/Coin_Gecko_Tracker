import { useContext, useEffect, useState } from "react";
import { fetchCoinData } from "../../services/fetchCoinData";
import { useQuery } from "react-query";
import { CurrencyContext } from "../../contextAPI/CurrenctContext";
import currencyStore from '../../state/store';
import { useNavigate } from "react-router-dom";
import MyLoader from '../PageLoader/PageLoader';

function CoinTable() {
    // const { currency } = useContext(CurrencyContext);
    const { currency } = currencyStore();

    const [page, setPage] = useState(1);
    const navigate = useNavigate();
    const { data, isLoading, isError, error, isFetching } = useQuery(['coins', page, currency], () => fetchCoinData(page, currency), {
        // retry: 2,
        // retryDelay: 1000,
        // Prevent refetching on window focus
        refetchOnWindowFocus: false,
        // Prevent refetching on network reconnect
        refetchOnReconnect: false,
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2

    });

    useEffect(() => {
        console.log(data);
    }, [data])

    if (isLoading) {
        return <MyLoader />
    }

    if (isError) {
        return <div> Error: {error.message} </div>
    }
    function handleDetails(id) {
        navigate(`/coinDetails/${id}`);

    }
    return (
        <div className="my-5 flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto">
            <div className="w-full bg-yellow-400 text-black flex py-4 px-2 font-semibold items-center">
                {/* Header of table */}
                <div className="basis-[35%]">
                    Coin
                </div>
                <div className="basis-[25%]">
                    Price
                </div>
                <div className="basis-[20%]">
                    24h Change
                </div>
                <div className="basis-[20%]">
                    Market Cap
                </div>

            </div>
            <div className="flex flex-col w-[80vw] mx-auto">
                {/* {isLoading && <div>Loading...</div>} */}
                {data && data.map((coin) => {
                    return (
                        <div
                            key={coin.id}
                            className="w-full bg-transparent text-white flex py-4 px-2 font-semibold items-center justify-between cusor-pointer"
                            onClick={() => handleDetails(coin.id)}
                        >
                            <div className="flex items-center justify-start gap-3 basis-[35%]">
                                <div className="w-[5rem] h-[5rem]">
                                    <img src={coin.image} className="w-full h-full" />
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-3xl">{coin.name}</div>
                                    <div className="text-xl">{coin.symbol}</div>

                                </div>
                            </div>
                            <div className="flex items-center justify-start gap-3 basis-[25%]">
                                {coin.current_price}
                            </div>
                            <div className="flex items-center justify-start gap-3 basis-[20%]">
                                {coin.price_change_24h}
                            </div>
                            <div className="flex items-center justify-start gap-3 basis-[20%]">
                                {coin.market_cap}
                            </div>

                        </div>
                    )
                })}
            </div>
            <div className="flex gap-4 jsutify-center items-center">
                <button
                    disabled={page == 1}
                    className="btn btn-primary btn-wide text-white text-2xl"
                    onClick={() => setPage(page - 1)}
                >
                    Previous
                </button>
                <button
                    className="btn btn-secondary btn-wide text-white text-2xl"
                    onClick={() => setPage(page + 1)}
                >
                    Next
                </button>

            </div>

        </div>
    )

}

export default CoinTable;