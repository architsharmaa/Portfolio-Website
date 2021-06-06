import React from 'react';
import { useMediaQuery } from '@chakra-ui/media-query';
import Icon from '@chakra-ui/icon';
import { Box, Flex, Heading, HStack} from '@chakra-ui/layout';
import { Spacer, Collapse, Button, Center } from '@chakra-ui/react';
import { ListItem, UnorderedList } from "@chakra-ui/react";
import { Image } from '@chakra-ui/image';
import { FaGithub, FaLink } from 'react-icons/fa';

import rossman from '../assets/projectss/rossman.png';
import cleanmessy from '../assets/projectss/cleanmessy.png';

function ProjectPlatforms(){
    
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    const [show, setShow] = React.useState(false)
    const handleToggle = () => setShow(!show)



 return(

    <Box alignSelf="flex-start" px="16" py="8">


    <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%"
    maxWidth={{ base: "30vh", md: "30vh", lg: "130vh", xl: "130vh" }}>

        <Heading fontWeight="extrabold" color="cyan.500" size="xl" 
        mr={isNotSmallerScreen ? "20" : "0"}>
            Web Apps (ML)
        </Heading>
        <Spacer />
        
        <Box maxW="sm" borderWidth="8px" borderRadius="lg" 
        overflow="hidden" mr={isNotSmallerScreen ? "30" : "0"}
        mt={isNotSmallerScreen ? "0" : "10"}
        >
                <Image src={rossman} alt='Rossman Sales' py ="3" px='3' />

                <Box px='5'
                alignItems='baseline'>
                <Heading size='md'>
                Sales Analyses and Prediction App
                </Heading>
                </Box>
                <Box px='5' py='3'>
                    <Heading size ='xs'>
                        DATA ANALYSIS | PREDICTION | VISULAIZTION | STREAMLIT
                    </Heading>
                </Box>

                <Box>
                <Collapse startingHeight={30} in={show}>
                    <UnorderedList px='5' py = '3'>
                    <ListItem>
                    This project is a conversion of a Kaggle Competition (Rossman Sales)
                    into a user friendly app for analyses as well as prediciton reterival
                    based on multiple parameters 
                    </ListItem>
                    <ListItem>
                    The web app focuses on Data Analytics, Prediciton and is hosted on heroku.
                    </ListItem>
                    </UnorderedList>
                    </Collapse>
                    <Center>
                    <Button size="sm" onClick={handleToggle} mt="1rem">
                    Show {show ? "Less" : "More"}
                    </Button>
                    </Center>
                </Box>

                <Box px = {isNotSmallerScreen ? "0" : "8"}
                py = '3'>
                <Center>
                <HStack spacing={isNotSmallerScreen ? "10" : "8"}>
                    <Icon as = {FaGithub} boxSize={isNotSmallerScreen ? "8" : "8"} 
                    onClick={() => window.open("https://github.com/architsharmaa/Sales-Analyses-and-Prediction-App-using-Streamlit")}/>
                    <Icon as ={FaLink} boxSize={isNotSmallerScreen ? "8" : "8"} 
                    onClick={() => window.open("https://rossman-streamlit.herokuapp.com/")}/>
                </HStack>
                </Center>
                </Box>         
        </Box>
    
        <Box maxW="sm" borderWidth="8px" borderRadius="lg" 
        overflow="hidden" mr={isNotSmallerScreen ? "178" : "0"}
        mt={isNotSmallerScreen ? "0" : "10"}
         >
                <Image src={cleanmessy} alt='Clean vs Messy' py ="3" px='3' />

                <Box px='5'
                alignItems='baseline'>
                <Heading size='md'>
                Clean or Messy
                </Heading>
                </Box>
                <Box px='5' py='3'>
                    <Heading size ='xs'>
                        CLASSIFICATION | SELENIUM | REACTJS | FLASK | STREAMLIT
                    </Heading>
                </Box>

                <Box>
                    <Collapse startingHeight={110} in={show}>
                    <UnorderedList px='5' py = '3'>
                    <ListItem>
                    The project attempts to classify a given image as clean or messy. 
                    </ListItem>
                    <ListItem>
                    This is an exploratory project wherein we tried to explore various approaches for 
                    training and deploying a ML based binary classification model 
                    to be used by an end-user.
                    </ListItem>
                    <ListItem>
                    The project uses Selenium bot to create image dataset, flask server for fast.ai model
                    and frontend is ReactJS and Streamlit.
                    </ListItem>
                    </UnorderedList>
                    </Collapse>
                    <Center>
                    <Button size="sm" onClick={handleToggle} mt="1rem" >
                    Show {show ? "Less" : "More"}
                    </Button>
                    </Center>
                </Box>

                <Box px = {isNotSmallerScreen ? "110" : "8"}
                py = '1'>
                <Center>
                <HStack spacing={isNotSmallerScreen ? "10" : "8"}>
                    <Icon as = {FaGithub} boxSize={isNotSmallerScreen ? "8" : "8"} 
                    onClick={() => window.open("https://github.com/deepklarity/clean-or-messy")}/>
                    <Icon as ={FaLink} boxSize={isNotSmallerScreen ? "8" : "8"} 
                    onClick={() => window.open("https://github.com/deepklarity/clean-or-messy")}/>
                    <Icon as ={FaLink} boxSize={isNotSmallerScreen ? "8" : "8"} 
                    onClick={() => window.open("https://cleanvsmessy.herokuapp.com/")}/>
                </HStack>
                </Center>
                </Box>         
        </Box>
    
    </Flex>            
    
</Box>

 );

}
export default ProjectPlatforms;