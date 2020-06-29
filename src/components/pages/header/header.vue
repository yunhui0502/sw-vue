
<template>
  <div>
    <!-- 头部导航 -->
    <div class="nav">
      <ul @click="choosetype">
        <li :class="curtype==='1'?'active':''" data-i="1">
          <router-link to="/">首页</router-link>
        </li>
        <li :class="curtype==='2'?'active':''" data-i="2">
          <router-link to>思创理念</router-link>
        </li>
        <li :class="curtype==='3'?'active':''" data-i="3">
          <router-link to="/business">思创业务</router-link>
        </li>
        <li :class="curtype==='4'?'active':''" data-i="4">
          <router-link to="team">思创团队</router-link>
        </li>
        
        <li :class="curtype==='6'?'active':''" data-i="6">
          <router-link to="header02">行业资讯</router-link>
        </li>
        <li :class="curtype==='5'?'active':''" data-i="5">
          <router-link to>合作伙伴</router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
    <!-- 底部 -->
    <div class="footer">
      <div class="help">
        <dl>
          <dt>关于我们</dt>
          <dd>思维创造（天津）信息科技有限公司</dd>
          <dd>地址：天津市西青区智慧山南塔308室</dd>
          <dd>电话：022-58357353</dd>
        </dl>
        <dl>
          <dt>加入我们</dt>
          <p>Lorem ipsum dolor sit amet, conseccommodo viverra maecenas accumsan maecenas acclacus vel facilisis.</p>
        </dl>
      </div>
      <div class="sw">
        <img src="../images/拷贝.png"/>
      </div>
    </div>
  </div>
</template>
    
    <script>
export default {
  data() {
    return {
      curtype: '1' //默认显示第一个
    };
  },
  methods: {
    choosetype(e) {
      console.log(e.target.innerText);
      if (e.target.innerText == "首页") {
        this.curtype = '1';
        console.log(this.curtype)
      } else if (e.target.innerText == "思创理念") {
        this.curtype = '2';
        console.log(this.curtype)
      } else if (e.target.innerText == "思创业务") {
        this.curtype = '3';
        console.log(this.curtype)
      } else if (e.target.innerText == "思创团队") {
        this.curtype = '4';
        console.log(this.curtype)
      } else if (e.target.innerText == "合作伙伴") {
        this.curtype = '5';
        console.log(this.curtype)
      } else if (e.target.innerText == "行业资讯") {
        this.curtype = '6';
        console.log(this.curtype)
      }
      //  this.curtype = e.target.dataset.i;
    }
  }
};
</script>
    
    <style scoped>
@import "./header.css";
</style>