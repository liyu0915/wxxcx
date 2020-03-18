<template>
  <div class="counter-warp">
      <i-panel>
        <view style="text-align:center">鲜花</view>
      </i-panel>
       <button open-type="getUserInfo" @getuserinfo="bindGetUserInfo">授权登录</button>
       <button @click="getinfo">用户信息</button>
       <button open-type="getLocation" @getLocation="bindGetLocation">授权地理位置</button>
       <button @click="getlocation">地理位置</button>
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
      // this.$request(config.getHistoryDetail,'GET',null).then(
      //   (respone)=>{
      //     let res = respone.data;
      //     console.log(res);
      //   }
      // )
    },
    methods: {
      bindGetUserInfo(){
        wx.getSetting({
          success(res) {
            if (!res.authSetting['scope.userInfo']) {
              wx.authorize({
                scope: 'scope.userInfo',
                success () {
                }
              })
            }
          }
        })
      },
      bindGetLocation(){
        wx.getSetting({
          success(res) {
            if (!res.authSetting['scope.userLocation']) {
              wx.authorize({
                scope: 'scope.userLocation',
                success () {
                }
              })
            }
          }
        })
      },      
      getinfo() {
         wx.getUserInfo({
          success: function(res) {
            var userInfo = res.userInfo
            var nickName = userInfo.nickName
            var avatarUrl = userInfo.avatarUrl
            var gender = userInfo.gender //性别 0：未知、1：男、2：女
            var province = userInfo.province
            var city = userInfo.city
            var country = userInfo.country
            console.log('userinfo',res)
          }
        })
      },
      getlocation() {
        wx.getLocation({
        type: 'wgs84',
        success (res) {
          const latitude = res.latitude
          const longitude = res.longitude
          const speed = res.speed
          const accuracy = res.accuracy
          console.log('getLocation',res)
        }
        })
      }
    }
}
</script>

<style>
</style>
