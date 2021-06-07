<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    Clicked: {{ count }} times
    <button @click="actionInc()">+</button>
    <button @click="actionDec()">-</button>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { mapGetters,mapActions  } from 'vuex';
import { onMounted,defineComponent } from 'vue';
import { CountModule } from '@/store/modules/count';

export default  defineComponent({
   name:'Home',
   components: {
    HelloWorld
  },
   computed: {
    ...mapGetters([
      'count'
    ])
  },
  get count() {
    return CountModule.count
  },
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ]),
  setup() {
      const count = CountModule.count;
      console.log("🚀 ~ file: Home.vue ~ line 35 ~ setup ~ count", count)
      // const dec = () => {
      //   store.commit(MutationTypes.DEC_COUNTER, 1);
      // };
      const actionInc = () => {
        CountModule.SET_COUNT(1);
      };
      // const actionDec = () => {
      //   store.dispatch(ActionTypes.DEC_COUNTER, 2);
      // };
      // const doubleCounter = computed(() => store.getters.doubleCounter);

      // onMounted(() => {
      // })

      return {
      count,
      // doubleCounter,
      actionInc,
      // actionDec
    };

  }
  
})
</script>
