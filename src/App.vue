<template>
<body class="container-fluid main-body">
  <div id="background_wrap">
  <navbar/>
  <div id="regis" class="container">
    <div class="row d-flex align-items-center justify-content-center home">
      <div class="P1 d-flex align-items-center flex-column">
        <img src="/static/LOGO.png" class="web-logo">
        <div class="web-txt maintxt">
          <h1 class="maintxt-date">{{ $t("message.maintxt.date") }}</h1>
          <h3 class="maintxt-location">{{ $t("message.maintxt.location") }}</h3>
        </div>
        <div style="margin-top: 30px;">
          <!-- <img src="/static/regisbtn.png" class="regisbtn"/> -->
          <a href="https://register.unzip.events">
            <div class="regisbtn d-flex align-items-center justify-content-center">
              <p class="regisbtntxt">{{ $t("message.btn.regis") }}</p>
              <!-- <p  style="font-size: 15px; margin: 0;">ลงทะเบียน</p> -->
            </div>
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
      <div id="timetable"/>
    </div>
    <div class="topic-div fadeInUp">
      <textdiv :title="sec5" :title2="sec5_2"/>
      <timetable/>
    </div>
    <div class="topic-div fadeInUp">
      <textdiv :title="sec6" :title2="sec6_2"/>
      <gmaps/>
    </div>
    <div class="topic-div fadeInUp">
      <textdiv :title="sec8" :title2="sec8_2"/>
      <faq/>
    </div>

    <div class="topic-div fadeInUp">
      <textdiv :title="sec10" :title2="sec10_2"/>
      <guestspeaker/>
    </div>
    <div class="topic-div fadeInUp">
      <textdiv :title="sec9" :title2="sec9_2"/>
      <speakingtopic/>
    </div>
    <div class="topic-div sponsor fadeInUp">
      <textdiv :title="sec7" :title2="sec7_2"/>
      <sponsor/>
    </div>

    <div class="topic-div">
      <div class="row" style="    padding-right: 0px;">
        <div class="col-md-8">
          <p class="credit-left">
            All Right reserved by UNZIP#1 team.
            Designed and developed by
            <a
              class="credit-left"
              target="_blank"
              href="https://www.instagram.com/golfixed"
            >Golfixed</a>
          </p>
        </div>
        <div class="col-md-4">
          <p class="credit-right">© UNZIP 2019</p>
        </div>
      </div>
    </div>
  </div>
  </div>
</body>
</template>

<script>
import navbar from "@/components/navbar";
import timetable from "@/components/timetable";
import textdiv from "@/components/textdiv";
import gmaps from "@/components/gmaps";
import sponsor from "@/components/sponsor";
import faq from "@/components/faq";
import speakingtopic from "@/components/speakingtopic";
import guestspeaker from "@/components/guest";

export default {
  name: "App",
  components: {
    navbar,
    timetable,
    textdiv,
    gmaps,
    sponsor,
    faq,
    speakingtopic,
    guestspeaker
  },
  computed: {
    sec1: function() {
      return this.$t("message.sec1.title");
    },
    sec1des: function() {
      return this.$t("message.sec1.description");
    },
    sec2: function() {
      return this.$t("message.sec2.title");
    },
    sec2des: function() {
      return this.$t("message.sec2.description");
    },
    sec3: function() {
      return this.$t("message.sec3.title");
    },
    sec3des: function() {
      return this.$t("message.sec3.description");
    },
    sec4: function() {
      return this.$t("message.sec4.title");
    },
    sec5_2: function() {
      return this.$t("message.sec5.title2");
    },
    sec4des: function() {
      return this.$t("message.sec4.description");
    },
    sec5: function() {
      return this.$t("message.sec5.title");
    },
    sec6: function() {
      return this.$t("message.sec6.title");
    },
    sec6_2: function() {
      return this.$t("message.sec6.title2");
    },
    sec7: function() {
      return this.$t("message.sec7.title");
    },
    sec7_2: function() {
      return this.$t("message.sec7.title2");
    },
    sec8: function() {
      return this.$t("message.sec8.title");
    },
    sec8_2: function() {
      return this.$t("message.sec8.title2");
    },
    sec9: function() {
      return this.$t("message.sec9.title");
    },
    sec9_2: function() {
      return this.$t("message.sec9.title2");
    },
    sec10: function() {
      return this.$t("message.sec10.title");
    },
    sec10_2: function() {
      return this.$t("message.sec10.title2");
    }
  }
};
</script>


