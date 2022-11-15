<template>
  <div id="login">
    <el-input
        v-model="userCount"
        placeholder="Please input"
        style="margin-top: 70px"
        size="large"
    />
    <br><br>
    <el-input
        v-model="passWord"
        type="password"
        placeholder="Please input password"
        show-password
        size="large"

    />

    <br>
    <br>
    <el-button type="primary" round  @click="onLogin"  style="margin-left: 49px" size="large">登录</el-button>
    <el-button type="primary" round size="large" style="margin-left: 25px">注册</el-button>

  </div>
</template>

<script>
import { ref } from 'vue'
import router from "../router/index.ts"
export default {
  name: "MusicLogin",
  setup(){

    const state = ref();
    const onLogin = ()=>{

      alert('ss')
      router.push("/music-main-common")
    }
    const userCount = ref('')
    const passWord = ref('')
    return{userCount , passWord , state , onLogin}
  }
};
</script>

<style scoped>
#login{
  width: 300px;
  height: 300px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: rgba(127, 255, 244, 0.51);

  justify-content: center;
  align-items: center;
}
</style>