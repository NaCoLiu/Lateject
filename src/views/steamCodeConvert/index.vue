<template>
    <div class="page-content convert-content">
        <h2>Steam Code Convert</h2>
        <n-input v-model:value="code" type="text" placeholder="please input 765xxxxxxxxxxxxxx"  maxlength="17"   clearable/>
        <n-button type="tertiary" @click="SubmitConvert" class="btn">
            Convert
        </n-button>

        <div class="info" v-if="res != ''">
            Game Code : {{res}} 
        </div>
        
    </div>


</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { NInput, NButton,useMessage } from 'naive-ui';
import { codeConvert } from '@/utils/codeConvert';
const { clipboard } = require('electron')
let code = ref('')
let res = ref('');

const message = useMessage()
function SubmitConvert() {
    if(code.value.length != 17){
       message.warning('格式不正确, 请输入17位steamId数字')
    }else{
       res.value = codeConvert(code.value);
       clipboard.writeText(res.value, 'selection')
       message.success('转换成功，已自动复制')
    }
}




</script> 

<style lang="scss">
.convert-content {
    padding: 20px;
    box-sizing: border-box;
    h2{
        margin-bottom: 20px;
    }
    .btn{
        margin-top: 20px;
    }
    .info{
        margin-top: 30px;
        cursor: pointer;
        color: royalblue;
    }
}
</style>