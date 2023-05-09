import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import axios from 'axios'

const AddTransaction = () => {

  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = async (e) => {
    e.preventDefault();

    const post = { text: text, amount: amount }
    try {
      const res = await axios.post('https://crudcrud.com/api/57475e31c3b84cb49f96d9968a664883/expenseData', post)
      console.log(res.data)
    } catch (e) {
      alert(e)
    }
  

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }


    addTransaction(newTransaction);
  }


  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Product Name</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            </label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button type="submit" className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction

