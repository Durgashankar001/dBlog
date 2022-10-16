export const setItem = (key,value)=>{
    return localStorage.setItem(key,JSON.stringify(value))
}

export const getItem = (key) =>{
   return JSON.parse(localStorage.getItem(key))
}

export const removeItem = (key) =>{
    return localStorage.removeItem(key)
}