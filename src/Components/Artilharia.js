import { useState, useEffect } from 'react';
import TelaErro from './TelaErro';
import TabelaArtilhariaRow from './TabelaArtilhariaRow';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableCaption,
    CircularProgress
  } from '@chakra-ui/react'

function Artilharia(){
    const [listaArtilheiros, setlistaArtilheiros] = useState([]);
    const [carregarArtilheiros, setCarregarArtilheiros] = useState(false);  
    
    useEffect(() => {
        fetch('https://api.api-futebol.com.br/v1/campeonatos/10/artilharia', {
            method: 'GET', 
            headers: {
                Authorization: 'Bearer live_1ec35f7cb2b9fc095ee0bbb4d8b217' // live_1ec35f7cb2b9fc095ee0bbb4d8b217 test_57f4b4078342e19775b40c6d5be1c8
            }
        }).then(resp => resp.json()).then(setlistaArtilheiros);

        setTimeout(() => { 
            setCarregarArtilheiros(true);
        }, 1000);
    }, [])

    return(
       <>{carregarArtilheiros ?
            listaArtilheiros.map ?        
       <Table variant='striped' size='md' colorScheme='green' width='70%' margin='auto'>   
            <TableCaption>Tabela de Artilheiros do Campeonato Brasileiro 2023</TableCaption>
            <Thead>
                <Tr>
                    <Th>Jogador</Th>
                    <Th>Gols</Th>
                </Tr>
            </Thead>
            <Tbody>
                {
                listaArtilheiros.map((artilheiro, index) => <TabelaArtilhariaRow Key={index} Jogador={artilheiro.atleta.nome_popular} Gols={artilheiro.gols} />)
                }
            </Tbody> 
        </Table>
        : <TelaErro/>
        : <CircularProgress isIndeterminate size='60px' color='green.300' margin='100px auto'/> }
       </>
    )
}

export default Artilharia;