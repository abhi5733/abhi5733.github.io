import { Box, Heading, VStack  , Image ,Grid ,Text ,Flex ,IconButton} from '@chakra-ui/react'
import React from 'react'
import "./Project.css"
// import image from "../Image/fashion.jpg"
import chatApp1 from "../Image/chatApp1.png"
import chatApp2 from "../Image/chatApp2.png"
import fraudy from "../Image/fraudy.png"
import oyo from "../Image/oyo.png"
import sense from "../Image/sense.png"
import {VscGithubInverted , VscGithubAlt , VscThreeBars} from "react-icons/vsc" ;
import { GrGithub } from "react-icons/gr";
import { GoLinkExternal } from "react-icons/go";
const Project = () => {
  return (
   <Box id="project" className='font-link'  >
 
  <Heading textAlign={"center"} mt={10} color="olivedrab" textDecoration="underline" textDecorationThickness={5}  >Projects</Heading>

  <Grid width="80%"  margin="auto" mt={10} gap={10} gridTemplateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(2,1fr)","repeat(2,1fr)"]} >
 
  <VStack _hover={{transform:"scale(1.1)" ,   transition:"transform 0.5s"}} backgroundColor="olivedrab" position="relative" borderRadius={10}  height={600}  p={3} py={5}  > <Image borderRadius={10} width="90%"  src={chatApp2} alt={chatApp1} /> <Heading fontSize={[ "sm","md","lg", "xl"]} color="gray.100" >Chat app</Heading>
  <Text fontSize={[ "md", "md","md", "md"]}  color= "black" fontWeight="semibold" > Abhi chat-app enables users to chat with friends, see who's online, join/create group chats, and effortlessly share files and images.</Text> 
   <Text  fontWeight="semibold" width="100%"  color="black" mt={5} >
   <Text color="gray.100" fontWeight="bold" as="span">Tech Stack :</Text>  React | Socket.io </Text> 

   <Flex  position="absolute" bottom={5}  width="60%"  justifyContent="space-between"   > <a href='https://github.com/abhi5733/socket' target="_blank"> <Box color="gray.100" _hover={{color:"gray.400"}} >  <GrGithub  size="30px"  />  </Box>  </a> <a href="https://socket-ergd.vercel.app/" target="_blank">  <Box color="gray.100"  _hover={{color:"gray.400"}} >  <GoLinkExternal size="30px"  /> </Box> </a>
    
     </Flex> </VStack>

     <VStack _hover={{transform:"scale(1.1)" ,   transition:"transform 0.5s"}} backgroundColor="olivedrab" position="relative" borderRadius={10}  height={600}  p={3} py={5}  > <Image borderRadius={10} width="90%"  src={fraudy} alt="fashionworld" /> <Heading fontSize={[ "sm","md","lg", "xl"]} color="gray.100" >Fraudy.com</Heading>
  <Text fontSize={[ "md", "md","md", "md"]}  color= "black"  fontWeight="semibold" >Fraudy is Ecommerce site for the newest & trending fashion accessories and online shop that offered high quality products at an affordable price. You can shop cloths,accessories.</Text> 
   <Text   width="100%" fontWeight="semibold"   color="black" mt={5} > <Text color="gray.100" fontWeight="bold" as="span">Tech Stack :</Text>  React | Redux | Chakra | Firebase | javascript | HTML | CSS</Text> 

   <Text color="black" pt={5} fontWeight="semibold" width="100%"   >A collaborative project built by a team of 4 executed in 5 days. </Text>
   <Flex  position="absolute" bottom={5}  width="60%"  justifyContent="space-between"   > <a href='https://github.com/amansingh456/shallow-creature-244' target="_blank" > <Box color="gray.100"  _hover={{color:"gray.400"}} >  <GrGithub  size="30px"  /> </Box> </a> <a href="https://serene-salmiakki-9b8c55.netlify.app/" target="_blank"> <Box color="gray.100"  _hover={{color:"gray.400"}} >   <GoLinkExternal size="30px"  /> </Box>  </a> 
    
     </Flex> </VStack>

     <VStack _hover={{transform:"scale(1.1)" ,   transition:"transform 0.5s"}} backgroundColor="olivedrab" position="relative" borderRadius={10}  height={600}  p={3} py={5}  > <Image borderRadius={10} width="90%"  src={oyo} alt="fashionworld" /> <Heading fontSize={[ "sm","md","lg", "xl"]} color="gray.100" >Mini-OYO</Heading>
  <Text fontSize={[ "md", "md","md", "md"]} width="100%"  color= "black" fontWeight="semibold"  >This a  mini project in which you can book hotel rooms by creating acount .</Text> 
   <Text width="100%" fontWeight="semibold"   color="black" mt={7} > <Text color="gray.100" fontWeight="bold" as="span">Tech Stack :</Text> Javascript | HTML | CSS | React | Redux | Chakra | Expressjs | MongoDb | nodejs | mongoose </Text> 
   <Flex  position="absolute" bottom={5}  width="60%"  justifyContent="space-between"   > <a href="https://github.com/abhi5733/mini-oyo" target="_blank" > <Box color="gray.100"  _hover={{color:"gray.400"}} >  <GrGithub  size="30px"  /> </Box>  </a>   <a href="https://oyo-fawn.vercel.app/" target="_blank">  <Box color="gray.100"  _hover={{color:"gray.400"}} >  <GoLinkExternal size="30px"  /> </Box>  </a>
    
     </Flex> </VStack>


     <VStack _hover={{transform:"scale(1.1)" ,   transition:"transform 0.5s"}} backgroundColor="olivedrab" position="relative" borderRadius={10}  height={600}  p={3} py={5}  > <Image borderRadius={10} width="90%"  src={sense} alt="fashionworld" /> <Heading fontSize={[ "sm","md","lg", "xl"]} color="gray.100" >SSENSE</Heading>
  <Text fontSize={[ "md", "md","md", "md"]} fontWeight="semibold"   color= "black" >SSENSE is an international online retailer that aims to offer high quality, designer fashion for both men and women from more than 200 different well known and well respected brand names. </Text> 
   <Text   color="black" mt={5} width="100%" fontWeight="semibold"  > <Text color="gray.100" fontWeight="bold" as="span">Tech Stack :</Text>   javascript  |  HTML | CSS </Text> 
   <Text color="black" pt={5} fontWeight="semibold" width="100%"   >A collaborative project built by a team of 4 executed in 5 days. </Text>
   <Flex  position="absolute" bottom={5}  width="60%"  justifyContent="space-between"   > <a href="https://github.com/supriya1011/-innate-partner-2755" target="_blank">  <Box color="gray.100"  _hover={{color:"gray.400"}} >  <GrGithub  size="30px"  /> </Box></a>              <a href="https://633d6c585271040088a27ec6--exquisite-selkie-836ff2.netlify.app/" target="_blank" >   <Box color="gray.100"  _hover={{color:"gray.400"}} >  <GoLinkExternal size="30px"  /> </Box> </a> 
    
     </Flex> </VStack>


   
    

   
  </Grid>

   </Box>
  )
}

export default Project
