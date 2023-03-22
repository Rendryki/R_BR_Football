import { useState } from "react";
import { CircularProgress } from '@chakra-ui/react';
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
        <CampeonatosCards NomeCampeonato='Campeonato Brasileiro 2023' ImagemTamanho='220px' ImagemCampeonato={require('../Images/brasileirao-serie-a-removebg-preview.png')}  
        CampeonatoDesc='Os 20 principais Clubes do Brasil disputando um dos principais torneios de pontos corridos do mundo. Não perca a chance de acompanhar seu time favorito em busca do titulo de Campeão Brasileiro!'/>
    </>
    : <CircularProgress isIndeterminate size='60px' color='green.300' margin='100px 0px'/>}</div>
   )
}
export default Home;