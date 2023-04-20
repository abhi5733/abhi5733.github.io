import React from 'react'
import { Box, Flex, Grid, Heading, VStack,Text , Input, Button , Image,FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Textarea} from '@chakra-ui/react'
import { GrGithub } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { AiFillPhone } from "react-icons/ai";
import aboutme from "../Image/about.png"
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { TbCornerRightDown } from "react-icons/tb";


const Contact = () => {

  const[email,Setemail] = useState("")
  const[name,Setname] = useState("")
  const[text,Settext] = useState("")

  const sendEmail = (e) => {
    // e.preventDefault();
  console.log(1)
    // emailjs.sendForm('service_qdmyhjj', 'template_ies584h',e.target, 'jWHrOLMQtz3uhm6SH')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
  };

 const handleSubmit = (e)=>{
  e.preventDefault()
console.log(name,text,email)
 }




  return (
    <Box id="contact" className='font-link' >
      <Heading mt={10} textAlign="center" color="olivedrab" textDecoration="underline" textDecorationThickness={5} >Contacts</Heading>

  <Box  width={["80%" , "70%","60%","60%"]} margin="auto" marginTop={20} >
   


    <Flex wisth="60%" flexDirection={["column", "column","column" ,  "row"]} margin="auto"  mt={20} justifyContent={[ "space-between"]}   >
 
 



<VStack as="form" action='https://formspree.io/f/mqkoanbn' method="POST"   p={5}  width={["100%" , "100%","100%","100%"]} >
  

  <FormControl >
    <FormLabel>Name</FormLabel>
    <Input type="text" name="username"  placeholder="enter name" borderColor="olivedrab"  autoComplete="off" required   />
  </FormControl>

<FormControl >
    <FormLabel>Email</FormLabel>
    <Input name="email" type="email"   placeholder="enter email"  borderColor="olivedrab"  autoComplete="off" required   />
</FormControl>
<FormControl >
    <FormLabel>Message</FormLabel>
  
    <Textarea  name="message" placeholder='enter your message' borderColor="olivedrab"  autoComplete="off" required mb={5} ></Textarea>
  
  
  
</FormControl>

<Button type="submit" bgColor="olivedrab" width={["100%","60%","50%","40%"]}   _hover={{color:"white"}} >Submit</Button>

    </VStack>

  <VStack  margin="auto" mt={[10,10,10,0]}    width={["100%"]} mb={20} >
    {/* <Image height="400px" width="100%" src={aboutme} /> */}
   <Flex alignItems="center" >  <Heading color="olivedrab" fontSize="xl"   >Find me here</Heading> <Box mt={2}>  <TbCornerRightDown  size={30} /> </Box></Flex>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15007.117140862445!2d75.29379038961294!3d19.891539682998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb99d4c75c0741%3A0x290026680e8438fd!2sShani%20Mandir!5e0!3m2!1sen!2sin!4v1674376435689!5m2!1sen!2sin" width={["100%","100%","100%","90%"]} height="450" style={{border:0,borderRadius:"5%"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  </VStack >
    </Flex>

    <Grid  gridTemplateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(2,1fr)","repeat(4,1fr)"]} gap={5} mb={["30px","50px","50px","70px"]}  alignItems="center"  >
    <a href='https://github.com/abhi5733' >   <Flex _hover={{transform:"scale(1.1)" ,   transition:"transform 0.5s"}}  justifyContent="center"  bgColor="olivedrab" alignItems="center"  ><GrGithub color='white' size="30px"/> <Text p={2} fontWeight="semibold" fontSize="xl" color='white'  >Github</Text></Flex></a> 
    <a href='https://www.linkedin.com/in/abhijeet-kale-588b77238/'>  <Flex _hover={{transform:"scale(1.1)" ,   transition:"transform 0.5s"}} justifyContent="center"  bgColor="olivedrab" alignItems="center" >< BsLinkedin color='white'  size="30px"/><Text p={2} fontWeight="semibold"  fontSize="xl" color='white' >Linkedin</Text></Flex></a> 
    <a href="mailto:abhijeetkale5733@gmail.com">  <Flex _hover={{transform:"scale(1.1)" ,   transition:"transform 0.5s"}} justifyContent="center"  bgColor="olivedrab" alignItems="center"  ><SiGmail color='white'  size="30px"/><Text p={2} fontWeight="semibold" fontSize="xl" color='white' >Gmail</Text></Flex></a> 
    <a href="https://api.whatsapp.com/send/?phone=7083041314&text=I%27m+interested+to+talk+with+you!&type=phone_number&app_absent=0">   <Flex _hover={{transform:"scale(1.1)" ,   transition:"transform 0.5s"}} justifyContent="center"  bgColor="olivedrab" alignItems="center"  >< AiFillPhone color='white' size="30px"/><Text p={2} fontWeight="semibold"  fontSize="xl" color='white' >9284134778</Text></Flex> </a> 
    </Grid>

  </Box>

    </Box>
  )
}

export default Contact
