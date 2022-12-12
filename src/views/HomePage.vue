<template>
    <d-layout>
    <d-header class="dheader"
      >LOGO</d-header
    >
    <d-layout>
      <d-aside class="daside">
        <d-menu mode="vertical" :default-select-keys="['calpage']" width="256px"  @select="selectM">
          <d-menu-item key="">
            <template #icon>
              <i class="icon-homepage"></i>
            </template>
            <span>Home</span>
          </d-menu-item>
          <d-menu-item key="calpage">
            <template #icon>
              <i class="icon-homepage"></i>
            </template>
            <span>Calulator</span>
          </d-menu-item>
          <d-menu-item key="stockpage">
            <template #icon>
              <i class="icon-homepage"></i>
            </template>
            <span>StockPage</span>
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
      <d-content class="main-content" style="border:1px solid">
        <router-view></router-view>
      </d-content>
    </d-layout>
    <d-footer class="dfooter">Footer</d-footer>
  </d-layout>

  <!--   <d-slider :min="0" :max="480" v-model="width"></d-slider> -->
  
</template>
<script>
import { useRouter } from 'vue-router'
  export default {
    setup () {
      let router = useRouter()
      const selectM = (a) => {
        console.log(a.key)
        console.log(router)
        router.push('/'+a.key)
    }
    return {
      selectM
    }
    }
  }
</script>


<style>
</style>