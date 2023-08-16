import React from 'react'
import img from '../../assets/images/aboutme.jpg'
export const About = () => {
  return (
   <>
   <div className="about p-5 "> 
    <div className="container">
        <div className="row p-5">
            <div className="col-xl-4">
              <img src={img} alt="" className="img-fluid "/>
            </div>
          
            <div className="col-xl-8 px-5">
              <h2 className="text-danger">About Me</h2>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, repellendus! Assumenda quis laboriosam modi dignissimos esse placeat aliquid explicabo quod delectus nam voluptatem iusto eius, pariatur fugit dicta at quibusdam quam totam harum nostrum inventore corrupti? Quos iusto quam cupiditate odit quis perferendis maxime et. Beatae itaque, ducimus ab reiciendis, sint dolor in facere repellat possimus aliquam consequatur dolorem eum.</p>
              <button className="btn btn-primary">Download Resume</button>
            </div>
          </div>        
    </div>
</div>
   </>
  )
}
