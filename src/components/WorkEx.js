import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import { Spacer } from '@chakra-ui/react';

import { Image } from '@chakra-ui/image';
import { ListItem, UnorderedList } from "@chakra-ui/react"

import sciffer from '../assets/workex/sciffer.jpeg';
import deepklarity from '../assets/workex/deepklarity.png';
import esf from '../assets/workex/esf.jpg';
import csir from '../assets/workex/csir.png';


function WorkExp() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
    <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%"
    maxWidth={{ base: "100vh", lg: "130vh", xl: "130vh" }}
    py='20'>
    
    <Box alignSelf="flex-start" px="16" py="8">
        <Heading fontWeight="extrabold" color="cyan.500" size="3xl">
            Work Experience
        </Heading>
        <Spacer />
        <Text fontSize="2xl">
            10+ Months of Professional Work Experience as an Intern
        </Text>
    </Box>
    
    <Box alignSelf="flex-start" 
        mt={isNotSmallerScreen ? "0" : "1"}
        ml={isNotSmallerScreen ? "0" : "10"}>
            <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
                <Box alignSelf='center'>      
                    <Image alignSelf="top"
                    borderRadius='full'
                    backgroundColor="transparent" 
                    boxSize={isNotSmallerScreen ? "70%" : "40%"}    
                    src={sciffer}   />
                </Box>  

                <Flex direction= "column" mt={2} >
                    <Box>
                        <Heading fontWeight="extrabold" color="cyan.500" 
                        size="xl">
                        Sciffer Analytics
                        </Heading>
                    </Box>
                    <Text fontSize="2xl">
                    Data Associate - Intern (Mar 2021 - June 2021)
                    </Text>
                    <UnorderedList>
                    <ListItem>
                    Performed research and feasibility analysis on various open
                    source datasets and algorithms to be implemented in the SAS product. 
                    </ListItem>
                    <ListItem>
                    Developed python scripts to optimize the data collection pipeline 
                    for Machine Learning Models.
                    </ListItem>
                    <ListItem>
                    Contributed to data collection for the ML models.
                    </ListItem>
                    </UnorderedList>
                </Flex>

            </Flex>


            <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
                <Box alignSelf='center'>      
                    <Image alignSelf="top"
                    borderRadius='full'
                    backgroundColor="transparent" 
                    boxSize={isNotSmallerScreen ? "70%" : "40%"}    
                    src={deepklarity}   />
                </Box>  

                <Flex direction= "column" mt={2} >
                    <Box>
                        <Heading fontWeight="extrabold" color="cyan.500" 
                        size="xl">
                        DeepKlarity
                        </Heading>
                    </Box>
                    <Text fontSize="2xl">
                    Python Developer - Intern (Sep 2020 - Nov 2020)
                    </Text>
                    <UnorderedList>
                    <ListItem>
                    Developed machine learning-based web apps for open source
                    domain using streamlit and Machine/Deep Learning models
                    hosting 
                    </ListItem>
                    <ListItem>
                    Automated dataset genration using Selenium.
                    </ListItem>
                    </UnorderedList>
                </Flex>

            </Flex>

            <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
                <Box alignSelf='center'>      
                    <Image alignSelf="top"
                    borderRadius='full'
                    backgroundColor="transparent" 
                    boxSize={isNotSmallerScreen ? "70%" : "40%"}    
                    src={esf}   />
                </Box>  

                <Flex direction= "column" mt={2} >
                    <Box>
                        <Heading fontWeight="extrabold" color="cyan.500" 
                        size="xl">
                        ESF
                        </Heading>
                    </Box>
                    <Text fontSize="2xl">
                    Research and Data Analysis - Intern (June 2020 - Aug 2020)
                    </Text>
                    <UnorderedList>
                    <ListItem>
                    Worked on the reemployment projects for migrant workers
                    in state of Uttar Pradesh effeciently cleaned data set
                    using excel, python
                    </ListItem>
                    <ListItem>
                    Gave a new outline to the project by coming up with a portal-
                    like system to improve data collection and reterival.
                    </ListItem>
                    </UnorderedList>
                </Flex>

            </Flex>

            <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
                <Box alignSelf='center'>      
                    <Image alignSelf="top"
                    borderRadius='full'
                    backgroundColor="transparent" 
                    boxSize={isNotSmallerScreen ? "70%" : "40%"}    
                    src={csir}   />
                </Box>  

                <Flex direction= "column" mt={2} >
                    <Box>
                        <Heading fontWeight="extrabold" color="cyan.500" 
                        size="xl">
                        CSIR - IHBT
                        </Heading>
                    </Box>
                    <Text fontSize="2xl">
                    Machine Learning and Data Engineer - Intern (Dec 2019 - Jan 2020)
                    </Text>
                    <UnorderedList>
                    <ListItem>
                    Contributed to project on plant immune system for detection of pathohgens
                    using Network Guided Forest based on Random Forst Algo .
                    </ListItem>
                    <ListItem>
                    Worked on data structuring and cleaning also contributed to
                    building pyhton scripts for existing model implentation.
                    </ListItem>
                    </UnorderedList>
                </Flex>

            </Flex>


            
            
            

        

 

    </Box>
   
    </Flex>
    );
}

export default WorkExp;
