<template>
  <highcharts :options="chartOptions"> </highcharts>


</template>

<script setup>
import {reactive} from 'vue'

let chartOptions;
chartOptions =  {
  title: {
    text: 'Diagrama de interaccion'
  },
  series: [{
    data: [1, 2, -3] // sample data
  }]
}
</script>

<!--Declarando la libreria como highcharts-->
<script>
  import {Chart} from 'highcharts-vue'
  export default {
    components : {
      highcharts: Chart
    }
  }
</script>
