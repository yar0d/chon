<template>
  <v-container fluid ma-0 pa-0 :class="$vuetify.breakpoint.mdAndUp ? 'grid-list-sm' : ''">
    <v-layout>
      <v-flex>
        <v-toolbar flat dense class="opacity-50">

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
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex>
        <v-data-iterator :items="foods" content-tag="v-layout" :pagination.sync="pagination" row wrap>
          <v-flex slot="item" slot-scope="props" xs12 sm6 md4 lg3>
            <v-card class="ma-1">
              <v-card-title><h3 class="title">{{ props.item.name }}</h3><v-spacer /><v-avatar :color="getQualityColor(props.item.quality)"><v-icon large>{{ getQualityIcon(props.item.quality) }}</v-icon></v-avatar> &nbsp; <v-avatar size="32"><img :src="getTypeImage(props.item.type)" /></v-avatar></v-card-title>
              <div v-if="toggle_view === 2">
                <v-divider></v-divider>
                <v-list dense>
                  <v-list-tile>
                    <v-list-tile-content>{{ $t('Quality') }}</v-list-tile-content>
                    <v-list-tile-action><span><v-icon small :color="getQualityColor(props.item.quality)">{{ getQualityIcon(props.item.quality) }}</v-icon> {{ getQualityLabel(props.item.quality) }}</span></v-list-tile-action>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>{{ $t('C vitamin')}}</v-list-tile-content>
                    <v-list-tile-action>{{ $t('{c}mg/100g', { c: props.item.vitamin_C }) }}</v-list-tile-action>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>{{ $t('Type') }}</v-list-tile-content>
                    <v-list-tile-action>{{ getTypeLabel(props.item.type) }}</v-list-tile-action>
                  </v-list-tile>
                </v-list>
                <v-card-text class="caption">
                  {{ props.item.note }}
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
        rowsPerPage: -1,
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
          return ''
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
        default:
          return ''
      }
    },
    getTypeLabel: function (type) {
      switch (type.toUpperCase()) {
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
    getTypeImage: function (type) {
      return '/img/' + type.toUpperCase() + '.png'
    }
  },
  mounted () {
    this.foods = this.$store.getters.foods
    if (this.$root.setLoading) this.$root.setLoading(true, 1000)
  }
}
</script>
