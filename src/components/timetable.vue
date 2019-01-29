<template>
  <p class="txt-description" style="margin-top: 25px;">
    <el-table
      class="table-div"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="time"
        label="Time"
      >
      </el-table-column>
      <el-table-column
        prop="activity"
        label="Activity"
      >
      </el-table-column>
    </el-table>
  </p>
</template>

<script>
export default {
  name: 'timetable',
  data() {
    return {
      tableData: [{
        time: '09.00',
        activity: 'Registration & Opening Ceremony',
      },
      {
        time: '09.50',
        activity: 'Guest Speaker Session',
      },
      {
        time: '12.00',
        activity: 'Launch Break',
      },
      {
        time: '14.00',
        activity: 'Speaker Session',
      },
      {
        time: '16.10',
        activity: 'Connection Activity',
      }
      ]}
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
  text-align: center;
  font-size: 20px;
  position: relative;
  word-wrap: normal;
  text-overflow: ellipsis;
  vertical-align: middle;
  width: 100%;
  box-sizing: border-box
}

.el-table .cell {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  white-space: normal;
  word-break: break-all;
  line-height: 23px;
  text-align: center;
  font-size: 18px;
}
</style>
