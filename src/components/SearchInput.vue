<template>
  <v-text-field v-bind="$attrs" v-model="search" @input="isTyping = true" clearable clear-icon="fas fa-times" @click:clear="onClear" />
</template>

<script>
import _ from 'lodash'

export default {
  name: 'SearchInput',
  props: {
    delay: { type: Number, default: 500 },
    value: { type: String, default: '' }
  },
  data () {
    return {
      debouncedSearch: null,
      isTyping: false,
      search: '',
      unWatch: null
    }
  },
  watch: {
    isTyping (value) {
      if (!value) {
        this.$emit('search', this.search)
      }
    }
  },
  methods: {
    onClear () {
      this.$emit('search', this.search)
    }
  },
  beforeDestroy () {
    this.unWatch()
  },
  mounted () {
    // Do NOT use ES6 arrow function for watch, it needs this as context!
    this.unWatch = this.$watch('search', _.debounce(function () {
      this.isTyping = false
    }, this.delay))
  }
}
</script>
