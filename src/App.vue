<template>
  <div id="chonApplication">
    <md-toolbar>

      <md-avatar class="md-avatar-icon md-large">
        <img src="static/images/chon.png">
      </md-avatar>

      <h1 class="md-title" style="flex: 1"> Le Coin des Chons</h1>

    </md-toolbar>

    <md-tabs>
      <md-tab id="chon-food" md-label="Nourriture">
        <p class="md-caption">Il est important que votre cochon d'Inde ait au moins deux repas par jour en variant le plus possible les légumes : minimum 6 légumes différents par jour. Varier les assiettes d'un jour à l'autre et en fonction des légumes de saison. Pour vous repérer, un <strong>cochon d'Inde</strong> adulte pourra consommer environ <strong>150 à 200g de légumes</strong> par jour.</p class="md-caption">
        <chonFoodTable></chonFoodTable>
      </md-tab>

      <md-tab id="chon-weight" md-label="Poids">
        <p>TODO</p>
        <p>Liste des chons et leurs courbes de poids…</p>
      </md-tab>
    </md-tabs>

    <md-toolbar>
        <p>Made with ♥ by Daniel Coquette, with <a href="https://vuejs.org" target="_blank">Vue.js</a>. &copy; Copyright 2017.</p>
    </md-toolbar>
  </div>
</template>

<script>
import chonFoodTable from './components/chon-food-table.vue'

export default {
  name: 'chonApplication',
  components: {
    chonFoodTable: chonFoodTable
  }
}
</script>
