<script setup lang="ts">
import { ipcRenderer } from 'electron';
import { NIcon } from 'naive-ui';
import { CloseOutline, RemoveOutline } from '@vicons/ionicons5'

let close = (): void => {
    ipcRenderer.send('close')
}

let min = (): void => {
    ipcRenderer.send('min')
}


</script>

<template>
    <div class="headerTools">
        <div class="title">
            Lateject
        </div>
        <div class="control">
            <div class="minimize" @click="min">
                <NIcon :component="RemoveOutline" :size="10" />
            </div>
            <div class="close" @click="close">
                <NIcon :component="CloseOutline" :size="14" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.headerTools {
    border-bottom: 1px solid #d8d8d8;
    padding: 0 0 0 5px;
    box-sizing: border-box;
    width: 100%;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    -webkit-app-region: drag;
    font-family: consolas, 'Courier New', Courier, monospace;

    .title {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        font-family: consolas, 'Courier New', Courier, monospace;
        font-weight: lighter;
        font-style: oblique;
        color: rgb(43, 43, 43)
    }

    .control {
        user-select: none;
        display: flex;
        -webkit-app-region: none;

        div {
            color: black;
            padding: 5px 20px;
            font-size: 12px;
            cursor: pointer;
            font-family: g;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all 5ms;

            &:hover {
                background: rgb(231, 231, 231);
                transition: all 5ms;
            }
        }
    }
}
</style>
