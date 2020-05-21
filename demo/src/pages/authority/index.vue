<template>
  <div class="authorityIndex">
    <div class="box">
      <div class="authorityIndex-shortcut">
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
      <div class="authorityIndex-rough">
        <nav>数据概览</nav>
        <section>
          <div class="roughList" v-for="(item, index) in roughListData" :key="index">
            <img :src="item.src" alt />
            <div class="right">
              <div>{{item.num}}</div>
              <div>{{item.name}}</div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div class="box">
      <div class="authorityIndex-multimedia">
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

      <div class="authorityIndex-lab">
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
          name: "态势配置",
          img: "系统配置_03",
          src: "",
          url: "",
          color: "background-color:#9cb3f4"
        },
        {
          name: "用户创建",
          img: "创建_03",
          src: "",
          url: "",
          color: "background-color:#9cd6f4"
        },
        {
          name: "流程配置",
          img: "流程配置_03",
          src: "",
          url: "",
          color: "background-color:#b19cf4"
        },
        {
          name: "数据主题管理",
          img: "类型_03",
          src: "",
          url: "",
          color: "background-color:#aed651"
        },
        {
          name: "数据产品制作",
          img: "产品制作统计_03",
          src: "",
          url: "",
          color: "background-color:#4cc8ab"
        },
        {
          name: "数据服务发布",
          img: "发布_03",
          src: "",
          url: "",
          color: "background-color:#f4bf9c"
        }
      ],
      multimediaData: [
        {
          room: "303房间",
          person: "王参谋",
          time: "1月12日 12:00"
        }
      ],
      labData: [{ person: "王参谋", now: "XL", apply: "XXL" }],
      roughListData: [
        {
          name: "数据服务发布",
          img: "用户_03",
          num: "1234",
          src: "",
          url: ""
        },
        {
          name: "接入设备数量",
          img: "绑定设备_03",
          num: "1234",
          src: "",
          url: ""
        },
        {
          name: "流程数量",
          img: "流程_08",
          num: "1234",
          src: "",
          url: ""
        },
        {
          name: "数据条数",
          img: "列表2_03",
          num: "1234",
          src: "",
          url: ""
        },
        {
          name: "数据主题",
          img: "类型_03",
          num: "1234",
          src: "",
          url: ""
        },
        {
          name: "数据报告",
          img: "报告-_03",
          num: "1234",
          src: "",
          url: ""
        }
      ]
    };
  },
  mounted() {
    this.shortcut.map(item => {
      item.src = this.srcimg(item.img);
    });
    this.roughListData.map(item => {
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