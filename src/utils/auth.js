import Cookies from 'js-cookie';
const tokenKey = 'admin-token';

export function getToken(){
    return Cookies.get(tokenKey);
}
export function setToken(token){
    return Cookies.set(tokenKey, token);
}
export function removeToken(token){
    return Cookies.remove(tokenKey);
}
export function isLogin(){
    const token = Cookies.get(tokenKey);
    return !(token === null || token === '' || token === undefined);
}


//  存取json
export function setJson(key, value){
    const codeValue = encodeURI(JSON.stringify(value))
    return Cookies.set(key, codeValue);
  }
  export function getJson(key){
    const codeJson = Cookies.get(key);
    if (codeJson === undefined) return {};
    return JSON.parse(decodeURI(codeJson))
  }
  export function removeJson(key){
    return Cookies.remove(key);
  }
  