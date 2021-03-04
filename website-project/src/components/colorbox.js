import '../css/colorBox.scss';
import React, { useState } from "react"

function ColorBox(color) {

  const [clipBoard, setClipBoard] = useState(false)


  let hangleClipBoard = () => {
    navigator.clipboard.writeText(`rgb(${color.color})`)
    setClipBoard(currVal => currVal = true)
    setInterval(() => {
      setClipBoard(currVal => currVal = false)
    }, 3000);

  }


  let style = {
    backgroundColor: `rgb(${color.color})`
  }

  return (
    <div className="colorbox" style={style} onClick={() => hangleClipBoard()}>
      {clipBoard && <p>Coppied to Clipboard</p>

      }
    </div>
  );
}

export default ColorBox;
