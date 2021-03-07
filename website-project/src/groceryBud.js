import './css/groceryBud.scss';
import uuid from 'react-uuid'
import React, { useState, useEffect } from "react"
import GroceryBudItem from "./components/groceryBudItem"


const getLocalStorage = () => {
  let list = localStorage.getItem("list")
  if (list) {
    return JSON.parse(list)
  }
  else {
    return []
  }
}

function GroceryBud() {
  const [toDos, setTodos] = useState(getLocalStorage())
  const [createToDo, setCreateToDo] = useState("")
  const [editing, Setediting] = useState([false, ""])


  function handleSubmit(e) {
    e.preventDefault()
    if (!createToDo) {
      return ""
    }

    if (!editing[0]) {
      setTodos(currentTodo => currentTodo = [...currentTodo, { nome: createToDo, id: uuid() }])
    } else {
      let id = editing[1]
      let mapping = toDos.map((todo) => {
        return todo.id === id ? { ...todo, nome: createToDo } : todo
      })
      console.log(mapping)
      setTodos(currentTodo => currentTodo = mapping)
      Setediting(currSt => currSt = [false, ""])
    }
    setCreateToDo(currentTodo => currentTodo = "")
  }

  function handleRemove(element) {
    let id = element
    let filter = toDos.filter((todo) => {
      return todo.id !== id
    })
    setTodos(currentTodo => currentTodo = [...filter])
  }

  function handleEdit(element) {
    Setediting(currSt => currSt = [true, element])
    let filter = toDos.filter((todo) =>
      todo.id === element
    )
    setCreateToDo(currSt => currSt = (filter[0].nome))
  }

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(toDos))
  }, [toDos])

  return (
    <div className="groceryBud-container">
      <div className="groceryBud">
        <div className="groceryBud-tittle">
          <h2>Grocery Bud</h2>
        </div>
        <div className="groceryBud-header">
          <form className="groceryBud-form"
            onSubmit={e => handleSubmit(e)}
          >
            <input placeholder="Buy eggs" onChange={e => setCreateToDo(e.target.value)} value={createToDo} type="text"></input>

            {!editing[0] ? <button>Submit</button> : <button>Edit</button>}

          </form>
        </div>
        <div className="groceryBud-list">
          {toDos.map(todo =>
            < GroceryBudItem todo={todo.nome} key={todo.id} remove={() => { handleRemove(todo.id) }} edit={() => { handleEdit(todo.id) }} editing={editing} />
          )}
        </div>
      </div>

    </div >
  );
}

export default GroceryBud;
