import instance from './http'

export const externalPostCalls = async(api, body, token="") => {
    const url = "http://localhost:5000/"
    const res = await fetch(url+api, {
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(body)
    })
    return await res.json()
}

export const externalPostCall = async(api, body, token="") => {
    const res = await instance.post(api, body);
    return res.data
}

export const externalGetCall = async(api) => {
    const res = await instance.get(api)
    return res.data
}