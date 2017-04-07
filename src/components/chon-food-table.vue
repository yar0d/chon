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
          <md-table-head md-sort-by="quality">Conseillé</md-table-head>
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
      // return 'https://www.fruits-legumes.org/fruits-legumes-images/' + food.toLowerCase() + '.jpg'
      // switch (type) {
      //   case 'F':
      //     return 'F'
      //   case 'L':
      //     return 'L'
      //   case 'HA':
      //     return 'HA'
      //   case 'V':
      //     return 'V'
      //   default:
      //     return ''
      // }
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
      items: [
        { food: 'Ail', quality: 'T', vitamin_C: 0, type: 'L', note: '' },
        { food: 'Asperge', quality: 'D', vitamin_C: 5.6, type: 'L', note: '' },
        { food: 'Aubergine', quality: 'C', vitamin_C: 2.2, type: 'L', note: '' },
        { food: 'Batavia', quality: 'M', vitamin_C: 0, type: 'L', note: 'Laxatif. Peut être donné tous les jours en quantité modérée ( 2 à 3 feuilles ). En quantité très modérée les toutes premières fois pour les cobayes non habitués.' },
        { food: 'Bette', quality: 'D', vitamin_C: 30, type: 'L', note: 'Très riche en acide oxalique ( 600 mg pour 1 g) Risquent de favoriser les problèmes d\'urolithiases s\'ils sont consommés en excès, même pour des cochons d\'Inde en bonne santé. Déconseillé pour les cobayes ayant des problèmes urinaires.' },
        { food: 'Betterave rouge', quality: 'D', vitamin_C: 30, type: 'L', note: 'Riche en sucre, peu de valeur nutritive, favorise l\'obésité. A proscrire chez les cobayes ayant des problèmes urinaires.' },
        { food: 'Bourrache', quality: 'C', vitamin_C: 35, type: 'L', note: '' },
        { food: 'Brocoli', quality: 'C', vitamin_C: 89.2, type: 'L', note: 'Peut provoquer des ballonnements en trop grande quantité.' },
        { food: 'Carotte', quality: 'D', vitamin_C: 5.9, type: 'L', note: 'Contient de l\'acide oxalique déconseillé en cas d\'obésité (sucres).' },
        { food: 'Céleri rave', quality: 'C', vitamin_C: 8, type: 'L', note: 'Diurétique. Peut provoquer des selles molles chez certains cobayes sensibles.' },
        { food: 'Champignons de Paris', quality: 'D', vitamin_C: 0, type: 'L', note: '' },
        { food: 'Chicorée', quality: 'C', vitamin_C: 24, type: 'L', note: '' },
        { food: 'Chou chinois', quality: 'C', vitamin_C: 3.2, type: 'L', note: '' },
        { food: 'Chou de Bruxelles', quality: 'M', vitamin_C: 85, type: 'L', note: 'Peut provoquer des ballonnements en trop grande quantité.' },
        { food: 'Chou fleur (sans feuille)', quality: 'M', vitamin_C: 48.2, type: 'L', note: 'Peut provoquer des ballonnements en trop grande quantité.' },
        { food: 'Chou frisé', quality: 'M', vitamin_C: 120, type: 'L', note: 'Peut provoquer des ballonnements en trop grande quantité.' },
        { food: 'Chou vert', quality: 'M', vitamin_C: 36.6, type: 'L', note: 'Peut provoquer des ballonnements en trop grande quantité.' },
        { food: 'Ciboulette', quality: 'T', vitamin_C: 0, type: 'L', note: '' },
        { food: 'Concombre', quality: 'C', vitamin_C: 2.8, type: 'L', note: 'Riche en eau. Conseillé pour les cobayes buvant peu ou ayant des problèmes urinaires.' },
        { food: 'Courge', quality: 'M', vitamin_C: 9.6, type: 'L', note: 'Légèrement sucré.' },
        { food: 'Courgette', quality: 'C', vitamin_C: 1.9, type: 'L', note: '' },
        { food: 'Cresson', quality: 'M', vitamin_C: 43, type: 'L', note: '' },
        { food: 'Endive (chicorée, chicon)', quality: 'C', vitamin_C: 6.5, type: 'L', note: '2 ou 3 feuilles, riche en eau.' },
        { food: 'Épinard', quality: 'D', vitamin_C: 28.1, type: 'L', note: 'Peut provoquer des selles molles chez certains cobayes sensibles. Très riche en acide oxalique. Risque de favoriser les problèmes d\'urolithiases s\'ils sont consommés en excès, même pour des cochons d\'Inde en bonne santé. Déconseillé chez les cobayes ayant des problèmes urinaires.' },
        { food: 'Fanes de betteraves', quality: 'P', vitamin_C: 0, type: 'L', note: 'Très riche en acide oxalique.' },
        { food: 'Fanes de carotte', quality: 'C', vitamin_C: 0, type: 'L', note: 'Peut être donné quotidiennement.' },
        { food: 'Fanes de fenouil', quality: 'C', vitamin_C: 0, type: 'L', note: 'Peut être donné quotidiennement.' },
        { food: 'Fanes de navet', quality: 'P', vitamin_C: 0, type: 'L', note: 'Très riche en calcium.' },
        { food: 'Fanes de radis', quality: 'C', vitamin_C: 0, type: 'L', note: 'Peut provoquer des selles molles chez certains cobayes sensibles.' },
        { food: 'Fenouil', quality: 'C', vitamin_C: 12, type: 'L', note: 'Peut être donné quotidiennement, riche en fibres.' },
        { food: 'Frisée', quality: 'M', vitamin_C: 0, type: 'L', note: 'Laxatif. Peut être donné tous les jours en quantité modérée ( 2 à 3 feuilles ). En quantité très modérée les toutes premières fois pour les cobayes non habitués.' },
        { food: 'Feuille de chene', quality: 'M', vitamin_C: 0, type: 'L', note: 'Laxatif. Peut être donné tous les jours en quantité modérée ( 2 à 3 feuilles ). En quantité très modérée les toutes premières fois pour les cobayes non habitués.' },
        { food: 'Haricots verts frais', quality: 'M', vitamin_C: 16.3, type: 'L', note: 'Choisir extra frais. Ne pas en donner trop à la fois. Riche en acide oxalique : déconseillé pour les cobayes ayant des problèmes urinaires.' },
        { food: 'Haricots coco plats', quality: 'M', vitamin_C: 0, type: 'L', note: '' },
        { food: 'Laitue', quality: 'P', vitamin_C: 0, type: 'L', note: 'Trop de nitrate !' },
        { food: 'Mache', quality: 'M', vitamin_C: 38.2, type: 'L', note: 'Peut provoquer des crottes molles chez certains cobayes sensibles.' },
        { food: 'Mesclun', quality: 'D', vitamin_C: 0, type: 'L', note: '' },
        { food: 'Navet', quality: 'M', vitamin_C: 21, type: 'L', note: 'En quantité modérée car peut provoquer des ballonnements.' },
        { food: 'Oignon', quality: 'T', vitamin_C: 0, type: 'L', note: '' },
        { food: 'Panais', quality: 'C', vitamin_C: 17, type: 'L', note: '' },
        { food: 'Petit pois frais avec cosses', quality: 'M', vitamin_C: 14.2, type: 'L', note: '' },
        { food: 'Pissenlit', quality: 'C', vitamin_C: 37.5, type: 'L', note: 'Feuilles et fleurs sont consommables' },
        { food: 'Poireau', quality: 'T', vitamin_C: 0, type: 'L', note: '' },
        { food: 'Poivron', quality: 'C', vitamin_C: 80.4, type: 'L', note: 'Peut être donné quotidiennement. Le poivron rouge contient beaucoup plus de Vitamine A C que le jaune ou le vert.' },
        { food: 'Potiron', quality: 'M', vitamin_C: 0.84, type: 'L', note: 'Légèrement sucré.' },
        { food: 'Pourpier', quality: 'C', vitamin_C: 21, type: 'L', note: '' },
        { food: 'Radis', quality: 'C', vitamin_C: 14.8, type: 'L', note: 'On peut donner aussi les fanes. Peut créer des ballonnements si donnés en trop grande quantité.' },
        { food: 'Radis noir', quality: 'C', vitamin_C: 6.4, type: 'L', note: '' },
        { food: 'Raifort', quality: 'C', vitamin_C: 97.3, type: 'L', note: '' },
        { food: 'Rhubarbe', quality: 'P', vitamin_C: 0, type: 'L', note: 'Forte acidité.' },
        { food: 'Romaine', quality: 'M', vitamin_C: 5, type: 'L', note: 'Laxatif. Peut être donné tous les jours en quantité modérée ( 2 à 3 feuilles ). En quantité très modérée les toutes premières fois pour les cobayes non habitués.' },
        { food: 'Roquette', quality: 'C', vitamin_C: 0, type: 'L', note: '' },
        { food: 'Rutabaga', quality: 'C', vitamin_C: 25, type: 'L', note: 'En petite quantité.' },
        { food: 'Salsifis', quality: 'C', vitamin_C: 8, type: 'L', note: '' },
        { food: 'Scarole', quality: 'M', vitamin_C: 0, type: 'L', note: 'Laxatif. Peut être donné tous les jours en quantité modérée ( 2 à 3 feuilles ). En quantité très modérée les toutes premières fois pour les cobayes non habitués.' },
        { food: 'Tomate', quality: 'C', vitamin_C: 13.7, type: 'L', note: 'Riche en eau, mais peut provoquer des diarrhées.' },
        { food: 'Tomate cerise', quality: 'C', vitamin_C: 18.4, type: 'L', note: 'Riche en eau, mais peut provoquer des diarrhées.' },
        { food: 'Topinambour', quality: 'C', vitamin_C: 4, type: 'L', note: 'Riche en eau et pauvre en calcium et phosphore.' },
        { food: 'Trèfle', quality: 'M', vitamin_C: 0, type: 'V', note: 'Peut provoquer des ballonnement en trop grande quantité.' },
        { food: 'Feuilles de fraisier', quality: 'C', vitamin_C: 0, type: 'V', note: '' },
        { food: 'Feuilles de framboisier', quality: 'C', vitamin_C: 0, type: 'V', note: 'Attention à retirer les épines qui peuvent blesser les parois de la cavité buccale.' },
        { food: 'Feuilles de mûrier', quality: 'C', vitamin_C: 0, type: 'V', note: 'Attention à retirer les épines qui peuvent blesser les parois de la cavité buccale.' },
        { food: 'Feuilles de noisetier', quality: 'C', vitamin_C: 0, type: 'V', note: '2 ou 3 feuilles par ration.' },
        { food: 'Feuilles de saule', quality: 'C', vitamin_C: 0, type: 'V', note: '' },
        { food: 'Herbe fraîche', quality: 'TC', vitamin_C: 0, type: 'V', note: '' },
        { food: 'Luzerne fraîche', quality: 'D', vitamin_C: 0, type: 'V', note: 'Trop riche en calcium.' },
        { food: 'Ortie', quality: 'C', vitamin_C: 0, type: 'V', note: 'L\'ortie est riche en fer, en calcium, en potassium, en magnésium ainsi qu\'en vitamine A et C. A faire sécher pour lui ôter ses propriétés urticantes. Diurétique, Antidiarrhéique.' },
        { food: 'Pissenlits', quality: 'C', vitamin_C: 37, type: 'V', note: 'Feuilles et fleurs sont mangeables.' },
        { food: 'Aneth', quality: 'M', vitamin_C: 21, type: 'HA', note: '' },
        { food: 'Angélique', quality: 'C', vitamin_C: 0, type: 'HA', note: '' },
        { food: 'Basilic', quality: 'M', vitamin_C: 18, type: 'HA', note: '' },
        { food: 'Cerfeuil', quality: 'D', vitamin_C: 50, type: 'HA', note: '' },
        { food: 'Coriandre', quality: 'C', vitamin_C: 27, type: 'HA', note: '' },
        { food: 'Estragon', quality: 'M', vitamin_C: 50, type: 'HA', note: 'Riche en acide oxalique.' },
        { food: 'Fenouil aromatique', quality: 'C', vitamin_C: 0, type: 'HA', note: '' },
        { food: 'Menthe', quality: 'C', vitamin_C: 31.8, type: 'HA', note: '' },
        { food: 'Oseille', quality: 'P', vitamin_C: 48, type: 'HA', note: 'Riche en acide oxalique.' },
        { food: 'Persil (plat, frisé)', quality: 'C', vitamin_C: 133, type: 'HA', note: 'Ne pas donner à une femelle qui allaite : Coupe les montées de lait. Très riche en vitamine C' },
        { food: 'Sarriette', quality: 'P', vitamin_C: 0, type: 'HA', note: '' },
        { food: 'Sauge', quality: 'P', vitamin_C: 0, type: 'HA', note: '' },
        { food: 'Thym', quality: 'M', vitamin_C: 0, type: 'HA', note: '' },
        { food: 'Abricot', quality: 'C', vitamin_C: 10, type: 'F', note: '' },
        { food: 'Ananas', quality: 'C', vitamin_C: 47.8, type: 'F', note: '' },
        { food: 'Banane', quality: 'C', vitamin_C: 8.7, type: 'F', note: 'Un tronçon de 2 cm. Eviter en cas d\'obésité.' },
        { food: 'Canneberge', quality: 'C', vitamin_C: 13.3, type: 'F', note: '' },
        { food: 'Cerise', quality: 'M', vitamin_C: 10, type: 'F', note: 'Trés sucré.' },
        { food: 'Clémentine', quality: 'C', vitamin_C: 48.8, type: 'F', note: '' },
        { food: 'Coing', quality: 'C', vitamin_C: 15, type: 'F', note: '' },
        { food: 'Datte', quality: 'D', vitamin_C: 1.5, type: 'F', note: 'Riche en acide oxalique.' },
        { food: 'Figues', quality: 'P', vitamin_C: 2, type: 'F', note: 'Riche en acide oxalique.' },
        { food: 'Fraise', quality: 'C', vitamin_C: 67, type: 'F', note: '' },
        { food: 'Framboise', quality: 'C', vitamin_C: 26.2, type: 'F', note: '' },
        { food: 'Fruit de la passion', quality: 'C', vitamin_C: 30, type: 'F', note: 'A éviter chez les cobayes souffrant d\'obésité.' },
        { food: 'Goyave', quality: 'M', vitamin_C: 228.3, type: 'F', note: 'A éviter chez les cobayes souffrant d\'obésité car très riche en sucre.' },
        { food: 'Groseille', quality: 'M', vitamin_C: 41, type: 'F', note: 'Sucré.' },
        { food: 'kaki', quality: 'M', vitamin_C: 66, type: 'F', note: 'Sucré.' },
        { food: 'Kiwi', quality: 'C', vitamin_C: 92.7, type: 'F', note: 'Diurétique. Peut provoquer des selles molles chez certains cobayes sensibles.' },
        { food: 'Litchi', quality: 'M', vitamin_C: 71.5, type: 'F', note: 'A éviter chez les cobayes souffrant d\'obésité car très riche en sucre.' },
        { food: 'Mandarine', quality: 'M', vitamin_C: 26.7, type: 'F', note: 'Sucré.' },
        { food: 'Mangue', quality: 'M', vitamin_C: 36.4, type: 'F', note: 'Sucré.' },
        { food: 'Melon', quality: 'M', vitamin_C: 36.7, type: 'F', note: 'A éviter chez les cobayes souffrant de problèmes urinaires.' },
        { food: 'Melon vert/jaune', quality: 'C', vitamin_C: 36.7, type: 'F', note: 'Sucré.' },
        { food: 'Myrtilles', quality: 'M', vitamin_C: 20, type: 'F', note: 'Sucré et acide.' },
        { food: 'Nectarine', quality: 'M', vitamin_C: 5.4, type: 'F', note: 'Sucré.' },
        { food: 'Noix de coco', quality: 'M', vitamin_C: 3.3, type: 'F', note: 'Riche en vitamine D.' },
        { food: 'Orange', quality: 'M', vitamin_C: 53.2, type: 'F', note: '' },
        { food: 'Pamplemousse', quality: 'M', vitamin_C: 42, type: 'F', note: '' },
        { food: 'Pastèque', quality: 'D', vitamin_C: 8.1, type: 'F', note: 'Déconseillé pour tous les cobayes mêmes en bonne santé. Très déconseillé chez les cobayes souffrant de problèmes urinaires car trop riche en calcium.' },
        { food: 'Poire', quality: 'M', vitamin_C: 4.3, type: 'F', note: 'Peut provoquer des ballonnements chez certains cobayes.' },
        { food: 'Pomelo', quality: 'M', vitamin_C: 40.9, type: 'F', note: 'Sucré et acide.' },
        { food: 'Pomme', quality: 'M', vitamin_C: 4.6, type: 'F', note: 'Modérément pour éviter l\'obésité. Certains cobayes sont allergiques à la pectine contenue dans la peau. À éplucher.' },
        { food: 'Pruneau', quality: 'D', vitamin_C: 0.6, type: 'F', note: 'Risque de diarrhée.' },
        { food: 'Raisin', quality: 'M', vitamin_C: 4, type: 'F', note: 'A modérer car très riche en sucre et peut favoriser l\'obésité.' }
      ]
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
