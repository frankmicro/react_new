export const setStorage = (key, value) => {
    localStorage.setItem(key,JSON.stringify(value));
}

export const getStorage = (key) => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : null;
}

export const clearStorage = (key = null) => {
    return (key) ? localStorage.removeItem(key) : localStorage.clear(); 
}