<template>
<div style="  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);">
  <p class="txt-description" style="margin-top: 25px;">
    <el-table
      class="table-div"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="time"
        :label="time"
      >
      </el-table-column>
      <el-table-column
        prop="activity"
        :label="activity"
      >
      </el-table-column>
      
    </el-table>

  </p>
  <div id="location" />

</div>
</template>

<script>
export default {
  name: 'timetable',
  data() {
    return {
      tableData: [{
        time: '09.00',
        activity: this.$t('message.timetable.act.a1'),
      },
      {
        time: '09.50',
        activity: this.$t('message.timetable.act.a2'),
      },
      {
        time: '12.00',
        activity: this.$t('message.timetable.act.a3'),
      },
      {
        time: '14.00',
        activity: this.$t('message.timetable.act.a4'),
      },
      {
        time: '16.10',
        activity: this.$t('message.timetable.act.a5'),
      }
      ]}
  },
  computed: {
    time: function () {
      return this.$t('message.timetable.title')
    },
    activity: function () {
      return this.$t('message.timetable.activity')
    }
  }
}
</script>

<style>
.table-div{
    width: 100%;
    border-radius: 20px;
    overflow: hidden;
}

.el-table th>.cell {
  font-family: 'Kanit', sans-serif;
  text-align: center;
  font-size: 17px;
  position: relative;
  word-wrap: normal;
  text-overflow: ellipsis;
  vertical-align: middle;
  width: 100%;
  box-sizing: border-box
}

.el-table .cell {
  font-family: 'Kanit', sans-serif;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  white-space: normal;
  word-break: break-all;
  line-height: 17px;
  text-align: center;
  font-size: 17px;
}
</style>
