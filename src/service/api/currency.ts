import { store } from "../";
import { TGetCurrency,TGetCurrencyRates } from '../actions/currency'
import  axios from 'axios'
import moment from 'moment'
export async function getCurrencyData(payload: TGetCurrency) {
    // https://api.coindesk.com/v1/bpi/historical/close.json?currency=EUR&start=2013-09-01&end=2013-09-10
    const end =  moment(new Date()).format('YYYY-MM-DD').toString()
    const start = moment(new Date()).add(-60 , 'days').format('YYYY-MM-DD').toString()
    const response = await axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=${payload.payload}&start=${start}&end=${end}`);  
    const data = response.data.bpi
    store.dispatch({
        type: 'Store_Currency',
        payload: data
    })
}


export async function getCurrencyRates(payload: TGetCurrencyRates) {
    const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await response.data as any;
    const rates = {
        USD : `${data.bpi.USD.rate} ${data.bpi.USD.description}`,
        GBP : `${data.bpi.GBP.rate} ${data.bpi.GBP.description}`,
        EUR : `${data.bpi.EUR.rate} ${data.bpi.EUR.description}`
    }
    store.dispatch({
        type: 'Store_Currency_rates',
        payload: rates
    })

}