<template>
  <div class="header-div" style="position: fixed; z-index: 999;">
    <div class="container header-cont">
      <div class="row header-webtitle-div d-flex align-items-center">
        <div class="col-12 d-flex flex-row align-items-center header-div-padding">
          <div class="row navbar-div d-flex justify-content-center">
            <div class="container d-flex align-items-center justify-content-center">
              <nav class="nav-show">
                <ul id="navbar-nav">
                  <li class="active">
                    <a href="#" v-scroll-to="'#regis'">{{ $t("message.navbar.regis") }}</a>
                  </li>
                  <li>
                    <a href="#" v-scroll-to="'#timetable'">{{ $t("message.navbar.col1") }}</a>
                  </li>
                  <li>
                    <a href="#" v-scroll-to="'#location'">{{ $t("message.navbar.col2") }}</a>
                  </li>
                  <li>
                    <a href="#" v-scroll-to="'#faq'">{{ $t("message.navbar.col5") }}</a>
                  </li>
                  <li>
                    <a href="#" v-scroll-to="'#stopic'">{{ $t("message.navbar.col4") }}</a>
                  </li>
                  <li>
                    <a href="#" v-scroll-to="'#sponsor'">{{ $t("message.navbar.col3") }}</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <form class="form-inline my-2 my-lg-0 ml-auto p-2">
            <button class="contactbtn d-flex flex-rol align-items-center">
              <a href="https://facebook.com/unzipEvent" style="color: white; text-decoration: none;">{{ contact }}</a>
            </button>
          </form>
          <form class="form-inline my-2 my-lg-0 ml-auto p-2">
            <button
              class="lanbtn d-flex flex-rol align-items-center"
              @click="switchLocal()"
            >{{ displayLocal }}</button>
          </form>
          <nav class="nav-mb-display p-2">
            <div>
              <button class="btn hamburgerbtn" v-on:click="toggle()" type="button">
                <mdb-icon icon="ellipsis-h" style="    font-size: 1.25rem;"/>
              </button>
            </div>
          </nav>
        </div>
        <div class="row navbar-div d-flex justify-content-center nav-show2">
          <div class="container d-flex align-items-center justify-content-center">
            <nav :class="[{'show': hamburger}, 'nav-display']">
              <ul id="navbar-nav">
                <li class="active">
                  <a href="#" v-scroll-to="'#regis'" v-on:click="toggle()">
                    <mdb-icon far icon="edit" style="margin-right: 10px;"/>
                    {{ $t("message.navbar.regis") }}
                  </a>
                </li>
                <li>
                  <a href="#" v-scroll-to="'#timetable'" v-on:click="toggle()">
                    <mdb-icon icon="table" style="margin-right: 10px;"/>
                    {{ $t("message.navbar.col1") }}
                  </a>
                </li>
                <li>
                  <a href="#" v-scroll-to="'#location'" v-on:click="toggle()">
                    <mdb-icon icon="map-marker-alt" style="margin-right: 10px;"/>
                    {{ $t("message.navbar.col2") }}
                  </a>
                </li>
                <li>
                  <a href="#" v-scroll-to="'#faq'" v-on:click="toggle()">
                    <mdb-icon icon="comment-alt" style="margin-right: 10px;"/>
                    {{ $t("message.navbar.col5") }}
                  </a>
                </li>
                <li>
                  <a href="#" v-scroll-to="'#stopic'" v-on:click="toggle()">
                    <mdb-icon icon="microphone" style="margin-right: 10px;"/>
                    {{ $t("message.navbar.col4") }}
                  </a>
                </li>
                <li>
                  <a href="#" v-scroll-to="'#sponsor'" v-on:click="toggle()">
                    <mdb-icon icon="users" style="margin-right: 10px;"/>
                    {{ $t("message.navbar.col3") }}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mdbIcon } from "mdbvue";
import AnchorRouterLink from "vue-anchor-router-link";

