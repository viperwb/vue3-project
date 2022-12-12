<template>
  <input type="text" v-model="shuru">
  {{shuru}}
  <div>{{a}}</div>
  <div>{{b}}</div>
  <br>
  <button @click="popIt('1')">popa</button>
  <br>
  <button @click="popIt('2')">popb</button>
  <br>
  
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity'
import { computed, watch } from '@vue/runtime-core'
export default {
  setup () {
    let data = reactive({
      shuru: '',
      a: 10,
      b: 'hot',
      popIt: (a) => {
        alert(a)
      }
    })
    let aaa = computed({
      set (a) {
        console.log(a);
      }
    })
    watch(() => data.shuru, (val) => {
      console.log(val);
    })
    watch(() => data.shuru, (val) => {
      console.log(val);
    })
    return {
      ...toRefs(data),
      aaa
    }
  }

}
</script>

<style>

</style>