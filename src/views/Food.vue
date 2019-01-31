<template>
  <v-container fluid ma-0 pa-0 :class="$vuetify.breakpoint.mdAndUp ? 'grid-list-sm' : ''">
    <v-layout>
      <v-flex>
        <v-data-iterator :items="foods" content-tag="v-layout" :pagination.sync="pagination" row wrap>
          <v-toolbar slot="header" flat dense class="opacity-75">

            <chon-search-input @search="onSearch" :label="$t('Search')" clearable />

            <v-chip small label v-show="count !== foods.length" class="primary">{{ $t('{num} found on {count}.', { num: foods.length, count }) }}</v-chip>

            <v-toolbar-items>
              <v-btn @click="toggle_view = 1" icon small :class="toggle_view === 1 ? 'accent' : ''">
                <v-icon small>fas fa-align-justify</v-icon>
              </v-btn>
              <v-btn @click="toggle_view = 2" icon small :class="toggle_view === 2 ? 'accent' : ''">
                <v-icon small>fas fa-th-large</v-icon>
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>

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
import _ from 'lodash'
import SearchInput from '@/components/SearchInput'

export default {
  components: {
    'chon-search-input': SearchInput
  },
  data () {
    return {
      foods: [],
      toggle_view: 2,
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
  methods: {
    onSearch (value) {
      if (this.$root.setLoading) this.$root.setLoading(true, 500)

      this.$nextTick(() => {
        this.foods = !value ? this.$store.getters.foods : _.filter(this.$store.getters.foods, item => {
          return item.name.toLowerCase().indexOf(value.toLowerCase()) >= 0
        })
      })
    },
    getQualityLabel: function (quality) {
      switch (quality) {
        case 'TC':
          return this.$t('Very advisable')
        case 'C':
          return this.$t('Advisable')
        case 'D':
          return this.$t('Not recommended')
        case 'M':
          return this.$t('With moderation')
        case 'P':
          return this.$t('To forbid')
        case 'T':
          return this.$t('Toxic!')
        case '?':
          return this.$t('Not tested')
        default:
          return ''
      }
    },
    getQualityColor: function (quality) {
      switch (quality) {
        case 'TC':
          return 'lime'
        case 'C':
          return 'green'
        case 'M':
          return 'cyan'
        case 'D':
          return 'orange'
        case 'P':
          return 'red'
        case 'T':
          return 'red darken-1'
        default:
          return 'grey'
      }
    },
    getQualityIcon: function (quality) {
      switch (quality) {
        case 'TC':
          return 'fas fa-check-double'
        case 'C':
          return 'fas fa-check'
        case 'M':
          return 'fas fa-meh'
        case 'D':
          return 'fas fa-frown'
        case 'P':
          return 'fas fa-ban'
        case 'T':
          return 'fas fa-skull-crossbones'
        case '?':
          return 'fas fa-question'
        default:
          return ''
      }
    },
    getTypeLabel: function (type) {
      switch (type.toUpperCase()) {
        case 'F':
          return this.$t('Fruit')
        case 'L':
          return this.$t('Vegetable')
        case 'HA':
          return this.$t('Aromatic herb')
        case 'V':
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
</style>
