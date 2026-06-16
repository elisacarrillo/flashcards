
import './App.css'
import Flashcards from './Flashcards'

function App() {
  const LCFC = [
    {
    "question": "What is the TC of inserting an element in an Array",
    "answer": "O(n)"
    },
    {
    "question": "What is the TC of deleting an element in an Array",
    "answer": "O(n)"
    },
    {
    "question": "What is the TC of merge sort",
    "answer": "O(log n)"
    },
    {
    "question": "What is the TC of bubble sort",
    "answer": "O(n^2)"
    },
    {
    "question": "What is the TC of quick sort",
    "answer": "O(n^2)"
    },
    {
    "question": "What is the TC of merge sort",
    "answer": "O(log n)"
    },
    {
    "question": "What is the TC of accessing an element in an array",
    "answer": "O(1)"
    },
    {
    "question": "What is the TC of accessing an element in a balanced tree",
    "answer": "O(log n)"
    },
    {
    "question": "What is the TC of deleting an element in a hashmap",
    "answer": "O(1)"
    },
    {
    "question": "What is the TC of inserting an element in a hashmap",
    "answer": "O(1)"
    },

  ]
  return (
    <div className='app'>
      <h1>Master Time Complexity</h1>
      <h2>Practice TC of operations for common data structures + sorting algos</h2>
      <p>there are {LCFC.length} flascard{LCFC.length > 1 ? "s" : ""} in this set</p>
      < Flashcards flash = {LCFC}/>
    </div>
    
  )
}

export default App
