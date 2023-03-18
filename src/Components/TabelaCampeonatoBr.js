import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableCaption,
    TableContainer,
    CircularProgress
  } from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import TabelaCampeonatoBrRow from './TabelaCampeonatoBrRow';
  
function TabelaCampeonatoBr(){
    const [listaBrasileiro, setListaBrasileiro] = useState([]);
    const [carregarTabela, setCarregarTabela] = useState(false);  
    
    useEffect(() => {
        fetch('https://api.api-futebol.com.br/v1/campeonatos/10/tabela', {
            method: 'GET', 
            headers: {
                Authorization: 'Bearer test_57f4b4078342e19775b40c6d5be1c8'
            }
        }).then(resp => resp.json()).then(setListaBrasileiro);
        setTimeout(() => { 
            setCarregarTabela(true);
        }, 1000);
    }, [])
      

    return <TableContainer style={{
        margin: '30px auto',
        textAlign: 'center',
        width: '100%'
    }}>
    {carregarTabela ? 
    <>
        <Table variant='striped' size='sm' colorScheme='green' width='80%' margin='auto'>   
            <TableCaption>Tabela Campeonato Brasileiro 2023</TableCaption>
            <Thead>
                <Tr>
                <Th>Posição</Th>
                <Th>Time</Th>
                <Th>Pontos</Th>
                <Th>Jogos</Th>
                <Th>Vitorias</Th>
                <Th>Empates</Th>
                <Th>Derrotas</Th>
                <Th>G.F</Th>
                <Th>G.S</Th>
                <Th>S.G</Th>
                </Tr>
            </Thead>
            <Tbody>
                {listaBrasileiro.map(times => 
                    <TabelaCampeonatoBrRow Pos={times.posicao + '°'} Time={times.time.nome_popular} Pontos={times.pontos} Jogos={times.jogos} Vitorias={times.vitorias} Empates={times.empates} Derrotas={times.derrotas} GolsFeitos={times.gols_pro} GolsSofrids={times.gols_contra} SaldoGols={times.saldo_gols} />
                )}
            </Tbody> 
        </Table>
    </>
    : <CircularProgress isIndeterminate size='60px' color='green.300' margin='100px auto'/>}
    </TableContainer>
}
export default TabelaCampeonatoBr;