import { Heading, Card, CardHeader, CardBody, CardFooter, Button} from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';

function CampeonatosCards({NomeCampeonato, ImagemCampeonato, ImagemTamanho}){
         
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
                <Button colorScheme='green' width='100%'>Acompanhe de perto!</Button>
            </CardFooter>
        </Card>
    </>
   )
}
export default CampeonatosCards;