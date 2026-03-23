import React from 'react'
import { useState } from 'react'
import TodoItem from '../components/TodoItem'

export default function TodoPage() {
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState([
    { id: 1, text: '리액트 실습' },
    { id: 2, text: '컴포넌트 연습' },
  ])

  //할 일 추가함수
  function addTodo() {
    //유저가 아무것도 입력하지 않은 경우 return구문으로 아무것도 실행하지 않고 빠져나감
    //trim 메소드는 앞뒤 공백 제거
    if (inputValue.trim === '') return

    const newTodo = {
      id: Date.now(), //현재 시간(ms)을 숫자로 반환
      text: inputValue
    }

    /* 리액트는 기존배열을 직접 수정하지 않고 새 배열을 만들어서  수정하므로 이떄 spread(...)구문을 쓴다. */
    //spread = [1,2] -> [1,2,3,4] -> 기존에서 더해가는거
    setTodos([...todos, newTodo])
    setInputValue('')
  }
  //삭제함수
  function removeTodo(id) {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }
  return (
    <section className="sec-todoPage">
      <div className="inner">
        <h2>할일 목록</h2>

        <div className="input-row">
          <input
            type="text"
            placeholder='할 일을 입력하세요' 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={addTodo}>추가</button>
        </div>

        <ul className="todo-list">
          {
            todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} onRemove={removeTodo} />
            ))
          }
        </ul>

      </div>
    </section>
  )
}
