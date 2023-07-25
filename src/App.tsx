import './App.css'
import { userCounter } from './store/counter'
import { shallow } from 'zustand/shallow';
import { useEffect } from 'react';
import Card from './components/Card';
import style from "./app.module.css"
function App() {
const count= userCounter((state)=>({
  title:state.title,
  post:state.posts
}),shallow);
const {getPost}=userCounter()

useEffect(()=>{
  getPost()
},[])
  return (
    <div>
      <h1 className={style.h1}>{count.title}</h1>
    <div className={style.cardContainer}>
      {
        count.post.map((e,i)=>
           <Card element={e} key={i}></Card>
        ) 
      }
    </div>
    </div>
  )
}

export default App
