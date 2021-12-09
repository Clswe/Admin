<template>
  <canvas :id="element" />
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  name: 'ChartBar',
  props: {
    element: {
      type: String,
      required: true
    }
  },
  mounted () {
    const lineCtx = document.getElementById(this.element);
    window.myLine = new Chart(lineCtx, {
      type: 'bar',
      data: {
        datasets: [
          {
            backgroundColor: ['#0694a2', '#FF0000'],
            data: [60, 20],
            label: 'Avaliação',
            borderColor: [
              '#0694a2',
              '#FF0000'
            ],
            borderWidth: 1
          }
        ],
        labels: [
          'Muito Satisfeito',
          'Insatisfeito'
        ]
      },
      options: {
        responsive: true,
        cutoutPercentage: 80,
        /**
     * Default legends are ugly and impossible to style.
     * See examples in charts.html to add your own legends
     *  */
        legend: {
          display: false
        }
      }
    });
  }
};
</script>

<style>
</style>
