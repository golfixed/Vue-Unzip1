<template>
  <div style="overflow: hidden; border-radius: 20px;   box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);">
    <el-collapse accordion>

      <el-collapse-item name="1">
        <template slot="title" class="up">
          <p class="txt-question"> {{ $t("message.faq.question1.q") }}</p>
        </template>
        <p class="txt-answer down">{{ $t("message.faq.question1.a") }}</p>
      </el-collapse-item>

      <el-collapse-item name="2">
        <template slot="title">
          <p class="txt-question"> {{ $t("message.faq.question2.q") }} </p>
        </template>
        <p class="txt-answer">{{ $t("message.faq.question2.a") + 'facebook.com/unzipEvent'}}
          
        </p>
      </el-collapse-item>

      <el-collapse-item name="3">
        <template slot="title">
          <p class="txt-question"> {{ $t("message.faq.question3.q") }} </p>
        </template>
        <p class="txt-answer">{{ $t("message.faq.question3.a") }}</p>
      </el-collapse-item>

      <el-collapse-item name="4">
        <template slot="title">
          <p class="txt-question"> {{ $t("message.faq.question4.q") }} </p>
        </template>
        <p class="txt-answer">{{ $t("message.faq.question4.a") }}</p>
      </el-collapse-item>

    </el-collapse>
    <div id="stopic" />
  </div>
</template>

<script>
export default {
  name: 'faq'
}
</script>

<style scoped>
.up:hover > .down{
  height: 100vh;
  margin: 10px;
  transition: all 1s;
}
.txt-question{
  margin: 10px;
  font-family: 'Kanit', sans-serif;
  font-size: 17px;
  color: #434547;
}
.txt-answer{
  margin: 10px;
  font-family: 'Kanit', sans-serif;
  font-size: 15px;
  color: #606266;
  transition: all 1s;
}
.el-collapse-item__header {

  height: 60px !important;

}
</style>
