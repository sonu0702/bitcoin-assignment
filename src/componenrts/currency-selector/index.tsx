import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { getCurrencyData, getCurrencyRates } from '../../service/api/currency';
import { TStore } from '../../service/redux/store';
import { CurrencyChart } from '../charter/currency-chart';


export const CurrencySelector = (props: {}) => {
    const [currency, setCurrency] = useState('USD')
    const onSelected = (value: string) => {
        console.log(value);
        getCurrencyData({
            type: 'get_Currency',
            payload: value
        })
        setCurrency(value)
    }
    const currencyData = useSelector((store: TStore) => {
        return {
            currencyData: store.currencyData
        }
    })
    const currencyRates = useSelector((store: TStore) => {
        return {
            currencyRates: store.currencyRates
        }
    })
    useEffect(() => {
        getCurrencyData({
            type: 'get_Currency',
            payload: 'USD'
        })
        getCurrencyRates({
            type: 'get_Currency_rates',
            payload: {}
        })
    }, [])
    return (<div>
        <div className='left'>
            <h2>1 Bitcoin Equals</h2>
            <select title='Currency' name='currency' defaultValue={"USD"} onChange={(e) => onSelected(e.target.value)}>
                <option key={'USD'} value={'USD'}>United States Dollar (USD)</option>
                <option key={'GBP'} value={'GBP'}> British Pound Sterling (GBP)</option>
                <option key={'EUR'} value={'EUR'}>Euro (EUR)</option>
            </select>
            <h1>
                {currencyRates ? (currencyRates.currencyRates as any)[currency] : null}
            </h1>
        </div>
        <div className='right'>
            <CurrencyChart title={currency} data={currencyData.currencyData}/>
        </div>
    </div>
    )
}