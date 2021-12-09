<template>
  <canvas :id="element" />
</template>

<script>
import Chart from 'chart.js/auto';
export default {
  name: 'ChartLine',
  props: {
    element: {
      type: String,
      required: true
    }
  },
  mounted () {
    const lineCtx = document.getElementById(this.element);
    window.myLine = new Chart(lineCtx, {
      type: 'line',
      data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [
          {
            label: 'Lucro',
            /**
         * These colors come from Tailwind CSS palette
         * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
         */
            backgroundColor: '#0694a2',
            borderColor: '#0694a2',
            data: [43, 48, 40, 54, 67, 73, 70, 54, 75, 60, 55, 79],
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        /**
     * Default legends are ugly and impossible to style.
     * See examples in charts.html to add your own legends
     *  */
        legend: {
          display: false
        },
        tooltips: {
          mode: 'index',
          intersect: false
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
        scales: {
          x: {
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Mês'
            }
          },
          y: {
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Valor (R$)'
            }
          }
        }
      }
    });
  }
};
</script>

<style>
</style>
