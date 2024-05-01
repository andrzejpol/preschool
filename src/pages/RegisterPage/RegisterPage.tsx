import {
  AbsoluteCenter,
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading, IconButton,
  Input, InputGroup, InputRightElement,
} from "@chakra-ui/react";
import {ViewIcon, ViewOffIcon} from "@chakra-ui/icons";
import {useState} from "react";

const LoginPage = () =>{
  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);
  return (
    <Box position='relative' width="100vw">
      <AbsoluteCenter axis='both'>
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
          <Box p='6' display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <Heading as='h4' size='md' mb="10px">
              Register
            </Heading>
            <Box>
              <FormControl id="first-name">
                <FormLabel>First Name</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="last-name">
                <FormLabel>Last Name</FormLabel>
                <Input type="text" />
              </FormControl>
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
              <FormControl>
                <FormLabel>
                  Confirm Password
                </FormLabel>
                <InputGroup>
                  <Input type={showPassword ? "text" : "password"}/>
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