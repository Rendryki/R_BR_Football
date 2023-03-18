import { Tr, Td } from '@chakra-ui/react'
  
function TabelaCampeonatoBrRow({Pos, Time, Pontos, Jogos, Vitorias, Empates, Derrotas, GolsFeitos, GolsSofrids, SaldoGols}){
    return(
      
        <Tr>
          <Td>{Pos}</Td>
          <Td>{Time}</Td>
          <Td>{Pontos}</Td>
          <Td>{Jogos}</Td>
          <Td>{Vitorias}</Td>
          <Td>{Empates}</Td>
          <Td>{Derrotas}</Td>
          <Td>{GolsFeitos}</Td>
          <Td>{GolsSofrids}</Td>
          <Td>{SaldoGols}</Td>
        </Tr>
    )
}
export default TabelaCampeonatoBrRow;