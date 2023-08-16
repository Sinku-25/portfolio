import React from 'react'
import styles from './Home.module.css';
export const Home = () => {
  return (
   <>
   <div>
    <div className={styles.bgImg}>
      <div className="container text-center">
        <h1>Lorem, ipsum dolor.</h1>
        <p className="fs-3">Web Developer</p>
        <button className="btn btn-outline-danger">Learn More</button> 
      </div>
    </div>
  </div>
   </>
  )
}
