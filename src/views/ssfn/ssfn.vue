<template>
    <div class="page-content">
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
.page-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        margin-top: 45px;
        font-family: 'Courier New', Courier, monospace;
    }

    .ssfn {
        margin-top: 30px;
        margin-bottom: 30px;
        padding: 10px;
        width: 75%;
        border: 1px solid #d8d8d8;
        border-radius: 5px;
        font-family: 'Courier New', Courier, monospace;
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