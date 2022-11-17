<template>
  <h1>s</h1>
  <button @click="cur">色彩西安发顺丰</button>
</template>

<script>
import {onBeforeMount} from "vue";
import httpRequest from '@/request/index';
import router from '../router/index.ts';
import { ref } from 'vue';

export default {
  name: "MusicMainCommon",
  setup(){
    onBeforeMount(()=>{

      httpRequest.post(
          '/'
      )
    });
    return{
    }
  }
}
</script>

<style scoped>

</style>