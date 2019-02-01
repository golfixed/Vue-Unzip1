<template>
<div>
  <el-carousel :interval="4000" indicator-position="none" type="card" class="sp-card">
    <el-carousel-item v-for="item in 1" :key="item">
      <div class="sponsor d-flex align-items-center justify-content-center flex-column">
        <img src="/static/sponsor/sponsor_cpe.png" class="sp-logo" />
        <h5 class="sp-name">{{ $t("message.sponsor.spon1.name") }}</h5>
        <h5 class="sp-des">{{ $t("message.sponsor.spon1.description") }}</h5>
      </div>
    </el-carousel-item>
    <el-carousel-item v-for="item in 1" :key="item">
      <div class="sponsor d-flex align-items-center justify-content-center flex-column">
        <img src="/static/sponsor/sponsor_angular.png" class="sp-logo" />
        <h5 class="sp-name">{{ $t("message.sponsor.spon2.name") }}</h5>
        <h5 class="sp-des">{{ $t("message.sponsor.spon2.description") }}</h5>
      </div>
    </el-carousel-item>
    <el-carousel-item v-for="item in 1" :key="item">
      <div class="sponsor d-flex align-items-center justify-content-center flex-column">
        <img src="/static/sponsor/sponsor_kmutthatch.png" class="sp-logo" />
        <h5 class="sp-name">{{ $t("message.sponsor.spon3.name") }}</h5>
        <h5 class="sp-des">{{ $t("message.sponsor.spon3.description") }}</h5>
      </div>
    </el-carousel-item>
  </el-carousel>
  <!-- <div class="row" style="margin-top: 20px;">
<<<<<<< HEAD
    <div class="col-md-2 d-flex align-items-center justify-content-center">
      <img src="/static/sponsor/cpe.png" style="height: 80px;" />
=======
    <div class="col-md-4 d-flex align-items-center justify-content-around sp-sm-div">
      <img src="/static/sponsor/sponsor_kmutt.png" style="height: 100px;" />
      <img src="/static/sponsor/sponsor_kmutt.png" style="height: 100px;" />
>>>>>>> a1f60a2aeb84612cd40c14d55fcdd95109130f04
    </div>
    <div class="col-md-4 d-flex align-items-center justify-content-around sp-sm-div">
      <img src="/static/sponsor/sponsor_kmutt.png" style="height: 100px;" />
      <img src="/static/sponsor/sponsor_kmutt.png" style="height: 100px;" />
    </div>
<<<<<<< HEAD
    <div class="col-md-2 d-flex align-items-center justify-content-center">
      <img src="/static/sponsor/angular.png" style="height: 80px;" />
    </div>
    <div class="col-md-2 d-flex align-items-center justify-content-center">
      <img src="/static/sponsor/cpe.png" style="height: 80px;" />
    </div>
    <div class="col-md-2 d-flex align-items-center justify-content-center">
      <img src="/static/sponsor/kmutt.png" style="height: 80px;" />
    </div>
    <div class="col-md-2 d-flex align-items-center justify-content-center">
      <img src="/static/sponsor/angular.png" style="height: 80px;" />
    </div>
  </div> -->
=======
    <div class="col-md-4 d-flex align-items-center justify-content-around sp-sm-div">
      <img src="/static/sponsor/sponsor_kmutt.png" style="height: 100px;" />
      <img src="/static/sponsor/sponsor_kmutt.png" style="height: 100px;" />
    </div> -->

  <!-- </div> -->
>>>>>>> a1f60a2aeb84612cd40c14d55fcdd95109130f04
  
</div>
</template>
<script>
export default {
  name: 'sponsor'
}
</script>

<style scoped>

.sp-name {
  color: rgb(34, 34, 34);
  text-align: center;
  margin-top: 20px;
  font-size: 20px;
}
.sp-des {
  color: #535353;
  text-align: center;
  font-size: 16px;
}
.sp-card {
  height: 300px;
}
.el-carousel__container {
    position: relative;
    height: 300px !important;
}
.sp-logo {
  width: 35%;
}
.sp-sm-div{
  padding: 30px 0px 0px 0px;
  margin: 0px;
}
@media (max-width: 768px) {
  .sp-logo {
  width: 70%;
  }
  .sp-name {
    display: none;
  }
  .sp-des {
    display: none;
  }
  .sp-card {
  height: auto;
  }
  .el-carousel__container {
    height: 182px !important;
}
}

.el-carousel__item {
  border-radius: 20px;
  overflow: hidden;
  width: 100%;
  display: inline-block;
  overflow: hidden;
  z-index: 0;
}

.el-carousel__item.is-active {
  z-index: 2;
  border-radius: 20px;
  overflow: hidden;
}

.el-carousel__item.is-animating {
  -webkit-transition: -webkit-transform .4s ease-in-out;
  transition: -webkit-transform .4s ease-in-out;
  transition: transform .4s ease-in-out;
  transition: transform .4s ease-in-out, -webkit-transform .4s ease-in-out;
  border-radius: 20px;
  overflow: hidden;
}

.el-carousel__item--card {
  width: 50%;
  -webkit-transition: -webkit-transform .4s ease-in-out;
  transition: -webkit-transform .4s ease-in-out;
  transition: transform .4s ease-in-out;
  transition: transform .4s ease-in-out, -webkit-transform .4s ease-in-out;
  border-radius: 20px;
  overflow: hidden;
}
  .sponsor{
    width: 100%;
    height: 100%;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>