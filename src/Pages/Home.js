import { useState } from "react";
import { CircularProgress, SimpleGrid } from '@chakra-ui/react';
import CampeonatosCards from "../Components/CampeonatosCards";
import MensagemHome from "../Components/MensagemHome";

function Home(){
    const [message, setMessage] = useState(false)
    setTimeout(() => {
        setMessage(true);
    }, 1000)
         
   return (
    <div style={{
        margin: '30px auto',
        textAlign: 'center',
        width: '80%'
    }}> 
    {message ? 
    <>  
        <MensagemHome/>
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
        <CampeonatosCards NomeCampeonato='Campeonato Brasileiro 2023' ImagemTamanho='220px' ImagemCampeonato={require('../Images/brasileirao-serie-a-removebg-preview.png')}/>
        <CampeonatosCards NomeCampeonato='Copa do Brasil 2023' ImagemTamanho='250px' ImagemCampeonato={require('../Images/logo-copa-do-brasil-taca-1024-removebg-preview.png')}/>
        </SimpleGrid>
    </>
    : <CircularProgress isIndeterminate size='60px' color='green.300' margin='100px 0px'/>}</div>
   )
}
export default Home;