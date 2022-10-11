const Cuadro = ({valor, alHacerClick, turno}) => {



/*
    const alHacerClick = () =>{
      
       
       // (turno === null && valor === null) == activa();
       if (turno!==null && valor === null){
        activa();
       }
    }

   */
   
   
    return(
        
        <botton 
            className="border-2 border-black h-7 w-7 bg-blue-400" 
         
      
          onClick={() => alHacerClick ()}
        >
        
        {valor}
        </botton>
       
        
    )
    

    
}

export default Cuadro