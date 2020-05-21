<template>
  <div class="witsecurityIndex">
    <div class="box">
      <div class="witsecurityIndex-shortcut">
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
      <div class="witsecurityIndex-on-duty-plan">
        <nav>异常事件</nav>
        <section>
          <el-table
          height="100%"
            :data="OnDutyPlanData"
            style="width: 100%;border: solid 1px #c5d9f4;"
            :cell-style="cellStyle"
            :header-cell-style="headerCellTtyle"
          >
            <el-table-column prop="event" label="异常事件"></el-table-column>
            <el-table-column prop="time" label="发生时间"></el-table-column>
            <el-table-column prop="rank" label="危险级别"></el-table-column>
            <el-table-column prop="handle" label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="text"
                  @click="handleeditOnDutyPlan(scope.$index, scope.row)"
                >编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
        </section>
      </div>

      <div class="witsecurityIndex-MeetingBook">
        <nav>待分配权限人员清单</nav>
        <section>
          <div class="left">
            <div class="unoccupied">
              <div class="top">
                <div></div>
                <div>新加数量</div>
              </div>
              <div class="num">32人</div>
            </div>

            <div class="make">
              <div class="top">
                <div></div>
                <div>删除数量</div>
              </div>
              <div class="num">30人</div>
            </div>
          </div>
          <div class="right">
            <el-table
             height="100%"
              :data="MeetingBookData"
              style="width: 100%;border: solid 1px #c5d9f4;"
              :cell-style="cellStyle"
              :header-cell-style="headerCellTtyle"
            >
              <el-table-column prop="name" label="单位"></el-table-column>
              <el-table-column prop="num" label="人数"></el-table-column>
            </el-table>
          </div>
        </section>
      </div>
    </div>
    <div class="box">
      <div class="witsecurityIndex-multimedia">
        <nav>待处理视频监控</nav>
        <section>
          <el-table
           height="100%"
            :data="multimediaData"
            style="width: 100%;border: solid 1px #c5d9f4;"
            :cell-style="cellStyle"
            :header-cell-style="headerCellTtyle"
          >
            <el-table-column prop="name" label="异常事件"></el-table-column>
            <el-table-column prop="ip" label="IP "></el-table-column>
            <el-table-column prop="status" label="状态"></el-table-column>
            <el-table-column prop="handle" label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="text"
                  @click="handleeditmultimediaPlan(scope.$index, scope.row)"
                >编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
        </section>
      </div>

      <div class="witsecurityIndex-lab">
        <nav>待分配权限车辆清单</nav>
        <section>
          <div class="left">
            <div class="unoccupied">
              <div class="top">
                <div></div>
                <div>新加公车</div>
              </div>
              <div class="num">32辆</div>
            </div>

            <div class="make">
              <div class="top">
                <div></div>
                <div>新加私家车</div>
              </div>
              <div class="num">30辆</div>
            </div>
          </div>
          <div class="right">
            <el-table
             height="100%"
              :data="labData"
              style="width: 100%;border: solid 1px #c5d9f4;"
              :cell-style="cellStyle"
              :header-cell-style="headerCellTtyle"
            >
              <el-table-column prop="name" label="单位"></el-table-column>
              <el-table-column prop="num" label="辆数"></el-table-column>
            </el-table>
          </div>
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
          name: "视频监控点位维护",
          img: "点位总览_03",
          src: "",
          url: "",
          color: "background-color:#9cb3f4"
        },
        {
          name: "人员门禁权限维护",
          img: "人员变动分析-(2)_03",
          src: "",
          url: "",
          color: "background-color:#b19cf4"
        },
        {
          name: "车辆门禁权限维护",
          img: "道闸_03",
          src: "",
          url: "",
          color: "background-color:#4cc8ab"
        },
        {
          name: "周界防区维护",
          img: "防区_03",
          src: "",
          url: "",
          color: "background-color:#6cbcf5"
        }
      ],
      OnDutyPlanData: [
        {
          event: "周界报警时间",
          time: "12:00",
          rank: "危险"
        }
      ],
      MeetingBookData: [{ name: "1所", num: "6" }],
      multimediaData: [
        {
          name: "营门左侧摄像头",
          ip: "129.143.21.3",
          status: "离线"
        }
      ],
      labData: [{ name: "1所", num: "6" }]
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
      letter-spacing: 0px;
      font-size: 0.833vw;
      color: #07244c;`;
    }
  }
};
</script>