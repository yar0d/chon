<template>
  <v-container fluid ma-0 pa-0 :class="$vuetify.breakpoint.mdAndUp ? 'grid-list-sm' : ''">
    <v-layout>
      <v-flex xs12>
        <v-toolbar dense flat>
            <chon-search-input @search="onSearch" clearable class="title" :placeholder="$t('Search')" />
            <v-chip outline small label v-show="foods.length !== count" class="primary--text">{{ $t('Filter: {num} on {count}.', { num: foods.length, count }) }}</v-chip>
            <v-spacer />
            <v-toolbar-items>
              <v-btn @click="toggle_filter = !toggle_filter" icon :class="filter_types.length || filter_qualities.length ? 'accent' : ''">
                <v-icon small >fas fa-filter</v-icon>
              </v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-card v-show="toggle_filter" class="pa-2">
          <v-layout row wrap>
            <v-flex xs12 sm2>
              <v-btn small @click="resetFilters">{{ $t('Reset filters') }}</v-btn>
            </v-flex>
            <v-flex xs12 sm5>
              <v-select :label="$t('Types')" v-model="filter_types" :items="FOOD_TYPES" multiple chips deletable-chips small-chips avatar/>
            </v-flex>
            <v-flex xs12 sm5>
              <v-select :label="$t('Qualities')" v-model="filter_qualities" :items="FOOD_QUALITIES" multiple chips deletable-chips small-chips />
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex xs12>
        <v-data-iterator :items="foods" content-tag="v-layout" :pagination.sync="pagination" row wrap>

          <v-flex slot="item" slot-scope="props" xs12 sm6 md4 lg3>
            <chon-food-item :food="props.item" :view-type="toggle_view" />
          </v-flex>
        </v-data-iterator>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import _ from 'lodash'
import FOOD_CONSTS from '@/data/consts'
import SearchInput from '@/components/SearchInput'
import FoodItem from '@/components/FoodItem'

export default {
  components: {
    'chon-search-input': SearchInput,
    'chon-food-item': FoodItem
  },
  data () {
    return {
      FOOD_TYPES: [
        { value: FOOD_CONSTS.TYPE_FRUIT,
          text: this.$t(FOOD_CONSTS.getTypeLabel(FOOD_CONSTS.TYPE_FRUIT)),
          avatar: FOOD_CONSTS.getTypeImage(FOOD_CONSTS.TYPE_FRUIT) },
        { value: FOOD_CONSTS.TYPE_VEGETABLE,
          text: this.$t(FOOD_CONSTS.getTypeLabel(FOOD_CONSTS.TYPE_VEGETABLE)),
          avatar: FOOD_CONSTS.getTypeImage(FOOD_CONSTS.TYPE_VEGETABLE) },
        { value: FOOD_CONSTS.TYPE_AROMATIC_HERB,
          text: this.$t(FOOD_CONSTS.getTypeLabel(FOOD_CONSTS.TYPE_AROMATIC_HERB)),
          avatar: FOOD_CONSTS.getTypeImage(FOOD_CONSTS.TYPE_AROMATIC_HERB) },
        { value: FOOD_CONSTS.TYPE_GREENERY,
          text: this.$t(FOOD_CONSTS.getTypeLabel(FOOD_CONSTS.TYPE_GREENERY)),
          avatar: FOOD_CONSTS.getTypeImage(FOOD_CONSTS.TYPE_GREENERY) }
      ],
      FOOD_QUALITIES: [
        { value: 'VA', text: this.$t(FOOD_CONSTS.getQualityLabel(FOOD_CONSTS.QUALITY_VERY_ADVISABLE)) },
        { value: 'AD', text: this.$t(FOOD_CONSTS.getQualityLabel(FOOD_CONSTS.QUALITY_ADVISABLE)) },
        { value: 'NR', text: this.$t(FOOD_CONSTS.getQualityLabel(FOOD_CONSTS.QUALITY_NOT_RECOMMENDED)) },
        { value: 'WM', text: this.$t(FOOD_CONSTS.getQualityLabel(FOOD_CONSTS.QUALITY_WITH_MODERATION)) },
        { value: 'TF', text: this.$t(FOOD_CONSTS.getQualityLabel(FOOD_CONSTS.QUALITY_TO_FORBID)) },
        { value: 'TX', text: this.$t(FOOD_CONSTS.getQualityLabel(FOOD_CONSTS.QUALITY_TOXIC)) },
        { value: '?', text: this.$t(FOOD_CONSTS.getQualityLabel(FOOD_CONSTS.QUALITY_NOT_TESTED)) }
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
    resetFilters () {
      this.filter_types = []
      this.filter_qualities = []
      this.toggle_filter = false
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
