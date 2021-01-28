import '../styles/globals.css'
import '../styles/style.css'

import reducer, {initialState} from '../contextApi/reducer.js'
import {StateProvider } from "../contextApi/StateProvider.js"

if (typeof window !== "undefined") {
  require("jquery");
  require("popper.js");
  require("bootstrap");
}

import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap';
import Layout from '../components/Layout'


function MyApp({ Component, pageProps }) {
  return (
   
       
          <Layout>
            <Component {...pageProps} />
          </Layout>
       
    
  )
}

export default MyApp
