import { Heading, Card, CardHeader, CardBody, CardFooter, Text} from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';

function CampeonatosCards({NomeCampeonato, ImagemCampeonato, CampeonatoDesc, ImagemTamanho}){
   return (
    <>
        <Card style={{
            width: '100%',
            margin: '30px 0px'
        }}>
            <CardHeader>
                <Heading size='lg'>{NomeCampeonato}</Heading>
            </CardHeader>
            <CardBody>
                <Image src={ImagemCampeonato} margin="auto" width={ImagemTamanho} alt={NomeCampeonato} />
            </CardBody>
            <CardFooter>                  
                <Text fontSize='xl'>{CampeonatoDesc}</Text>
            </CardFooter>
        </Card>
    </>
   )
}
export default CampeonatosCards;