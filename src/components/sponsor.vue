<template>
<div>
  <el-carousel :interval="4000" indicator-position="none" type="card" height="300px">
    <el-carousel-item v-for="item in 1" :key="item">
      <div class="sponsor d-flex align-items-center justify-content-center flex-column">
        <img src="/static/sponsor/angular.png" style="width: 35%;" />
        <h5 style="margin: 20px; text-align: center;">{{ $t("message.sponsor.spon1") }}</h5>
      </div>
    </el-carousel-item>
    <el-carousel-item v-for="item in 1" :key="item">
      <div class="sponsor d-flex align-items-center justify-content-center flex-column">
        <img src="/static/sponsor/kmutt.png" style="width: 35%;" />
        <h5 style="margin: 20px; text-align: center;">{{ $t("message.sponsor.spon2") }}</h5>
      </div>
    </el-carousel-item>
    <el-carousel-item v-for="item in 1" :key="item">
      <div class="sponsor d-flex align-items-center justify-content-center flex-column">
        <img src="/static/sponsor/cpe.png" style="width: 35%;" />
        <h5 style="margin: 20px; text-align: center;">{{ $t("message.sponsor.spon3") }}</h5>
      </div>
    </el-carousel-item>
  </el-carousel>
  <!-- <div class="row" style="margin-top: 20px;">
    <div class="col-md-2 d-flex align-items-center justify-content-center">
      <img src="/static/sponsor/cpe.png" style="height: 80px;" />
    </div>
    <div class="col-md-2 d-flex align-items-center justify-content-center">
      <img src="/static/sponsor/kmutt.png" style="height: 80px;" />
    </div>
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
  
</div>
</template>
<script>
export default {
  name: 'sponsor'
}
</script>

<style scoped>
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