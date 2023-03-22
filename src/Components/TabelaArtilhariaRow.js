import { Tr, Td } from '@chakra-ui/react'
  
function TabelaArtilhariaRow({Jogador, Gols, Key}){
    return(
      
        <Tr key={Key}>
            <Td key={Key + 'J'}>{Jogador}</Td>
            <Td key={Key + 'G'}>{Gols}</Td>
        </Tr>
    )
}
export default TabelaArtilhariaRow;