import { NIcon } from "naive-ui"
import { Component ,h} from "vue"
import { shell } from 'electron';
export let getVersion = ():string =>{
    return '0.0.1'
}

export function renderIcon(icon: Component) {
    return () => h(NIcon, null, { default: () => h(icon), })
}

export let otherBrowOpen = (link: string) => {
    shell.openExternal(link)
}