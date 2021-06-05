import React from 'react'
import { Box, Flex, Heading, Text} from '@chakra-ui/layout';
import { Spacer } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Image } from '@chakra-ui/image';

import article1 from '../assets/articles/articles1.png';
import article2 from '../assets/articles/article2.png';
import article3 from '../assets/articles/article 3.png'


function Articles() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (

        <Flex direction="column" w="100%"
        maxWidth={{ base: "100vh", lg: "130vh", xl: "130vh" }}
        py ='15'>


                <Box alignSelf="flex-start" px="16" py="8">

                    <Heading fontWeight="extrabold" color="cyan.500" size="3xl">
                        Articles
                    </Heading>
                    <Spacer />
                    <Text fontSize="3xl">
                        Literature Published on Medium
                    </Text>

                </Box>

            <Flex direction={isNotSmallerScreen ? "row" : "column"}>
        
                <Box alignSelf="flex-start" px="16" py="8">
                    

                    <Box maxW="xl" borderWidth="8px" borderRadius="lg" 
                    overflow="hidden"
                    mt={isNotSmallerScreen ? "0" : "10"}
                    onClick={() => window.open("https://medium.com/deepklarity/creating-a-machine-deep-learning-dataset-from-google-images-using-selenium-e9e8ed2f0520")} >
                    <Image src={article1} alt='article1' py ="3" px='3' />

                    <Box px='5'
                    alignItems='baseline'>
                        <Heading size='md'>
                        Creating a Machine/Deep Learning Dataset from Google Images using Selenium
                        </Heading>
                        </Box>
                        <Box px='5' py='3'>
                            <Heading size ='xs'>
                            Selenium is an open-source tool to automate a web browser. It 
                            provides a single interface for writing scripts in multiple 
                            languages. These scripts are executed by browser-driver
                            </Heading>
                        </Box>
                        
                    </Box>

                </Box>


                <Box alignSelf="flex-start" px="16" py="8">
                    <Box maxW="xl" borderWidth="8px" borderRadius="lg" 
                        overflow="hidden"
                        mt={isNotSmallerScreen ? "0" : "10"}
                        onClick={() => window.open("https://medium.com/deepklarity/deploying-ml-apps-on-heroku-ee84f488173b")} >
                        <Image src={article2} alt='article2' py ="3" px='3' />

                        <Box px='5'
                        alignItems='baseline'>
                            <Heading size='md'>
                            Deploying ML Apps on Heroku
                            </Heading>
                        </Box>
                            <Box px='5' py='3'>
                                <Heading size ='xs'>
                                Heroku is a cloud-based Platform as a Service (PaaS) i.e. 
                                it provides a platform for developers to deploy, run, manage 
                                and scale applications without requiring any additional 
                                infrastructure or software required for such a job. 
                                </Heading>
                            </Box>
                        
                    </Box>

            </Box>


            <Box alignSelf="flex-start" px="16" py="8">
                    

                    <Box maxW="xl" borderWidth="8px" borderRadius="lg" 
                    overflow="hidden" 
                    mt={isNotSmallerScreen ? "0" : "10"}
                    onClick={() => window.open("https://medium.com/deepklarity/creating-a-machine-deep-learning-dataset-from-google-images-using-selenium-e9e8ed2f0520")} >
                    <Image src={article3} alt='article1' py ="3" px='3' />

                    <Box px='5'
                    alignItems='baseline'>
                        <Heading size='md'>
                        Clean or Messy Classifier
                        </Heading>
                        </Box>
                        <Box px='5' py='3'>
                            <Heading size ='xs'>
                            This blog is the introductory blog of the series Clean or 
                            Messy Classifier . Follow the entire series for detailed 
                            implementation of deploying a machine learning classifier 
                            into web app using various frameworks.
                            </Heading>
                        </Box>
                        
                    </Box>

                </Box>

            </Flex>

          

            

        </Flex>
    );
}

export default Articles;