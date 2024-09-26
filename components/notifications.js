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
  
const [messages,setMessages] = useRecoilState(notificationsState);

alert(opened);
  
  return (
    <Modal isOpen={opened} onClose={() => setOpened(false)}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Notifications</ModalHeader>
        <ModalBody>
          {messages.all.map((msg, index) => (
            <Box p="5" borderRadius="md" shadow="xl" color="white" bg="teal.600" key={index} mb={10}>
              <Heading size="sm">{msg.title}</Heading>
              <Text>{msg.message}</Text>
            </Box>
          ))}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="teal.100" onClick={() => setOpened(false)}>
            close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default Notification;
    
