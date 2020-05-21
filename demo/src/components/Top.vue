<template>
  <div class="top">
    <div class="topbox">
      <div class="left">
        <img src="../assets/images/logo_03.png" alt class="flag" />
        <div>智慧军营</div>
      </div>
      <div class="toplist">
        <div
          v-for="(item, index) in list"
          :class="item.textUrl==topIndex?'active':''"
          :key="index"
          :data-url="item.textUrl"
          @click="toplist(item.url,item.textUrl,index)"
        >{{item.name}}</div>
      </div>
      <div class="right">
        <img class="topicon" src="../assets/images/查询_03.png" alt style />
        <i></i>
        <img class="topicon" src="../assets/images/导航地图_03.png" alt style @click="atlasclick" />
        <i></i>
        <img class="topicon" src="../assets/images/添加快捷方式_03.png" alt style />
        <i></i>
        <img class="topicon" src="../assets/images/提醒_03.png" alt style v-popover:messages />
        <i></i>
        <img class="topicon" src="../assets/images/人像_03.png" alt style v-popover:headportrait />
      </div>
    </div>
    <!-- 点击地图 -->
    <div class="atlas" v-if="isatlas">
      <nav></nav>
      <div v-for="(item, index) in 12" :key="index" class="atlasList">
        <div>
          <img src="../assets/images/ismap.png" alt />
        </div>
        <div>某某地图</div>
      </div>
    </div>

    <!-- 点击消息 -->
    <el-popover
      v-model="ismessage"
      ref="messages"
      placement="bottom"
      trigger="click"
      popper-class="message"
    >
      <div class="messagelist" style="border-bottom: dotted 0.052vw #ffffff;">
        <section>
          <img src="../assets/images/用车申请_03.png" alt />
          <div class="messagelistchild" style="margin-left:0.625vw;font-size: 0.833vw;width:100%;">
            <div style="display:flex;justify-content:space-between">
              <div>用车申请</div>
              <div style="display:none;">
                <span style="color:#00f010">同意</span>
                <span style="color:#9c2525">拒绝</span>
              </div>
            </div>
            <div
              style="margin-top:0.469vw;margin-bottom:0.469vw;overflow:hidden;width:100%;font-size: 0.729vw;line-height: 0.729vw;height: 0.729vw;"
            >张某某申请了《用车申请(2019-01-01 12:00)...》</div>
          </div>
        </section>
        <div style="display:flex;justify-content:space-between;margin-left:2.396vw">
          <div style="display:flex;">
            <div style="font-size: 0.729vw;">张某某</div>
            <div style="font-size: 0.729vw;">[同意]</div>
          </div>
          <div style="font-size: 0.729vw;">01-01 12:00</div>
        </div>
      </div>
      <div class="messagelist" style="border-bottom: dotted 0.052vw #ffffff;">
        <section>
          <img src="../assets/images/公告通知_03.png" alt />
          <div class="messagelistchild" style="margin-left:0.625vw;font-size: 0.833vw;width:100%;">
            <div style="display:flex;justify-content:space-between">
              <div>公告通知</div>
              <div style="display:none">
                <span style="color:#00f010">同意</span>
                <span style="color:#9c2525">拒绝</span>
              </div>
            </div>
            <div
              style="margin-top:0.469vw;margin-bottom:0.469vw;overflow:hidden;width:100%;font-size: 0.729vw;line-height: 0.729vw;height: 0.729vw;"
            >训练通知内容</div>
          </div>
        </section>
        <div style="display:flex;justify-content:space-between;margin-left:2.396vw">
          <div style="display:flex;">
            <div style="font-size: 0.729vw;">张某某</div>
            <div style="font-size: 0.729vw;display:none;">[同意]</div>
          </div>
          <div style="font-size: 0.729vw;">01-01 12:00</div>
        </div>
      </div>
      <div class="messagelist" style="border-bottom: dotted 0.052vw #ffffff;">
        <section>
          <img src="../assets/images/用车审批_03.png" alt />
          <div class="messagelistchild" style="margin-left:0.625vw;font-size: 0.833vw;width:100%;">
            <div style="display:flex;justify-content:space-between">
              <div>用车审批</div>
              <div>
                <span style="color:#00f010">同意</span>
                <span style="color:#9c2525">拒绝</span>
              </div>
            </div>
            <div
              style="margin-top:0.469vw;margin-bottom:0.469vw;overflow:hidden;width:100%;font-size: 0.729vw;line-height: 0.729vw;height: 0.729vw;"
            >张某某申请了《用车申请(2019-01-01 12:00)...》</div>
          </div>
        </section>
        <div style="display:flex;justify-content:space-between;margin-left:2.396vw">
          <div style="display:flex;">
            <div style="font-size: 0.729vw;">张某某</div>
            <div style="font-size: 0.729vw;display:none;">[同意]</div>
          </div>
          <div style="font-size: 0.729vw;">01-01 12:00</div>
        </div>
      </div>
    </el-popover>
    <!-- 点击头像 -->
    <el-popover
      v-model="visible"
      ref="headportrait"
      placement="bottom"
      trigger="click"
      popper-class="headportrait"
    >
      <div class="headportraitlist">
        <img src="../assets/images/编辑-拷贝_03.png" alt />
        <div>修改密码</div>
      </div>
      <div class="headportraitlist">
        <img src="../assets/images/添加快捷方式-拷贝_03.png" alt />
        <div>添加快捷方式</div>
      </div>
      <div class="headportraitlist">
        <img src="../assets/images/zbds_g_设置-头像_03.png" alt />
        <div>设置头像</div>
      </div>
      <div class="headportraitlist">
        <img src="../assets/images/退出-拷贝_03.png" alt />
        <div>退出</div>
      </div>
    </el-popover>
  </div>
