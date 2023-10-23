import React, { useEffect, useState } from "react"

function useCurrencyInfo(currency) {
    const [currencyInfo, setCurrencyInfo] = useState({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((response) => response.json())//here response is in string so converting to json
            .then((data) => setCurrencyInfo(data[currency]))//object access using square bracket
        console.log(currencyInfo)
    }, [currency])

    return currencyInfo
}
export default useCurrencyInfo
