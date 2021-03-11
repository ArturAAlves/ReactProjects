import React, { useState } from "react"
import "./css/modal.scss"
import useToggle from "./hooks/useToggle"

function Modal() {
  const [modalActive, setModalActive] = useToggle()
  const [teres, setteres] = useState(1)

  console.log(setteres)
  return (
    <div className={modalActive ? "modal-container" : "modal-hiden"}>
      {/* <button className={modalActive ? "modal-btn-active" : "modal-btn"} onClick={() => SetModalActive(() => !modalActive)}>{modalActive ? "Close" : "Open"}</button> */}
      <button className={modalActive ? "modal-btn-active" : "modal-btn"} onClick={setModalActive}>{modalActive ? "Close" : "Open"} </button>

      <div className={modalActive ? "modal-content" : "modal-content-hiden"} >
        <img src="https://thumbs.web.sapo.io/?W=775&H=0&delay_optim=1&webp=1&epic=NjVkxyKRfb43bNHUvHpEq+3kSkGG4/ne+FXX4oDtTVlJx5L2IpcKUwQ9B+zeTOdKlfBeHjvIKr9s9ZbtcGQwf3B9T/04KabHSlKkL8qx/vM+QLM=" alt="wakanda"></img>
        <p>A Disney está a desenvolver para a sua plataforma de streaming uma série de TV inspirada por "Black Panther" que se vai passar no fictício reino africano de Wakanda.

        A produção faz parte de um novo contrato de cinco anos da Disney com o realizador Ryan Coogler, anunciou o estúdio esta segunda-feira (1).

        Em 2018, o grande sucesso mundial "Black Panther", protagonizado pelo falecido Chadwick Boseman, foi aclamado pelo pública e pela crítica e pelo público.

Além de arrecadar mais de mil milhões de dólares nas bilheteiras de todo o mundo, foi a primeira longa-metragem de super-heróis nomeada para o Óscar de Melhor Filme e, noutra estreia para o Universo Cinematográfico Marvel, recebeu três estatuetas (guarda-roupa, banda sonora e direção artística).</p>
      </div>
    </div >


  );
}

export default Modal;
