import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import FormContainer from '../components/formContainer.js'
import Loader from '../components/Loader.js'
import Message from '../components/Message.js'
import {Button,Table} from 'react-bootstrap'
import axios from 'axios'
import { useParams } from 'react-router-dom'
function CurrencyOutput() {
const [error,setError]=useState(false)
const [errorMessage,setErrorMessage]=useState(null)
const [loading,setLoading]=useState(false)
const [convertedPrice,setconvertedPrice]=useState(null)
const {fromCurrency,toCurrency,amount}=useParams()
useEffect(()=>{
    const convertCurrency=async()=>{
        try{
          const config = {
            headers: {
              'Content-Type': 'application/json'
            },
          }
         setLoading(true)
         const {data}=await axios.post('/api/currency/convert',{fromCurrency,toCurrency,amount},config)
         setLoading(false)
         setconvertedPrice(data)
        }catch(error){
         setLoading(false)
         setError(true)
         setErrorMessage(error.message)
        }
      };
      convertCurrency();
      },[amount,fromCurrency,toCurrency])
  return (
<FormContainer>
  <h2 className='text-center mt-1'>Output</h2>
  {loading  && <Loader/>}
  {error && <Message variant='danger'>{errorMessage}</Message>}
  {!loading && !error && (<Table striped bordered hover style={{
    position: 'fixed',
      top: '30%',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 'fit-content', }}>
      <thead >
        <tr>
          <th className='text-center mt-10' style={{textSize:'12px'}}>{amount} &#160;{fromCurrency} &nbsp; &nbsp; =&nbsp; &nbsp; {convertedPrice}&nbsp; {toCurrency}</th>
          
        </tr>
      </thead>
      </Table>)}
    <Button className=" btn btn-block btn-warning mt-10"
    style={{
      display: 'block', margin: 'auto',
      position: 'fixed',
      bottom: '40%',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 'fit-content', 
    }}
     >
     <Link style={{textDecoration:'none', color:'inherit' }} to='/'> Try More Conversion</Link>
  </Button>
</FormContainer>
  )
}

export default CurrencyOutput
