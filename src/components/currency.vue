<template>
  <Loader v-if="loading" v-bind:size="30"/>
  <div v-else>
    <p><b class="usd">$</b>{{usd}}</p>
    <p><b class="eur">€</b>{{eur}}</p>
  </div>
</template>
<script>
import Loader from '@/components/loader.vue';

export default {
  data() {
    return {
      loading: true,
      usd: '',
      eur: '',
    };
  },
  mounted() {
    fetch('https://www.nbrb.by/api/exrates/rates/USD?parammode=2')
      .then((response) => response.json())
      .then((json) => {
        this.usd = json.Cur_OfficialRate;
        setTimeout(() => this.loading = false, 1000);
      });
    fetch('https://www.nbrb.by/api/exrates/rates/EUR?parammode=2')
      .then((response) => response.json())
      .then((json) => {
        this.eur = json.Cur_OfficialRate;
        setTimeout(() => this.loading = false, 1000);
      });
  },
  components: {
    Loader,
  },
};
</script>

<style lang="scss" scoped>
  div {
    margin: 0 auto;
  }
  p {
    display: flex;
    align-items: center;
    margin: 2px 0;
    line-height: 25px;
  }
  b {
    font-size: 20px;
    margin-right: 5px;
  }
  .usd {
    color: green;
  }
  .eur {
    color: rgb(177, 129, 66);
  }
</style>
