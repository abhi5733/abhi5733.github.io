
import resume from "../Resume/AbhijeetKale.pdf"
import React from 'react'

import  abhi from "../Image/abhidp.jpeg"

import { Box, VStack , Text, Flex, Spacer,Image, Heading, Button } from "@chakra-ui/react"
const Home = () => {
  return (
  
<Box height={["auto","auto","auto","100vh"]}  p={5}>
  <Flex flexDirection= {["column" , "column" , "column"  , "row" ]}  alignItems="center" textAlign={"center"} > 
  <VStack display={[]}  ml={[0,0,0,10]} mt={[20,20,20,40]}>
  <Image width={["70%","70%","70%","100%"]} display="block" margin="auto" src={abhi} alt='Abhijeet Kale'   borderRadius='full'  mt={10}/>
  </VStack>
  <Spacer/>
  <VStack width={[ "80%","80%","50%","50%"]}  mt={[10,10,10,40]}   > 
  <Heading>Hello</Heading>
  <Text fontSize={["1xl","4xl","4xl","6xl"]}>I'm Abhijeet Kale</Text>  
  <Text fontSize={["12px","20px","2xl","4xl"]}>Full Stack Web Developer At Masai School</Text>
  <Button  colorScheme='teal' variant='solid' mt={[10,10,10,10]} > Resume </Button>
  </VStack>
  </Flex>
</Box>
    
  )
}

export default Home
