// 信息门户
<template>
  <!-- ../../assets/images/USER.png -->
  <div class="portalIndex">
    <div class="portalIndex-top">
      <div class="portal-statisticaldata">
        <div class="datachild">
          <nav>入住人数</nav>
          <section>
            <img src="../../assets/images/1_40.gif" alt />
            <span style="color: #b0c718;">120</span>
          </section>
        </div>
        <span class="slicer"></span>
        <div class="datachild">
          <nav>空余床位</nav>
          <section>
            <img src="../../assets/images/1_42.gif" alt />
            <span style="color: #b0c718;">10</span>
          </section>
        </div>
        <span class="slicer"></span>
        <div class="datachild">
          <nav>理发排队人数</nav>
          <section>
            <img src="../../assets/images/1_44.gif" alt />
            <span style="color: #9741cc;">6</span>
          </section>
        </div>
        <span class="slicer"></span>
        <div class="datachild">
          <nav>洗车房排队车辆</nav>
          <section>
            <img src="../../assets/images/1_46.gif" alt />
            <span style="color: #13a16d; ">8</span>
          </section>
        </div>
        <span class="slicer"></span>
        <div class="datachild">
          <nav>充电桩总数</nav>
          <section>
            <img src="../../assets/images/1_48.gif" alt />
            <span style="color: #1756c2;">112</span>
          </section>
        </div>
        <span class="slicer"></span>
        <div class="datachild">
          <nav>空余充电桩总数</nav>
          <section>
            <img src="../../assets/images/1_48.gif" alt />
            <span style="color: #1756c2;">118</span>
          </section>
        </div>
        <span class="slicer"></span>
        <div class="datachild">
          <nav>军车空余车位</nav>
          <section>
            <img src="../../assets/images/1_52.gif" alt />
            <span style="color: #1ab6d9;">15</span>
          </section>
        </div>
        <span class="slicer"></span>
        <div class="datachild">
          <nav>私家车空余车位</nav>
          <section>
            <img src="../../assets/images/1_54.gif" alt />
            <span style="color: #1ab6d9;">6</span>
          </section>
        </div>
      </div>
      <div class="portal-usermsg">
        <div class="usermsgleft">
          <img src="../../assets/images/USER.png" alt class="userimg" />
          <div class="nameandhandle">
            <span>张某某[zhanghao]</span>
            <div>
              <img src="../../assets/images/1_37.gif" alt class="active" />
              <i>修改密码</i>
            </div>
            <div>
              <img src="../../assets/images/1_58.gif" alt class="active" />
              <i>退出系统</i>
            </div>
          </div>
        </div>
        <span class="usermsgisolator"></span>
        <div class="usermsgright">
          <div>值班首长:李某某</div>
          <div>值班处长:无</div>
          <div>值班员:张某某</div>
        </div>
      </div>
    </div>

    <section class="box">
      <div class="portalIndex-visitorapply">
        <nav class="visitorapplytitle">
          <div class="titleleft">访客预约</div>
          <div class="titleright">来访预约总数:2</div>
        </nav>
        <section class="visitorapplycontent">
          <div class="visitorapplylist" v-for="(item, index) in 2" :key="index">
            <img src="../../assets/images/visitor.png" alt />
            <div class="content">
              <div>访客单位:某某某单位</div>
              <div>访客联系人:张某某</div>
              <div>联系电话:11111111111</div>
              <div>来访事项:办事</div>
            </div>
            <div class="visitorapplybutton">审批</div>
          </div>
        </section>
      </div>

      <div class="portalIndex-task">
        <nav class="tasktitle">
          <div>参与的项目/任务列表</div>
        </nav>
        <section class="tasklist">
          <el-table
           height="100%"
            :data="taskData"
            style="width: 100%;border: solid 1px #c5d9f4;"
            :cell-style="cellStyle"
            :header-cell-style="headerCellTtyle"
          >
            <el-table-column prop="name" label="项目名称"></el-table-column>
            <el-table-column prop="type" label="项类型"></el-table-column>
            <el-table-column prop="phases" label="项目阶段"></el-table-column>
            <el-table-column prop="bagin" label="开始日期"></el-table-column>
            <el-table-column prop="end" label="结束日期"></el-table-column>
            <el-table-column prop="functionary" label="负责人"></el-table-column>
          </el-table>
        </section>
      </div>

      <div class="portalIndex-shortcut">
        <nav>
          <div>快捷功能</div>
        </nav>
        <section>
          <div>
            <img src="../../assets/images/1_73.gif" alt />
            <span>请假</span>
          </div>
          <div>
            <img src="../../assets/images/1_75.gif" alt />
            <span>请车</span>
          </div>
          <div>
            <img src="../../assets/images/1_77.gif" alt />
            <span>会议预约</span>
          </div>
          <div>
            <img src="../../assets/images/1_79.gif" alt />
            <span>实验室预约</span>
          </div>
          <div>
            <img src="../../assets/images/1_89.gif" alt />
            <span>订餐预约</span>
          </div>
          <div>
            <img src="../../assets/images/1_90.gif" alt />
            <span>维修申请</span>
          </div>
          <div>
            <img src="../../assets/images/1_03.png" alt />
            <span>个人网盘</span>
          </div>
        </section>
      </div>
    </section>

    <section class="box">
      <div class="portalIndex-assess">
        <nav>项目评估预警</nav>
        <section>
          <div>
            进度延期:
            <span>30</span>天
          </div>
          <div>
            经费超支:
            <span>300</span>万
            <i>超</i>
            <span>20%</span>
          </div>
          <div>
            外协单位评估:
            <span>2</span>级(较低风险)
          </div>
          <div>
            人员评估指标:
            <span>90%</span>
          </div>
        </section>
      </div>

      <div class="portalIndex-booking">
        <nav>今日会议室预约</nav>
        <section>
          <el-table
            height="100%"
            :data="bookingData"
            style="width: 100%;border: solid 1px #c5d9f4;"
            :cell-style="cellStyle"
            :header-cell-style="headerCellTtyle"
          >
            <el-table-column prop="room" label="会议室"></el-table-column>
            <el-table-column prop="time" label="预约时间" width="180"></el-table-column>
            <el-table-column prop="staff" label="预约人"></el-table-column>
          </el-table>
        </section>
      </div>
      <div class="portalIndex-booking">
        <nav>今日实验室预约</nav>
        <section>
          <el-table
            height="100%"
            :data="bookingData"
            style="width: 100%;border: solid 1px #c5d9f4;"
            :cell-style="cellStyle"
            :header-cell-style="headerCellTtyle"
          >
            <el-table-column prop="room" label="会议室"></el-table-column>
            <el-table-column prop="time" label="预约时间" width="180"></el-table-column>
            <el-table-column prop="staff" label="预约人"></el-table-column>
          </el-table>
        </section>
      </div>

      <div class="portalIndex-backlog">
        <nav>待办事项</nav>
        <section>
          <div class="backloglist">
            <div class="state"></div>
            <div class="right">
              <div class="righttop">
                <div>2019-12-13 12:00:00</div>
                <div>办理</div>
              </div>
              <div class="describe">待办事项内容描述</div>
            </div>
          </div>
        </section>
      </div>
    </section>
    
  </div>
</template>
<script>
export default {
  name: "portalIndex",
  components: {},
  data() {
    return {
      taskData: [
        {
          name: "某项目",
          type: "某类型",
          phases: "某阶段",
          bagin: "2019-01-01",
          end: "2019-01-01",
          functionary: "张某某"
        },
        {
          name: "某项目",
          type: "某类型",
          phases: "某阶段",
          bagin: "2019-01-01",
          end: "2019-01-01",
          functionary: "张某某"
        }
      ],
      bookingData: [
        {
          room: "1001",
          time: "2019-01-01 12:00",
          staff: "张某某"
        },
        {
          room: "1002",
          time: "暂无预约",
          staff: "--"
        },
        {
          room: "1003",
          time: "2019-01-01 12:00",
          staff: "张某某"
        }
      ]
    };
  },
  methods: {
    // 样式自定义
    cellStyle({ row, column, rowIndex, columnIndex, cell }) {
      return `text-align:center;overflow: visible;font-size: 0.833vw;`;
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