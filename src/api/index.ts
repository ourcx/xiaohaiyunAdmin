import xhaxios, { get } from "@/utils/Xhaxios";


export async function getFileList() { 
    return get('/file/list')
    //可以新建一个.d.ts文件
}