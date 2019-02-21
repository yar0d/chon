<template>
  <v-card class="ma-1">
    <v-card-title>
      <h3 class="title">{{ food.name }}</h3>
      <v-spacer />
      <v-avatar :color="FOOD_CONSTS.getQualityColor(food.quality)">
        <v-icon large>{{ FOOD_CONSTS.getQualityIcon(food.quality) }}</v-icon>
      </v-avatar>
      &nbsp;
      <v-avatar size="32"><img :src="FOOD_CONSTS.getTypeImage(food.type)" /></v-avatar>
    </v-card-title>
    <div v-if="viewType === 2">
      <v-divider></v-divider>
      <v-list dense>
        <v-list-tile>
          <v-list-tile-content>{{ $t('Quality') }}</v-list-tile-content>
          <v-list-tile-action><span><v-icon small :color="FOOD_CONSTS.getQualityColor(food.quality)">{{ FOOD_CONSTS.getQualityIcon(food.quality) }}</v-icon> {{ FOOD_CONSTS.getQualityLabel(food.quality) }}</span></v-list-tile-action>
        </v-list-tile>
        <v-list-tile v-show="food.vitamins">
          <v-list-tile-content class="important--text subheading accent--text">{{ $t('C vitamin')}}</v-list-tile-content>
          <v-list-tile-action class="important--text">{{ $t('{c}mg/100g', { c: food.vitamins.C }) }}</v-list-tile-action>
        </v-list-tile>

        <v-divider/>

        <v-list-tile v-show="food.calories">
          <v-list-tile-content>{{ $t('Calories')}}</v-list-tile-content>
          <v-list-tile-action>{{ $t('{c}mg/100g', { c: food.calories }) }}</v-list-tile-action>
        </v-list-tile>
        <v-list-tile v-show="food.fibers">
          <v-list-tile-content>{{ $t('Fibers')}}</v-list-tile-content>
          <v-list-tile-action>{{ $t('{c}g/100g', { c: food.fibers }) }}</v-list-tile-action>
        </v-list-tile>
        <v-list-tile v-show="food.carbohydrates">
          <v-list-tile-content>{{ $t('Carbohydrates')}}</v-list-tile-content>
          <v-list-tile-action>{{ $t('{c}g/100g', { c: food.carbohydrates }) }}</v-list-tile-action>
        </v-list-tile>
        <v-list-tile v-show="food.proteins">
          <v-list-tile-content>{{ $t('Proteins')}}</v-list-tile-content>
          <v-list-tile-action>{{ $t('{c}g/100g', { c: food.proteins }) }}</v-list-tile-action>
        </v-list-tile>
        <v-list-tile v-show="food.lipids">
          <v-list-tile-content>{{ $t('Lipids')}}</v-list-tile-content>
          <v-list-tile-action>{{ $t('{c}g/100g', { c: food.lipids }) }}</v-list-tile-action>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>{{ $t('Type') }}</v-list-tile-content>
          <v-list-tile-action>{{ FOOD_CONSTS.getTypeLabel(food.type) }}</v-list-tile-action>
        </v-list-tile>
      </v-list>

      <v-divider v-show="food.note"/>
      <v-card-text class="caption secondary--text" v-show="food.note">
        {{ $t(food.note) }}
      </v-card-text>
    </div>
  </v-card>
</template>

<script>
import FOOD_CONSTS from '@/data/consts'

export default {
  name: 'FoodItem',
  props: {
    food: { type: Object, required: true },
    viewType: { type: Number, default: 1 }
  },
  data () {
    return {
      FOOD_CONSTS
    }
  }
}
</script>
