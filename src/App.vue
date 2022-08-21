<script setup lang="ts">
import HeaderTools from './components/HeaderTools.vue';
import { NSpace, NLayout, NLayoutSider, NMenu, NMessageProvider, useMessage } from 'naive-ui';
import type { MenuOption } from 'naive-ui'
import { Home, LogoSteam, Key } from '@vicons/ionicons5';
import Footer from './components/Footer.vue';
import logo from '/favicon.ico'
import { renderIcon, otherBrowOpen } from './utils';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const menuActiveKey = ref('home');

const menuOptions: MenuOption[] = [
  {
    key: 'home',
    label: renderIcon(Home),
  },
  {
    key: 'ssfn',
    label: renderIcon(LogoSteam),
  },
  {
    key: 'steamCodeConvert',
    label: renderIcon(Key),
  },
]


let onCheckItem = (e: any) => {
  menuActiveKey.value = e;
  console.log(menuActiveKey.value)
}

const router = useRouter();

let checkInItem = () => {
  router.push(`/${menuActiveKey.value}`)
}

</script>

<template>
  <n-message-provider placement="top-right">
    <HeaderTools />
    <n-space vertical class="content">

      <n-layout has-sider>
        <n-layout-sider bordered collapse-mode="width" :width="60">
          <n-menu :collapsed="false" :collapsed-icon-size="50" :options="menuOptions" :value="menuActiveKey"
            :on-update:value="onCheckItem" default-value="home" @click="checkInItem()" />
          <div class="logo" @click="otherBrowOpen('https://github.com/NaCoLiu/Lateject')">
            <img :src="logo" alt="lateject" />
          </div>
        </n-layout-sider>
        <n-layout>
          <div class="page">

            <RouterView></RouterView>

          </div>
          <Footer />
        </n-layout>
      </n-layout>
    </n-space>
  </n-message-provider>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;

}

.n-message-container.n-message-container--top-right {
  margin-top: 20px;
}

body {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  .n-menu-item-content-header {
    width: 100px;
  }

  .n-layout-sider-scroll-container {
    display: flex;
    justify-content: center;
    user-select: none;

    .logo {
      position: absolute;
      bottom: 10px;
      transition: all .5s;
      cursor: pointer;

      &:hover {
        filter: blur(1px);
        transform: scale(1.2);
      }
    }
  }

}

.page {
  height: 100%;
}

#app {
  box-shadow: 0 0 3px #d8d8d8;
  display: flex;
  flex-direction: column;
  border: 1px solid #d8d8d8;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  border-radius: 5px;
  backdrop-filter: blur(10px);
  background: rgba(54, 54, 54, 0.9);
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .content {
    flex-grow: 1;
    overflow: hidden;

    &>div {
      height: 100%;

      .n-layout {
        height: 100%;
      }
    }
  }


  .n-menu .n-menu-item-content {
    padding: 0;
    padding-left: 0 !important;
    justify-content: center;
    align-items: center;
    position: relative;

    .n-icon {
      width: 100%;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: gray;

      &>svg {
        width: 30px;
        height: 30px;
      }
    }
  }
}

.page-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;


}
</style>
