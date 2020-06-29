<template>
  <div>
    <div class="green">
      <h1>Thinging More</h1>
      <p>超乎所想</p>
    </div>
    <div class="mainbn">
      <div class="bun">
        <h2>主营业务</h2>
        <p>Main business</p>
      </div>
      <div class="lorem">
        <ul @click="dialogVisible = true">
          <li>
            <img src="../images/wangzhan.png" alt />
            <h2>开发</h2>
            <p>大数据、互联网、售后运维</p>
          </li>
          <li>
            <img src="../images/cehua.png" alt />
            <h2>策划</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Quis ipsum suspendisse ultrices gravida. Risus
            </p>
          </li>
          <li>
            <img src="../images/sheji.png" alt />
            <h2>开发</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Quis ipsum suspendisse ultrices gravida. Risus
            </p>
          </li>
        </ul>
      </div>

      <el-dialog title :visible.sync="dialogVisible" width="70%">
        <el-carousel :interval="4000" type="card" height="1000px">
          <el-carousel-item v-for="item in 1" :key="item">
            <div class="piro">
              <img src="../images/01.app封面.png" alt />
            </div>
          </el-carousel-item>
          <el-carousel-item v-for="item in 1" :key="item">
            <div class="piro">
              <img src="../images/02.登录.png" alt />
            </div>
          </el-carousel-item>
          <el-carousel-item v-for="item in 1" :key="item">
            <div class="piro">
              <img src="../images/44.我的.png" alt />
            </div>
          </el-carousel-item>
        </el-carousel>
      </el-dialog>

      <div class="lianxi">
        <h2>联系我们</h2>
      </div>
    </div>
    <!-- 服务流程 -->
    <div class="about">
      <div class="bun">
        <h2>服务流程</h2>
        <p>About Thinking</p>
      </div>
      <img src="../images/曲线.png" alt />
    </div>
    <!-- 案例展示 -->
    <div class="case">
      <div class="bun">
        <h2>案例展示</h2>
        <p>CASE SHOW</p>
      </div>
      <div class="show">
        
        <div class="leftpic">
          <img class="p1" src="../images/666.png" alt />
          
            <img class="p2" src="../images/10.png" alt />
            <img class="p2" src="../images/888.png" alt />
            <img class="p2" src="../images/222.png" alt />
            <img class="p2" src="../images/999.png" alt />
          
        </div>
        <div class="rightpic">
          
            <img class="p2" src="../images/333.png" alt />
            <img class="p2" src="../images/111.png" alt />
            <img class="p2" src="../images/444.png" alt />
            <img class="p2" src="../images/777.png" alt />
          
          <img class="p1" src="../images/666.png" alt />
        </div>
      </div>
      <p class="more">加载更多...</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false
    };
  }
};
</script>

<style scoped>
@import "./business01.css";
</style>