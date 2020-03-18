<template>
  <div class="counter-warp">
      <i-panel>
        <view style="text-align:center">鲜花</view>
      </i-panel>
  </div>
</template>

<script>
import config from '../../api/api.js'
export default {
    data () {
      return {
      }
    },
    created() {
      this.$request(config.getHistoryDetail,'GET',null).then(
        (respone)=>{
          let res = respone.data;
          console.log(res);
        }
      )
    }
}
</script>

<style>
</style>
