import './css/slider.scss';
import React, { useState } from "react"

function Slider() {

  const [value, setValue] = useState(0)


  function updateVal(val) {

    if (val === "less" && value < 200) {
      setValue(currVal => currVal + 100)
    }
    else if (val === "more" && value > -200) {
      setValue(currVal => currVal - 100)
    }

    // val === "less" ? setValue((currVal) => currVal + 100) : setValue((currVal) => currVal - 100)


  }

  let style = {
    transform: `translatex(${value}%)`
  }
  console.log(value)

  return (
    <div className="slider-container">
      <div className="slider-left">
      </div>
      <div className="slider-center">
        <div className="slider-img-container">
          <img className="img" style={style} src="https://images.unsplash.com/photo-1542067043-9d93e7c2f845?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="dog"></img>
          <img className="img" style={style} src="https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80" alt="dog"></img>
          <img className="img" style={style} src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80" alt="dog"></img>
          <img className="img" style={style} src="https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="dog"></img>

          <img className="img" style={style} src="https://images.unsplash.com/photo-1581888227599-779811939961?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80" alt="dog"></img>


        </div>
        {/* <img src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80"></img>
        <img src="https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"></img> */}
        <div className="slider-center-btn-container">
          <button className="slider-btn btn-left" onClick={() => updateVal("less")}>Prev</button>
          <button className="slider-btn btn-right" onClick={() => updateVal("more")}>Next</button>
        </div>
      </div>
      <div className="slider-right">

      </div>


    </div>
  );
}

export default Slider;
