import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import FormContainer from '../components/formContainer.js'
import Loader from '../components/Loader.js'
import Message from '../components/Message.js'
import {Form,Button,InputGroup} from 'react-bootstrap'
import axios from 'axios'

function CurrencyInput() {
const [fromCurrency,setFromCurrency]=useState('USDC')
const [toCurrency,setToCurrency]=useState('USDC')
const [amount,setAmount]=useState(null)
const [currencyList,setCurrencyList]=useState([])
const [error,setError]=useState(false)
const [errorMessage,setErrorMessage]=useState('')
const [loading,setLoading]=useState(false)
const navigate=useNavigate()
useEffect(()=>{
const fectchList=async()=>{
  try{
    const config = {
      headers: {
        'Content-Type': 'application/json'
      },
    }
   setLoading(true)
   const {data}=await axios.get('/api/currency',config)
   setLoading(false)
   setCurrencyList(data.data)
  }catch(error){
   setLoading(false)
   setError(true)
   setErrorMessage(error.message)
  }
};
fectchList();
setFromCurrency('USDC')
setToCurrency('USDC')
},[])

useEffect(()=>{
},[currencyList,toCurrency,fromCurrency,amount])

const submitHandler=()=>{
  navigate(`/output/${fromCurrency}/${toCurrency}/${amount}`)
  return;
}
  return (
<FormContainer>
  <h2 className='text-center mt-1'>Currency Converter</h2>
  {loading  && <Loader/>}
  {error && <Message variant='danger'>{errorMessage}</Message>}
  <Form onSubmit={submitHandler}>
  <div className='d-flex align-item-center'>
    <div className="mr-4 mt-4 p-2" style={{width:'15%'}}>
  <p className='m-0'>From</p>
  </div>
  <div style={{width:'85%'}}>
  <Form.Select aria-label="Default select example" className='mt-4'
    value={fromCurrency}
    onChange={(e)=>setFromCurrency(e.target.value)}
  >
       
  {
  currencyList&&currencyList.length > 0 ? (
    currencyList.map((currency, index) => (
      <option key={index+1} className='m-1'>{currency.symbol}</option>
    ))
  ) : (
    <option>Loading...</option>
  )
}
  </Form.Select>
  </div>
  </div>
 
  <div className='d-flex align-item-center'>
    <div className="mr-2 mt-4 p-2" style={{width:'15%'}}>
   <p className='m-0'>To</p>
  </div>
  <div style={{width:'85%'}}>
  <Form.Select aria-label="Default select example" className='mt-4'
    value={toCurrency}
    onChange={(e)=>setToCurrency(e.target.value)}
  >
       
  {
  currencyList&&currencyList.length > 0 ? (
    currencyList.map((currency, index) => (
      <option key={index+1} className='m-1'>{currency.symbol}</option>
    ))
  ) : (
    <option>Loading...</option>
  )
}
  </Form.Select>
  </div>
  </div>
  <InputGroup className="mt-3">
        <InputGroup.Text>{`Amount in `+(fromCurrency? fromCurrency:'USDC')}</InputGroup.Text>
        <Form.Control aria-label="Amount (to the nearest dollar)"  onChange={(e)=>setAmount(e.target.value)}/>
   </InputGroup>
   <Button
      type="submit"
      className=" btn btn-block btn-warning mt-3"
      style={{ display: 'block', margin: 'auto' }}
      disabled={(toCurrency==null)||(fromCurrency==null)||(!amount)}
    >
      Convert
    </Button>
  </Form>
</FormContainer>
  )
}

export default CurrencyInput
