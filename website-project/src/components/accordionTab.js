import '../css/accordion.scss';
import React, { useState } from "react"


const AccordionTab = ({ content }) => {
  const [toggle, setToggle] = useState(() => true)
  let header = content.header
  let discription = content.Discription
  function handleClickUp() {
    setToggle(toggle => !toggle)
  }
  return (
    <div className="AccordionTab">
      <div>
        <h3>{header}</h3>
        {toggle ? <button onClick={handleClickUp}>+</button> : <button onClick={handleClickUp}>-</button>
        }
      </div>
      {toggle ? "" : <p className="accordion-desc">{discription}</p>
      }


    </div>
  );
}

export default AccordionTab;
