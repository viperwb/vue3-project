<template>
    <d-layout>
    <d-header class="dheader"
      >LOGO</d-header
    >
    <d-layout>
      <d-aside class="daside">
        <d-menu mode="vertical" :default-select-keys="['item1']" width="256px" router>
          <d-menu-item key="item1" @select="selectM">
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
      <d-content class="main-content">
        {{ selectedMenu }}
        <router-view></router-view>
      </d-content>
    </d-layout>
    <d-footer class="dfooter">Footer</d-footer>
  </d-layout>

  <!--   <d-slider :min="0" :max="480" v-model="width"></d-slider> -->
  
</template>

<script setup>

</script>

<style>
</style>