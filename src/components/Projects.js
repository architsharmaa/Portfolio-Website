import React from 'react'
import { Box, Flex, Heading, Text} from '@chakra-ui/layout';
import { Spacer } from '@chakra-ui/react';

import ProjectPlatforms from './PlatformProject';
import DSProject from './DSProject';
import Web from './web';


function Projects() {


    return (

        <Flex direction= "column" w="100%"
        maxWidth={{ base: "100vh", lg: "130vh", xl: "130vh" }}
        py = '20'>
        
            <Box alignSelf="flex-start" px="16" py="8">
                <Heading fontWeight="extrabold" color="cyan.500" size="3xl">
                    Featured Projects
                </Heading>
                <Spacer />
                <Text fontSize="2xl">
                    Personal Projects made as a novice data guy.
                </Text>
            </Box>

            <ProjectPlatforms />
            <DSProject />
            <Web />


            
        </Flex>
   
    );
}

export default Projects;