// 综合管理平台
<template>
  <!-- ../../assets/images/USER.png -->
  <div class="synthesizeIndex">
    <div class="synthesizeIndex-comprehensive-situational">
      <nav>综合态势</nav>
      <section>
        <div v-for="(item, index) in comprehensiveSituationalList" :key="index" class="islist">
          <img src="../../assets/images/2_07.png" alt />
          <div>{{item}}</div>
        </div>
      </section>
    </div>
    <div class="box">
      <div class="synthesizeIndex-anomalous-event">
        <nav>异常事件</nav>
        <section>
          <el-table
            height="100%"
            :data="anomalousEventData"
            style="width: 100%;border: solid 1px #c5d9f4;"
            :cell-style="cellStyle"
            :header-cell-style="headerCellTtyle"
          >
            <el-table-column prop="name" label="异常事件"></el-table-column>
            <el-table-column prop="type" label="事件类型"></el-table-column>
            <el-table-column prop="rank" label="危险级别"></el-table-column>
            <el-table-column prop="status" label="状态"></el-table-column>
            <el-table-column prop="handle" label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="text"
                  @click="handleeditAnomalousEvent(scope.$index, scope.row)"
                >编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
        </section>
      </div>
      <div class="synthesizeIndex-contingency-plan">
        <nav>应急预案</nav>
        <section>
          <el-table
             height="100%"
            :data="contingencyPlanData"
            style="width: 100%;border: solid 1px #c5d9f4;"
            :cell-style="cellStyle"
            :header-cell-style="headerCellTtyle"
          >
            <el-table-column prop="name" label="应急预案"></el-table-column>
            <el-table-column prop="time" label="最后编辑时间"></el-table-column>
            <el-table-column prop="status" label="状态"></el-table-column>
            <el-table-column prop="handle" label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="text"
                  @click="handleeditContingencyPlan(scope.$index, scope.row)"
                >编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      toptab: ["综合态势", "异常情况告警", "突发事件处理", "系统运维管理"],
      // 综合态势
      comprehensiveSituationalList: [
        "营区态势",
        "安防集成管理",
        "二维营区场景",
        "库房"
      ],
      // 异常事件
      anomalousEventData: [
        {
          name: "周界报警时间",
          type: "信号触发",
          rank: "危险",
          status: "启用"
        }
      ],
      // 应急预案
      contingencyPlanData: [
        {
          name: "消防应急预案",
          time: "1月12日",
          status: "启用"
        },
        {
          name: "消防应急预案",
          time: "1月12日",
          status: "启用"
        }
      ]
    };
  },
  mounted() {},
  methods: {
    // 异常事件
    handleeditAnomalousEvent(index, row) {
      console.log(index, row);
    },
    // 应急预案
    handleeditContingencyPlan(index, row) {
      console.log(index, row);
    },
    // 样式自定义
    cellStyle({ row, column, rowIndex, columnIndex, cell }) {
      return `text-align:center;overflow: visible;`;
    },
    headerCellTtyle({ row, rowIndex }) {
      return `text-align:center;background-color: #f5f6fa;
      font-family: SourceHanSansCN-Regular;
      font-weight: bold;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #07244c;`;
    }
  }
};
</script>