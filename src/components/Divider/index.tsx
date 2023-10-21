import { Box, Flex } from "@chakra-ui/react";

export function Divider() {
    return (
        <Flex w="100%" justifyContent="center">
            <Box w="90px" h="2px" backgroundColor="teal.650" mt="80px" ml="30px" mb="40px"></Box>
        </Flex>
    )
}