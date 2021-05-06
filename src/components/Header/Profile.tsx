import { Flex, Text, Box, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Ítalo Lima</Text>
          <Text color="gray.300" fontSize="small">
            italojonas@hotmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Ítalo Lima"
        src="https://github.com/italo-lima.png"
      />
    </Flex>
  );
}
