import { ListItem } from '@chakra-ui/react';
  
function PartidasCards({mandante, visitante, placar_mandante, placar_visitante}){
    return(
         
             <ListItem style={{
                listStyle: 'none',
                borderBottom: '1px solid green',
                fontSize: '2.5vw',
                letterSpacing: '0.1em',
                display: 'grid',
                gridTemplateColumns: '40% 20% 40%', 
                width: '90%',
                justifyContent: 'center'
             }}><div className='col1'>{mandante}</div> <div className='col2'>{placar_mandante} X {placar_visitante}</div> <div className='col3'>{visitante}</div> </ListItem>
            
    )
}
export default PartidasCards;