import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Image} from '@chakra-ui/react'; 

function TelaErro(){
 return (
    <Card align='center' width='100%' backgroundColor='#f8f4f4'>
        <CardHeader>
            <Heading size='lg'> ERRO!</Heading>
        </CardHeader>
        <CardBody>
           <Image src={require('../Images/error-icon-4-removebg-preview.png')} alt='ícone de Erro' />
        </CardBody>
        <CardFooter>
            <Text size='lg'>Alguma coisa deu errado! Volte para a tela inicial.</Text>
        </CardFooter>
    </Card>
 )
}

export default TelaErro;