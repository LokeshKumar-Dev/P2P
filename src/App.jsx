import React, {useState, useEffect} from 'react'

export default function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("HI 1")
    },[count])
    
  return (
    <>
        <section className="home">
          <section className="home-1"></section>
          <section className="home-2"></section>
          <div className="card">
            <div className="card-1--1">c11</div>
            <div className="card-1">c1</div>
            <div className="card-2--1">c21</div>
            <div className="card-2">c2</div>
          </div>
        </section>
    </>
  )
}
