
import CoinHistoricalData from "./component/CoinHistoricalData/CoinHistoricalData";
import Routing from "./component/Routing/Routing";
import { CurrencyContext } from "./contextAPI/CurrenctContext";
// import Home from "./pages/Home";

function App() {
  // const [currency, setCurrency] = useState('usd');

  return (
    <>

      {/* <CurrencyContext.Provider value={{ currency, setCurrency }}> */}
      {/* <Home /> */}
      {/* </CurrencyContext.Provider> */}

      <Routing />
    </>
  )
}

export default App
