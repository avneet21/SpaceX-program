import '../styles/globals.scss'
import {store} from '../redux/store/index.js'
import { Provider } from 'react-redux'
import { useEffect } from 'react'
// import {Home} from './space-progams'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
console.log(Component,'Component')
  },[])
  return  <Provider store={store}><Component {...pageProps} /></Provider>
}

export default MyApp
