import { useState, useEffect } from 'react';
import { UnorderedList, Button, CircularProgress} from '@chakra-ui/react';
import PartidasCards from './PartidasCard';
import TelaErro from './TelaErro';

function PartidasBr(){
    const [listaPartidas, setListaPartidas] = useState([]);
    const [rodada, setRodada] = useState(1);
    const [carregarJogos, setCarregarJogos] = useState(false); 

    useEffect(() => {
        fetch('https://api.api-futebol.com.br/v1/campeonatos/10/rodadas/' + rodada, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer live_1ec35f7cb2b9fc095ee0bbb4d8b217' // live_1ec35f7cb2b9fc095ee0bbb4d8b217 test_57f4b4078342e19775b40c6d5be1c8
            }
        }).then(resp => resp.json()).then(resp => {
            setListaPartidas(resp.partidas);      
        });

        setTimeout(() => {
            setCarregarJogos(true);
        }, 1000);
    }, [rodada]);

    function proximaRodada(){
        rodada === 38 ?  setRodada(1) : setRodada(rodada + 1);
        setCarregarJogos(false);
    }

    function anteriorRodada(){
        rodada === 1 ?  setRodada(38) : setRodada(rodada - 1);
        setCarregarJogos(false);
    }

    return(
        <>  
        <Button size='sm' colorScheme='green' variant='outline' onClick={anteriorRodada}>Anterior</Button>
            <h1 style={{display: 'inline', 
                        padding: '1.5vw', 
                        fontWeight: 'bolder',
                        fontSize: '1.2em',
                        }}>Rodada {rodada}</h1>
        <Button size='sm' colorScheme='green' variant='outline' onClick={proximaRodada}>Próxima</Button>
        {carregarJogos ? 
        <UnorderedList style={{
            margin: '3vw 0px 0px 0px'
        }}>
            {listaPartidas ? 
                listaPartidas.map((jogo) => jogo.status === "agendado" ? <PartidasCards mandante={jogo.time_mandante.nome_popular} visitante={jogo.time_visitante.nome_popular} placar_mandante={''} placar_visitante={''} /> 
                : <PartidasCards mandante={jogo.time_mandante.nome_popular} visitante={jogo.time_visitante.nome_popular} placar_mandante={jogo.placar_mandante} placar_visitante={jogo.placar_visitante} />
                ) 
                : <TelaErro />
            }
        </UnorderedList>
        : <CircularProgress isIndeterminate size='60px' color='green.300' margin='100px auto' display='block'/>
        }
        </>
    )
}

export default PartidasBr;