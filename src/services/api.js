import axios from 'axios'


//192.168.187.2 -> celular
//'http://10.0.2.2:3000'
const api =  axios.create({
    baseURL:'http://192.168.0.228:3000'
})


export default api 