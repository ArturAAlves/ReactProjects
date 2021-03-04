import './css/colorBox.scss';
import ColorBox from "./components/colorbox"
import React, { useState } from "react"

function ColorGenerator() {
  const [colors, setColors] = useState("")
  const [textBox, setTextBox] = useState("133,046,108")

  function handleSubmit(e) {
    e.preventDefault()

    let numb = textBox.match(/\d/g);
    let newArr = []

    for (let i = 0; i < 3; i++) {
      newArr.push(numb[i])
    }

    newArr = [parseInt(newArr.join(""))]

    for (let i = 3; i < 6; i++) {
      newArr.push(numb[i])
    }


    for (let i = 6; i < 9; i++) {
      newArr.push(numb[i])
    }


    console.log(numb, newArr)
    setColors(currectVal => currectVal = textBox)
    // setTextBox(currectVal => currectVal = "")

  }



  return (
    <div className="colorgenerator">
      <div className="colorgenerator-input-container">
        <h2 className="tittle">Color Generator</h2>
        <form onSubmit={e => handleSubmit(e)}>
          <input onChange={e => setTextBox(e.target.value)} value={textBox} type="text"></input>
          <button>Submit</button>
        </form>
      </div>

      <div className="colorgenerator-container">

        <ColorBox color={colors} />
      </div>
    </div >
  );
}

export default ColorGenerator;
