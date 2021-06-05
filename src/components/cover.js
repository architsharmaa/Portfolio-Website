import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode'
import { Image } from '@chakra-ui/image';
import { Stack, Flex, Box, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react';
import bitimage from '../assets/home/bitimage.png';

function Header() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Stack >
            
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-start" mt= '8%'>
                <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-start'>
                    <Text fontSize="5xl" fontWeight="semibold">Hi, I am</Text>
                    <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text' >Archit Sharma</Text>
                    <Text color={isDark ? "gray.200" : "gray.500"} fontSize="3xl">
                    This website describes my journey.
                    </Text>
                    <Button mt={8} colorScheme="blue" onClick={() =>
                        window.open("https://drive.google.com/file/d/1AG4fVQFcbSh3Owri5DzNbVM_7bHljsCS/view?usp=sharing")
                    }>See Resume</Button>

                </Box>

                
                <Image alignSelf="top" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                    backgroundColor="transparent" 
                    boxSize="300px" ml='4' src={bitimage} />


            </Flex>

        </Stack>
    )
}

export default Header
