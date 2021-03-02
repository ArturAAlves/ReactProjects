import React, { useState } from 'react';
import AccordionTab from "./components/accordionTab"
import "./css/accordion.scss"


function Accordion() {
  const messagesArray = [
    {
      header: "1Hello , how are you", Discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    { header: "2Hello , how are you", Discription: "hi, im fine, and u?" },
    { header: "3Hello , how are you", Discription: "hi, im fine, and u?" }]
  const [messages, setMessages] = useState(() => ([...messagesArray]));
  const [hello, setHello] = useState("water")

  return (
    <div className="accordion-container">
      <h2>Questions Toggler</h2>edew
      {messages.map((message) => {
        return <AccordionTab content={message} />
      })}

    </div>
  );
}

export default Accordion;
