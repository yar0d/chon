<template>
  <v-container fluid ma-0 pa-0 :class="$vuetify.breakpoint.mdAndUp ? 'grid-list-sm' : ''">
    <v-layout>
      <v-flex xs12>
        <v-toolbar dense flat>
            <chon-search-input @search="onSearch" clearable class="title" :placeholder="$t('Search')" />
            <!-- <v-chip outline small label v-show="foods.length !== count" class="primary--text">{{ $t('{num}/{count}.', { num: foods.length, count }) }}</v-chip> -->
            <v-spacer />
            <v-toolbar-items>
              <v-btn @click="toggle_view = 1" icon :class="toggle_view === 1 ? 'accent' : ''">
                <v-icon small>fas fa-align-justify</v-icon>
              </v-btn>

              <v-btn @click="toggle_view = 2" icon :class="toggle_view === 2 ? 'accent' : ''">
                <v-icon small>fas fa-th-large</v-icon>
              </v-btn>

              <v-btn @click="toggle_filter = !toggle_filter" icon>
                <v-icon small>{{ toggle_filter ? 'fas fa-chevron-up' : 'fas fa-chevron-down' }}</v-icon>
              </v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-card v-show="toggle_filter" class="pa-2">
          <v-layout row wrap>
            <v-flex xs12 md6>
              <v-select :label="$t('Types')" v-model="filter_types" :items="FOOD_TYPES" multiple chips deletable-chips small-chips avatar/>
            </v-flex>
            <v-flex xs12 md6>
              <v-select :label="$t('Qualities')" v-model="filter_qualities" :items="FOOD_QUALITIES" multiple chips deletable-chips small-chips />
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex xs12 class="blue--text">
        <v-data-iterator :items="foods" content-tag="v-layout" :pagination.sync="pagination" row wrap>

          <v-flex slot="item" slot-scope="props" xs12 sm6 md4 lg3>
            <v-card class="ma-1">
              <v-card-title>
                <h3 class="title">{{ props.item.name }}</h3>
                <v-spacer />
                <v-avatar :color="getQualityColor(props.item.quality)">
                  <v-icon large>{{ getQualityIcon(props.item.quality) }}</v-icon>
                </v-avatar>
                &nbsp;
                <v-avatar size="32"><img :src="getTypeImage(props.item.type)" /></v-avatar>
              </v-card-title>
              <div v-if="toggle_view === 2">
                <v-divider></v-divider>
                <v-list dense>
                  <v-list-tile>
                    <v-list-tile-content>{{ $t('Quality') }}</v-list-tile-content>
                    <v-list-tile-action><span><v-icon small :color="getQualityColor(props.item.quality)">{{ getQualityIcon(props.item.quality) }}</v-icon> {{ getQualityLabel(props.item.quality) }}</span></v-list-tile-action>
                  </v-list-tile>
                  <v-list-tile v-show="props.item.vitamins">
                    <v-list-tile-content class="important--text subheading accent--text">{{ $t('C vitamin')}}</v-list-tile-content>
                    <v-list-tile-action class="important--text">{{ $t('{c}mg/100g', { c: props.item.vitamins.C }) }}</v-list-tile-action>
                  </v-list-tile>

                  <v-divider/>

                  <v-list-tile v-show="props.item.calories">
                    <v-list-tile-content>{{ $t('Calories')}}</v-list-tile-content>
                    <v-list-tile-action>{{ $t('{c}mg/100g', { c: props.item.calories }) }}</v-list-tile-action>
                  </v-list-tile>
                  <v-list-tile v-show="props.item.fibers">
                    <v-list-tile-content>{{ $t('Fibers')}}</v-list-tile-content>
                    <v-list-tile-action>{{ $t('{c}g/100g', { c: props.item.fibers }) }}</v-list-tile-action>
                  </v-list-tile>
                  <v-list-tile v-show="props.item.carbohydrates">
                    <v-list-tile-content>{{ $t('Carbohydrates')}}</v-list-tile-content>
                    <v-list-tile-action>{{ $t('{c}g/100g', { c: props.item.carbohydrates }) }}</v-list-tile-action>
                  </v-list-tile>
                  <v-list-tile v-show="props.item.proteins">
                    <v-list-tile-content>{{ $t('Proteins')}}</v-list-tile-content>
                    <v-list-tile-action>{{ $t('{c}g/100g', { c: props.item.proteins }) }}</v-list-tile-action>
                  </v-list-tile>
                  <v-list-tile v-show="props.item.lipids">
                    <v-list-tile-content>{{ $t('Lipids')}}</v-list-tile-content>
                    <v-list-tile-action>{{ $t('{c}g/100g', { c: props.item.lipids }) }}</v-list-tile-action>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>{{ $t('Type') }}</v-list-tile-content>
                    <v-list-tile-action>{{ getTypeLabel(props.item.type) }}</v-list-tile-action>
                  </v-list-tile>
                </v-list>

                <v-divider v-show="props.item.note"/>
                <v-card-text class="caption secondary--text" v-show="props.item.note">
                  {{ $t(props.item.note) }}
                </v-card-text>
              </div>
            </v-card>
          </v-flex>
        </v-data-iterator>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// TODO: filtrer par quality
// TODO: filtrer par type
// TODO: trier par vitamin.C, calories, fibres, etc

import _ from 'lodash'
import SearchInput from '@/components/SearchInput'

const FOOD_TYPE_FRUIT = 'FR'
const FOOD_TYPE_VEGETABLE = 'VG'
const FOOD_TYPE_AROMATIC_HERB = 'HA'
const FOOD_TYPE_GREENERY = 'GR'

