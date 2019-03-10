<template>
  <div class="container" style="padding:0px;">
    <div class="row" style="display: flex; margin: 0px; column-gap: 10px;">
      <div class="row guestcard" style="margin: 0px 0px 20px 0px; padding: 0px; width: 100%;">
        <div class="col-xl-4 col-md-4 img1"></div>
        <div
          class="col-xl-8 col-md-8 d-flex align-items-center justify-content-center flex-column"
          style="padding-top: 20px;padding-bottom: 20px;"
        >
          <div>
            <div class="topic">" Dream Job
              <br>ทำงานให้ไม่เหมือนทำงาน "
            </div>
            <div class="name">คุณอู๋ Spin9 - อติชาญ เชิงชวโน</div>
          </div>
          <div class="d-flex flex-row">
            <a href="https://web.facebook.com/spin9.me/" target="_blank" class="socialbtn">
              <mdb-icon class="sicon sicon-fb" fab icon="facebook-f"/>
            </a>
            <a href="https://twitter.com/spin9" target="_blank" class="socialbtn">
              <mdb-icon class="sicon sicon-twt" fab icon="twitter"/>
            </a>
            <a href="https://www.youtube.com/user/spinnine" target="_blank" class="socialbtn">
              <mdb-icon class="sicon sicon-yt" fab icon="youtube"/>
            </a>
          </div>
        </div>
      </div>

      <!-- <div class="row guestcard" style="margin: 0px 0px 20px 0px; padding: 0px; width: 100%;">
        <div class="col-xl-4 col-md-4 img2"></div>
        <div
          class="col-xl-8 col-md-8 d-flex align-items-center justify-content-center flex-column"
          style="padding-top: 20px;padding-bottom: 20px;"
        >
          <div>
            <div class="topic">" New Technology.
              <br>New Tomorrow. "
            </div>
            <div class="name">คุณโอ๋ - วิทยา อัศวเสถียร</div>
          </div>
          <div class="d-flex flex-row">
            <a href="https://web.facebook.com/spin9.me/" class="socialbtn">
              <mdb-icon class="sicon sicon-fb" fab icon="facebook-f"/>
            </a>
            <a href="https://twitter.com/spin9" class="socialbtn">
              <mdb-icon class="sicon sicon-twt" fab icon="twitter"/>
            </a>
            <a href="https://www.youtube.com/user/spinnine" class="socialbtn">
              <mdb-icon class="sicon sicon-yt" fab icon="youtube"/>
            </a>
          </div>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
import { mdbIcon } from "mdbvue";
export default {
  name: "guestspeaker",
  components: {
    mdbIcon
  }
};
</script>

<style scoped>
.socialbtn {
  padding: 10px 15px;
  text-align: center;
  font-size: 1.5rem;
  color: rgb(77, 77, 77);
}
.sicon {
  color: rgb(133, 133, 133);
}
.sicon-fb:hover {
  color: rgb(18, 86, 145);
}
.sicon-twt:hover {
  color: rgb(54, 152, 238);
}
.sicon-yt:hover {
  color: rgb(189, 19, 19);
}
.name {
  margin: 10px;
  text-align: center;
  font-size: 1.25rem;
  color: rgb(77, 77, 77);
}
.topic {
  text-align: center;
  font-size: 2rem;
  margin: 10px;
}

@media screen and (max-width: 425px) {
  .topic {
    font-size: 1.5rem;
  }
  .name {
    font-size: 1rem;
  }
}
.guestcard {
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
  padding: 0px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.img1 {
  background: url("/static/guests/pau.jpg");
  background-position: top center;
  background-size: cover;
  height: 300px;
}
.img2 {
  background: url("/static/guests/po.jpg");
  background-position: top center;
  background-size: cover;
  height: 300px;
}
</style>
