<template>
  <v-card>
    <v-img src="/img/chon.png" aspect-ratio="3"/>
    <v-card-title primary-title><h3 class="title">Chon 2</h3></v-card-title>
    <v-card-text>
      <p>
        {{ $t('This application to help you manage the health of your Guinea Pigs.')}}
      </p>

      <p class="subheading">Made with <v-icon small color="pink">fa-heart</v-icon> by Daniel Coquette, with <a href="https://vuejs.org" target="_blank">Vue.js</a> and <a href="https://vuetify.com" target="_blank">Vuetify.js</a>. &copy; Copyright 2019.</p>
    </v-card-text>

    <v-list>
      <v-list-tile>
        <v-list-tile-content class="secondary--text">{{ $t('Browser language:') }}</v-list-tile-content>
        <v-list-tile-action>{{ language }} <span class="secondary--text">({{ languages }})</span></v-list-tile-action>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-content class="secondary--text">{{ $t('User agent:') }}</v-list-tile-content>
        <v-list-tile-action>{{ userAgent }}</v-list-tile-action>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-content class="secondary--text">{{ $t('Platform:') }}</v-list-tile-content>
        <v-list-tile-action>{{ platform }}</v-list-tile-action>
      </v-list-tile>
    </v-list>
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
