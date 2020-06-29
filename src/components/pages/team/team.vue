<template>
  <div>
    <div class="green">
      <h1>Thinging More</h1>
      <p>超乎所想</p>
    </div>
    <div class="scteam">
      <div class="think-team">
        <h2>思创团队</h2>
        <h3>Thinking Creation Team</h3>
      </div>
      <div class="think-pic">
        <ul @click="dialogVisible = true">
          <li>
            <img src="../images/图01.png" alt />
          </li>
          <li>
            <img src="../images/图01.png" alt />
          </li>
          <li>
            <img src="../images/图01.png" alt />
          </li>
          <li>
            <img src="../images/图01.png" alt />
          </li>
          <li>
            <img src="../images/图01.png" alt />
          </li>
          <li>
            <img src="../images/图01.png" alt />
          </li>
          <li>
            <img src="../images/图01.png" alt />
          </li>
          <li>
            <img src="../images/图01.png" alt />
          </li>
          <li>
            <img src="../images/图01.png" alt />
          </li>
          <li>
            <img src="../images/图01.png" alt />
          </li>

        </ul>
      </div>
    </div>
    <div class="life">
      <div class="think-team">
        <h2>生活</h2>
        <h3>Life Created by Thinking</h3>
      </div>
      <div class="life-pic">
        <ul>
          <li>
            <img src="../images/图02.png" alt />
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Quis ipsum suspendisse ultrices gravida. Risus
            </p>
          </li>
          <li>
            <img src="../images/图02.png" alt />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Quis ipsum suspendisse ultrices gravida. Risus
            </p>
          </li>
          <li>
            <img src="../images/图02.png" alt />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Quis ipsum suspendisse ultrices gravida. Risus
            </p>
          </li>
          <li>
            <img src="../images/图02.png" alt />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Quis ipsum suspendisse ultrices gravida. Risus
            </p>
          </li>
          <li>
            <img src="../images/图02.png" alt />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Quis ipsum suspendisse ultrices gravida. Risus
            </p>
          </li>
          <li>
            <img src="../images/图02.png" alt />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Quis ipsum suspendisse ultrices gravida. Risus
            </p>
          </li>
        </ul>
      </div>
    </div>
    <el-dialog title :visible.sync="dialogVisible" width="60%" >
      <div class="block">
        <el-carousel height="100%">
          <el-carousel-item v-for="item in 2" :key="item">
            <img src="../images/图层 22.png" alt />
            <div class="jieshao">
              <div class="klst">
                <h2>克里斯汀·鸭蛋</h2>
                <h4>(职位)</h4>
                <p>Lorem IpsumLorem Ipsum.</p>
              </div>
              <div class="will">
                <h3>未来计划:</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida.
                  Risus commodo viverra maecenas accumsan lacus vel facilisis.
                </p>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {
    
  }
};
</script>

<style >
@import "./team.css";
</style>