import React from 'react'
import { render } from 'react-dom'
import store from "./store";
import {Provider} from "react-redux";
import App from '../src/App'

// store.subscribe(()=>console.log(store.getState()));

render(
<Provider store={store}>
      <App />
   </Provider>
   , document.getElementById('root')
)