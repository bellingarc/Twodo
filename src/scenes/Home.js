import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../App'
import Head from '../components/home/Head'
import TodoList from '../components/home/TodoList'

function Home() {
  const [todoListItems, setTodoListItems] = useState([])
  const [loading, setLoading] = useState(true)
  const {user} = useContext(UserContext)
  useEffect(() => {
    if(user) {
      console.log('fetching todo items or something')
      setLoading(true)
      fetch(`https://twodo-api-2.web.app/tasks/${user.uid}`)
      //fetch(`http://localhost:5000/tasks/${user.uid}`)
        .then(res => res.json())
        .then(data => {
          setTodoListItems(data)
          setLoading(false)
        })
        .catch(e => {
          setLoading(false)
          console.log(e)
        })
    } else {
      console.log('something else')
      setTodoListItems([])
      setLoading(false)
    }
  }, [user])
  return (
    <>
      <Head setTodoListItems={setTodoListItems} setLoading={setLoading} />
      <TodoList
        todoListItems={todoListItems}
        setTodoListItems={setTodoListItems}
        loading={loading}
        setLoading={setLoading} />    </>
  )
}

export default Home