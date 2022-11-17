<template>
  <div id="login">
    <el-input
        v-model="curCount"
        placeholder="Please input"
        style="margin-top: 70px"
        size="large"
    />
    <br><br>
    <el-input
        v-model="curPass"
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
import {onBeforeUnmount, onMounted, ref} from 'vue'
import qs from 'qs';
import httpRequest from '@/request/index';
import router from '../router/index.ts'
export default {
  name: "MusicLogin",
  setup(){
    onMounted(()=>{
      console.log("sdsad")
      document.body.style.backgroundImage = 'url(' + require('../assets/back/main.jpg') + ')'
      document.body.style.backgroundSize = 'cover'
      document.body.style.backgroundRepeat = 'no-repeat'
    })
    onBeforeUnmount(()=>{
      document.body.style.backgroundImage=''
    })
    const curCount = ref('')
    const curPass = ref('')
    let params = new URLSearchParams();
    console.log(params)
    const onLogin = ()=>{
      let userCount = curCount.value;
      let passWord = curPass.value;
       httpRequest.post(
           "/user/login",
           {
             userCount,
             passWord
           }
       ).then((data)=>{
         let curCode = data.code
         alert(data.message)
         if (curCode!=200){
           alert(data.message )
         }
         else {
           router.push("/music-main-common")
         }
       })
    }

    return{curCount , curPass , onLogin}
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