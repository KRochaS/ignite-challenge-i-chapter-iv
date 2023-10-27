import { Flex, Text } from "@chakra-ui/react";

export function Content() {
    return (
        <Flex w={["343px", "600px"]} h={["146px", "211px"]} flexShrink={0}>
            <Text fontSize={["14px", "2xl"]} textAlign="justify" fontWeight={400} >
                A Europa é, por convenção, um dos seis continentes do mundo.
                Compreendendo a península ocidental da Eurásia, a Europa
                geralmente divide-se da Ásia a leste pela divisória de águas
                dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso,
                e o mar Negro a sudeste
            </Text>
        </Flex>
    )
}