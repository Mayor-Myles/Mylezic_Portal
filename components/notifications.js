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

function Notification({ opened: { opened, setOpened } }) {
  const messages = [
    {
      title: 'New data plan',
      message: 'We now have a good day at work and I will try to get the rest of the day.',
    },
    {
      title: 'System update',
      message: 'A new system update is available. Please update to the latest version.',
    },
  ];

  return (
    <Modal isOpen={opened} onClose={() => setOpened(false)}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Notifications</ModalHeader>
        <ModalBody>
          {messages.map((msg, index) => (
            <Box key={index} mb={4}>
              <Heading size="md">{msg.title}</Heading>
              <Text>{msg.message}</Text>
            </Box>
          ))}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="red" onClick={() => setOpened(false)}>
            close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default Notification;
    
