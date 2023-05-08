import './App.css';
import React, { useEffect,useState } from 'react';
import Chart from 'chart.js/auto';

import { EstimationsTable } from './components/estimationTable/EstimationsTable';
import { Slider } from './components/slider/Slider';

import { fetchData, fetchEstimation } from './services/apiService';

function App() {
  const [cornData, setCornData] = useState([]);
  const [gasolineData, setGasolineData] = useState([]);
  const [nasdaqData, setNasdaqData] = useState([]);
  const [dates, setDates] = useState([]);
  const [estimatedNasdaq, setEstimatedNasdaq] = useState(0);
  const [estimatedCorn, setEstimatedCorn] = useState(0);
  const [estimatedGasoline, setEstimatedGasoline] = useState(0);



  const onUpdateButtonClicked = async (newMinYear, newMaxYear) => {
    console.log(newMinYear);
    console.log(newMaxYear);

    try {
      const result = await fetchData(newMinYear, newMaxYear);
      console.log(result);
      setCornData(result.corn_data)
      setGasolineData(result.gasoline_data)
      setNasdaqData(result.ndaq_data)
      setDates(result.labels_dates)
      

    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() =>{
    async function getData(){
      const result = await fetchData(2022, 2023);
      setCornData(result.corn_data)
      setGasolineData(result.gasoline_data)
      setNasdaqData(result.ndaq_data)
      setDates(result.labels_dates)

      const result1 = await fetchEstimation();
      console.log(result1)
      setEstimatedNasdaq(result1.estimated_ndaq)
      setEstimatedCorn(result1.estimated_corn)
      setEstimatedGasoline(result1.estimated_gasoline)
      
    }
    getData();

  },[]
  )



  useEffect(() => {
    const ctx = document.getElementById('myChart');  
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: dates,
        datasets: [
          {
            label:"NASDAQ",
            data: nasdaqData,
            fill: false,
            borderColor: "rgb(255, 0, 0)",
            lineTension: 0.5
          },
          {
            label:"Corn",
            data: cornData,
            fill: false,
            borderColor: "rgb(0, 255, 0)",
            lineTension: 0.5
          },
          {
            label:"Gasoline",
            data: gasolineData,
            fill: false,
            borderColor: "rgb(0, 0, 255)",
            lineTension: 0.5
          }
        ]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Stock Price Change over Time',
          },

        },
        interaction: {
          intersect: false,
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Date'
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Currency in USD'
            },
          }
        }
      }
    });
    return () => {
      myChart.destroy();
    };
  }, [nasdaqData, cornData, gasolineData, dates]);

  return (
    <div className="wrapper">
      <header>
        <h2>Stock Market Range</h2>
        <p>Move the slider or type in a year range to check the stock market!</p>
      </header>
      <Slider onUpdateButtonClicked={onUpdateButtonClicked} />
      <div className="stockData">
        <div className="chart">
          <canvas id="myChart"></canvas>
        </div>
        <div className="stocksTable">
          <EstimationsTable estimated_ndaq={estimatedNasdaq} estimated_corn={estimatedCorn} estimated_gasoline={estimatedGasoline} />
        </div>
      </div>
    </div>
  );
}

export default App;