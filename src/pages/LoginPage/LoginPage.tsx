import {
  AbsoluteCenter,
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading, IconButton,
  Input,
  InputGroup, InputRightElement
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {useState} from "react";
import Nav from "../../components/Nav";

const LoginPage = () =>{
  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);

  return (
  <Box p="10" position='relative' width="100vw">
    <Nav/>
    <AbsoluteCenter axis='both'>
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Box p='6' display="flex" justifyContent="center" alignItems="center" flexDirection="column">
          <Heading as='h4' size='md' mb="10px">
            Login
          </Heading>
          <Box>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input type="email"/>
            </FormControl>
            <FormControl>
              <FormLabel>
                Password
              </FormLabel>
              <InputGroup>
                <Input type={showPassword ? "text" : "password"}/>
                <InputRightElement>
                  <IconButton aria-label="button" icon={showPassword ? <ViewIcon/> : <ViewOffIcon/>} onClick={handleShowClick} variant="ghost"/>
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </Box>
          <Button size='md' colorScheme='green' mt='24px' width="full">
            Login
          </Button>
        </Box>
      </Box>
    </AbsoluteCenter>
  </Box>
)} ;

  export default LoginPage;