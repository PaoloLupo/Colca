<template>
  <div
    class="col-span-5 row-span-2 m-5 p-5 border border-b-cyan-500 divide-y shadow-lg"
  >
    <highcharts :options="chartOptions" :updateArgs="updateArgs"> </highcharts>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const points = ref([10, 0, 8, 2, 6, 4, 5, 5]);

let chartOptions = {
  title: {
    text: "Diagrama de interaccion",
  },
  series: [
    {
      data: [1, 2, 3, -10, 2], // sample data
    },
  ],
  credits: {
    enabled: false,
  },
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          legend: {
            align: "center",
            verticalAlign: "bottom",
            layout: "horizontal",
          },
          yAxis: {
            labels: {
              align: "left",
              x: 0,
              y: -5,
            },
            title: {
              text: null,
            },
          },
          subtitle: {
            text: null,
          },
        },
      },
    ],
  },
};
watch(points, (newpoint) => {
  chartOptions.series[0].data = newpoint;
  console.log(newpoint);
});
const updateArgs = [true, true, { duration: 1000 }];
</script>

<!--Declarando la libreria como highcharts-->
<script>
import { Chart } from "highcharts-vue";
export default {
  components: {
    highcharts: Chart,
  },
};
</script>