</template>
<script>
import topjsonlist from "../assets/json/toplist";
import axios from "axios";
// 模板
import innerContent from "../pages/innerContent";
export default {
  name: "top",
  data() {
    return {
      list: [],
      isatlas: false,
      visible: false,
      ismessage: false,
      nawurl: "",
      pack: false,
      topjsonlistPack: "",
      topurl: this.$route.path.split("/")[2],
      topIndex: ""
    };
  },
  watch: {
    nawurl(news, olds) {
      if (this.pack) {
        // 打包之后使用的数据
        this.list = this.topjsonlistPack.toplist[`${news}`].toplist;
      } else {
        // 打包之前使用的数据
        this.list = topjsonlist.toplist[`${news}`].toplist;
      }
    },
    $route(news, olds) {
      let string = "";
      let arr = [];
      arr = news.path.split("/");
      this.isatlas = false;
      this.visible = false;
      this.ismessage = false;
      string = arr[1];
      this.nawurl = string;
      if (arr.length > 2) {
        this.topurl = arr[2];
      } else {
        this.topurl = "1";
      }
      this.topIndex = "";
    },
    visible(news, olds) {
      this.isatlas = false;
      if (news) {
        document.getElementsByClassName(
          "headportrait"
        )[0].style.cssText = `width:7.604vw;
          display: flex;
          height: 8.75vw;
          background-color: rgba(13, 68, 145, 0.875);
          margin-top: 0.20vw;
          box-shadow: 0vw 0.104vw 0.208vw 0vw rgba(0, 0, 0, 0.3);
          border:none;
          padding-left:'0.573vw';
          padding-right:0.469vw;
          font-family: MicrosoftYaHei;
          font-size: 0.833vw;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 0vw;
          color: #ffffff;`;
        let arr = [];
        arr = document.getElementsByClassName("headportraitlist");

        for (let index = 0; index < arr.length; index++) {
          const element = arr[index];
          element.style.display = "flex";
          element.style.height = "2.031vw";
          element.style.lineHeight = "2.031vw";
          element.style.alignItems = "center";
          element.style.borderBottom = "dotted 0.052vw #ffffff";
          arr[arr.length - 1].style.borderBottom = "none";
          element.childNodes[0].style.marginRight = "0.521vw";
          element.childNodes[0].style.width = "0.833vw";
          element.childNodes[0].style.height = "0.833vw";
        }
      }
    },
    ismessage() {
      this.isatlas = false;
      let isarr = [];
      isarr = document.getElementsByClassName("message");
      isarr[0].style.cssText = `width: 19.167vw;
      height: 13.958vw;
      border:none;
      background-color: rgba(13, 68, 145, 0.875);
      box-shadow: 0vw 0.104vw 0.208vw 0vw 
      rgba(0, 0, 0, 0.3);
      overflow-y: hidden;
      color: #ffffff;`;
      document.getElementsByClassName("messagelist");
      let arr = [];
      arr = document.getElementsByClassName("messagelist");
      for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        element.style.height = "4.427vw";
        element.childNodes[0].style.display = "flex";
        element.childNodes[0].style.alignItems = "center";
        element.childNodes[0].childNodes[0].style.width = "1.771vw";
        element.childNodes[0].childNodes[0].style.height = "1.771vw";
      }
    }
  },
  created() {
    axios
      .get("toplist.json")
      .then(result => {
        // 打包之后
        console.log(result.data.toplist);
        this.pack = true;
        this.topjsonlistPack = result.data.toplist;
      })
      .catch(error => {
        console.log("打包前环境");
        this.pack = false;
      });
  },
  mounted() {
    this.nawurl = this.$route.path.split("/")[1];
    // 获取配置JSON
  },
  methods: {
    // 点击导航地图图标
    atlasclick() {
      if (this.isatlas) {
        this.isatlas = false;
      } else {
        this.isatlas = true;
      }
    },
    // 点击上部
    toplist(url, textUrl, index) {
      console.log(url);
      console.log(textUrl);

      // this.topurl = url;
      setTimeout(() => {
        this.topIndex = textUrl;
      }, 1);

      // 动态改变路由
      let routes = [
        {
          path: `/${url}/innerContent`,
          name: "innerContent",
          component: innerContent
        }
      ];
      this.$router.options.routes = routes;
      this.$router.addRoutes(routes);
      console.log(this.$router.options.routes);
      this.$router.push({ path: `/${url}/innerContent` });
    }
  }
};
</script>

