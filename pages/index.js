import Head from 'next/head'
import Imagen from 'next/image'
import styles from '../styles/Home.module.css'
import AlertProvider from './context/AlertProvider'
import Tablero from './tablero'



const Totito = () =>{
return (
<div className = "contaqiner mx-auto w-20 h-20 ">
  <AlertProvider>
  <Tablero className ="a-5 p-2"> </Tablero>
  </AlertProvider>

</div>
)
}
export default Totito