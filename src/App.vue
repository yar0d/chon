<template>
  <v-app dark id="app">
    <v-toolbar class="primary" dense>
      <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
        <v-toolbar-title>{{ $t('Guinea pigs') }}</v-toolbar-title>
        <v-spacer />
        <v-toolbar-items>
          <v-btn large icon to="/" :class="$route.name === 'home' ? 'accent' : ''"><v-icon large>fa-home</v-icon></v-btn>
          <v-btn large icon to="food" @click="isLoading = true" :class="$route.name === 'food' ? 'accent' : ''">
            <v-badge color="primary darken-2" overlap>
              <span slot="badge" class="tiny-text">{{ this.$store.getters.foods.length }}</span>
              <v-icon large>fa-apple-alt</v-icon>
          </v-badge>
          </v-btn>
          <v-btn large icon disabled to="graph" @click="isLoading = true" :class="$route.name === 'graph' ? 'accent' : ''"><v-icon large>fa-chart-line</v-icon></v-btn>
        </v-toolbar-items>
    </v-toolbar>

    <v-progress-linear :indeterminate="isLoading" height="4" class="ma-0" value="100"/>

    <div class="brand-img full-height">
      <v-container xs12 offset-md-1 md10 grid-list-sm>
        <v-layout>
          <v-flex class="brand-img full-height">
            <router-view/>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false
    }
  },
  methods: {
    setLoading (isLoading, timeout) {
      this.isLoading = isLoading
      if (timeout) {
        setTimeout(() => { this.$nextTick(() => { this.isLoading = false }) }, timeout)
      }
    }
  },
  mounted () {
    this.$root.setLoading = this.setLoading
  }
}
</script>

<style scoped>
.full-height {
  height: 100% !important;
}
.brand-img {
  background-image: url(/img/chon.png);
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
}
.tiny-text {
  font-size: 8px;
}
</style>
