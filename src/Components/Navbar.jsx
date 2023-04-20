

import { Box, Button, Center, Flex, Heading, IconButton, Spacer , Text, Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,} from '@chakra-ui/react'
import React, { useState } from 'react'
import  "../Components/Navbar.css"
import {FaSun ,FaMoon, FaHamburger, FaWindowClose} from "react-icons/fa"
import resume from "../Resume/fw20_0425-Abhijeet-kale-Resume.pdf"
import {Link} from "react-scroll"

const Navbar = () => {

    const [toggle,Settoggle] = useState(false)

     const [display,Setdisplay] = useState("none")

     const { isOpen, onOpen, onClose } = useDisclosure()
     const btnRef = React.useRef()


   const   handleClick = ()=>{

   }

  
  return (
    
     
<Box position="fixed" w="100%" zIndex="5" bg="gray.50" h="80px" className='font-link'  >
 <Flex  p={5} >
  <Heading color="olivedrab" mt={[2,0,0,0]} fontSize={[20,30,30,40]} >Abhijeet Kale</Heading><Spacer/> <Flex  display={["none","none","none","flex"]} color="olivedrab" alignItems={"center"} fontWeight="bold" fontSize="xl" paddingX={1}   > <Link to="home" spy={true} smooth={true} offset={-100} duration={500}  > <Text className='headText'  px={4}>Home</Text> </Link> <Link to="about" spy={true} smooth={true} offset={-100} duration={500}  > <Text className='headText'  px={4}>About Me</Text> </Link>
    <Link to="skills" spy={true} smooth={true} offset={-100} duration={500}  >  <Text  className='headText' px={4}>Skills</Text></Link>  <Link to="project" spy={true} smooth={true} offset={-100} duration={500}  >  <Text className='headText' px={4}>Project</Text> </Link>  <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}  >  <Text className='headText' px={4}>Contact</Text></Link> <a href={resume} download >  <Button fontSize="2xl" _hover={{bg:"olivedrab" , color:"white" }}  onClick={() => {
                        window.open("https://drive.google.com/file/d/1ZBrVi18XIyIfv-7PR_4K3sRzj4hy04mP/view?usp=sharing")
                      }} className='btn' mr={5} backgroundColor={"gray.50"}  color="olivedrab">
    Resume
  </Button> </a>
 </Flex> 
  <IconButton mr={5} display={["flex","flex","flex","none"]} icon={<FaHamburger color="olivedrab" />} ref={btnRef} colorScheme="gray" onClick={onOpen}  ></IconButton>
  {/* <IconButton color="olivedrab" icon={toggle?<FaMoon/>:<FaSun/>} isRound="true"  onClick={()=>Settoggle(!toggle)}  ></IconButton>  */}
 </Flex>
 {/* onClick={()=>Setdisplay("flex")}  */}

<Flex display={display} w="100vw" h ="100vh" bgColor="white"  left="0" top="0" pos="fixed" zIndex={20} py={20} justifyContent="center" > 
 
 

 <Drawer
        isOpen={isOpen}
       size="md"
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent  >
          <DrawerCloseButton />
          <DrawerHeader textAlign="center" >Abhijeet Kale</DrawerHeader>

          <DrawerBody>
          <Flex position="relative" flexDirection="column" align="center" gap={3} fontSize="lg"  >
 
    <Link to="home" spy={true} smooth={true} offset={-100} duration={500}> <Text  className='dropdown_content'  mt={5} fontWeight="bold" py={4} onClick={onClose}>Home</Text> </Link> <Link to="about" spy={true} smooth={true} offset={-100} duration={500}> <Text onClick={onClose} className='dropdown_content' fontWeight="bold" py={4}>About Me</Text> </Link>
  <Link to="skills" spy={true} smooth={true} offset={-100} duration={500}>  <Text  className='dropdown_content' fontWeight="bold" py={4} onClick={onClose}>Skills</Text></Link>  <Link to="project" spy={true} smooth={true} offset={-100} duration={500}>  <Text className='dropdown_content' fontWeight="bold" py={4} onClick={onClose}>Project</Text> </Link>  <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>  <Text  className='dropdown_content' fontWeight="bold" py={4} onClick={onClose}>Contact</Text></Link> <a href={resume} download  > <Button  onClick={() => {
                        window.open(resume);
                      }} bgColor="olivedrab"  fontWeight="bold" variant='ghost' _hover={{color:"white"}} color="white"  >
    Resume
  </Button> </a>


 </Flex>
          </DrawerBody>

          
        </DrawerContent>
      </Drawer>

 </Flex>


</Box>

    
  )
}

export default Navbar
