import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export function CurrencyChart(props: { title: string, data: {} }) {
    const labels = Object.keys(props.data)
    const values = Object.values(props.data)
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
                display: false,
            },
            title: {
                display: true,
                text: props.title,
            },
        },
        scales: {
            y: {
              grid: {
                drawBorder: false,
                
              },
              
            },
            x : {
                grid : {
                    display: false
                }
            }
          },
    };

    const plotData = {
        labels,
        datasets: [
            {
                data: values,
                borderColor: '	rgba(50,205,50,1)',
                backgroundColor: 'rgb(50,205,50,0.2)',
                fill: 'start'
            },
        ],
    };
    return <Line options={options} data={plotData} />;
}
