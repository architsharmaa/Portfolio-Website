import Icon from '@chakra-ui/icon'
import { HStack } from '@chakra-ui/layout'
import React from 'react'
import { FaLinkedin, FaGoogle, FaGithub, FaMedium} from 'react-icons/fa'
import { useMediaQuery } from '@chakra-ui/media-query';


function Social() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <HStack spacing={isNotSmallerScreen ? "20" : "8"}>
            <Icon as={FaGoogle} boxSize={isNotSmallerScreen ? "50" : "10"} 
            onClick={() => window.open("mailto:archit04.sharma")}/>
            <Icon as={FaLinkedin} boxSize={isNotSmallerScreen ? "50" : "10"} 
            onClick={() => window.open("https://www.linkedin.com/in/archiit-sharmaa/")}/>
            <Icon as={FaGithub} boxSize={isNotSmallerScreen ? "50" : "10"}
            onClick={() => window.open("https://github.com/architsharmaa")}/>
            <Icon as={FaMedium} boxSize={isNotSmallerScreen ? "50" : "10"} 
            onClick={() => window.open("https://medium.com/@architsharmaa")}/>
        </HStack>
    )
}

export default Social
