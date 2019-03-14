<template>
  <vue-frappe
    v-bind="$attrs"
    :id="uuid"
    :labels="labels"
    :title="title"
    type="axis-mixed"
    :height="height"
    :colors="colors"
    :dataSets="data"
  />
</template>

<script>
import uuid from 'uuid/v4'

const DEMO_DATA = [{
  name: 'Dataset 1',
  chartType: 'bar',
  values: [25, 40, 30, 35, 8, 52, 17, -4]
},
{
  name: 'Dataset 2',
  chartType: 'line',
  values: [15, 20, -3, -15, 58, 12, -17, 37]
}]

const DEMO_LABELS = [
  '0000-0300', '0300-0600', '0600-0900', '0900-1200',
  '1200-1500', '1500-1800', '1800-2100', '2100-0000'
]

const DEMO_COLORS = ['light-blue', 'orange']

export default {
  name: 'MixedChart',
  props: {
    colors: { type: Array, required: false, default: () => DEMO_COLORS },
    data: { type: Array, required: false, default: () => DEMO_DATA },
    height: { type: Number, required: false, default: 300 },
    labels: { type: Array, required: false, default: () => DEMO_LABELS },
    title: { type: String, required: true }
  },
  data () {
    return {}
  },
  computed: {
    uuid () { return 'mixed-chart-' + uuid() }
  }
}
</script>
