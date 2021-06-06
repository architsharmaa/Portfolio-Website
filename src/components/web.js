import React from 'react';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Heading} from '@chakra-ui/layout';
import { Spacer, Collapse, Button,Center } from '@chakra-ui/react';
import { ListItem, UnorderedList } from "@chakra-ui/react";
import { Image } from '@chakra-ui/image';

import truck from '../assets/projectss/truck.jpeg';

function Web(){
    
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    const [show, setShow] = React.useState(false)
    const handleToggle = () => setShow(!show)

 return(

    <Box alignSelf="flex-start" px="16" py="8">

    <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%"
    maxWidth={{ base: "30vh", md: "30vh", lg: "130vh", xl: "130vh" }}>

        <Heading fontWeight="extrabold" color="cyan.500" size="xl" 
        mr={isNotSmallerScreen ? "20" : "0"}>
            Web Full Stack
        </Heading>
        <Spacer />
        
        <Box maxW="sm" borderWidth="8px" borderRadius="lg" 
        overflow="hidden" mr={isNotSmallerScreen ? "590" : "0"}
        mt={isNotSmallerScreen ? "0" : "10"}
         >
                <Image src={truck} alt='StockInfo' py ="3" px='8' />

                <Box px='5'
                alignItems='baseline'>
                <Heading size='md'>
                StockInfo - Warehouse Maintenance
                </Heading>
                </Box>
                <Box px='5' py='3'>
                    <Heading size ='xs'>
                        REACTJS | DJANGO REST FRAMEWORK | BS4
                    </Heading>
                </Box>

                <Box>

                    <Collapse startingHeight={100} in={show}>
                    <UnorderedList px='5' py = '3'>
                    <ListItem>
                    A warehouse management platform that lets you check on the
                    current stocks in the warehouse and also the availability of the
                    stocks at vendor's store for future purchase planning 
                    </ListItem>
                    <ListItem>
                    The frontend is based on ReactJS with DB Sheets API for current 
                    stocks. The vendor's stock is checked using a DRF API whose database
                    is updated using Python Scraper.
                    </ListItem>
                    </UnorderedList>
                    </Collapse>
                    <Center>
                    <Button size="sm" onClick={handleToggle} mt="1rem">
                    Show {show ? "Less" : "More"}
                    </Button>
                    </Center>



                </Box>
         
        </Box> 
        </Flex>
        </Box>
    
 );

}
export default Web;