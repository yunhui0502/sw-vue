<template>
  <div>
    <div class="green">
      <h1>Thinging More</h1>
      <p>超乎所想</p>
    </div>
    <div class="hangye">
      <div class="hang-one">
        <h2>行业资讯</h2>
        <p>Industry information</p>
      </div>
      <!-- 左边部分 -->
        <el-tabs :tab-position="tabPosition" style="height: 1020px;">
          <el-tab-pane label="设计资讯">
            <!-- 右边部分 -->
            <div class="hangye-r">
              <div class="hang-r-one">
                <div class="pic">
                  <img src="../images/图层 8.png" alt />
                </div>
                <div class="pic-word">
                  <h5>设计</h5>
                  <h3>Lorem IpsumLorem Ipsum</h3>
                  <h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Quis ipsum suspendisse ultrices gravida.
                    Risus commodo viverra maecenas accumsan lacus vel facilisis.
                  </h4>
                  <h4>20200-01-12</h4>

                  <h6><router-link to="details">MORE</router-link>
                    <p class="iconfont">&#xe639;</p>
                  </h6>
                </div>
              </div>
              <div class="hang-r-one">
                <div class="pic">
                  <img src="../images/图层 8.png" alt />
                </div>
                <div class="pic-word">
                  <h5>设计</h5>
                  <h3>Lorem IpsumLorem Ipsum</h3>
                  <h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Quis ipsum suspendisse ultrices gravida.
                    Risus commodo viverra maecenas accumsan lacus vel facilisis.
                  </h4>
                  <h4>20200-01-12</h4>
                  <h6><router-link to="details">MORE</router-link>
                    <p class="iconfont">&#xe639;</p>
                  </h6>
                </div>
              </div>
              <div class="hang-r-one">
                <div class="pic">
                  <img src="../images/图层 8.png" alt />
                </div>
                <div class="pic-word">
                  <h5>设计</h5>
                  <h3>Lorem IpsumLorem Ipsum</h3>
                  <h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Quis ipsum suspendisse ultrices gravida.
                    Risus commodo viverra maecenas accumsan lacus vel facilisis.
                  </h4>
                  <h4>20200-01-12</h4>
                  <h6><router-link to="details">MORE</router-link>
                    <p class="iconfont">&#xe639;</p>
                  </h6>
                </div>
              </div>
              <div class="hang-r-one">
                <div class="pic">
                  <img src="../images/图层 8.png" alt />
                </div>
                <div class="pic-word">
                  <h5>设计</h5>
                  <h3>Lorem IpsumLorem Ipsum</h3>
                  <h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Quis ipsum suspendisse ultrices gravida.
                    Risus commodo viverra maecenas accumsan lacus vel facilisis.
                  </h4>
                  <h4>20200-01-12</h4>
                  <h6><router-link to="details">MORE</router-link>
                    <p class="iconfont">&#xe639;</p>
                  </h6>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="开发资讯">开发资讯</el-tab-pane>
          <el-tab-pane label="其他资讯">其他资讯</el-tab-pane>
          <el-pagination
                style="float:right"
                background
                :page-size="20"
                :pager-count="11"
                layout="prev, pager, next"
                :total="1000"
              ></el-pagination>
        </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabPosition: "left"
    };
  }
};
</script>

<style scoped>
@import "../header/header.css";
</style>