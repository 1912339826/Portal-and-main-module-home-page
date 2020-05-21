<template>
  <div class="witsafeguardIndex">
    <div class="box">
      <div class="witsafeguardIndex-shortcut">
        <nav>快捷方式</nav>
        <section>
          <div
            class="shortcutList"
            v-for="(item, index) in shortcut"
            :key="index"
            :style="item.color"
          >
            <img :src="item.src" alt />
            <div>{{item.name}}</div>
          </div>
        </section>
      </div>
    </div>
    <div class="box">
      <div class="witsafeguardIndex-on-duty-plan">
        <nav>维修登记</nav>
        <section>
          <el-table
          height="100%"
            :data="OnDutyPlanData"
            style="width: 100%;border: solid 1px #c5d9f4;"
            :cell-style="cellStyle"
            :header-cell-style="headerCellTtyle"
          >
            <el-table-column prop="event" label="维修事项"></el-table-column>
            <el-table-column prop="person" label="报修人"></el-table-column>
            <el-table-column prop="time" label="报修时间"></el-table-column>
            <el-table-column prop="handle" label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="text"
                  @click="handleeditOnDutyPlan(scope.$index, scope.row)"
                >办理</el-button>
              </template>
            </el-table-column>
          </el-table>
        </section>
      </div>

      <div class="witsafeguardIndex-MeetingBook">
        <nav>保障设施概况</nav>
        <section>
          <div class="top">
            <div class="list">
              <img src="../../assets/images/排队_03.png" alt />
              <div class="right">
                <div>
                  <span>3</span> 人
                </div>
                <div>理发室排队人数</div>
              </div>
            </div>
            <div class="list">
              <img src="../../assets/images/排队信息_03.png" alt />
              <div class="right">
                <div>
                  <span>5</span> 辆
                </div>
                <div>洗车房排队人数</div>
              </div>
            </div>
          </div>
          <div class="bottom">
            <div class="list">
              <img src="../../assets/images/车位-私_03.png" alt />
              <div class="right">
                <div>
                  <span>32</span>
                </div>
                <div>私家车停车场空余</div>
              </div>
            </div>
            <div class="list">
              <img src="../../assets/images/车位-军_03.png" alt />
              <div class="right">
                <div>
                  <span>23</span>
                </div>
                <div>军车停车场空余</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div class="box">
      <div class="witsafeguardIndex-multimedia">
        <nav>住房登记</nav>
        <section>
          <el-table
          height="100%"
            :data="multimediaData"
            style="width: 100%;border: solid 1px #c5d9f4;"
            :cell-style="cellStyle"
            :header-cell-style="headerCellTtyle"
          >
            <el-table-column prop="room" label="房间"></el-table-column>
            <el-table-column prop="person" label="住宿人 "></el-table-column>
            <el-table-column prop="time" label="住宿时间 "></el-table-column>
            <el-table-column prop="handle" label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="text"
                  @click="handleeditmultimediaPlan(scope.$index, scope.row)"
                >退房</el-button>
                <el-button
                  size="mini"
                  type="text"
                  @click="handleeditmultimediaPlan(scope.$index, scope.row)"
                >续住</el-button>
              </template>
            </el-table-column>
          </el-table>
        </section>
      </div>

      <div class="witsafeguardIndex-lab">
        <nav>被装调号</nav>
        <section>
          <el-table
          height="100%"
            :data="labData"
            style="width: 100%;border: solid 1px #c5d9f4;"
            :cell-style="cellStyle"
            :header-cell-style="headerCellTtyle"
          >
            <el-table-column prop="person" label="调号申请人"></el-table-column>
            <el-table-column prop="now" label="现号 "></el-table-column>
            <el-table-column prop="apply" label="申请调号 "></el-table-column>
            <el-table-column prop="handle" label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="text"
                  @click="handleeditmultimediaPlan(scope.$index, scope.row)"
                >办理</el-button>
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
      shortcut: [
        {
          name: "被装调号",
          img: "调换_03",
          src: "",
          url: "",
          color: "background-color:#9cb3f4"
        },
        {
          name: "维修登记",
          img: "登记_03",
          src: "",
          url: "",
          color: "background-color:#b19cf4"
        },
        {
          name: "就餐预约",
          img: "订餐_03",
          src: "",
          url: "",
          color: "background-color:#4cc8ab"
        }
      ],
      OnDutyPlanData: [
        {
          event: "办公楼303房间空调漏水",
          person: "王参谋",
          time: "2019-01-01 12：00"
        }
      ],
      multimediaData: [
        {
          room: "303房间",
          person: "王参谋",
          time: "1月12日 12:00"
        }
      ],
      labData: [{ person: "王参谋", now: "XL", apply: "XXL" }]
    };
  },
  mounted() {
    this.shortcut.map(item => {
      item.src = this.srcimg(item.img);
    });
  },
  methods: {
    // 塞进去图片
    srcimg(img) {
      return require(`../../assets/images/${img}.png`);
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
      font-size: 0.833vw;
      letter-spacing: 0px;
      color: #07244c;`;
    }
  }
};
</script>

<style lang="less" scoped>

</style>