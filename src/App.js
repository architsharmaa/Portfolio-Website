import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useMediaQuery } from '@chakra-ui/media-query';

import Cover from "./components/cover";
import ProfileText from "./components/ProfileText";
import Social from "./components/SocialLinks";
import WorkExp from './components/WorkEx';
import Projects from './components/Projects';
import Publications from "./components/Publications";
import Articles from './components/Articles';
import Skills from './components/Skills';
import Footer from './components/Footer';




function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "light";
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <VStack p={5}>
      <Flex w="100%" >
        <Heading
          ml={isNotSmallerScreen ? "8" : "1"} size="md" fontWeight='semibold' color="cyan.400">Archit Sharma
          </Heading>

        <Spacer></Spacer>
        <IconButton ml={2} icon={<FaLinkedin />} isRound='true' 
        onClick={() => window.open("https://www.linkedin.com/in/archiit-sharmaa/")}></IconButton>
        <IconButton ml={2} icon={<FaGithub />} isRound='true' 
        onClick={() => window.open("https://github.com/architsharmaa")}></IconButton>
        <IconButton ml={2} icon={<FaInstagram />} isRound='true' 
        onClick={() => window.open("https://www.instagram.com/archiit_sharmaa/?hl=en")}></IconButton>
        <IconButton ml={8} icon={isDark ? <FaMoon /> : <FaSun />} isRound='true' 
        onClick={toggleColorMode}></IconButton>
      </Flex>
      <Cover />
      <Social />
      <ProfileText />
      <WorkExp />
      <Projects />
      <Publications />
      <Articles />
      <Skills />
      <Footer />


    </VStack>
  );
}

export default App;
