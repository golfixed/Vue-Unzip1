<template >
  <body class="container-fluid main-body">
    <navbar/>
    <div class="container">
      <div class="row d-flex align-items-center justify-content-center  home">
        <div class="P1 d-flex align-items-center flex-column">
          <img src="/static/LOGO.png"  style="width: 60%; margin-top: -100px" />
          <div class="web-txt" style=" margin-top: -100px;">
            <h1>March 16, 2019</h1>
            <h3>King Mongkut's University of Technology Thonburi</h3>
          </div>
          <div style="margin-top: 40px;">
            <!-- <img src="/static/regisbtn.png" class="regisbtn"/> -->
            <a href="https://www.eventpop.me/e/5037-unzipevent">
            <button class="regisbtn">
              <p style="font-size: 30px; margin: 0;">Register</p>
              <!-- <p  style="font-size: 15px; margin: 0;">ลงทะเบียน</p> -->
              </button>
            </a>
          </div>
        </div>
      </div>
      <div class="topic-div">
        <h2 class="txt-title">
          What is UNZIP?
        </h2>
        <p  class="txt-description">
          UNZIP is an event which is open for those who interested in sharing their ideas, knowledges or experiences to propose their topics. The proposed topic does not have to be serious or even related to computer or technology things. You can come either as a group or individual. If you want to share something, just come.
        </p>
      </div>
     <div class="topic-div">
        <h2 class="txt-title">
          Objective
        </h2>
        <p  class="txt-description">
          We want UNZIP to become an idea-sharing space, which everyone can meet and exchange their ideas. They can find and talk to those with similar interests. We also want to stimulate all attendee’s curiosity and their enthusiasm to learn new things.
        </p>
      </div>
     <div class="topic-div">
        <h2 class="txt-title">
          Want to become a speaker in UNZIP?
        </h2>
        <p  class="txt-description">
          We are accepting proposals for the topic until Feb 26, 2019. The proposed topic must not be contrary to the law or in high risk to become so. The speaker must be able to cover the topic in 25 minutes speaking time. The speaker can speak in either Thai or English. 
        </p>
      </div>
     <div class="topic-div">
        <h2 class="txt-title">
          Who can attend this event?
        </h2>
        <p  class="txt-description">
          All KMUTT students, staffs and everyone who are interested in this event.
        </p>
    </div>
     <div class="topic-div">
        <h2 class="txt-title">
          Time Table
        </h2>
        <timetable/>
    </div>


    </div>

  </body>
</template>

<script>
import navbar from '@/components/navbar'
import timetable from '@/components/timetable'

export default {
  name: 'App',
  components: {
    navbar,
    timetable
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Aleo|Roboto');
@import 'bootstrap/dist/css/bootstrap.css';
@import 'bootstrap-vue/dist/bootstrap-vue.css';

.txt-title{
  font-family: 'Aleo', serif;
  font-size: 30px;
  color: white;
}
.txt-description{
  font-family: 'Roboto', sans-serif;
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
}
.home{
  /* background-color: green; */
  width: 100%;
  height: 100vh;
}
.web-txt{
  font-family: 'Aleo', serif;
  top: -50px;
  text-align: center;
  color: #DEE3EA;
}
.regisbtn{
  font-family: 'Aleo', serif;
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
.topic-div{
  padding: 0px 100px 0px 100px;
  height: auto;
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>
