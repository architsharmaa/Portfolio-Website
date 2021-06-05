import React from 'react'
import { Box, Flex, Heading, Text} from '@chakra-ui/layout';
import { Spacer } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Image } from '@chakra-ui/image';

import publications from '../assets/publications/publication.jpeg';


function Publications() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (

        <Flex direction= "column" w="100%"
        maxWidth={{ base: "100vh", lg: "130vh", xl: "130vh" }}
        py ='20'>
        
            <Box alignSelf="flex-start" px="16" py="8">
                <Heading fontWeight="extrabold" color="cyan.500" 
                size={isNotSmallerScreen ? "3xl" : "2xl"}>
                    Publications
                </Heading>
                <Spacer />
                <Text fontSize="3xl">
                    Research Work (Book Chapter).
                </Text>

                <Text mt = '10' fontSize='2xl'> 
                    Use of LSTM and ARIMAX Algorithms to Analyze Impact of 
                    Sentiment Analysis in Stock Market Prediction by Archit Sharma 
                    Prakhar Tiwari Akshat Gupta Pardeep Garg, 2020
                    </Text>

                <Flex direction={isNotSmallerScreen ? "row" : "column"}>

                    
                    <Text mt='4' fontStyle='italic'>
                    "The stock markets are considered to be the most sensitive and volatile 
                    financial institutions. Investment-related decisions are made by looking at 
                    historical data and observing the patterns, and sometimes these turn out to 
                    be profitable and sometimes not. Investment involves making predictions based 
                    on various factors and later combining all of these to conclude. The market as 
                    a whole is vulnerable to news and leaks which in turn decide the sentiment of 
                    buyers and hence directly affect the price of a given stock. Nowadays, machine 
                    learning techniques are being used to forecast the trend of a given stock. 
                    This paper presents a relative analysis of the prediction of the stock price 
                    using algorithms long short-term memory (LSTM) and auto-regressive integrated 
                    moving average exogenous (ARIMAX), without and with sentiment analysis. It has 
                    been observed from results that both algorithms attain a considerable improvement 
                    in the forecasting when sentiment analysis is applied ""
                    </Text>

                    <Image src={publications} alt='StockInfo' py ="3" px='8' />

                </Flex> 

            </Box>

        </Flex>
    );
}

export default Publications;