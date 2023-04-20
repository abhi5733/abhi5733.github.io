
import resume from "../Resume/fw20_0425-Abhijeet-kale-Resume.pdf"
import React from 'react'
import    "../Components/Home.css" 
import  abhi from "../Image/abhidp.jpeg"
import Typewriter from 'typewriter-effect';

import { Box, VStack , Text, Flex, Spacer,Image, Heading, Button } from "@chakra-ui/react"
const Home = () => {
  return (
  
<Box className='font-link' id="home" height={["auto","auto","auto","100vh"]}  p={5} pb={10} backgroundColor="gray.50" >
  <Flex flexDirection= {["column" , "column" , "column"  , "row" ]}  alignItems="center" textAlign={"center"} > 
  <VStack display={[]}  ml={[0,0,0,10]} mt={[20,20,20,40]}>
  <Image width={["70%","70%","70%","100%"]} display="block" margin="auto" src={abhi} alt='Abhijeet Kale'   borderRadius="lg"  mt={10}/>
  </VStack>
  <Spacer/>
  <VStack width={[ "80%","80%","50%","50%"]}  mt={[10,10,10,40]} fontWeight="bold"   > 
  <Heading fontSize={["xl","4xl","4xl","6xl"]}>Hello , I am</Heading>
  <Text color="olivedrab" fontSize={["2xl","4xl","4xl","6xl"]} fontWeight="bold">Abhijeet  Kale</Text>  
  
  <Text fontSize={["15px","20px","2xl","4xl"]} fontWeight="bold" ><Typewriter
  options={{
    strings: ['Full Stack Web Developer.', 'Frontend Developer','MERN stack Developer'],
    autoStart: true,
    loop: true,
  }}
/></Text>
  <Box pt={[5,10,10,30]}> 
   <a href={resume} download >  <Button className="btn1"  onClick={() => {
                        window.open("https://drive.google.com/file/d/1ZBrVi18XIyIfv-7PR_4K3sRzj4hy04mP/view?usp=sharing");
                      }} backgroundColor={" olivedrab"} _hover={{bg:"olivedrab" , color:"gray.200" }} fontSize={["xl","4xl","4xl","4xl"]} padding={[2,8,8,8]} color="white"  > Resume </Button>  </a></Box>
  </VStack>
  </Flex>
</Box>
    
  )
}

export default Home
