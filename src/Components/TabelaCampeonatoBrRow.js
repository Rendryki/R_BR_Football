import { Tr, Td } from '@chakra-ui/react'
  
function TabelaCampeonatoBrRow({Pos, Time, Pontos, Jogos, Vitorias, Empates, Derrotas, GolsFeitos, GolsSofrids, SaldoGols, Key}){
    return(
      
        <Tr key={Key}>
          <Td key={Key + 'P'}>{Pos}</Td>
          <Td key={Key + 'T'}>{Time}</Td>
          <Td key={Key + 'PTS'}>{Pontos}</Td>
          <Td key={Key + 'J'}>{Jogos}</Td>
          <Td key={Key + 'V'}>{Vitorias}</Td>
          <Td key={Key + 'E'}>{Empates}</Td>
          <Td key={Key + 'D'}>{Derrotas}</Td>
          <Td key={Key + 'GF'}>{GolsFeitos}</Td>
          <Td key={Key + 'GS'}>{GolsSofrids}</Td>
          <Td key={Key + 'SG'}>{SaldoGols}</Td>
        </Tr>
    )
}
export default TabelaCampeonatoBrRow;