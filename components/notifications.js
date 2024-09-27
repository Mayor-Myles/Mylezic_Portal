import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Box,
  Heading,
  Text,
} from '@chakra-ui/react';
import {notificationsState} from "../states/recoil";
import {useRecoilState} from "recoil";

function Notification({ opened: { opened, setOpened } }) {
  
  const [messages, setMessages] = useRecoilState(notificationsState);
  
  return (
    <Modal isOpen={opened} onClose={() => setOpened(false)} isCentered>
      <ModalOverlay />
      <ModalContent
        marginTop={{ base: "5%", md: "10%" }} // Adds top margin for better centering
        maxH={{ base: "90vh", md: "80vh" }}  // Max height for small devices
        overflowY="auto"  // Makes the content scrollable if it exceeds the height
      >
        <ModalHeader position="scroll">Notifications <Button ml="3em" colorScheme="red" onClick={() => setOpened(false)}>
            Close
          </Button></ModalHeader>
        <ModalBody>
          {messages && messages.map((msg, index) => (
            <Box p="5" borderRadius="md" boxShadow="lg" color="white" bg="teal.400" key={index} mb={10}>
              <Heading mb="2" textDecoration="underline" size="xs">{msg.title}</Heading>
              <Text size="sm">{msg.message}</Text>
              
              <Text fontSize="sm" mt="2" color="gray.300">
                {msg.date}
              </Text>
            </Box>
          ))}
        </ModalBody>
        <ModalFooter>
          <Text>Mylezic</Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default Notification;
    
