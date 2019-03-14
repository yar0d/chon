<template>
  <v-card light>
    <v-card-title class="title">
      {{ $t('Weight') }}
    </v-card-title>

    <chon-mixed-chart title="" :lineOptions="{ dotSize: 6, regionFill: 1 }" :yMarkers="chart.yMarkers" :yRegions="chart.yRegions" />

    <v-card-text>
      <v-data-table :headers="tableHeaders" :items="tableItems">
      </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
import _ from 'lodash'
import moment from 'moment'
import MixedChart from '@/components/MixedChart'

const STORAGE_KEY = 'chon-mixed-chart-data'

export default {
  components: {
    'chon-mixed-chart': MixedChart
  },
  data () {
    return {
      chonName: '',
      chonWeight: 0,
      chonDate: moment(),
      chart: {
        data: [],
        yMarkers: [{
          label: 'test',
          value: 30,
          options: { labelPos: 'left' }
        }],
        yRegions: [{
          label: 'Optimum Weight',
          start: 800,
          end: 1250,
          options: { labelPos: 'right' }
        }]
      },
      tableHeaders: [
        { text: this.$t('Name'), value: 'name' },
        { text: this.$t('Weight'), value: 'weight' },
        { text: this.$t('Date'), value: 'date' }
      ]
    }
  },
  computed: {
    tableItems () {
      let items = []
      let name
      _.forEach(this.data, dataset => {
        name = dataset.name
        _.forEach(dataset.values, value => {
          items.push({
            name: dataset.name,
            weight: value,
            date: ???? : la valeur est dans les labels — moche!
          })
        })
      })
      return items
    }
  },
  methods: {
    export () {
      // TODO: CSV export
    },
    findDataset (name) {
      return _.filter(this.data, dataset => {
        if (dataset.name.toUpperCase() === name.toUpperCase()) {
          return dataset
        }
      })
    },
    addData () {
      let dataset = this.findDataset(this.chonName)
      if (dataset) {

      }
    },
    load () {
      try {
        this.data = JSON.parse(localStorage.getItems(STORAGE_KEY))
      } catch (e) {
        console.error('[localStorage] Error getting', STORAGE_KEY, e)
      }
    },
    save () {
      localStorage.setItems(STORAGE_KEY, JSON.stringify(this.data))
    }
  }
}
</script>