const FOOD_QUALITY_VERY_ADVISABLE = 'VA'
const FOOD_QUALITY_ADVISABLE = 'AD'
const FOOD_QUALITY_NOT_RECOMMENDED = 'NR'
const FOOD_QUALITY_WITH_MODERATION = 'WM'
const FOOD_QUALITY_TO_FORBID = 'TF'
const FOOD_QUALITY_TOXIC = 'TX'
const FOOD_QUALITY_NOT_TESTED = '?'

export default {
  components: {
    'chon-search-input': SearchInput
  },
  data () {
    return {
      FOOD_TYPES: [
        { value: FOOD_TYPE_FRUIT, text: this.getTypeLabel(FOOD_TYPE_FRUIT), avatar: this.getTypeImage(FOOD_TYPE_FRUIT) },
        { value: FOOD_TYPE_VEGETABLE, text: this.getTypeLabel(FOOD_TYPE_VEGETABLE), avatar: this.getTypeImage(FOOD_TYPE_VEGETABLE) },
        { value: FOOD_TYPE_AROMATIC_HERB, text: this.getTypeLabel(FOOD_TYPE_AROMATIC_HERB), avatar: this.getTypeImage(FOOD_TYPE_AROMATIC_HERB) },
        { value: FOOD_TYPE_GREENERY, text: this.getTypeLabel(FOOD_TYPE_GREENERY), avatar: this.getTypeImage(FOOD_TYPE_GREENERY) }
      ],
      FOOD_QUALITIES: [
        { value: 'VA', text: this.getQualityLabel(FOOD_QUALITY_VERY_ADVISABLE) },
        { value: 'AD', text: this.getQualityLabel(FOOD_QUALITY_ADVISABLE) },
        { value: 'NR', text: this.getQualityLabel(FOOD_QUALITY_NOT_RECOMMENDED) },
        { value: 'WM', text: this.getQualityLabel(FOOD_QUALITY_WITH_MODERATION) },
        { value: 'TF', text: this.getQualityLabel(FOOD_QUALITY_TO_FORBID) },
        { value: 'TX', text: this.getQualityLabel(FOOD_QUALITY_TOXIC) },
        { value: '?', text: this.getQualityLabel(FOOD_QUALITY_NOT_TESTED) }
      ],
      foods: [],
      toggle_filter: false,
      filter_types: [],
      filter_qualities: [],
      toggle_view: 1,
      pagination: {
        rowsPerPage: 10,
        sortBy: 'name'
      }
    }
  },
  computed: {
    count () {
      return this.$store.getters.foods.length
    }
  },
  watch: {
    filter_qualities () {
      this.onSearch()
    },
    filter_types () {
      this.onSearch()
    }
  },
  methods: {
    onSearch (value) {
      if (this.$root.setLoading) this.$root.setLoading(true, 500)

      let filteredFoods = _.filter(this.$store.getters.foods, item => {
        return (this.filter_types.length === 0 || this.filter_types.indexOf(item.type) >= 0) && (this.filter_qualities.length === 0 || this.filter_qualities.indexOf(item.quality) >= 0)
      })

      this.$nextTick(() => {
        this.foods = !value ? filteredFoods : _.filter(filteredFoods, item => {
          return item.name.toLowerCase().indexOf(value.toLowerCase()) >= 0
        })
      })
    },
    getQualityLabel: function (quality) {
      switch (quality) {
        case 'VA':
          return this.$t('Very advisable')
        case 'AD':
          return this.$t('Advisable')
        case 'NR':
          return this.$t('Not recommended')
        case 'WM':
          return this.$t('With moderation')
        case 'TF':
          return this.$t('To forbid')
        case 'TX':
          return this.$t('Toxic!')
        case '?':
          return this.$t('Not tested')
        default:
          return ''
      }
    },
    getQualityColor: function (quality) {
      switch (quality) {
        case 'VA':
          return 'lime'
        case 'AD':
          return 'green'
        case 'WM':
          return 'cyan'
        case 'NR':
          return 'orange'
        case 'TF':
          return 'red'
        case 'TX':
          return 'red darken-1'
        default:
          return 'grey'
      }
    },
    getQualityIcon: function (quality) {
      switch (quality) {
        case 'VA':
          return 'fas fa-check-double'
        case 'AD':
          return 'fas fa-check'
        case 'WM':
          return 'fas fa-meh'
        case 'NR':
          return 'fas fa-frown'
        case 'TF':
          return 'fas fa-ban'
        case 'TX':
          return 'fas fa-skull-crossbones'
        case '?':
          return 'fas fa-question'
        default:
          return ''
      }
    },
    getTypeLabel: function (type) {
      switch (type.toUpperCase()) {
        case FOOD_TYPE_FRUIT:
          return this.$t('Fruit')
        case FOOD_TYPE_VEGETABLE:
          return this.$t('Vegetable')
        case FOOD_TYPE_AROMATIC_HERB:
          return this.$t('Aromatic herb')
        case FOOD_TYPE_GREENERY:
          return this.$t('Greenery')
        default:
          return ''
      }
    },
    getTypeImage: function (type) {
      return '/img/' + type.toUpperCase() + '.png'
    }
  },
  mounted () {
    this.foods = this.$store.getters.foods
    _.map(this.foods, f => {
      f.id = f.type + '_' + f.name
      f.name = this.$t(f.name)
      return f
    })
    if (this.$root.setLoading) this.$root.setLoading(true, 1000)
  }
}
</script>

<style>
.important--text {
  font-weight: bold;
}
.v-data-iterator__actions {
  background-color: black;
}
</style>
