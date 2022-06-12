export const externalPostCall = async(api, body, token="") => {
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