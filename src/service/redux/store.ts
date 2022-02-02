export type TStore = {
    currencyData: any
    currencyRates: any
}

const ZeroState: TStore = {
    currencyData: {},
    currencyRates: {}

}


export function getZeroState() {
    return JSON.parse(JSON.stringify(ZeroState));
}

export default getZeroState() as TStore;