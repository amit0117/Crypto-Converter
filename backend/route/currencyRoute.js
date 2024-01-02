import  express from "express";
import { getCurrencyById,fetchCurrencyLists,currencyConversion } from "../controller/currencyController.js";
const router=express.Router()
router.get('/',fetchCurrencyLists)
router.get('/:id',getCurrencyById)
router.post('/convert',currencyConversion)
export default router