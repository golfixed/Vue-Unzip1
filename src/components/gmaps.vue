<template>
  <div
    class="row"
    style="overflow: hidden; border-radius: 20px; background-color: white; padding:0px;margin-left: 0px;
    margin-right: 0px;   box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);"
  >
    <div class="col-xl-8" style="padding:0px;">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d969.2757743140191!2d100.4932753292342!3d13.651492102618446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a25190ed099b%3A0x7dd390d43a0854da!2z4Lit4Liy4LiE4Liy4Lij4LmA4Lij4Li14Lii4LiZ4Lij4Lin4LihIDIg4LmB4LiC4Lin4LiHIOC4muC4suC4h-C4oeC4lCDguYDguILguJUg4LiX4Li44LmI4LiH4LiE4Lij4Li4IOC4geC4o-C4uOC4h-C5gOC4l-C4nuC4oeC4q-C4suC4meC4hOC4oyAxMDE0MA!5e0!3m2!1sth!2sth!4v1548779076239"
        width="100%"
        height="300"
        frameborder="0"
        style="border:0"
        allowfullscreen
      ></iframe>
      <div id="faq"/>
    </div>
    <div
      class="col-xl-4 d-flex justify-content-center align-items-center flex-column"
      style="padding: 20px 15px;"
    >
      <div style="font-size: 1.5rem; padding: 10px 0px; color: rgb(77, 77, 77);">
        <mdb-icon icon="map-marker-alt"/>
      </div>
      <div style="text-align: center;">
        <p style="font-size: 1.25rem; margin:0px; padding:0px;">{{ $t("message.location.room") }}</p>
        <p style="font-size: 0.9rem; margin:0px; padding:0px; color: rgb(77, 77, 77);"> 
        <br>{{ $t("message.location.building") }}
        <br>{{ $t("message.location.location") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mdbIcon } from "mdbvue";
export default {
  name: "GoogleMap",
  components: {
    mdbIcon
  }
};
</script>