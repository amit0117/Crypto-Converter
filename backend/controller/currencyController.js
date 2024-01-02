import axios from "axios";
import  {headerconfig} from "../config/header.js";
import expressAsyncHandler from "express-async-handler";
import dotenv from 'dotenv'
dotenv.config()


const headers=headerconfig.headers
const COIN_MARKET_CAP_URI=process.env.COIN_MARKET_CAP_URI
const COIN_MARKET_CAP_ID_URI=process.env.COIN_MARKET_CAP_ID_URI
const LIMIT=process.env.LIMIT

const fetchCurrencyLists=expressAsyncHandler(async(req,res)=>{
  
    try {
        const response = await axios.get(`${COIN_MARKET_CAP_URI}?limit=${LIMIT}`, {
          headers
        });
    
        const json = response.data;
        res.json(json);
    
      } catch (error) {
        res.status(404)
    
        throw new Error(`${error.message}`)
      }
    })
    const getCurrencyById=expressAsyncHandler(async(req,res)=>{
        const {id}=req.params
        try {
            const response = await axios.get(`${COIN_MARKET_CAP_ID_URI}?id=${id}`, {
              headers
            });
            const json = response.data;
            res.json(json);
          } catch (error) {
            res.status(404)
            throw new Error(`${error.message}`)
          } 
    })
    const currencyConversion=expressAsyncHandler(async(req,res)=>{
        const {fromCurrency,toCurrency,amount}=req.body
        try {
            const response = await axios.get(`${COIN_MARKET_CAP_ID_URI}?symbol=${fromCurrency},${toCurrency}`, {
              headers
            });
            const json = response.data;
            const fromAmount=json.data[fromCurrency].quote.USD.price
            const toAmount=json.data[toCurrency].quote.USD.price
            const convertedAmount=(fromAmount/toAmount)*amount
            res.json(convertedAmount);
          } catch (error) {
            res.status(404)
            throw new Error(`${error.message}`)
          } 
          
    })
    export {fetchCurrencyLists,getCurrencyById,currencyConversion}