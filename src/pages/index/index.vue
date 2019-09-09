<template>
  <div class="container">
    <div class="login">
      <img src="/static/imgs/guide_bg.jpg">
      <div class="learn">
        <!-- button 的open-type获取用户信息、然后绑定事件 -->
        <button open-type="getUserInfo" @getuserinfo="getUserInfo">开始学习</button>
      </div>
    </div>
  </div>

</template>

<script>


export default {
  methods: {
    getUserInfo(e) {
      //判断授权是否成功
      if(e.mp.detail.userInfo){  //获取用户信息
        //把用户信息存储到vuex中
        this.$store.dispatch('setIsAuthenticated', true);
        this.$store.dispatch('setUser', e.mp.detail.userInfo)
        //获取code
        this.getCode();
      }
    },
    getCode() {
      wx.login({
        success: res => {
          this.getOpenid(res.code);
        }
      })
    },
    getOpenid(code){
      const appid = 'wxfdc1f122b0326ac9';
      const secret = 'e39f817792df75b06bc5dff3e88e8eab';

      //加载动画
      wx.showLoading({
        title: 'loading...'
      })


      this.$https.request({
        url: this.$interfaces.getOpenid + appid + "/" + secret + "/" + code,
        method: "get"
      }).then(res => {
        //将数据存储到vuex中
        this.$store.dispatch('setOpenid', res.openid);

        //请求课程数据
        this.isLearned(res.openid);
      }).catch(err => {
        console.log(err);
      })

    },
    isLearned(openid) {
      this.$https.request({
        url: this.$interfaces.getMyLesson + openid,
        method: 'get'
      }).then(res => {
        //成功：测试过了，进入课程
        //存储课程信息
        this.$store.dispatch('setLessonInfo', res);
        wx.switchTab({
          url: '../learn/main',
        })
      }).catch(err => {
        //没有测试过
        wx.redirectTo({
          url: '../question/main',
        })
      })
    }
  }

}
</script>



<style scoped>
.container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.login {
  width: 100%;
  height: 100%;
  position: relative;
}
.login img {
  display: inline-block;
  width: 100%;
  height: 100%;
}
.login .learn {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
}
.learn button {
  position: absolute;
  top: 90%;
  left: 10%;
  width: 80%;
  background-color: #009eef;
  color: white;
}

</style>
