import React, {useContext, useEffect} from 'react';
import { GlobalContext } from '../context/GlobalState';
import axios from 'axios';


//Money formatter function
function moneyFormatter(num) {

  let p = num.toFixed(2).split('.');
  return (
    '$ ' +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}



export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';




  /*useEffect(() => {
    // DELETE request using axios with async/await
    async function deletePost() {
      console.log(transaction.id)
       await axios.delete(`https://crudcrud.com/api/57475e31c3b84cb49f96d9968a664883/expenseData/${transaction.id}`,
       {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, PUT, PATCH, GET, DELETE, OPTIONS',
        }
      }
       );
        
        console.log('Delete successful');
    }

    deletePost();
}, []);*/

const removeUser = async (id) => {
  const response = await axios.delete(
    `https://crudcrud.com/api/57475e31c3b84cb49f96d9968a664883/expenseData/${id}`
  );
};



 

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{sign}{moneyFormatter(transaction.amount)}</span>
      <button onClick={() => removeUser(transaction.id)} className="delete-btn">x</button>
    </li>
  )
}
