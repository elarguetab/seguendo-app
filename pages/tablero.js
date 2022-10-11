import { useContext, useState } from "react"
import {AlertContext} from './context/AlertProvider'
import Cuadro from './cuadro'

const Tablero = () => {
    
    const [cuadros, setCuadros] = useState(Array(9).fill(''))
    const [turno, setTurno] = useState('X')
    const [ganador, setGanador]=useState()
    const [ralla, setRalla]= useState([])
    const [cambiarColor,setCambiarColor]= useState(false)

    const alert = useContext(AlertContext)

    const changeColor =() => {

    }
/*
    const calculaGanador = (mytablero) => {

    } */

    const reiniciaJuego = ( ) => {
      
    }
/*
    const pintaFigura = (indexItem) =>{
        if(cuadros[indexItem] !== ''){
            alert.show{'Tablero','Casilla ya fue clickeada'}
            return;
        }
    }¨*/
    
    const pintaFigura = (indexItem) => {

        if(cuadros[indexItem] !== ''){
            alert.show ('Tablero','Casilla ya fue clickeada')
            return;
        }

        const misCuadritos = cuadros.slice()
        misCuadritos.splice(indexItem, 1, turno)
        setCuadros(misCuadritos)
   
       
        if(turno === 'X'){
            setTurno('O')
        }else{
            setTurno('X')
        }


    } 


   
    
    
    

    //funcion de de calcula ganador 

    const calculaGanador = (mytablero)=>{


        const jugadasGanadoras=[
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 7, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for(let indiceJugada = 0; indiceJugada < jugadasGanadoras.length; indiceJugada++ ){
            const [a, b, c] = jugadasGanadoras[indiceJugada];
            if(mytablero[a] && mytablero[a] === mytablero[b] && mytablero[a] === mytablero[c]){
                return mytablero[a];
            }
            return "";
        }

    }

   




    return (
        <div>
            <span>{'el ganador es: ' +calculaGanador(cuadros)}</span>
            <br />
          
        <div className=" grid grid-cols-3 gap-0 " >
            
        {
            cuadros.map((item, indexItem)=>{
                
               
               
                return <Cuadro
                         key={indexItem} 
                         valor={item}
                         
                         alHacerClick={() => pintaFigura(indexItem)}
                         
                         />
            
            

                })
            
        }
           
           
        </div>
        <button onClick={() =>  reiniciaJuego ()} >REINICIAR</button>
        </div>
     ) 

}






export default Tablero

