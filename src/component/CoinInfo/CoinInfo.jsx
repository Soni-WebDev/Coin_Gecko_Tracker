import Alert from "../Alert/Alert";
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { chartDays } from "../../helpers/constants";
Chart.register(...registerables);

function CoinInfo({ historicData, setDays, setCoinInterval, days, currency }) {

    if (!historicData) {
        return <Alert message="No data available" type={"warning"} />
    }

    function handleDayChange(value) {
        const daysSelected = value.target.value;

        if (daysSelected == 1) {
            setCoinInterval?.('');
        } else {
            setCoinInterval?.('daily');
        }
        setDays?.(daysSelected);
    }

    return (
        <>
            <div
                className="flex flex-col items-center justify-center mt-6 p-6 w-full"
            >
                <Line
                    data={{
                        labels: historicData.prices.map(coinPrice => {
                            let datee = new Date(coinPrice[0]); // converting UNIX timeStap to Date
                            let time = datee.getHours() > 12 ? `${datee.getHours() - 12} : ${datee.getMinutes()} PM` :
                                `${datee.getHours()} : ${datee.getMinutes()} AM`;
                            return days == 1 ? time : datee.toLocaleDateString();
                        }),
                        datasets: [
                            {
                                label: `Price {Past ${days} ${days == 1 ? 'Day' : 'Days'}} in ${currency.toUpperCase()}`,
                                data: historicData.prices.map(coinPrice => coinPrice[1])
                            }
                        ],
                    }}
                    options={{
                        responsive: true,
                        // maintainAspectRatio: false,  // resize the chart
                        elements: {
                            points: {
                                radius: 0
                            }
                        }
                    }}
                />

            </div>

            <div
                className="flex justify-center mt-5 w-full"
            >
                <select className="select select-primary w-full max-w-xs" onChange={(value) => handleDayChange(value)}>
                    {chartDays.map((day, index) => {
                        return (
                            <option selected={days == day.value} key={index} value={day.value}>{day.label}</option>
                        )
                    })}
                </select>


            </div>
        </>
    )
}

export default CoinInfo;