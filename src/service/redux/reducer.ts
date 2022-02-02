import Action from "./actions";
import Store, { TStore } from "./store";


function storeReducer(store: TStore = Store, action: Action): TStore {
    switch (action.type) {
        case 'Store_Currency':
            return {
                currencyData: action.payload,
                currencyRates: store.currencyRates
            }
        case 'Store_Currency_rates':
            return {
                currencyData: store.currencyData,
                currencyRates: action.payload
            }
        default:
            return store;
    }
}



export default storeReducer;