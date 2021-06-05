import React from 'react';
import { Text } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/react';

function footer() {

    return (

        <Flex direction ='column'alignItems='center'
        mt = '30' py='20'>
        <Text>
            Made by Archit Sharma :)
        </Text>
        <Text justifyContent='center'>
            The code for this project can be retrived from github/architsharmaa        </Text>
        </Flex>

    );
}

export default footer;