<template>
    <div class="page-content ssfn-content">
        <div class="building">
            <span>func Building / 建设中</span>
        </div>
        <h2>SSFN Steam Authorization</h2>
        <input type="text" placeholder="ssfn" :v-model:value="ssfn" class="ssfn">
        <n-button type="info" class="auth" @click="submit">
            <template #icon>
                <n-icon>
                    <AddCircle />
                </n-icon>
            </template>
            Authorization
        </n-button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { NButton, NIcon, useMessage } from 'naive-ui';
import { AddCircle } from '@vicons/ionicons5';


let ssfn = ref('');

const msg = useMessage()
let steamDir = ref('');

var rf = require("fs"); 





let submit = () => {

}

</script> 

<style lang="scss">
.building {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
    overflow: hidden;
   
    font-weight: 200;
    font-size: 30px;
    font-style: italic;
    pointer-events: painted;
    background-color: rgba(0, 0, 0, 0.089);
    backdrop-filter: blur(5px);
    z-index: 999;
    span {
        border: 5px solid red;
        border-radius: 10px;
        padding: 5px 20px;
        transform: rotate3d(-2, -2, 0, -35deg);
    }
}

.ssfn-content {
   
    h2 {
        margin-top: 45px;
       
    }

    .ssfn {
        margin-top: 30px;
        margin-bottom: 30px;
        padding: 10px;
        width: 75%;
        border: 1px solid #d8d8d8;
        border-radius: 5px;
       
        font-weight: bold;
    }

    .auth {
        display: flex;
        justify-content: space-around;

        &>* {
            padding: 0 5px;
        }
    }
}
</style>