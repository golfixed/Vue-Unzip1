<template>
  <div>
    <el-carousel
      :interval="2000"
      indicator-position="none"
      type="card"
      arrow="never"
      class="sp-card"
    >
      <el-carousel-item v-for="item in 1" :key="item">
        <div class="sponsor d-flex align-items-center justify-content-center flex-column">
          <img src="/static/sponsor/sponsor_cpe.png" class="sp-logo">
          <h5 class="sp-name">{{ $t("message.sponsor.spon1.name") }}</h5>
          <h5 class="sp-des">{{ $t("message.sponsor.spon1.description") }}</h5>
        </div>
      </el-carousel-item>
      <el-carousel-item v-for="item in 1" :key="item">
        <div class="sponsor d-flex align-items-center justify-content-center flex-column">
          <img src="/static/sponsor/sponsor_angular.png" class="sp-logo">
          <h5 class="sp-name">{{ $t("message.sponsor.spon2.name") }}</h5>
          <h5 class="sp-des">{{ $t("message.sponsor.spon2.description") }}</h5>
        </div>
      </el-carousel-item>
      <el-carousel-item v-for="item in 1" :key="item">
        <div class="sponsor d-flex align-items-center justify-content-center flex-column">
          <img src="/static/sponsor/sponsor_kmutthatch.png" class="sp-logo">
          <h5 class="sp-name">{{ $t("message.sponsor.spon3.name") }}</h5>
          <h5 class="sp-des">{{ $t("message.sponsor.spon3.description") }}</h5>
        </div>
      </el-carousel-item>
      <el-carousel-item v-for="item in 1" :key="item">
      <div class="sponsor d-flex align-items-center justify-content-center flex-column">
        <img src="/static/sponsor/sponsor_innosoft.png" class="sp-logo" />
        <h5 class="sp-name">{{ $t("message.sponsor.spon4.name") }}</h5>
        <h5 class="sp-des">{{ $t("message.sponsor.spon4.description") }}</h5>
      </div>
      </el-carousel-item>
      <el-carousel-item v-for="item in 1" :key="item">
      <div class="sponsor d-flex align-items-center justify-content-center flex-column">
        <img src="/static/sponsor/sponsor_a2.png" class="sp-logo" />
        <h5 class="sp-name">{{ $t("message.sponsor.spon5.name") }}</h5>
        <h5 class="sp-des">{{ $t("message.sponsor.spon5.description") }}</h5>
      </div>
      </el-carousel-item>
      <el-carousel-item v-for="item in 1" :key="item">
      <div class="sponsor d-flex align-items-center justify-content-center flex-column">
        <img src="/static/sponsor/sponsor_privage.png" class="sp-logo" />
        <h5 class="sp-name">{{ $t("message.sponsor.spon6.name") }}</h5>
        <h5 class="sp-des">{{ $t("message.sponsor.spon6.description") }}</h5>
      </div>
      </el-carousel-item>
      <el-carousel-item v-for="item in 1" :key="item">
      <div class="sponsor d-flex align-items-center justify-content-center flex-column">
        <img src="/static/sponsor/sponsor_odds.png" class="sp-logo" />
        <h5 class="sp-name">{{ $t("message.sponsor.spon7.name") }}</h5>
        <h5 class="sp-des">{{ $t("message.sponsor.spon7.description") }}</h5>
      </div>
      </el-carousel-item>
    </el-carousel>
    <!-- <div
      class="row"
      style="background-color: white;
      margin-top: 20px;
    border-radius: 20px;
    padding: 10px;
    margin-left: 0px;
    margin-right: 0px;"
    >
      <div class="col-md-3 d-flex align-items-center justify-content-center">
        <img src="/static/sponsor/innosoft_logo.svg" style="width: 120px;">
      </div>
      <div class="col-md-3 d-flex align-items-center justify-content-center">
        <img src="/static/sponsor/sponsor_kmutt.png" style="height: 70px;">
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
  name: "sponsor"
};
</script>

<style scoped>
.sp-name {
  color: rgb(34, 34, 34);
  text-align: center;
  margin-top: 30px;
  font-size: 20px;
}
.sp-des {
  color: #535353;
  text-align: center;
  font-size: 16px;
  margin-bottom: 50px;
}
.sp-card {
  height: 350px;
}
.el-carousel__container {
  position: relative;
  height: 300px !important;
}
.sp-logo {
  width: 35%;
  margin-top: 50px;
}
.sp-sm-div {
  padding: 30px 0px 0px 0px;
  margin: 0px;
}

/* MOBILE SITE */
@media screen and (max-width: 425px) {
  .sp-logo {
    width: 70% !important;
    margin: 20px !important;
  }
  .sp-name {
    display: none !important;
  }
  .sp-des {
    display: none !important;
  }
  .sp-card {
    height: 185px !important;
  }
  .sp-div-height {
    position: unset !important;
    height: 300px;
  }
}

/* TABLET SITE */
@media (max-width: 768px) {
  .sp-card {
    height: 350px;
  }
  .sp-logo {
    width: 50%;
    margin: 25px;
  }
  .sp-name {
    margin-top: 10px;
    display: inherit;
  }
  .sp-des {
    display: inherit;
  }
  .sp-div-height {
    position: unset !important;
    height: 300px;
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
  -webkit-transition: -webkit-transform 0.4s ease-in-out;
  transition: -webkit-transform 0.4s ease-in-out;
  transition: transform 0.4s ease-in-out;
  transition: transform 0.4s ease-in-out, -webkit-transform 0.4s ease-in-out;
  border-radius: 20px;
  overflow: hidden;
}

.el-carousel__item--card {
  width: 50%;
  height: auto;
  -webkit-transition: -webkit-transform 0.4s ease-in-out;
  transition: -webkit-transform 0.4s ease-in-out;
  transition: transform 0.4s ease-in-out;
  transition: transform 0.4s ease-in-out, -webkit-transform 0.4s ease-in-out;
  border-radius: 20px;
  overflow: hidden;
}
.sponsor {
  width: 100%;
  height: 100%;
}
.el-carousel__item h3 {
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #ffffff;
  border-width: 1px 1px 1px 1px !important;
  border-color: #e0e0e0 !important;
  border: solid;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #ffffff;
  border-width: 1px 1px 1px 1px !important;
  border-color: #e0e0e0 !important;
  border: solid;
}
</style>