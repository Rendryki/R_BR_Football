import { Heading, Text, Box} from '@chakra-ui/react';

function MensagemHome(){     
   return (
    <>
        <Box>
            <Heading mb={4}>Bem vindo!</Heading>
            <Text fontSize='xl' maxW='500px' margin='auto'>
                Acompanhe de perto as principais informações dos campeonatos nacionais que você mais ama!
            </Text>
        </Box>
    </>
   )
}
export default MensagemHome;