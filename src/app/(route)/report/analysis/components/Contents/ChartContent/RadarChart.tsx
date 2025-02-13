import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, Filler, Legend, LineElement, PointElement, RadialLinearScale, Tooltip } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function RadarChart({ data }: { data: number[] }) {
  const getGradient = (ctx: CanvasRenderingContext2D, color1: string, color2: string) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, 500);
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);
    return gradient;
  };

  const mathData = {
    labels: ['자기주도', '활력', '안전', '보수', '성취', '박애', '보편'],
    datasets: [
      {
        data,
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          return getGradient(ctx, 'rgba(63, 120, 255, 0.5)', 'rgba(190, 209, 255, 0.5)');
        },
        borderColor: (context: any) => {
          const ctx = context.chart.ctx;
          return getGradient(ctx, 'rgba(63, 120, 255, 1)', 'rgba(190, 209, 255, 0.5)');
        },
        borderWidth: 2,
        pointRadius: 0,
        fill: true,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      r: {
        min: 0,
        max: 100,
        ticks: {
          display: false,
        },
        pointLabels: {
          font: {
            size: 12,
            weight: 500,
            family: 'Pretendard',
          },
          color: (context: any) => {
            if ([0, 1, 2].includes(context.index)) {
              return '#000000';
            }
            return 'rgba(0, 0, 0, 0.3)';
          },
          padding: 15,
        },
        grid: {
          color: (context: any) => (context.tick.value === 100 ? '#DFE3E9' : 'transparent'),
        },
      },
    },
  };

  return <Radar data={mathData} options={options} redraw />;
}
