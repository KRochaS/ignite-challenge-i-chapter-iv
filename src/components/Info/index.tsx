import { Flex, Text } from "@chakra-ui/react";

interface InfoProps {
    number: string;
    text: string;
}

export function Info({ number, text }: InfoProps) {
    return (
        <>
            <Flex flexDirection="column" alignItems="center">
                <Text color="yellow.200" fontSize={["24px", "4xl"]} fontWeight={600}>  {number} </Text>
                <Text fontSize={["18px", "24px"]} fontWeight={["400", "600"]}> {text} </Text>
            </Flex>
        </>
    )
}