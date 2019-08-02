<template>
  <div class="hello">
    vuex{{$store.state.count}}
    <button type="button" @click="increment">加</button>
    <button type="button" @click="decrement">减</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: mapActions([
    'increment',
    'decrement'
  ])
}
</script>
<style scoped>

</style>
