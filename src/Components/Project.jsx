import { Box, Heading, VStack  , Image ,Grid ,Text ,Flex ,IconButton} from '@chakra-ui/react'
import React from 'react'
import "./Project.css"
// import image from "../Image/fashion.jpg"
import chatApp1 from "../Image/chatApp1.png"
import chatApp2 from "../Image/chatApp2.png"
import fraudy from "../Image/Employ.png"
import oyo from "../Image/oyo.png"
import sense from "../Image/examify.png"
import {VscGithubInverted , VscGithubAlt , VscThreeBars} from "react-icons/vsc" ;
import { GrGithub } from "react-icons/gr";
import { GoLinkExternal } from "react-icons/go";
const Project = () => {
  return (
   <Box id="project" className='font-link'  >
 
  <Heading textAlign={"center"} mt={10} color="olivedrab" textDecoration="underline" textDecorationThickness={5}  >Projects</Heading>

  <Grid width="80%"  margin="auto" mt={10} gap={10} gridTemplateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(2,1fr)","repeat(2,1fr)"]} >
 


     <VStack _hover={{transform:"scale(1.1)" ,   transition:"transform 0.5s"}} backgroundColor="olivedrab" position="relative" borderRadius={10}  height={600}  p={3} py={5}  > <Image borderRadius={10} width="90%"  src={fraudy} alt="fashionworld" /> <Heading fontSize={[ "sm","md","lg", "xl"]} color="gray.100" >Employ Me</Heading>
  <Text fontSize={[ "md", "md","md", "md"]}  color= "black"  fontWeight="semibold" >Built a job-seeking platform where employers can post job listings and job seekers can search and apply for jobs.</Text> 
   <Text   width="100%" fontWeight="semibold"   color="black" mt={5} > <Text color="gray.100" fontWeight="bold" as="span">Tech Stack :</Text>  React | Redux | Chakra | javascript | HTML | CSS</Text> 

   <Flex  position="absolute" bottom={5}  width="60%"  justifyContent="space-between"   > <a href='https://github.com/abhi5733/Employ' target="_blank" > <Box color="gray.100"  _hover={{color:"gray.400"}} >  <GrGithub  size="30px"  /> </Box> </a> <a href="https://employ-chi.vercel.app" target="_blank"> <Box color="gray.100"  _hover={{color:"gray.400"}} >   <GoLinkExternal size="30px"  /> </Box>  </a> 
    
     </Flex> </VStack>

     
     <VStack _hover={{transform:"scale(1.1)" ,   transition:"transform 0.5s"}} backgroundColor="olivedrab" position="relative" borderRadius={10}  height={600}  p={3} py={5}  > <Image borderRadius={10} width="90%"  src={sense} alt="fashionworld" /> <Heading fontSize={[ "sm","md","lg", "xl"]} color="gray.100" >Examify</Heading>
  <Text fontSize={[ "md", "md","md", "md"]} fontWeight="semibold"   color= "black" >Helps students prepare for exams by transforming study materials into interactive quizzes ,Users can upload PDFs, text files, or images to automatically generate 10 MCQs based on the extracted content .</Text> 
   <Text   color="black" mt={5} width="100%" fontWeight="semibold"  > <Text color="gray.100" fontWeight="bold" as="span">Tech Stack :</Text>   javascript  |  HTML | CSS | React | Redux | Gemini AI | Google Auth </Text> 
   <Flex  position="absolute" bottom={5}  width="60%"  justifyContent="space-between"   > <a href="https://github.com/abhi5733/Examify" target="_blank">  <Box color="gray.100"  _hover={{color:"gray.400"}} >  <GrGithub  size="30px"  /> </Box></a>  <a href="https://examify-fvcn.vercel.app" target="_blank" >   <Box color="gray.100"  _hover={{color:"gray.400"}} >  <GoLinkExternal size="30px"  /> </Box> </a> 
    
     </Flex> </VStack>


     <VStack _hover={{transform:"scale(1.1)" ,   transition:"transform 0.5s"}} backgroundColor="olivedrab" position="relative" borderRadius={10}  height={600}  p={3} py={5}  > <Image borderRadius={10} width="90%"  src={oyo} alt="fashionworld" /> <Heading fontSize={[ "sm","md","lg", "xl"]} color="gray.100" >Mini-OYO</Heading>
  <Text fontSize={[ "md", "md","md", "md"]} width="100%"  color= "black" fontWeight="semibold"  >This a  mini project in which you can book hotel rooms by creating acount .</Text> 
   <Text width="100%" fontWeight="semibold"   color="black" mt={7} > <Text color="gray.100" fontWeight="bold" as="span">Tech Stack :</Text> Javascript | HTML | CSS | React | Redux | Chakra | Expressjs | MongoDb | nodejs | mongoose </Text> 
   <Flex  position="absolute" bottom={5}  width="60%"  justifyContent="space-between"   > <a href="https://github.com/abhi5733/mini-oyo" target="_blank" > <Box color="gray.100"  _hover={{color:"gray.400"}} >  <GrGithub  size="30px"  /> </Box>  </a>   <a href="https://oyo-fawn.vercel.app/" target="_blank">  <Box color="gray.100"  _hover={{color:"gray.400"}} >  <GoLinkExternal size="30px"  /> </Box>  </a>
    
     </Flex> </VStack>


     <VStack _hover={{transform:"scale(1.1)" ,   transition:"transform 0.5s"}} backgroundColor="olivedrab" position="relative" borderRadius={10}  height={600}  p={3} py={5}  > <Image borderRadius={10} width="90%"  src={chatApp2} alt={chatApp1} /> <Heading fontSize={[ "sm","md","lg", "xl"]} color="gray.100" >Chat app</Heading>
  <Text fontSize={[ "md", "md","md", "md"]}  color= "black" fontWeight="semibold" > Abhi chat-app enables users to chat with friends, see who's online, join/create group chats, and effortlessly share files and images.</Text> 
   <Text  fontWeight="semibold" width="100%"  color="black" mt={5} >
   <Text color="gray.100" fontWeight="bold" as="span">Tech Stack :</Text>  React | Socket.io </Text> 

   <Flex  position="absolute" bottom={5}  width="60%"  justifyContent="space-between"   > <a href='https://github.com/abhi5733/socket' target="_blank"> <Box color="gray.100" _hover={{color:"gray.400"}} >  <GrGithub  size="30px"  />  </Box>  </a> <a href="https://socket-ergd.vercel.app/" target="_blank">  <Box color="gray.100"  _hover={{color:"gray.400"}} >  <GoLinkExternal size="30px"  /> </Box> </a>
    
     </Flex> </VStack>


   
    

   
  </Grid>

   </Box>
  )
}

export default Project
