import { defineStore } from 'pinia'

export const useJWT = defineStore('JWT',{
    state: ()=>{
        return {
            token: '',
        }
    }
})