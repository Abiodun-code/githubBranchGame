import * as React from "react"
import { View, Text, StyleSheet } from "react-native"
import { childProp, dataProps } from "./types"

const DataContext = React.createContext({} as dataProps)

const DataProvider = ({children}:childProp ) => {
  return (
    <DataContext.Provider value={{}}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider