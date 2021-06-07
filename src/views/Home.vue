<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    Clicked: {{ count.count }} times
    <button @click="actionInc()">+</button>
    <button @click="actionDec()">-</button>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { mapGetters,mapActions,useStore } from 'vuex';
import { onMounted,defineComponent,computed } from 'vue';
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
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ]),
  setup() {
      const store = useStore()    
      const count = computed(() => store.state.count)               
      const actionInc = () => {
        CountModule.IncCount();
      };
      const actionDec = () => {
        CountModule.DecCount();
      };
      // onMounted(() => {
      // })

      return {
      count,
      // doubleCounter,
      actionInc,
      actionDec
    };

  }
  
})
</script>
