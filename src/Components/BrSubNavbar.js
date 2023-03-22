import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import TabelaCampeonatoBr from './TabelaCampeonatoBr.js';
import Artilharia from './Artilharia.js';
import PartidasBr from './PartidasBr.js';

function BrSubNavbar(){
    return(
        <Tabs isLazy size='md' align='center' variant='soft-rounded' colorScheme='green'>
        <TabList style={{margin: '1vw 0vw'}}>
          <Tab>Tabela</Tab>
          <Tab>Partidas</Tab>
          <Tab>Artilharia</Tab>
        </TabList>
        <TabPanels>
            <TabPanel>
              <TabelaCampeonatoBr />
            </TabPanel>
            <TabPanel>
              <PartidasBr />            
            </TabPanel>
            <TabPanel>
              <Artilharia />  
            </TabPanel>
        </TabPanels>
      </Tabs>
    )
  }
  export default BrSubNavbar;
  