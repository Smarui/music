<template>
  <h1>s</h1>
  <button @click="cur">色彩西安发顺丰</button>
</template>

<script>
export default {
  name: "MusicMainCommon",
  setup(){
    const cur = (e)=>{
      e.target.style.backgroundColor = "green";
      alert("adasdas")
    }
    return{cur}
  }
}
</script>

<style scoped>

</style>