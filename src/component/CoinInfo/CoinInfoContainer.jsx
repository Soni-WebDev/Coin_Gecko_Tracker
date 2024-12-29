import CoinInfo from "./CoinInfo";
import MyLoader from "../PageLoader/PageLoader";
import Alert from "../Alert/Alert";
import useFetchCoinHistory from "../../hooks/useFetchCoinHistory";

function CoinInfoContainer() {

    const { historicData, isLoading, isError, setDays, setCoinInterval, coinId, currency, days } = useFetchCoinHistory();

    console.log({ historicData, currency }, 'hehe');

    if (isLoading) {
        return <MyLoader />
    }
    if (isError) {
        return <Alert message="Error Fecthing data" type='error' />
    }

    return (
        <>
            <CoinInfo historicData={historicData} setCoinInterval={setCoinInterval} setDays={setDays} days={days} currency={currency} />
        </>
    )
}

export default CoinInfoContainer;