<style lang="less" scoped>
.top {
  width: 100vw;
  .topbox {
    width: 100%;
    color: #ffffff;
    height: 3vw;
    background-image: linear-gradient(-90deg, #1c5cbd 0%, #0d4491 100%);
    background-blend-mode: normal, normal;
    box-shadow: 0vw 0.16vw 0.47vw 0vw rgba(172, 200, 219, 0.46);
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding-left: 1vw;
    padding-right: 1vw;
    .left {
      display: flex;
      align-items: center;
      font-family: "SourceHanSansCN-Medium";
      font-size: 1.5vw;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #ffffff;
      .flag {
        width: 2vw;
        height: 2vw;
        margin-right: 0.4vw;
      }
    }
    .right {
      display: flex;
      align-items: center;
      .topicon {
        margin-left: 28px;
        margin-right: 30px;
        &:nth-child(1) {
          width: 1.15vw;
          height: 1.15vw;
        }
        &:nth-child(2) {
          width: 1.25vw;
          height: 1.25vw;
        }
        &:nth-child(3) {
          width: 1.35vw;
          height: 1.35vw;
        }
        &:nth-child(4) {
          width: 1.15vw;
          height: 1.35vw;
        }
        &:nth-child(5) {
          width: 1.35vw;
          height: 1.25vw;
        }
      }
      i {
        display: block;
        width: 0.05vw;
        height: 1.56vw;
        background-image: linear-gradient(#11438f, #11438f),
          linear-gradient(#e7ebf6, #e7ebf6);
        background-blend-mode: normal, normal;
        box-shadow: 0.05vw 0vw 0vw 0vw rgba(255, 255, 255, 0.1);
      }
    }
  }
  .atlas {
    z-index: 2019;
    padding-top: 1.042vw;
    padding-left: 1.342vw;
    position: absolute;
    left: 10.417vw;
    width: 89.583vw;
    height: 45.3753vw;
    background-color: #ffffff;
    box-shadow: 0vw 0.104vw 0.208vw 0vw rgba(0, 0, 0, 0.3);
    display: flex;
    flex-wrap: wrap;
    .atlasList {
      width: 16vw;
      height: 12.9843vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 1.642vw;
      justify-content: center;

      img {
        width: 10.9692vw;
        height: 9.2817vw;
      }
      div {
        &:nth-child(1) {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 16vw;
          height: 12.5vw;
          background-color: #ebeff5;
          box-shadow: 0vw 0vw 0.417vw 0vw rgba(13, 68, 145, 0.3);
        }
        &:nth-child(2) {
          margin-top: 1.042vw;
          height: 1.063rem;
          font-family: "SourceHanSansCN-Regular";
          font-size: 1.125rem;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 0rem;
          color: #0d4491;
        }
      }
      // 选中样式
      &:nth-child(2) {
        div {
          &:nth-child(1) {
            background-color: #0d44916b;
            box-shadow: 0vw 0vw 0.417vw 0vw rgba(13, 68, 145, 0.3);
            border: solid 0.052vw rgba(13, 68, 145, 0.5);
          }
        }
      }
    }
  }
  .toplist {
    display: flex;
    align-items: center;
    div {
      height: 1.875vw;
      line-height: 1.875vw;
      text-align: center;
      font-family: "MicrosoftYaHei";
      font-size: 0.833vw;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0vw;
      color: #ffffff;
      padding-left: 0.885vw;
      padding-right: 0.781vw;
      &:hover {
        cursor: pointer;
      }
    }
    .active {
      background-color: #ffffff;
      border-radius: 0.104vw;
      color: #114a9c;
    }
  }
  // /deep/.el-popover.el-popper.headportrait {
  //   width: 7.604vw;
  //   height: 8.75vw;
  //   background-color: #3e84ed;
  //   box-shadow: 0vw 0.104vw 0.208vw 0vw rgba(0, 0, 0, 0.3);
  //   .headportraitlist {
  //     display: flex;
  //   }
  // }
}
</style>