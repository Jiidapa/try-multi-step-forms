import React, { useState, createContext } from 'react'

export const StoreContext = createContext({})

export const StoreContextProvider = ({ children }) => {

    const [information, setInformation] = useState({ firstName: undefined, lastName: undefined, nickname: undefined })
    const [account, setAccount] = useState({ email: undefined, password: undefined, confirmPassword: undefined })

    const store = {
        information: [information, setInformation],
        account: [account, setAccount],
    }
    console.log(store)
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}