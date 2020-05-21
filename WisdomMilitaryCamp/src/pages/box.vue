// 放置
<template>
  <div class="box">
    <Top></Top>
    <div class="boxbottom">
      <section :class="isshrink?'broadside isshrink':'broadside'">
        <nav v-if="isshrink" class="isshrinkyes">
          <img src="../assets/images/Menu_03.png" alt @click="shrinkclick" />
          <img src="../assets/images/2_03.png" alt />
        </nav>
        <nav v-else class="isshrinkon">
          <img src="../assets/images/Menu_03.png" alt @click="shrinkclick" />
          <img src="../assets/images/1_29.gif" alt />
        </nav>
        <div
          v-for="(item, index) in list"
          :key="index"
          :class="item.url==tabactivityRoute?'broadside-list activity':'broadside-list'"
          @click="tabclick(item.url)"
        >
          <div class="left"></div>
          <div class="right">
            <img :src="item.src" alt="1" />
            <span>{{item.name}}</span>
          </div>
        </div>
      </section>
      <div class="ispage">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import Top from "../components/Top";
export default {
  name: "box",
  components: {
    Top
  },
  data() {
    return {
      // 侧边栏菜单
      list: [
        {
          id: 1,
          name: "信息门户",
          img: "门户_03",
          src: "",
          url: "portalIndex",
          toplist:[]
        },
        {
          id: 2,
          name: "综合管理平台",
          img: "综合管控平台_03",
          src: "",
          url: "synthesizeIndex",
          toplist:['综合态势','异常情况告警','突发事件处置','系统运维管理']
        },
        {
          id: 3,
          name: "智慧管理",
          img: "平台管理_03",
          src: "",
          url: "witManageIndex",
          toplist:['值班管理','人员管理','车辆管理','会议室管理','实验室管理','枪弹管理','涉密载体','多媒体发布','固定资产','信函通知','科技档案']
        },
        {
          id: 4,
          name: "智慧安防",
          img: "安防监控_03",
          src: "",
          url: "witsecurityIndex",
          toplist:['视频监控','紧急报警','周界管理','人员出入管控','车辆出入管控']
        },
        {
          id: 5,
          name: "智慧保障",
          img: "保障_03",
          src: "",
          url: "witsafeguardIndex",
          toplist:['营产维修管理','被装调号管理','就餐服务','保障设施查询']
        },
        {
          id: 6,
          name: "动环监控",
          img: "动环监控_03",
          src: "",
          url: "",
          toplist:[]
        },
        {
          id: 7,
          name: "资源管理平台",
          img: "平台管理_03",
          src: "",
          url: "authorityIndex",
          toplist:['态势配置','身份认证','地理信息','物联感知','流程设计','数据采集','数据治理','数据主题','数据分析','知识图谱','共享发布']
        }
      ],
      tabactivityRoute: this.$route.name,
      isshrink: true
    };
  },
  watch: {},
  mounted() {
    this.list.map(item => {
      item.src = this.srcimg(item.img);
    });
    setTimeout(() => {
      this.isStyle();
    }, 1);
  },
  methods: {
    // 点击改变侧边宽度
    shrinkclick() {
      if (this.isshrink) {
        this.isshrink = false;
      } else {
        this.isshrink = true;
      }
    },
    // 塞进去图片
    srcimg(img) {
      return require(`../assets/images/${img}.png`);
    },
    // 点击左侧，切换对应页面
    tabclick(url) {
      this.$router.push(`/${url}`);
      // 记录当前页面的路径
      this.tabactivityRoute = url;
      // 到达页面，执行改变表格样式（字超出部分显示）
      setTimeout(() => {
        this.isStyle();
      }, 1);
      
    },
    isStyle() {
      // 设置表格内字的超出显示
      let arr = [];
      arr = document.getElementsByClassName("cell");
      for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        element.style.overflow = "visible";
      }
    }
  }
};
</script>

<style lang="less" scoped>
.box {
  width: 100vw;
  .boxbottom {
    display: flex;
    height: 49vw;
  }
  // 收起来
  .isshrink {
    width: 5.208vw !important;
    .isshrinkyes {
      display: flex;
      justify-content: center;
      align-items: center;
       width: 100%;
      height: 1.56vw;
      img {
        &:nth-child(1) {
          width: 1.094vw;
          height: 0.833vw;
          margin-right: 0.208vw;
           &:hover {
            cursor: pointer;
          }
        }
        &:nth-child(2) {
          width: 0.26vw;
          height: 0.521vw;
        }
      }
    }
    .broadside-list {
      .right {
        box-shadow: none !important;
        span {
          display: none !important;
        }
      }
    }
  }
  .broadside {
    display: block;
    width: 10.417vw;
    height: 49vw;
    background-image: linear-gradient(0deg, #1c5cbd 0%, #0d4491 100%),
      linear-gradient(#ffffff, #ffffff);
    background-blend-mode: normal, normal;
    box-shadow: 0.16vw 0vw 0.47vw 0vw rgba(172, 200, 219, 0.46);
    .isshrinkon {
      width: 100%;
      height: 1.56vw;
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
      img {
        &:nth-child(1) {
          margin-right: 1.04vw;
          margin-left: 0.21vw;
          width: 1.09vw;
          height: 0.83vw;
          &:hover {
            cursor: pointer;
          }
        }
        &:nth-child(2) {
          width: 0.26vw;
          height: 0.52vw;
        }
      }
    }
    .activity {
      background-color: hsla(0, 0%, 100%, 0.08);
      .left {
        background-color: hsla(211, 84%, 59%, 0.6);
      }
    }
    .broadside-list {
      display: flex;
      .left {
        width: 0.208vw;
      }
      .right {
        width: 8.333vw;
        height: 5.21vw;
        margin-left: 0.832vw;
        margin-right: 1.04vw;
        font-family: "SourceHanSansCN-Medium";
        font-size: 0.94vw;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #e7ebf6;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0px 2px 0px 0px hsla(0, 0%, 100%, 0.1);
        &:hover {
          cursor: pointer;
        }
        img {
          margin-top: 1.2vw;
          margin-bottom: 0.83vw;
        }
        span {
          display: block;
          line-height: 0.94vw;
          height: 0.94vw;
          font-family: "SourceHanSansCN-Medium";
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 0px;
          color: #ffffff;
          margin-bottom: 1.09vw;
        }
        // 侧边栏图片大小
        // &:nth-child(1) {
        //   img {
        //     width: 1.458vw;
        //     height: 1.302vw;
        //   }
        // }
        // &:nth-child(2) {
        //   img {
        //     width: 1.458vw;
        //     height: 1.146vw;
        //   }
        // }
        // &:nth-child(3) {
        //   img {
        //     width: 1.302vw;
        //     height: 1.458vw;
        //   }
        // }
        // &:nth-child(4) {
        //   img {
        //     width: 1.25vw;
        //     height: 1.458vw;
        //   }
        // }
        // &:nth-child(5) {
        //   img {
        //     width: 1.302vw;
        //     height: 1.458vw;
        //   }
        // }
        // &:nth-child(6) {
        //   img {
        //     width: 1.458vw;
        //     height: 1.458vw;
        //   }
        // }
        // &:nth-child(7) {
        //   img {
        //     width: 1.458vw;
        //     height: 1.354vw;
        //   }
        // }
      }
    }
  }
}
</style>