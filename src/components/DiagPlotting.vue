<template>
  <highchart :options="chartOptions"> </highchart>


</template>

<script setup>
import {Chart as highchart} from 'highcharts-vue'

let chartOptions;
chartOptions =  {
  series: [{
    data: [1, 2, 3] // sample data
  }]
}
</script>