export default {
  name: "navbar",
  components: {
    AnchorRouterLink,
    mdbIcon
  },
  data() {
    return {
      hamburger: false,
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    toggle() {
      this.hamburger = !this.hamburger;
    },
    switchLocal() {
      if (this.$i18n.locale === "th") this.$i18n.locale = "en";
      else this.$i18n.locale = "th";
    }
  },
  computed: {
    displayLocal() {
      if (this.$i18n.locale === "th") return "EN";
      else return "TH";
    },
    searchbar: function() {
      return this.$t("message.searchbar");
    },
    contact: function() {
      return this.$t("message.btn.contact");
    }
  }
};
</script>

<style scoped>
.nav-show {
  display: inherit;
}
.nav-show2 {
  display: none !important;
}
.lanbtn {
  border: solid;
  color: white;
  border-width: 1px;
  border-color: rgb(106, 106, 173);
  border-radius: 10000px;
  background-color: transparent;
  height: 38px;
  width: auto;
  padding-left: 11px;
  padding-right: 11px;
}
.contactbtn {
  border: solid;
  color: white;
  border-width: 1px;
  border-color: rgb(106, 106, 173);
  border-radius: 10000px;
  background-color: transparent;
  height: 38px;
  width: auto;
  padding-left: 11px;
  padding-right: 11px;
}
.hamburgerbtn {
  color: white;
  border-radius: 10000px;
  background-color: transparent;
  height: 38px;
  width: auto;
  padding-left: 11px;
  padding-right: 11px;
}
.contactbtn:hover {
  text-decoration: none;
  color: white;
  background-color: rgb(106, 106, 173);
}
.lanbtn:hover {
  color: white;
  background-color: rgb(106, 106, 173);
}

.hamburger {
  border: solid;
  color: #707070;
  border-width: 1px;
  border-color: #707070;
  border-radius: 4px;
  background-color: white;
  height: 38px;
  width: 42px;
  -webkit-box-shadow: 0 0 0 0 !important;
  box-shadow: 0 0 0 0 !important;
}
@media screen and (max-width: 800px) {
  .nav-display {
    overflow: hidden;
    max-height: 0;
    transition: all 0.5s;
  }
  .nav-display.show {
    max-height: 100vh;
  }

  #navbar-nav li {
    display: block;
    width: 100%;
  }
}
.header-div {
  width: 100%;
  padding: 0px 0px 0px 0px !important;
  margin: 0px 0px 0px 0px !important;
  background-color: rgba(27, 27, 56, 0.616);
  z-index: 999;
  position: fixed;
  -webkit-box-shadow: 0px 2px 10px -1px black;
  -moz-box-shadow: 0px 2px 10px -1px black;
  box-shadow: 0px 2px 10px -1px black;
}

.header-top-line {
  background-color: #e3b800;
  width: 100%;
  height: 5px;
}

.header-webtitle-div {
  width: 100%;

  padding: 0px 0px 0px 0px !important;
  margin: 0px 0px 0px 0px !important;
}

.logo {
  height: 50px;
}

.webname-txt {
  font-family: "Kanit", sans-serif;
  font-size: 24px;
  color: #5d5d5d;
  padding-bottom: 0px !important;
  margin-bottom: 0px !important;
  font-weight: bold;
  margin-left: 20px;
}

button.navbar-toggler {
  height: 38px !important;
  border-color: rgb(160, 160, 160) !important;
}
@media (max-width: 800px) {
  .header-div-padding {
    padding: 0px 0px 0px 0px;
  }
  .nav-show {
    display: none;
  }
  .nav-show2 {
    display: inherit !important;
  }
  #navbar-nav li {
    display: block;
    width: 100% !important;
    float: left;
    margin-left: 2px;
    height: 70px !important;
  }

  #navbar-nav a {
    font-size: 20px !important;
    text-align: center;
    display: block;
    padding: 3px;
    text-decoration: none;
    color: white;
    height: 38px;
    line-height: 31px;
    transition-duration: 0.3s;
  }
  .header-div {
    background-color: rgba(27, 27, 56, 0.9) !important;
  }
}

@media (max-width: 800px) {
  .golfsearch {
    display: none !important;
  }
  .nav-mb-display {
    display: inherit !important;
  }
}

@media (min-width: 801px) {
  .nav-mb-display {
    display: none !important;
  }
}

.main-body {
  background-color: #f7f7f7;
  width: 100%;
  padding: 0px 0px 0px 0px !important;
  margin: 0px 0px 0px 0px !important;
}

.navbar-div {
  background-color: transparent;
  width: 100% !important;
  margin: 0px 0px 0px 0px !important;
  padding: 0px 0px 0px 0px !important;
}

.header-cont {
  margin-bottom: 0px !important;
  padding-bottom: 0px !important;
}

ol,
ul {
  list-style: none !important;
}

#navbar-nav {
  margin-bottom: 0px !important;
  padding-bottom: 0px !important;
  padding-left: 0px !important;
}

#navbar-nav li {
  display: block;
  width: 120px;
  float: left;
  margin-left: 2px;
  height: 38px;
}

#navbar-nav a {
  font-size: 15px;
  text-align: center;
  display: block;
  padding: 3px;
  text-decoration: none;
  color: white;
  height: 38px;
  line-height: 31px;
  transition-duration: 0.3s;
}

#navbar-nav a:hover {
  background-color: rgba(50, 50, 108, 0.658);
  color: white;
  height: 38px;
  border-radius: 10000px;
}
</style>
