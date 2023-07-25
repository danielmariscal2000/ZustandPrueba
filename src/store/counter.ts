import {create}  from "zustand";

interface Post{
    id:number,
    title:string,
    body:string
}
interface CounterState{
    count :number,
    title:string,
    increment:(value:number)=>void,
    posts:Post[],
    getPost:()=>Promise<void>,
    clearStore:()=>void,
    clearStoreId:(id:number)=>void,
    onChangePost:(text:string,id:number)=>void,
}
export const userCounter=create<CounterState>((set)=>({
    count:10,
    title:"Proyecto Probando Zustand con React",
    posts:[],
    increment:(value:number)=> set(state=>({
        count:state.count+value
    })),
    getPost:async()=>{
        const res=await fetch("https://jsonplaceholder.typicode.com/posts");
        const data=await res.json();
        set(state=>({
           ...state, 
           posts:data
        }))
        
    } ,
    clearStore:()=>{
        set({},true)
    },
    clearStoreId:(id:number)=>set(state=>({
     ...state,
     posts:state.posts.map(e=>{
        if(e.id==id){
            return (
                {
                "id":e.id,
                "title":e.title,
                "body":"",
                 }
                )
            }
        else{
            return (e)
        }
        })      
    })),
    onChangePost:(text:string,id:number)=>set(state=>({
        ...state,
        posts:state.posts.map(e=>{
           if(e.id==id){
               return (
                   {
                   "id":e.id,
                   "title":e.title,
                   "body":text,
                    }
                   )
               }
           else{
               return (e)
           }
           })    
    }))
}))