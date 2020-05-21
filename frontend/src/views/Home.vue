<template>
  <div class="home">
 <b-alert
      :show.sync="tempo"
      dismissible
      variant="warning"
      @dismissed="setTime(0)"
      @dismiss-count-down="countDownChanged"
    >
      <p>This alert will dismiss after {{ tempo }} seconds...</p>
      <b-progress variant="warning" max=5 :value="tempo" height="4px"></b-progress>
    </b-alert>

    <b-alert v-model="visible" variant="danger" dismissible>Dismissible Alert!</b-alert>

    Valor do state visible: {{visible}}
  </div>
</template>

<script>

import { mapState, mapActions } from "vuex";
export default {
  name: "Home",
  components: {},
  computed: {
    ...mapState({
      visible: state => state.visible,
      tempo: state => state.time
    })
  },
  methods: {
    ...mapActions([
      'setTime'
    ]),
    countDownChanged(val) {
       this.$store.dispatch('setTime',val)
      },
  },
  data() {
    return {
      // dismissSecs: 5,
      // dismissCountDown: 0,
      // showDismissibleAlert: false
    };
  },
};
</script>
