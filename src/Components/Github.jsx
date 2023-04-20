import { Box, Flex, Heading, VStack , Image,Text ,IconButton,Spacer } from '@chakra-ui/react';
import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import { BsAwardFill , BsFillBootstrapFill   } from "react-icons/bs";
import { FiGitCommit } from "react-icons/fi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaMedal } from "react-icons/fa";
import { DiCodeigniter } from "react-icons/di";
import { IoBarChartSharp } from "react-icons/io5";
import { GiSandsOfTime } from "react-icons/gi";

const Github = () => {
  return (
    <Box backgroundColor="gray.50" className='font-link'> 
   <Box  width={["90%","80%","70%","70%"]} margin="auto"   > 
     
     <Heading mt={[10,10,20,30]} pt={10} textAlign={"center"} color="olivedrab" textDecoration="underline" textDecorationThickness={5}  >Github  Activity</Heading>


    <VStack  mt={10}  width="100%"  > 
    <GitHubCalendar  width="100%"   username="abhi5733" />
    </VStack>
    
    <Flex justifyContent="space-between" flexDirection={["column" ,"column" ,"row","row" ]} px={5} >
    <VStack  alignItems="flex-start"   mt={10} justifyContent="start"  >
        <Flex    alignItems="center" > <Box mr={4}  > <DiCodeigniter size={30}    />  </Box> <Text  fontSize={["sm","lg","lg","2xl"]} >1200+ Hours Practical Coding</Text></Flex>
        <Flex  alignItems="center" ><Box mr={4}>  <IoBarChartSharp size={30}    />  </Box> <Text  fontSize={["sm","lg","lg","2xl"]} >300+ Hours Data Structures & Algorithms</Text></Flex>
        <Flex  alignItems="center" > <Box mr={4}>  <GiSandsOfTime size={30} mr={[1,1,5,5]}  /> </Box> <Text  fontSize={["sm","lg","lg","2xl"]}>100+ Hours Soft Skill Development</Text></Flex>
    </VStack>
        <VStack alignItems="flex-start"   mt={[2,2,10,10]}  >
        <Flex     alignItems="center" alignContent="start"  > <Box mr={4}> <AiOutlineFundProjectionScreen size={30}  mr={[1,1,5,5]} /> </Box> <Text  fontSize={["sm","lg","lg","2xl"]} >12+ Projects</Text></Flex>
        <Flex  alignItems="center" > <Box mr={4}> < FaMedal size={30}  mr={[1,1,5,5]}  /> </Box> <Text  fontSize={["sm","lg","lg","2xl"]} >70+ Mini Projects</Text></Flex>
        <Flex  justifyContent="space-between"   alignItems="center" > <Box mr={4}> <FiGitCommit size={30}  mr={[1,1,5,5]}   /> </Box> <Text fontSize={["sm","lg","lg","2xl"]} >136+ Git Commits</Text></Flex>
        </VStack>
    </Flex>

<Flex flexDirection= {["column" , "column" , "column" , "row" ]}  alignItems="center" justifyContent="space-between"   mt={[10,10,20,20]} >  
   <VStack   > 
    <Image width="80%" color="blackAlpha.400" bgColor="blackAlpha.400" border="1px solid black" borderRadius={10} align="center" src="https://github-readme-stats.vercel.app/api?username=abhi5733&show_icons=true&locale=en" alt="abhi5733" /> 
    </VStack>

    <VStack > 
<Image width="80%" mt={[5,5,5,0]} border="1px solid black" borderRadius={10} align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=abhi5733&" alt="abhi5733" /> 
</VStack>
  </Flex>

  <Flex mt={[5,5,5,10]} justifyContent="center" pb={10} > 
<Image width={["80%","80%","75%","50%"]}  border="1px solid black" borderRadius={10} align="center" src="https://github-readme-stats.vercel.app/api/top-langs?username=abhi5733&show_icons=true&locale=en&layout=compact" alt="abhi5733" /> 



  </Flex>
    </Box>
    </Box>
  )
}

export default Github
