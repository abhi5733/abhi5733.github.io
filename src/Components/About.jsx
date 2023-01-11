import { Box, Flex, Heading , Image, VStack , Text} from '@chakra-ui/react'
import React from 'react'
import "./About.css"

const About = () => {
  return (



<Box >
  <Heading textAlign={"center"} mt={10} >About Me</Heading>

  <Flex flexDirection= {["column" , "column" , "column" , "row" ]}   mt={10}  alignItems="center" textAlign={"center"}  >
 
 <VStack mt={10} width={[ "80%","80%","60%","50%"]}   > 
  <Image   display="block"     src="https://cdn.dribbble.com/users/118246/screenshots/5343519/wifi.gif" alt='Abhijeet Kale' width="80%" borderRadius={20}   />
  </VStack>

 <VStack mt={10} width={[ "80%","80%","80%","50%"]}  >
  <Text fontSize={20}p={2} >My name's Abhijeet kale and i enjoy creating things that live on the internet.</Text>
  <Text fontSize={20} p={2}  >I'm a Full-Stack Web Developer with the ability to learn and collaborate in rapidly changing environments and compositions. Worked through 1000+ hours of Bootcamp structure learning JavaScript, Node.Js, React.Js, MongoDB, Express, HTML5, and CSS3.</Text>
  <Text fontSize={20} p={2}  >I am passionate about solving technical problems, researching and developing new sites and technologies. I undertake and challenge myself to always improve, by being proactive, diligent, responsible, and committed to finding the perfect solution to any problem.</Text>
 </VStack>

  </Flex>


</Box>

  )
}

export default About
