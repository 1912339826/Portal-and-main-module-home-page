<template>
  <div class="witManageIndex">
    <div class="box">
      <div class="witManageIndex-shortcut">
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
      <div class="witManageIndex-on-duty-plan">
        <nav>值班计划</nav>
        <section>
          <el-table
          height="100%"
            :data="OnDutyPlanData"
            style="width: 100%;border: solid 1px #c5d9f4;"
            :cell-style="cellStyle"
            :header-cell-style="headerCellTtyle"
          >
            <el-table-column prop="name" label="计划名称"></el-table-column>
            <el-table-column prop="people" label="编制人"></el-table-column>
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

      <div class="witManageIndex-MeetingBook">
        <nav>会议室预约情况</nav>
        <section>
          <div class="left">
            <div class="unoccupied">
              <div class="top">
                <div></div>
                <div>空余数量</div>
              </div>
              <div class="num">3</div>
            </div>

            <div class="make">
              <div class="top">
                <div></div>
                <div>预约数量</div>
              </div>
              <div class="num">5</div>
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
              <el-table-column prop="room" label="计划名称"></el-table-column>
              <el-table-column prop="people" label="编制人"></el-table-column>
              <el-table-column prop="time" label="会议时间"></el-table-column>
              <el-table-column prop="handle" label="操作" width="80">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type="text"
                    @click="handleeditMeetingBook(scope.$index, scope.row)"
                  >编辑</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </section>
      </div>
    </div>
    <div class="box">
      <div class="witManageIndex-multimedia">
        <nav>多媒体资源</nav>
        <section>
          <el-table
           height="100%"
            :data="multimediaData"
            style="width: 100%;border: solid 1px #c5d9f4;"
            :cell-style="cellStyle"
            :header-cell-style="headerCellTtyle"
          >
            <el-table-column prop="resource" label="媒体资源"></el-table-column>
            <el-table-column prop="time" label="播放时间"></el-table-column>
            <el-table-column prop="handle" label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="text"
                  @click="handleeditmultimediaPlan(scope.$index, scope.row)"
                >编辑</el-button>
                <el-button
                  size="mini"
                  type="text"
                  @click="handleeditmultimediaPlan(scope.$index, scope.row)"
                >播放</el-button>
                <el-link type="danger" @click="handleeditmultimediaPlan(scope.$index, scope.row)">删除</el-link>
              </template>
            </el-table-column>
          </el-table>
        </section>
      </div>

      <div class="witManageIndex-lab">
        <nav>实验室预约情况</nav>
        <section>
          <div class="left">
            <div class="unoccupied">
              <div class="top">
                <div></div>
                <div>空余数量</div>
              </div>
              <div class="num">3</div>
            </div>

            <div class="make">
              <div class="top">
                <div></div>
                <div>预约数量</div>
              </div>
              <div class="num">5</div>
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
              <el-table-column prop="room" label="计划名称"></el-table-column>
              <el-table-column prop="people" label="编制人"></el-table-column>
              <el-table-column prop="time" label="会议时间"></el-table-column>
              <el-table-column prop="handle" label="操作" width="80">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type="text"
                    @click="handleeditlabBook(scope.$index, scope.row)"
                  >编辑</el-button>
                </template>
              </el-table-column>
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
          name: "人员档案维护",
          img: "人员档案_03",
          src: "",
          url: "",
          color: "background-color:#4cc8ab"
        },
        {
          name: "查询科技档案",
          img: "查询条件_03",
          src: "",
          url: "",
          color: "background-color:#9e9cf4"
        },
        {
          name: "查询信函通知",
          img: "信函_03",
          src: "",
          url: "",
          color: "background-color:#67c5f4"
        },
        {
          name: "多媒体发布",
          img: "多媒体_03",
          src: "",
          url: "",
          color: "background-color:#9cb3f4"
        }
      ],
      OnDutyPlanData: [
        {
          name: "1月份计划",
          people: "王参谋"
        }
      ],
      MeetingBookData: [
        { room: "1号会议室", people: "王参谋", time: "1月12日 12:00 14:00" }
      ],
      multimediaData: [
        {
          resource: "通告通知",
          time: "1月23日 12:00  14:00"
        }
      ],
      labData: [
        { room: "1号会议室", people: "王参谋", time: "1月12日 12:00 14:00" }
      ]
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
      color: #07244c;`;
    }
  }
};
</script>