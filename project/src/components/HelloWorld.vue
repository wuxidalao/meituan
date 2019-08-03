<template>
  <div class="hello">
    vuex{{$store.state.test.count}}
    <button type="button" @click="increment">加</button>
    <button type="button" @click="decrement">减</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {}
  },
  methods: mapActions(
    'test', ['increment', 'decrement']
  )
}
</script>
<style scoped>
</style>
