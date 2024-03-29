import { useState } from 'react'


import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    <>
 
<div className= " bg-[#172842]  h-screen py-8">
<div className="w-full max-w-2xl border-2 border-gray-600 mx-auto mt-28 flex flex-col py-4 px-4 rounded-lg drop-shadow-lg">

<h1 className="text-2xl font-bold text-center my-3 text-white">Manage your Todos :-</h1>
<AddTodo />
    <Todos />
</div>
</div>
 
    </>
  )
}

export default App