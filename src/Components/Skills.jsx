import React from 'react'
import chakra from "../skills/chakra.png"
 import b from "../skills/bootstrap.svg"
 import css from "../skills/css.svg"
 import git from "../skills/git.svg"
 import html from "../skills/html.svg"
 import java from "../skills/javascript.svg"
 import mongo from "../skills/mongoDB.svg"
 import node from "../skills/nodejs.svg"
 import react from "../skills/react.svg"
 import redux from "../skills/redux.svg"
 import typescript from "../skills/typescript.svg"
 import exp from "../skills/exp.svg"

 import "./Skills.css"
import { Box , Flex, Heading, Image, VStack ,Text, Button, GridItem, Grid } from '@chakra-ui/react'
import { useState } from 'react'

const Skills = () => {
  const[toggle,Settoggle] = useState(false)

  
  
  return (
  <Box className='font-link' id="skills" height={[ "auto","auto" , "auto", "700px"]} backgroundColor="gray.50" >
 
   <Heading textAlign="center" mt={20} pt={5} color="olivedrab"  textDecoration="underline" textDecorationThickness={5}>Tech Stack</Heading>
  <Flex  mt={10} justifyContent="center"> <Button mx={5}  bgColor={toggle===false?"olivedrab":"gray.400"} fontWeight="bold" color={toggle===false?"white":"black"}onClick={()=>Settoggle(false)}  >Frontend</Button> <Button  bgColor={toggle===true?"olivedrab":"gray.400"} fontWeight="bold" color={toggle===true?"white":"black"} onClick={()=>Settoggle(true)}  >Backend</Button>  </Flex>

<Grid  display={toggle?"none":"grid"}  width="70%" margin="auto" mt={20} pb={10}   templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)','repeat(4, 1fr)']} gap={6}>
<VStack  _hover={{transform:"scale(1.1)" ,   transition:"transform 0.5s"}} bgColor="olivedrab" p={2} pt={5}  borderRadius={10}   >  <Image    height={"150px"}   width={"150px"}  src={html} /> <Text fontWeight="bold" color="gray.100" >HTML</Text></VStack>
  <VStack _hover={{transform:"scale(1.1)" ,   transition:"transform 0.5s"}} bgColor="olivedrab"  p={2} pt={5} borderRadius={10}   >  <Image   height={"150px"}    width={"150px"} src={css} /> <Text fontWeight="bold" color="gray.100">CSS</Text></VStack>
  <VStack  _hover={{transform:"scale(1.1)" ,   transition:"transform 0.5s"}} bgColor="olivedrab"  p={2} pt={5}  borderRadius={10}    >  <Image  height={"150px"}    width={"150px"} src={java} /> <Text fontWeight="bold" color="gray.100">Javascript</Text></VStack>
  <VStack _hover={{transform:"scale(1.1)" ,   transition:"transform 0.5s"}}   bgColor="olivedrab"  p={2} pt={5}  borderRadius={10}    >  <Image  height={"150px"}     width={"150px"}  src={chakra} /> <Text fontWeight="bold" color="gray.100" >Chakra</Text></VStack>
  <VStack  _hover={{transform:"scale(1.1)" ,   transition:"transform 0.5s"}}  bgColor="olivedrab"  p={2} pt={5} borderRadius={10}   >  <Image    height={"150px"}  width={"150px"} src={redux} /> <Text fontWeight="bold" color="gray.100">Redux</Text></VStack>
  <VStack  _hover={{transform:"scale(1.1)" ,   transition:"transform 0.5s"}}  bgColor="olivedrab"  p={2} pt={5} borderRadius={10}   >  <Image    height={"150px"}   width={"150px"}  src={react} /> <Text fontWeight="bold" color="gray.100">React</Text></VStack>
  <VStack _hover={{transform:"scale(1.1)" ,   transition:"transform 0.5s"}}   bgColor="olivedrab"  p={2} pt={5}  borderRadius={10}    >  <Image  height={"150px"}   width={"150px"}  src={typescript} /> <Text fontWeight="bold" color="gray.100">Typescript</Text></VStack>
  <VStack  _hover={{transform:"scale(1.1)" ,   transition:"transform 0.5s"}}  bgColor="olivedrab"  p={2} pt={5} borderRadius={10}   >  <Image   height={"150px"}     width={"150px"}  src={git} /> <Text fontWeight="bold" color="gray.100">Git</Text></VStack>
</Grid>

<Grid display={toggle?"grid":"none"} width="70%" margin="auto" mt={20}  pb={10}  templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)']} gap={6}>
<VStack _hover={{transform:"scale(1.1)" ,   transition:"transform 0.5s"}}  bgColor="olivedrab" p={2} pt={5}    borderRadius={10}    >  <Image height={"150px"}  borderRadius={10} width={"150px"} src={ mongo} /> <Text fontWeight="bold" color="gray.100">Mongodb</Text></VStack>
  <VStack _hover={{transform:"scale(1.1)" ,   transition:"transform 0.5s"}} bgColor="olivedrab"  p={2} pt={5}  borderRadius={10}    >  <Image   height={"150px"}  borderRadius={10} width={"150px"}   src={node} /> <Text fontWeight="bold" color="gray.100">Nodejs</Text></VStack>
  <VStack _hover={{transform:"scale(1.1)" ,   transition:"transform 0.5s"}} bgColor="olivedrab"  p={2} pt={5}  borderRadius={10}    >  <Image  height={"150px"}   borderRadius={10} width={"150px"}   src={exp} /> <Text fontWeight="bold" color="gray.100">ExpressJs</Text></VStack>
 
</Grid>


  </Box>


  )
}

export default Skills
