import React from 'react'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../Redux-Store/store'
import { useDataHook } from '../Redux-Store/Vendors/T-shirts/actions-reducers'
import DisplayFilter from "../components/DisplayFilter"
import DisplayProducts from "../components/DisplayProducts"
import DisplayCart from "../components/DisplayCart"

function Wrap() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
  const App = () => {
    const items = useDataHook()
    return (
      <div className="main">
          <DisplayFilter />
          <DisplayProducts goods = {items} />
          <DisplayCart />
      </div>
    )
  }

export default Wrap