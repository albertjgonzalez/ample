import axios from 'axios';

export default{
    login: (Body)=>{
       return axios.post('/api/users/login',{Body})
    },
    join: (Body)=>{
        return axios.post('/api/users/register',{Body})
     },
     findUser: (Body)=>{
        return axios.post('api/users/findUser',Body)
     }
}