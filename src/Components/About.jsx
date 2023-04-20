import { Box, Flex, Heading , Image, VStack , Text} from '@chakra-ui/react'
import React from 'react'
import "./About.css"
import home from "../Image/home.png"
import about  from "../Image/aboutMe.gif"
const About = () => {
  return (



<Box id='about' className='font-link' >
  <Heading textDecoration="underline" textDecorationThickness={5}   textAlign={"center"} mt={10}  color="olivedrab">About Me</Heading>

  <Flex flexDirection= {["column" , "column" , "column" , "row" ]}   mt={10}  alignItems="center" textAlign={"center"}  >
 
 <VStack mt={10} width={[ "80%","80%","60%","50%"]}   > 
  <Image   display="block"   src={about}  alt="https://cdn.dribbble.com/users/118246/screenshots/5343519/wifi.gif"  width="80%" borderRadius={20}   />
  </VStack>

 <VStack px={10} color="black" mt={10} width={[ "80%","80%","80%","50%"]}  >
  <Text  fontSize={20}p={2} textAlign="start" >My name is  Abhijeet kale and i enjoy creating things that live on the internet.</Text>
  <Text fontSize={20} p={2} textAlign="start" >I'm a Full-Stack Web Developer with the ability to learn and collaborate in rapidly changing environments and compositions. Worked through 1000+ hours of Bootcamp structure learning JavaScript, Node.Js, React.Js, MongoDB, Express, HTML5, and CSS3.</Text>
  <Text fontSize={20} p={2} textAlign="start" >I am passionate about solving technical problems, researching and developing new sites and technologies. I undertake and challenge myself to always improve, by being proactive, diligent, responsible, and committed to finding the perfect solution to any problem.</Text>
 </VStack>

  </Flex>


</Box>

  )
}

export default About
