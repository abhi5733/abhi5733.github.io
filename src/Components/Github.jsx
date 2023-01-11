import { Box, Flex, Heading, VStack , Image,Text ,IconButton,Spacer } from '@chakra-ui/react';
import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import { BsAwardFill , BsFillBootstrapFill   } from "react-icons/bs";

const Github = () => {
  return (
   <Box border="1px solid black" width={["90%","80%","70%","70%"]} margin="auto" > 
     
     <Heading mt={[10,10,20,20]} textAlign={"center"} >Github  Activity</Heading>


    <VStack  mt={10} border="1px solid black" width="100%"  > 
    <GitHubCalendar  width="100%"   username="abhi5733" />
    </VStack>
    
    <Flex justifyContent="space-between" >
    <VStack  alignItems="flex-start"   mt={10} justifyContent="start" border="1px solid black" >
        <Flex  border="1px solid black"  alignItems="center" ><IconButton size={["xs","sm","md","lg"]} icon={<BsAwardFill/>} mr={[1,1,5,5]}  /><Text fontSize={[8,12,14,"2xl"]} >1200+ Hours Practical Coding</Text></Flex>
        <Flex border="1px solid black" alignItems="center" ><IconButton size={["xs","sm","md","lg"]} icon={<BsAwardFill/>} mr={[1,1,5,5]}  /><Text fontSize={[8,12,14,"2xl"]} >300+ Hours Data Structures & Algorithms</Text></Flex>
        <Flex border="1px solid black"  alignItems="center" ><IconButton size={["xs","sm","md","lg"]} icon={<BsAwardFill/>} mr={[1,1,5,5]}  /><Text fontSize={[8,12,14,"2xl"]} >100+ Hours Soft Skill Development</Text></Flex>
    </VStack>
        <VStack alignItems="flex-start"   mt={10} border="1px solid black" >
        <Flex   border="1px solid black"  alignItems="center" alignContent="start"  ><IconButton size={["xs","sm","md","lg"]} icon={<BsAwardFill/>} mr={[1,1,5,5]}   />  <Text fontSize={[8,12,14,"2xl"]} >12+ Projects</Text></Flex>
        <Flex border="1px solid black"  alignItems="center" ><IconButton size={["xs","sm","md","lg"]} icon={<BsAwardFill/>} mr={[1,1,5,5]}  /><Text  fontSize={[8,12,14,"2xl"]} >70+ Mini Projects</Text></Flex>
        <Flex border="1px solid black"  alignItems="center" ><IconButton size={["xs","sm","md","lg"]} icon={<BsAwardFill/>} mr={[1,1,5,5]}   /><Text fontSize={[8,12,14,"2xl"]} >136+ Git Commits</Text></Flex>
        </VStack>
    </Flex>

<Flex flexDirection= {["column" , "column" , "column" , "row" ]}  alignItems="center" justifyContent="space-between"  border="1px solid black" mt={[10,10,20,20]} >  
   <VStack border="1px solid black"  > 
    <Image width="80%" color="blackAlpha.400" bgColor="blackAlpha.400" border="1px solid black" borderRadius={10} align="center" src="https://github-readme-stats.vercel.app/api?username=abhi5733&show_icons=true&locale=en" alt="abhi5733" /> 
    </VStack>

    <VStack border="1px solid black"> 
<Image width="80%" mt={[5,5,5,0]} border="1px solid black" borderRadius={10} align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=abhi5733&" alt="abhi5733" /> 
</VStack>
  </Flex>

  <Flex mt={[5,5,5,10]} justifyContent="center" > 
<Image width={["80%","80%","75%","50%"]}  border="1px solid black" borderRadius={10} align="center" src="https://github-readme-stats.vercel.app/api/top-langs?username=abhi5733&show_icons=true&locale=en&layout=compact" alt="abhi5733" /> 



  </Flex>
    </Box>
  )
}

export default Github
