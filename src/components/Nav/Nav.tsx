import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useDisclosure,
  VStack,
  Link as ChakraLink
} from "@chakra-ui/react";
import { useRef} from "react";
import {HamburgerIcon} from "@chakra-ui/icons";
import {Link as ReactRouterLink} from 'react-router-dom';


const Nav = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  return(
    <>
      <IconButton ref={btnRef} onClick={onOpen} aria-label="open_nav" icon={<HamburgerIcon/>}/>
      <Drawer isOpen={isOpen} placement='left' onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4}>
              <ChakraLink as={ReactRouterLink} to="/">Dashboard</ChakraLink>
              <ChakraLink as={ReactRouterLink} to="/attendance">Attendance</ChakraLink>
              <ChakraLink as={ReactRouterLink} to="/messages">Messages</ChakraLink>
              <ChakraLink as={ReactRouterLink} to="/classes">Classes</ChakraLink>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
};

export default Nav;