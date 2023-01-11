

import { Box, Button, Center, Flex, Heading, IconButton, Link, Spacer , Text} from '@chakra-ui/react'
import React, { useState } from 'react'
// import "./Navbar.css"
import {FaSun ,FaMoon, FaHamburger, FaWindowClose} from "react-icons/fa"
 
const Navbar = () => {

    const [toggle,Settoggle] = useState(false)

     const [display,Setdisplay] = useState("none")
  
  return (
    
     
<Box position="fixed" w="100%" zIndex="5" bg="blue" h="80px" >
 <Flex  p={5} >
  <Heading color="yellow" mt={[2,0,0,0]} fontSize={[20,30,30,30]} >Abhijeet Kale</Heading><Spacer/> <Flex display={["none","none","flex","flex"]} color='white' alignItems={"center"} > <Link href='/home'> <Text px={[1,2,3,4]}>Home</Text> </Link> <Link href='/home'> <Text px={[1,2,3,4]}>About Me</Text> </Link>
  <Link href='/home'>  <Text px={[1,2,3,4]}>Skills</Text></Link>  <Link href='/home'>  <Text px={[1,2,3,4]}>Project</Text> </Link>  <Link href='/home'>  <Text px={[1,2,3,4]}>Contact</Text></Link> <Button mr={5}  color="white" colorScheme="red"  variant='ghost'>
    Resume
  </Button>
 </Flex> 
  <IconButton mr={5} display={["flex","flex","none","none"]} icon={<FaHamburger/>}  onClick={()=>Setdisplay("flex")} ></IconButton>
  <IconButton icon={toggle?<FaMoon/>:<FaSun/>} isRound="true"  onClick={()=>Settoggle(!toggle)}  ></IconButton> 
 </Flex>


<Flex display={display} w="100vw" h ="100vh" bgColor="gray.500"  left="0" top="0" pos="fixed" zIndex={20} py={20} justifyContent="center" > 
 
 
 <Flex flexDirection="column" align="center" >
 <Flex justifyContent="flex-end">
    <IconButton ml={[300,500,700,1000 ]}   icon={<FaWindowClose/>} onClick={()=>Setdisplay("none")} ></IconButton>
 </Flex>
    <Link href='/home'> <Text py={4}>Home</Text> </Link> <Link href='/home'> <Text py={4}>About Me</Text> </Link>
  <Link href='/home'>  <Text py={4}>Skills</Text></Link>  <Link href='/home'>  <Text py={4}>Project</Text> </Link>  <Link href='/home'>  <Text py={4}>Contact</Text></Link>  <Button colorScheme='teal' variant='ghost'>
    Resume
  </Button>


 </Flex>

 </Flex>


</Box>

    
  )
}

export default Navbar
