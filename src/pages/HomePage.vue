<template>
<div class="container-fluid img" :style="{'background-image':'url(https://images.unsplash.com/photo-1465244554671-e501f19a3bb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)'}">
    <div class="row justify-content-center pt-5 ps-2">
      <div class="col-3">
        <div class="card rounded-circle logo">
          <img src="../assets/img/gregslist.png" alt="CodeWorks Logo" class="rounded-circle elevation-4">
       </div> 
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
  .logo{
    background-color: #022e509a;
    backdrop-filter: blur(4px);
    height: 250px;
    width: 350px;
    >img{
      height: 250px;
      width: 350px;
    }
  }
  .img{
    background-size: cover;
    height: 100vh;
  }
</style>
