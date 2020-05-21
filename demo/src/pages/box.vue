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
      <section class="broadside threeLV" v-if="threeLV">
        <div
          v-for="(item, index) in threeLVData"
          :class="item.url==threeLVactive?'activity':''"
          :key="index"
          @click="threeLVClick(item)"
        >{{item.name}}</div>
      </section>
      <div class="ispage">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>
<script>
import Top from "../components/Top";
import list from "../assets/json/sidebar";
import axios from "axios";
export default {
  name: "box",
  components: {
    Top
  },
  data() {
    return {
      // 侧边栏菜单
      list: [],
      tabactivityRoute: this.$route.path.split("/")[1],
      isshrink: false,
      pack: false,
      jsonlistPack: "",
      // 点击上部，所对应的数据
      sidebar: "",
      // 是否要展示三级菜单
      threeLV: false,
      // 三级菜单的数据
      threeLVData: [],
      // 记录三级菜单路由名
      threeLVactive: this.$route.path.split("/")[3]
    };
  },
  watch: {
    $route(news, olds) {
      let arr = [];
      arr = news.path.split("/");
      this.threeLVactive = arr[3];
      if (arr.length > 2) {
        for (let index = 0; index < this.list.length; index++) {
          if (this.list[index].url == arr[1]) {
            console.log(this.list[index].toplist[arr[2]]);
            this.sidebar = this.list[index].toplist[arr[2]];
            this.threeLVData = this.sidebar.child;
            if (this.sidebar.child.length == 0) {
              this.threeLV = false;
            } else {
              this.threeLV = true;
            }
          }
        }
      } else {
        this.threeLV = false;
      }
    }
  },
  created() {
    axios
      .get("toplist.json")
      .then(result => {
        // 打包之后
        console.log(result.data);
        this.pack = true;
        this.list = result.data.sidebar;
        // ..........
        let arr = [];
        arr = this.$route.path.split("/");
        if (arr.length > 2) {
          for (let index = 0; index < this.list.length; index++) {
            if (this.list[index].url == arr[1]) {
              console.log(this.list[index].toplist[arr[2]]);
              this.sidebar = this.list[index].toplist[arr[2]];
              this.threeLVData = this.sidebar.child;
              if (this.sidebar.child.length == 0) {
                this.threeLV = false;
              } else {
                this.threeLV = true;
              }
            }
          }
        }
        // ..........
        this.list.map(item => {
          item.src = this.srcimg(item.img);
        });
      })
      .catch(error => {
        console.log("打包前环境");
        this.pack = false;
        this.list = list.sidebar;
        // ..........
        let arr = [];
        arr = this.$route.path.split("/");
        if (arr.length > 2) {
          for (let index = 0; index < this.list.length; index++) {
            if (this.list[index].url == arr[1]) {
              console.log(this.list[index].toplist[arr[2]]);
              this.sidebar = this.list[index].toplist[arr[2]];
              this.threeLVData = this.sidebar.child;
              if (this.sidebar.child.length == 0) {
                this.threeLV = false;
              } else {
                this.threeLV = true;
              }
            }
          }
        }
        // ..........

        this.list.map(item => {
          item.src = this.srcimg(item.img);
        });
      });
  },
  mounted() {
    setTimeout(() => {
      this.isStyle();
    }, 1);
  },
  activated() {},
  methods: {
    // 点击三级菜单
    threeLVClick(datas) {
      console.log(datas.url);
      this.$router.push({ name: `${datas.url}` });
    },
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
        侧边栏图片大小 &:nth-child(1) {
          img {
            width: 1.458vw;
            height: 1.302vw;
          }
        }
        &:nth-child(2) {
          img {
            width: 1.458vw;
            height: 1.146vw;
          }
        }
        &:nth-child(3) {
          img {
            width: 1.302vw;
            height: 1.458vw;
          }
        }
        &:nth-child(4) {
          img {
            width: 1.25vw;
            height: 1.458vw;
          }
        }
        &:nth-child(5) {
          img {
            width: 1.302vw;
            height: 1.458vw;
          }
        }
        &:nth-child(6) {
          img {
            width: 1.458vw;
            height: 1.458vw;
          }
        }
        &:nth-child(7) {
          img {
            width: 1.458vw;
            height: 1.354vw;
          }
        }
      }
    }
  }
  .threeLV {
    div {
      text-align: center;
      height: 2.3vw;
      border-bottom: 1px solid rgb(218, 207, 207);
      line-height: 2.3vw;
      font-family: "SourceHanSansCN-Medium";
      font-size: 0.838vw;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0vw;
      color: #ffffff;
    }
  }
}
</style>