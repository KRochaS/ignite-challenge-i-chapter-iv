import { Flex, Stack, Text } from "@chakra-ui/react";

export function ContinentText() {
    return (
        <Flex justifyContent="center" alignItems="center" w="100%">
            <Stack direction="column" alignItems="center" fontSize={["20px", "36px"]} fontWeight={500}>
                <Text>
                    Vamos nessa?
                </Text>
                <Text> Então escolha seu continente </Text>
            </Stack>
        </Flex>
    )
}