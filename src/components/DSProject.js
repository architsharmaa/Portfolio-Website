import React from 'react';
import { useMediaQuery } from '@chakra-ui/media-query';
import Icon from '@chakra-ui/icon';
import { Box, Flex, Heading, HStack} from '@chakra-ui/layout';
import { Spacer,Collapse, Button, Center } from '@chakra-ui/react';
import { ListItem, UnorderedList } from "@chakra-ui/react";
import { Image } from '@chakra-ui/image';
import { FaGithub, FaLink } from 'react-icons/fa';

import stocks from '../assets/projectss/stock.jpg';
import credit from '../assets/projectss/credit.jpg';
import boston from '../assets/projectss/boston.jpg';

function DSProject(){
    
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    const [show, setShow] = React.useState(false)
    const handleToggle = () => setShow(!show)

 return(

    <Box alignSelf="flex-start" px="16" py="8">


    <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%"
    maxWidth={{ base: "30vh", md: "30vh", lg: "130vh", xl: "130vh" }}>

        <Heading fontWeight="extrabold" color="cyan.500" size="xl" 
        mr={isNotSmallerScreen ? "10" : "0"}>
            Data Science
        </Heading>
        <Spacer />
        
        <Box maxW="sm" borderWidth="8px" borderRadius="lg" 
        overflow="hidden" mr={isNotSmallerScreen ? "30" : "0"}
        mt={isNotSmallerScreen ? "0" : "10"}
       >
                <Image src={stocks} alt='Stocks Springer' py ="3" px='3' />

                <Box px='5'
                alignItems='baseline'>
                <Heading size='md'>
                Stock Price Prediction
                </Heading>
                </Box>
                <Box px='5' py='3'>
                    <Heading size ='xs'>
                        FINANCE | LSTM | NLP | PYTHON
                    </Heading>
                </Box>

                <Box>
                <Collapse startingHeight={50} in={show}>
                    <UnorderedList px='5' py = '3'>
                    <ListItem>
                    An implementation of stock price prediction using LSTM and
                    ARIMAX algorithms for stock price prediction 
                    </ListItem>
                    <ListItem>
                    ARIMAX algorithms for stock price prediction Added additional 
                    feature of sentiment by scrapping news from multiple stock websites.
                    </ListItem>
                    </UnorderedList>
                    </Collapse>
                    <Center>
                    <Button size="sm" onClick={handleToggle} mt="1rem">
                    Show {show ? "Less" : "More"}
                    </Button>
                    </Center>
                </Box>

                <Box px = {isNotSmallerScreen ? "110" : "8"}
                py = '3'>
                    <Icon as ={FaLink} boxSize={isNotSmallerScreen ? "8" : "8"} 
                    onClick={() => window.open("https://link.springer.com/chapter/10.1007/978-981-15-9509-7_32")}/>
                </Box>         
        </Box>


        <Box maxW="sm" borderWidth="8px" borderRadius="lg" 
        overflow="hidden" mr={isNotSmallerScreen ? "30" : "0"}
        mt={isNotSmallerScreen ? "0" : "10"}
        >
                <Image src={credit} alt='Credit Card' py ="3" px='3' />

                <Box px='5'
                alignItems='baseline'>
                <Heading size='md'>
                Credit Card Fraud Detection
                </Heading>
                </Box>
                <Box px='5' py='3'>
                    <Heading size ='xs'>
                        FINANCE | RANDOM FOREST | PYTHON
                    </Heading>
                </Box>

                <Box>
                <Collapse startingHeight={40} in={show}>
                    <UnorderedList px='5' py = '3'>
                    <ListItem>
                    A basic project to recognise fraudulent credit card transaction 
                    </ListItem>
                    <ListItem>
                    Implemented using random forest algorithm.
                    </ListItem>
                    </UnorderedList>
                    </Collapse>
                    <Center>
                    <Button size="sm" onClick={handleToggle} mt="1rem">
                    Show {show ? "Less" : "More"}
                    </Button>
                    </Center>
                </Box>

                <Box px = {isNotSmallerScreen ? "110" : "8"}
                py = '3'>
                <HStack spacing={isNotSmallerScreen ? "10" : "8"}>
                    <Icon as ={FaLink} boxSize={isNotSmallerScreen ? "8" : "8"} 
                    onClick={() => window.open("")}/>
                </HStack>
                </Box>         
        </Box>

        <Box maxW="sm" borderWidth="8px" borderRadius="lg" 
        overflow="hidden" mr={isNotSmallerScreen ? "30" : "0"}
        mt={isNotSmallerScreen ? "0" : "10"}
         >
                <Image src={boston} alt='Credit Card' py ="3" px='3' />

                <Box px='5'
                alignItems='baseline'>
                <Heading size='md'>
                Boston Housing Analysis and Prediciton
                </Heading>
                </Box>
                <Box px='5' py='3'>
                    <Heading size ='xs'>
                        DATA ANALYSIS | PREDICTION
                    </Heading>
                </Box>

                <Box>
                <Collapse startingHeight={55} in={show}>
                    <UnorderedList px='5' py = '3'>
                    <ListItem>
                    A basic project to do analysis and predciton on data from 
                    Boston Housign dataset Kaggle 
                    </ListItem>
                    <ListItem>
                    Implemented on google colab
                    </ListItem>
                    </UnorderedList>
                    </Collapse>
                    <Center>
                    <Button size="sm" onClick={handleToggle} mt="1rem">
                    Show {show ? "Less" : "More"}
                    </Button>
                    </Center>
                </Box>

                <Box px = {isNotSmallerScreen ? "110" : "8"}
                py = '3'>
                <Center>
                <HStack spacing={isNotSmallerScreen ? "10" : "8"}>
                    <Icon as ={FaGithub} boxSize={isNotSmallerScreen ? "8" : "8"} 
                    onClick={() => window.open("https://github.com/architsharmaa/Boston-Housing-Analysis")}/>
                </HStack>
                </Center>
                </Box>         
        </Box>
    
    
    </Flex>            
    
</Box>

 );

}
export default DSProject;