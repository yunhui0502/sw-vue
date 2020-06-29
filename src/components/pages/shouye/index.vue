<template>
  <div class="header">
    <!-- 头部导航end -->
    <div class="banner-one">
      <div class="fl">
        <div class="word">
          <!-- <div class="line-one"></div> -->
          <div class="line-two"></div>
          <div class="line-three"></div>
          <div class="think-bg">
            <div class="think">THINKING</div>
          </div>
          <div class="creation">CREATION</div>
          <div class="bom">
            <img src="../images/椭圆 4.png" alt />
          </div>
        </div>
      </div>
      <div class="fr">
        <div class="moon">
          <img src="../images/图层 3.png" alt />
        </div>
        <div class="woman">
          <img src="../images/图层 36.png" alt />
        </div>
      </div>
    </div>
    <!-- 白色区域 -->
    <div class="white">
      <div class="white-all">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="linian">
          <h2>THINGING·超乎所想</h2>
        </div>
        <div class="tupian" >
          <div class="tone">
            <el-carousel
              type="card"
              :height="imgHeight"
              arrow="never"
              :autoplay="false"  
              ref="carousel"
              :initial-index="one"
            >
              <el-carousel-item v-for="(item) in arr" name="index" :key="item">
                <img  :src="item.image" ref="imgHeight" />
                <h2>{{item.wzh3}}</h2>
                <P>{{item.wz}}</P>
              </el-carousel-item>
              
            </el-carousel>
            
          </div>
          
        </div>

        <!-- <div class="banner">
          <div>
            <img src="../images/椭圆 4 .png"  @click="btn2()" />
          </div>

          <div class="cilcle">
            <i @click="setActiveItem(0)"></i>
            <i @click="setActiveItem(1)"></i>
            <i @click="setActiveItem(2)"></i>
          </div>
        </div> -->

      </div>
    </div>
    <!-- 三个图片 -->
    <div class="threepri">
      <div class="pri-all">
        <div class="pri-one">
          <img src="../images/图层 15.png" alt />
        </div>
        <div class="pri-two">
          <ul>
            <li>
              <img class="pri-1" src="../images/图层 17.png" alt />
            </li>
            <li>
              <img class="pri-2" src="../images/图层 18.png" alt />
            </li>
          </ul>
        </div>
      </div>
      <div class="more">
        <span>MORE</span>
      </div>
    </div>
    <!-- 业务部分 -->
    <div class="yewu">
      <div class="yewu-y">
        <div class="line-o"></div>
        <div class="line-t"></div>
        <h2>THINKING·业务</h2>
      </div>

      <div class="kaifa-l">
        <div class="kaifa">
          <div class="wangzhan">
            <img src="../images/wangzhan.png" alt />
          </div>

          <div class="kai-word">
            <h3>开发</h3>
            <p>网站开发/APP开发/微信开发...</p>
          </div>
        </div>
        <div class="sheji">
          <div class="sheji-1">
            <img src="../images/sheji.png" alt />
          </div>
          <div class="she-word">
            <h3>设计</h3>
            <p>平面设计/UI设计/网页设计...</p>
          </div>
        </div>
      </div>
      <div class="kaifa-r">
        <div class="cehua">
          <div class="cehua-one">
            <img src="../images/cehua.png" alt />
          </div>

          <div class="cehua-word">
            <h3>策划</h3>
            <p>？？？？？？？？？？？？？？？？？？？？</p>
          </div>
        </div>
        <div class="serve">
          <h2>
            更多服务
            <img src="../images/椭圆 4.png" alt />
          </h2>
        </div>
      </div>
    </div>

    <!-- 伙伴部分 -->
    <div class="huoban">
      <div class="huo-y">
        <div class="line-o"></div>
        <div class="line-t"></div>
        <h2>THINKING·伙伴</h2>
      </div>
      <div class="mess">
        <div class="mess-l">
          <img v-if="!iconfont" src="../images/图层 22.png" alt />
          <img v-if="iconfont" src="../images/图层 23.png" alt />
          <h5>Lorem Ipsum</h5>
          <p class="iconfont" @click="btn4">&#xeb03;</p>
          <p class="iconfont" @click="btn4">&#xeb06;</p>
        </div>
        <div class="mess-r">
          <div class="mess-one">
            <div class="touxiang1">
              <img src="../images/图层 23.png" alt />
            </div>
            <div class="tx-word">
              <h4>Thinking Member</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div class="mess-one">
            <div class="touxiang1">
              <img src="../images/图层 24.png" alt />
            </div>
            <div class="tx-word">
              <h4>Thinking Member</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div class="mess-one">
            <div class="touxiang1">
              <img src="../images/图层 25.png" alt />
            </div>
            <div class="tx-word">
              <h4>Thinking Member</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="more1">
      <span >
        <router-link to="team">MORE</router-link>
        </span>
    </div>
    <!-- 合作伙伴 -->
    <div class="hezuo">
      <div class="he-y">
        <div class="line-o"></div>
        <div class="line-t"></div>
        <h2>THINKING·合作伙伴</h2>
      </div>
      <div class="allpri">
        <img src="../images/图层 7.png" alt />
        <img src="../images/图层 8.png" alt />
        <img src="../images/图层 9.png" alt />
        <img src="../images/图层 10.png" alt />
        <img src="../images/图层 11.png" alt />
        <img src="../images/图层 12.png" alt />
        <img src="../images/图层 13.png" alt />
        <img src="../images/图层 14.png" alt />
      </div>
      <div class="more-o">
        <span>MORE</span>
      </div>
    </div>
    <!-- 雕塑人像 -->
    <div class="model">
      <img class="m28" src="../images/图层 28.png" alt />
      <img class="m26" src="../images/图层 26 .png" alt />
      <div class="blue"></div>
    </div>
  </div>
</template>

<script>
import imgo from '../images/图层 4.png'
import imgt from '../images/图层 5.png'
import imgs from '../images/图层 6.png'
export default {
  data() {
    return {
      one: 0,
      iconfont: false,
      imgHeight: "",
      arr: [
        {
          image:imgo,
          wzh3:'创新 TRANSLATION',
          wz:`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Quis ipsum suspendisse ultrices gravida.
              Risus commodo viverra maecenas accumsan lacus vel facilisis.`,
        },
        {
          image:imgt,
          wzh3:'理念 TRANSLATION',
          wz:`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Quis ipsum suspendisse ultrices gravida.
              Risus commodo viverra maecenas accumsan lacus vel facilisis.`,
        },
        {
          image:imgs,
          wzh3:'发展 TRANSLATION',
          wz:`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Quis ipsum suspendisse ultrices gravida.
              Risus commodo viverra maecenas accumsan lacus vel facilisis.`,
        }
      ]
    };
  },
  mounted(){
    
       this.imgHeight = '800px',
      onresize = function temp() {
    // 通过点语法获取img的height属性值
      this.imgHeight = this.$refs.imgHeight[0].height
  }
  },
  methods: {
   
// more() {
//  this.$router.push({ path: '/team' });
// },

    btn4() {
      this.iconfont = !this.iconfont;
    },
    setActiveItem(e) {
      console.log(e)
      if (e == 0) {
        this.$refs.carousel.setActiveItem(e);
      }
      if (e == 1) {
        this.$refs.carousel.setActiveItem(e);
      }
      if (e == 2) {
        this.$refs.carousel.setActiveItem(e);
      }
      console.log(e);
    },
    btn2() {
      
    this.$refs.carousel.next();
      
      // if (this.one == 3) {
      //   this.one = 1;
      // }
    },

  }
};
</script>

<style scoped >
@import "./main.css";
</style>
