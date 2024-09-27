const TransactionItem = ({ icon, name, type, amount, color, date, tid }) => (
  <HStack gap="3" justify="space-between" w="full" wrap="wrap">
    <HStack minW="20%" spacing={2}>
      <Icon color="seagreen" as={icon} boxSize={4} ml="2" />
      <Text fontSize="sm" color="gray.500" isTruncated>{name} - {type}</Text>
    </HStack>

    <Text fontSize="13px" ml={2} color="gray.400" isTruncated>REF - {tid}</Text>

    <Text color={color} fontSize="14px" whiteSpace="nowrap" isTruncated>
      ₦{amount.toLocaleString()}
    </Text>

    <Text fontSize="13px" ml={2} color="gray.400" isTruncated>
      {date}
    </Text>
  </HStack>
);
  
