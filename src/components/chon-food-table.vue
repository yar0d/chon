<template>
  <md-table-card>
    <md-toolbar class="md-transparent">
      <h1 class="md-title">Aliments</h1>

      <md-checkbox v-model="displayAll">Détails</md-checkbox>

      <md-input-container class="md-flex">
        <md-input placeholder="Filtre…" v-model="filterText"></md-input>
        <md-button v-show="filterText.length" @click.native="resetFilter" class="md-icon-button md-dense">
          <md-icon>clear</md-icon>
        </md-button>
      </md-input-container>
    </md-toolbar>

    <md-table md-sort="food" @sort="sort">
      <md-table-header>
        <md-table-row>
          <md-table-head md-sort-by="food">Aliment</md-table-head>
          <md-table-head md-sort-by="quality"></md-table-head>
          <md-table-head md-sort-by="vitamin_C" md-numeric md-tooltip="L'apport en vitamine C pour 100 grammes.">Vitamine C</md-table-head>
          <md-table-head md-sort-by="type">Type</md-table-head>
          <md-table-head v-show="displayAll" class="flex-col">Note</md-table-head>
        </md-table-row>
      </md-table-header>

      <md-table-body>
        <md-table-row v-for="(row, rowIndex) in orderedItems" :key="rowIndex" :md-item="row">
          <md-table-cell v-for="(column, columnIndex) in row" :key="columnIndex" :md-numeric="columnIndex !== 'type' && columnIndex !== 'food' && columnIndex !== 'note' && columnIndex !== 'quality'">

            <span v-if="columnIndex === 'food'">{{ column }}</span>

            <span v-if="columnIndex === 'quality'">
              <md-icon :class="'quality-' + column">{{ getQualityIcon(column) }}</md-icon><md-tooltip md-direction="right">{{ getQualityLabel(column) }}</md-tooltip>
              <span v-show="displayAll" class="md-caption">{{ getQualityLabel(column) }}</span>
            </span>

            <span v-if="columnIndex === 'vitamin_C'">
              <span v-if="column">{{ column || '' }}</span>
            </span>

            <span v-if="columnIndex === 'type'">
              <md-avatar class="md-avatar-icon md-warn">
                <img :src="getTypeIcon(column, row.food)">
                <md-tooltip md-direction="right">{{ getTypeLabel(column) }}</md-tooltip>
              </md-avatar>
              <span v-show="displayAll" class="md-caption">{{ getTypeLabel(column) }}</span>
            </span>

            <span v-if="columnIndex === 'note' && displayAll">{{ column }}</span>

          </md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>

    <md-toolbar class="md-transparent">
      <span class="md-caption">
        <md-icon class="quality-TC">{{ getQualityIcon('TC') }}</md-icon> {{ getQualityLabel('TC') }}</span>&nbsp;<span class="md-caption"><md-icon class="quality-C">{{ getQualityIcon('C') }}</md-icon> {{ getQualityLabel('C') }}</span>&nbsp;<span class="md-caption"><md-icon class="quality-D">{{ getQualityIcon('D') }}</md-icon> {{ getQualityLabel('D') }}</span>&nbsp;<span class="md-caption"><md-icon class="quality-M">{{ getQualityIcon('M') }}</md-icon> {{ getQualityLabel('M') }}</span>&nbsp;<span class="md-caption"><md-icon class="quality-P">{{ getQualityIcon('P') }}</md-icon> {{ getQualityLabel('P') }}</span>&nbsp;<span class="md-caption"><md-icon class="quality-T">{{ getQualityIcon('T') }}</md-icon> {{ getQualityLabel('T') }}
      </span>
    </md-toolbar>
  </md-table-card>
</template>

<script>
import _ from 'lodash'
import foods from './foods.js'

export default {
  name: 'chonFoodTable',
  computed: {
    /**
     * Filter items and return ordered list.
     * @return {[Object]} Array of filtered and ordered items.
     */
    orderedItems: function () {
      let filterText = this.filterText.toUpperCase()
      let filteredItems = _.filter(this.items, function (item) {
        return !filterText || (item.food && item.food.toUpperCase().indexOf(filterText) >= 0)
      })
      return _.orderBy(filteredItems, this.orderField, this.direction)
    }
  },
  methods: {
    resetFilter () {
      this.filterText = ''
    },
    sort (columnSort) {
      this.orderField = columnSort.name
      this.direction = columnSort.type
    },
    getTypeLabel: function (type) {
      switch (type) {
        case 'F':
          return 'Fruit'
        case 'L':
          return 'Légume'
        case 'HA':
          return 'Herbe aromatique'
        case 'V':
          return 'Verdure'
        default:
          return ''
      }
    },
    getTypeIcon: function (type, food) {
      return 'static/images/' + type + '.png'
    },
    getQualityLabel: function (quality) {
      switch (quality) {
        case 'TC':
          return 'Très conseillé'
        case 'C':
          return 'Conseillé'
        case 'D':
          return 'Déconseillé'
        case 'M':
          return 'Avec modération'
        case 'P':
          return 'À proscrire'
        case 'T':
          return 'Toxique!'
        default:
          return ''
      }
    },
    getQualityIcon: function (quality) {
      switch (quality) {
        case 'TC':
          return 'thumb_up'
        case 'C':
          return 'done_all'
        case 'D':
          return 'clear'
        case 'M':
          return 'done'
        case 'P':
          return 'cancel'
        case 'T':
          return 'remove_circle'
        default:
          return ''
      }
    }
  },
  data () {
    return {
      filterText: '',
      displayAll: false,
      orderField: 'food',
      direction: 'asc',
      items: foods.list
    }
  }
}
</script>

<style scoped>
  .flex-col {
    width: 50%;
  }
  .quality-T, .quality-P {
    color: red;
  }
  .quality-D {
    color: orange;
  }
  .quality-C, .quality-M {
    color: lime;
  }
  .quality-TC {
    color: green;
  }
</style>
