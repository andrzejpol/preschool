import React, { useState } from "react";
import {
  Avatar,
  Box,
  Flex,
  Text,
  VStack,
  Input,
  Button,
  List,
  ListItem,
  useToast,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  useBreakpointValue,
  chakra,
  Spacer,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Nav from "components/Nav";

type Contact = {
  id: number;
  name: string;
};

const userId = 0;

const contacts: Contact[] = [
  { id: 1, name: "Alice Smith" },
  { id: 2, name: "Bob Johnson" },
  { id: 3, name: "Charlie Davis" },
];

type Message = {
  senderId: number;
  content: string;
  isFromUser: boolean;
};

const sampleMessages: Record<number, Message[]> = {
  1: [{ senderId: 1, content: "Hey, how's it going?", isFromUser: false }],
  2: [{ senderId: 2, content: "Hello, got your notes?", isFromUser: false }],
  3: [
    {
      senderId: 3,
      content: "Hi, are we still on for today?",
      isFromUser: false,
    },
  ],
};

const Communicator = () => {
  const [selectedContactId, setSelectedContactId] = useState<number | null>(
    null
  );
  const [messages, setMessages] = useState<{ [key: number]: Message[] }>(
    sampleMessages
  );
  const [newMessage, setNewMessage] = useState<string>("");
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isDrawer = useBreakpointValue({ base: true, md: false });

  const handleSendMessage = () => {
    if (!newMessage.trim()) {
      toast({
        title: "Message cannot be empty",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    if (selectedContactId) {
      const updatedMessages = {
        ...messages,
        [selectedContactId]: [
          ...messages[selectedContactId],
          {
            senderId: userId,
            content: newMessage,
            isFromUser: true,
          },
        ],
      };
      setMessages(updatedMessages);
      setNewMessage("");
    }
  };

  // @ts-ignore
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Box p="10" position="relative" width="100vw">
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Box>
            <Nav />
          </Box>
          <Spacer />
          <Box gap="2">
            <Flex alignItems="center" gap="10">
              <Text fontSize="sm">
                Hello, <strong>Dan</strong>
              </Text>
              <Avatar size="sm" name="Dan Abrahmov" />
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Flex direction={{ base: "column", md: "row" }} flex="1">
        {isDrawer ? (
          <>
            <IconButton
              aria-label="Open contacts"
              icon={<HamburgerIcon />}
              onClick={onOpen}
              size="lg"
              m={2}
            />
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Contact List</DrawerHeader>
                <DrawerBody>
                  <List spacing={3}>
                    {contacts.map((contact) => (
                      <ListItem
                        key={contact.id}
                        p="2"
                        bg={
                          selectedContactId === contact.id
                            ? "blue.100"
                            : "transparent"
                        }
                        onClick={() => {
                          setSelectedContactId(contact.id);
                          onClose();
                        }}
                      >
                        {contact.name}
                      </ListItem>
                    ))}
                  </List>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </>
        ) : (
          <Box width="30%" bg="gray.100" p="4">
            <List spacing={3}>
              {contacts.map((contact) => (
                <ListItem
                  key={contact.id}
                  p="2"
                  bg={
                    selectedContactId === contact.id
                      ? "blue.100"
                      : "transparent"
                  }
                  onClick={() => setSelectedContactId(contact.id)}
                >
                  {contact.name}
                </ListItem>
              ))}
            </List>
          </Box>
        )}
        <Box flex="1" p="4">
          <VStack spacing={4} align="stretch">
            {selectedContactId &&
              messages[selectedContactId].map((msg, index) => (
                <chakra.div
                  key={index}
                  bg={msg.isFromUser ? "green.100" : "blue.50"}
                  p="3"
                  alignSelf={msg.isFromUser ? "flex-end" : "flex-start"}
                >
                  {msg.content}
                </chakra.div>
              ))}
          </VStack>
          <Flex mt="4" gap="2">
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message here..."
            />
            <Button
              colorScheme="blue"
              onClick={handleSendMessage}
              isDisabled={!selectedContactId}
            >
              Send
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Communicator;
