import { Box, Flex, Heading, VStack , Image,Text ,IconButton,Spacer } from '@chakra-ui/react';
import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import { BsAwardFill , BsFillBootstrapFill   } from "react-icons/bs";

const Github = () => {
  return (
   <Box border="1px solid black" width="70%" margin="auto" > 
     
     <Heading mt={20} textAlign={"center"} >Github  Activity</Heading>


    <VStack  mt={10} > 
    <GitHubCalendar  username="abhi5733" />
    </VStack>
    
    <Flex justifyContent="space-between" >
    <VStack mt={10} justifyContent="start" border="1px solid black" >
        <Flex  border="1px solid black"  alignItems="center" ><IconButton icon={<BsAwardFill/>}  /><Text>1200+ Hours Practical Coding</Text></Flex>
        <Flex border="1px solid black" alignItems="center" ><IconButton icon={<BsAwardFill/>}  /><Text>300+ Hours Data Structures & Algorithms



</Text></Flex>
        <Flex border="1px solid black"  alignItems="center" ><IconButton icon={<BsAwardFill/>}  /><Text>100+ Hours Soft Skill Development</Text></Flex>
    </VStack>
        <VStack  mt={10} border="1px solid black" >
        <Flex   border="1px solid black"  alignItems="center" alignContent="start"  ><IconButton icon={<BsAwardFill/>}  />  <Text>12+ Projects</Text></Flex>
        <Flex border="1px solid black"  alignItems="center" ><IconButton icon={<BsAwardFill/>}  /><Text>70+ Mini Projects</Text></Flex>
        <Flex border="1px solid black"  alignItems="center" ><IconButton icon={<BsAwardFill/>}  /><Text>136+ Git Commits</Text></Flex>
        </VStack>
    </Flex>

<Flex alignItems="center" justifyContent="space-between"  border="1px solid black" mt={20} >  
    <Image color="blackAlpha.400" bgColor="blackAlpha.400" border="1px solid black" borderRadius={10} align="center" src="https://github-readme-stats.vercel.app/api?username=abhi5733&show_icons=true&locale=en" alt="abhi5733" /> 



<Image border="1px solid black" borderRadius={10} align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=abhi5733&" alt="abhi5733" /> 
  </Flex>

  <Flex mt={10} justifyContent="center" > 
<Image   border="1px solid black" borderRadius={10} align="center" src="https://github-readme-stats.vercel.app/api/top-langs?username=abhi5733&show_icons=true&locale=en&layout=compact" alt="abhi5733" /> 



  </Flex>
    </Box>
  )
}

export default Github
