<template>
  <v-card flat>
    <v-card-title >
      <div>
        <h3 class="title">Chon <span class="subheading">{{ $store.getters.version }}</span></h3>
        <p class="caption">{{ $t('This application to help you manage the health of your Guinea Pigs.') }}</p>
      </div>
    </v-card-title>

    <v-card-text class="caption py-0">
      <h3 class="subheading accent--text">{{ $t('On the menu:') }}</h3>
      <p><v-icon small>fa-apple-alt</v-icon> {{ $t('A table of foods with their toxicity and their contribution to Vitamin C.') }}</p>
      <p><v-icon small class="disabled--text">fa-chart-line</v-icon> {{ $t('Follow the evolution of the growth of your Guinea Pigs with beautiful graphs.') }}<v-chip small label color="info">{{ $t('Soon!') }} </v-chip></p>
    </v-card-text>

    <v-expansion-panel>
      <v-expansion-panel-content>
        <div slot="header"><v-icon small>fa-question-circle</v-icon> {{ $t('About...') }}</div>
        <v-card>
          <v-card-text>
            <p class="subheading">Made with <v-icon small color="pink">fa-heart</v-icon> by Daniel Coquette, with <a href="https://vuejs.org" target="_blank">Vue.js</a> and <a href="https://vuetify.com" target="_blank">Vuetify.js</a>.</p>
          </v-card-text>
          <v-list dense>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>{{ $t('Browser language:') }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ language }} <span class="caption secondary--text">({{ languages }})</span></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>{{ $t('User agent:') }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ userAgent }}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>{{ $t('Platform:') }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ platform }}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-footer class="caption px-1"><v-spacer />&copy; Copyright 2019</v-footer>
  </v-card>
</template>

<script>
export default {
  data () { return {} },
  computed: {
    language () { return navigator.language },
    languages () { return navigator.languages.join(', ') },
    userAgent () { return navigator.userAgent },
    platform () { return navigator.platform }
  }
}
</script>
