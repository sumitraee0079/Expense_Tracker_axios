import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { CSVLink } from 'react-csv';
//Money formatter function

const Premium = ({ props }) => {
  const [state, setState] = useState(false)
  const { activatePremium } = useContext(GlobalContext);

  const handleChange = (e) => {
      if (e.target.value > 1000) {
        setState({
          disabled: false
        })
      }
      else{
        setState({
          disabled: true
        })
      }
  }

  const headers = [
    { label: 'Product Name', key: 'prodName' },
    { label: 'Expense', key: 'amount' },
  ]

  const csvReport = {
    filename: 'Report.csv',
    headers: headers,
    amount: props.amount
  }

  return (
    <>
    <form>
      <input type="text" onChange={handleChange} placeholder="expense"></input>
    <button type="button" disabled={state.disabled}>DOWNLOAD</button>
    </form>
    <CSVLink {...csvReport}>Export to CSV</CSVLink>
    </>
    
  )
}

export default Premium
