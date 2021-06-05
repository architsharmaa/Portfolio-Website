import React from 'react';
import {
    FaReact,
    FaHtml5,
    FaCss3,
    FaGitAlt,
    FaPython,
    FaGithub,
    FaInfinity,
    FaChartLine,
  } from "react-icons/fa";
import { Box, Flex, Heading, HStack } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/media-query';

function Skills() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Flex direction= "column" w="100%"
        maxWidth={{ base: "100vh", lg: "130vh", xl: "130vh" }}>

            <Box alignSelf="flex-start" px="16" py="8">
                <Heading fontWeight="extrabold" color="cyan.500" size="3xl">
                    Skills
                </Heading>
            </Box>

        <HStack alignSelf="flex-start" px="16" spacing={isNotSmallerScreen ? "8" : "2"} >
        <FaPython color="white" size={isNotSmallerScreen ? "50" : "20"} />
        <FaChartLine color="white" size={isNotSmallerScreen ? "50" : "20"} />
        <FaReact color="white" size={isNotSmallerScreen ? "50" : "20"} />
        <FaHtml5 ccolor="white" size={isNotSmallerScreen ? "50" : "20"} />
        <FaCss3 color="white" size={isNotSmallerScreen ? "50" : "20"} />
        <FaInfinity colo='white' size={isNotSmallerScreen ? "50" : "20"} />
        <FaGithub color="white" size={isNotSmallerScreen ? "50" : "20"} />
        <FaGitAlt color="white" size={isNotSmallerScreen ? "50" : "20"} />
        </HStack>

        </Flex>
    );
}

export default Skills;