import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Brasileiro from '../Pages/Brasileirao';
import Home from '../Pages/Home';

function Navbar(){
    return(
        <Tabs isLazy size='lg' variant='soft-rounded' colorScheme='green'>
        <TabList style={{
          padding: '10px',
          borderBottom: 'solid 2px rgba(0, 128, 0, 0.705)',
          backgroundColor: 'lightyellow'
        }}>
          <Tab> &#9917; Home</Tab>
          <Tab>Brasileirão 2023</Tab>
          <Tab>Copa do Brasil 2023</Tab>
        </TabList>
        <TabPanels>
            <TabPanel>
              <Home/>
            </TabPanel>
            <TabPanel>
              <Brasileiro/>
            </TabPanel>
        </TabPanels>
      </Tabs>
    )
  }
  export default Navbar;
  