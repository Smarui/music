<template>
  <div>
    <audio controls ref="audio" >
      <source src="@/assets/music/人间不值得.mp3"/>
    </audio>
  </div>
  <div>

  </div>

</template>

<script>

import {onMounted} from "vue";
import axios from "axios";
import httpRequest from '@/request/index'
export default {
  name: "MusicMainCommon",
  setup(){
    let musicArray = ["一是的撒" , "奥术大师多" , "大范甘迪" , "单发给V型"];
    onMounted(()=>{
      httpRequest.post(
          "/music/all",
          {
            ss:2
          }
      ).then((data)=>{
        console.log(data)
      })
    })

    return{
    }
  }
}
</script>
<style scoped>
</style>