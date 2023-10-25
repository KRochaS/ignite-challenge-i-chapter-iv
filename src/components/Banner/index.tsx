'use client';

import { Box, Flex, Heading, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export function Banner() {

    const isDesktop = useBreakpointValue({ base: false, lg: true })

    return (
        <Flex
            w="100%"
            h={["163px", "250px", "250px", "335px"]}
            bgImage="url('/images/background.svg')"
            bgRepeat="no-repeat"
            bgSize="cover"

        >
            <Flex justifyContent="space-evenly" w="100%">
                <Box
                    pt={["28px", "112px"]}
                    px={["16px", "0px"]}
                >
                    <Heading
                        color="blackAlpha.50"
                        fontWeight="500"
                        fontSize={["xl", "2xl", "2xl", "4xl"]}
                    >
                        5 continentes, <br />infinitas possibilidades.
                    </Heading>
                    <Text
                        color="gray.300"
                        mt="3"
                        fontSize={["0.8rem", "xl"]}
                        maxW={["100%", "100%", "100%", "550px"]}
                    >
                        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                    </Text>
                </Box>

                {isDesktop && (
                    <Image
                        w="417px"
                        h="276px"
                        src="/images/airplane.svg"
                        alt="Avião amarelo voando com algumas nuvens ao redor."
                        mt="95px"
                        transform="rotate(3deg)"

                    />

                )}
            </Flex>
        </Flex>
    )
}