<style>
@import url("https://fonts.googleapis.com/css?family=Kanit");
@import "bootstrap/dist/css/bootstrap.css";
@import "bootstrap-vue/dist/bootstrap-vue.css";

::-webkit-scrollbar {
  display: none;
}

* {
  outline: 0;
  text-decoration: none;
}

.web-logo {
  width: 60%;
  margin-top: -60px;
}
@media (max-width: 425px) {
  .web-logo {
    width: 100%;
    margin-top: 35px;
  }
}
.sponsor {
  width: 100%;
}
.maintxt {
  margin-top: -100px;
}
.txt-title {
  font-family: "Kanit", sans-serif;
  font-size: 30px;
  color: white;
}
.txt-description {
  font-family: "Kanit", sans-serif;
  font-size: 20px;
  color: #8e87c0;
}

.P1 {
  width: 100%;
}

#background_wrap {
    z-index: -1;
    /* position: fixed; */
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-size: 100%;
    background-image: url('/static/BG/mainbg.png');
    background-attachment: fixed;
}

@media (max-width: 425px) {

  #background_wrap {
    z-index: -1;
    /* position: fixed; */
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-size: 100%;
    background-image: url('/static/BG/mobile-bg.png');
    background-attachment: fixed;
}
  
}
.main-body {
  width: 100%;
  margin: 0 !important;
  padding: 0px 0px 0px 0px !important;
  height: auto;
  font-family: "Kanit", sans-serif;
}
.home {
  /* background-color: green; */
  height: 100vh;
}
.web-txt {
  font-family: "Kanit", sans-serif;
  top: -50px;
  text-align: center;
  color: #dee3ea;
}
.regisbtn {
  font-family: "Kanit", sans-serif;
  color: #dee3ea;
  width: 150px;
  height: 150px;
  background-color: transparent;
  border-radius: 10000000px;
  border-color: #43445c !important;
  border-width: 5px;
  border: solid;
  transition-duration: 0.3s;
}
.regisbtntxt {
  font-size: 25px;
  margin: 0px;
  text-decoration: none;
}
.regisbtntxt:hover {
  text-decoration: none;
}
.regisbtn:hover {
  transform: scale(1.15);
  border-color: #dee3ea !important;
  text-decoration: none;
}
.regisbtn:active {
  border-color: #dee3ea !important;
}
/* MOBILE SITE HERE */
@media (max-width: 768px) {
  .topic-div {
    padding: 25px 10px 25px 10px !important;
  }
  .maintxt {
    margin-top: 0px;
  }
  .maintxt-date {
    font-size: 25px;
  }
  .maintxt-location {
    font-size: 20px;
  }
  .credit-left {
    text-align: center !important;
  }
  .credit-right {
    text-align: center !important;
  }
  .regisbtn {
    width: 110px !important;
    height: 110px !important;
  }
  .regisbtntxt {
    font-size: 19px !important;
    margin: 0px;
  }
}
.credit-left {
  color: white;
  text-align: left;
}
.credit-right {
  color: white;
  text-align: right;
}
.topic-div {
  padding: 0px 100px 0px 100px;
  height: auto;
  padding-top: 30px;
  padding-bottom: 30px;
}

/* ANIMATION CSS HERE */
.fadeInUp {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}

a:hover {
  text-decoration: none !important;
}
</style>
