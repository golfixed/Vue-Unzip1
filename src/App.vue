<template>
  <body class="container-fluid main-body">
    <navbar/>
    <div  id="regis" class="container" style="padding-bottom: 40px;">
      <div class="row d-flex align-items-center justify-content-center  home">
        <div class="P1 d-flex align-items-center flex-column">
          <img src="/static/LOGO.png"  style="width: 60%; margin-top: -100px" />
          <div class="web-txt maintxt">
            <h1 class="maintxt-date">{{ $t("message.maintxt.date") }}</h1>
            <h3 class="maintxt-location">{{ $t("message.maintxt.location") }}</h3>
          </div>
          <div style="margin-top: 40px;">
            <!-- <img src="/static/regisbtn.png" class="regisbtn"/> -->
            <a href="https://www.eventpop.me/e/5037-unzipevent">
            <button class="regisbtn">
              <p style="font-size: 25px; margin: 0;">{{ $t("message.btn.regis") }}</p>
              <!-- <p  style="font-size: 15px; margin: 0;">ลงทะเบียน</p> -->
              </button>
            </a>
          </div>
        </div>
      </div>
      <div class="topic-div">
        <textdiv :title="sec1" :description="sec1des"/>
      </div>
      <div class="topic-div">
        <textdiv :title="sec2" :description="sec2des"/>
      </div>
      <div class="topic-div">
        <textdiv :title="sec3" :description="sec3des"/>
      </div>
      <div class="topic-div">
        <textdiv :title="sec4" :description="sec4des"/>
      </div>
      <div class="topic-div">
        <textdiv :title="sec5" id="timetable" />
        <timetable/>
      </div>
      <div class="topic-div">
        <textdiv :title="sec6" id="location" />
        <gmaps/>
      </div>
      <div class="topic-div sponsor">
        <textdiv :title="sec7" id="sponsor" />
        <sponsor/>
      </div>
      <div class="topic-div">
        <textdiv :title="sec8" id="faq" />
        <faq/>
      </div>
    </div>

  </body>
</template>

<script>
import navbar from '@/components/navbar'
import timetable from '@/components/timetable'
import textdiv from '@/components/textdiv'
import gmaps from '@/components/gmaps'
import sponsor from '@/components/sponsor'
import faq from '@/components/faq'

export default {
  name: 'App',
  components: {
    navbar,
    timetable,
    textdiv,
    gmaps,
    sponsor,
    faq
  },
  computed: {
    sec1: function () {
    return this.$t('message.sec1.title')
    },
    sec1des: function () {
    return this.$t('message.sec1.description')
    },
    sec2: function () {
    return this.$t('message.sec2.title')
    },
    sec2des: function () {
    return this.$t('message.sec2.description')
    },
    sec3: function () {
    return this.$t('message.sec3.title')
    },
    sec3des: function () {
    return this.$t('message.sec3.description')
    },
    sec4: function () {
    return this.$t('message.sec4.title')
    },
    sec4des: function () {
    return this.$t('message.sec4.description')
    },
    sec5: function () {
    return this.$t('message.sec5.title')
    },
    sec6: function () {
    return this.$t('message.sec6.title')
    },
    sec7: function () {
    return this.$t('message.sec7.title')
    },    
    sec8: function () {
    return this.$t('message.sec8.title')
    },
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Kanit');
@import 'bootstrap/dist/css/bootstrap.css';
@import 'bootstrap-vue/dist/bootstrap-vue.css';
.sponsor{
  width: 100%;
}
.maintxt{
  margin-top: -100px;
}
.txt-title{
  font-family: 'Kanit', sans-serif;
  font-size: 30px;
  color: white;
}
.txt-description{
  font-family: 'Kanit', sans-serif;
  font-size: 20px;
  color: #8E87C0;
}

.P1{
  width:100%;
}
.main-body {
    background-image: url(/static/BG/mainbg.png);
    background-size: cover;
    background-position: center top;
    background-attachment: fixed;
    width: 100%;
    margin: 0 !important;
    padding: 0px 0px 0px 0px !important;
    height: auto;
    font-family: 'Kanit', sans-serif;
}
.home{
  /* background-color: green; */
  height: 100vh;
}
.web-txt{
  font-family: 'Kanit', sans-serif;
  top: -50px;
  text-align: center;
  color: #DEE3EA;
}
.regisbtn{
  font-family: 'Kanit', sans-serif;
  color: #DEE3EA;
  width: 150px;
  height: 150px;
  background-color: transparent;
  border-radius: 10000000px;
  border-color: #43445C !important;
  border-width: 5px;
  transition-duration: 0.3s;
}
.regisbtn:hover {
  transform: scale(1.15);
  border-color: #DEE3EA !important;
}
.regisbtn:active {
  border-color: #DEE3EA !important;
}
/* MOBILE SITE HERE */
@media (max-width: 425px){
  .topic-div{
    padding: 0px 30px 0px 30px !important;
  }
  .maintxt{
    margin-top: 0px;
  }
  .maintxt-date{
    font-size: 25px;
  }
  .maintxt-location{
    font-size: 20px;
  }
}
.topic-div{
  padding: 0px 100px 0px 100px;
  height: auto;
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>
