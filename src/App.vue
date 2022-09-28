<template>
  <d-layout>
    <d-header class="dheader"
      ><d-menu
        mode="horizontal"
        :default-select-keys="['home']"
        style="margin-bottom: 120px"
        :width="width + 'px'"
      >
        <d-menu-item key="home">
          <template #icon>
            <i class="icon-homepage"></i>
          </template>
          首页
        </d-menu-item>
        <d-sub-menu title="课程" key="course">
          <d-menu-item key="c"> C </d-menu-item>
          <d-sub-menu title="Python" key="python" disabled>
            <d-menu-item key="basic"> 基础 </d-menu-item>
            <d-menu-item key="advanced"> 进阶 </d-menu-item>
          </d-sub-menu>
        </d-sub-menu>
        <d-menu-item key="person">个人</d-menu-item>
        <d-menu-item key="custom" href="https://www.baidu.com" disabled>
          Link To Baidu
        </d-menu-item>
      </d-menu></d-header
    >
    <d-layout>
      <d-aside class="daside">
        <d-menu mode="vertical" :default-select-keys="['item1']" width="256px">
          <d-menu-item key="item1">
            <template #icon>
              <i class="icon-homepage"></i>
            </template>
            <span>Home</span>
          </d-menu-item>
          <d-menu-item key="item1">
            <template #icon>
              <i class="icon-homepage"></i>
            </template>
            <span>Home</span>
          </d-menu-item>
          <d-menu-item key="item1">
            <template #icon>
              <i class="icon-homepage"></i>
            </template>
            <span>Home</span>
          </d-menu-item>
          <d-menu-item key="item1">
            <template #icon>
              <i class="icon-homepage"></i>
            </template>
            <span>Home</span>
          </d-menu-item>
          <d-sub-menu title="System" key="system">
            <template #icon>
              <i class="icon-system"></i>
            </template>
            <d-menu-item key="system-item">
              <span>System item</span>
            </d-menu-item>
            <d-menu-item key="system-item">
              <span>System item</span>
            </d-menu-item>
            <d-menu-item key="system-item">
              <span>System item</span>
            </d-menu-item>
            <d-menu-item key="system-item">
              <span>System item</span>
            </d-menu-item>
            <d-menu-item key="system-item">
              <span>System item</span>
            </d-menu-item>
            <d-menu-item key="system-item">
              <span>System item</span>
            </d-menu-item>
            <d-sub-menu title="Setting" key="setting">
              <template #icon>
                <i class="icon-setting"></i>
              </template>
              <d-menu-item key="setting-item">
                <span>Setting item</span>
              </d-menu-item>
            </d-sub-menu>
          </d-sub-menu>
        </d-menu>
      </d-aside>
      <d-content class="main-content">Content</d-content>
    </d-layout>
    <d-footer class="dfooter">Footer</d-footer>
  </d-layout>

  <!--   <d-slider :min="0" :max="480" v-model="width"></d-slider> -->
  <router-view></router-view>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
