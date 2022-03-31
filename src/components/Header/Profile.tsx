import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return(
    <Flex align="center">
    <Box mr="4" textAlign="right" >
      <Text>Grégori Sabel</Text>
      <Text color="gray.300" fontSize="small">
        Seriuosabel57@gmail.com
      </Text>
    </Box>
    <Avatar size="md" name="G S" src="https://avatars.githubusercontent.com/u/55760643?v=4"/>
  </Flex>        
  );
}