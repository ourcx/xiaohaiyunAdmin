import axios from 'axios'
import Router from 'next/router'
interface Config {
    url: string,
    method: string,
    data?: any
    headers?: any
    params?: any
    timeout?: number
}

export default async function xhaxios(config: Config) { 
    // 合并headers，保留原有的headers配置
    const requestConfig = {
        ...config,
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
            ...config.headers
        }
    }
    axios.defaults.baseURL = 'http://localhost:8080'
    try {
        const res = await axios.request(requestConfig)
        return res.data
    } catch (error) {
        // 统一错误处理
        if (axios.isAxiosError(error) && error.response) {
            // 请求已发出，但服务器响应的状态码不在 2xx 范围内
            console.error('响应错误:', error.response.data)
            console.error('状态码:', error.response.status)
            //处理未登录
            if (error.response.status === 401) { 
                localStorage.removeItem('token')
                Router.push('/login')
            }
        } else if (error instanceof Error) {
            console.error('请求错误:', error.message)
        } else {
            console.error('未知错误:', error)
        }
        return await Promise.reject(error)
    }
}

export function get(url: string, params?: any) { 
    return xhaxios({
        url,
        method: 'get',
        params
    })
}

export function post(url: string, data?: any) { 
    return xhaxios({
        url,
        method: 'post',
        data
    })
}

export function put(url: string, data?: any) { 
    return xhaxios({
        url,
        method: 'put',
        data
    })
}

export function del(url: string, params?: any) { 
    return xhaxios({
        url,
        method: 'delete',
    })
}


export function patch(url: string, data?: any) { 
    return xhaxios({
        url,
        method: 'patch',
        data
    })
}