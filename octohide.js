//mobile api function
const crypto = require('node:crypto');
class octohide{
    constructor(){
        this.api = "https://mobile.octohideapi.com/api/v2"
        this.sid=null
        this.headers={"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","Host":"mobile.octohideapi.com","User-Agent":"Android: 12; App name: octohide.vpn; Device: 6165H; App version: v2.166; Version code: 166;"}
    }
    async register(username,password){
        let req=await fetch(`${this.api}/`,{method:"POST",headers: this.headers,body:`password=${password}&requestid=${crypto.randomBytes(20)}&action=register&device_type=phone&id=da1b11d24a6a7f2c&install_source=com.android.vending&client_version=v2.166&locale=ru-RU&timestamp=${Date.now()}&username=${username}&`});
        return req.json()
}
    async login(username,password){
        let req=await fetch(`${this.api}/`,{method:"POST",headers: this.headers,body:`password=${password}&requestid=${crypto.randomBytes(20)}&action=login&device_type=phone&id=da1b11d24a6a7f8c&install_source=com.android.vending&client_version=v2.166&locale=ru-RU&timestamp=${Date.Now}&username=${username}&`});
        return req.json()
}
    async login_info(password){
        let req=await fetch(`${this.api}/`,{method:"POST",headers: this.headers,body:`password=${password}&auth=${this.sid}&requestid=${crypto.randomBytes(20)}&action=setlogininfo&device_type=phone&id=da1b11d24a6a7f2c&install_source=com.android.vending&client_version=v2.166&locale=ru-RU&timestamp=${Date.now()}&`});
        return req.json()
}
    async region_info(){
        let req=await fetch(`${this.api}/`,{method:"POST",headers: this.headers,body:`action%5B1%5D=regions&action%5B2%5D=info&action%5B0%5D=services&os=Android&device_model=6165H&auth=${this.sid}&os_version=12&device_type=phone&id=da1b11d24a6a7f2c&locale=ru-RU&requestid=${crypto.randomBytes(20)}&install_source=com.android.vending&client_version=v2.166&timestamp=${Date.now()}&`});
        return req.json()
}
    async delete_account(password){
        let req=await fetch(`${this.api}/`,{method:"POST",headers: this.headers,body:`password=${password}&auth=${this.sid}&requestid=${crypto.randomBytes(20)}&action=deleteprofile&device_type=phone&id=da1b11d24a6a7f2c&install_source=com.android.vending&client_version=v2.166&locale=ru-RU&timestamp=${Date.now()}&`});
        return req.json()
}
}
module.exports = {octohide};