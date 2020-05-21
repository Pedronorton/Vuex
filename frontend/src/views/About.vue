<template>
  <div class="about">
    <h1>Exemplo para controle de estados de um componente usando Vuex</h1>
    <Alert/>
    <b-button @click="changeValue()">Alert sem tempo</b-button>
    <b-button @click="changeTime()">Alert com contador</b-button>

  </div>
</template>

<script>
import Alert from './Home'
import { mapState, mapActions } from 'vuex'
export default {
  name:'About',
  components:{
    Alert
  },
  data(){
    return{
      
    }
  },
    computed:{
    ...mapState({
        visible: state => state.teste,
    })
  },
  methods:{
    ...mapActions([
      'changeValue',
      'setTime'
    ]),

    changeValue(){
      this.$store.dispatch('changeValue')
    },
    changeTime(){
      this.$store.dispatch('setTime',5)
    }
  },
}


</script>

<style scoped>

</style>