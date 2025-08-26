import axios from 'axios'

interface Config {
    url: string,
    method: string,
    data?: any
    headers?: any
    params?: any
    timeout?: number
}

export default function xhaxios(config: Config) { 
    // 合并headers，保留原有的headers配置
    const requestConfig = {
        ...config,
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
            ...config.headers
        }
    }
    axios.defaults.baseURL = 'http://localhost:8080'
    return axios.request(requestConfig)
        .then(res => {
            return res.data
        })
        .catch(error => {
            // 统一错误处理
            if (error.response) {
                // 请求已发出，但服务器响应的状态码不在 2xx 范围内
                console.error('响应错误:', error.response.data)
                console.error('状态码:', error.response.status)
            } else {
                console.error('请求错误:', error.message)
            }
            return Promise.reject(error)
        })
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