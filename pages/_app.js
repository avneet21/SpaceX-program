import '../styles/globals.scss'
import {store} from '../redux/store/index.js'
import { Provider } from 'react-redux'
import { useEffect } from 'react'
// import {Home} from './space-progams'

function MyApp({ Component, pageProps }) {
  return  <Provider store={store}><Component {...pageProps} /></Provider>
}

export default MyApp
