import { Flex, Heading } from "@chakra-ui/react";

export function BannerContinent() {
    return (
        <Flex
            w="100%"
            h={["150px", "392px", "530px"]}
            px={["0", "0", "0", "114px", "114px", "131px"]}
            pt={["0", "0", "345px"]}
            bgImage="url('/images/banner-europe.png')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            align="center"
            justify={["center", "center", "flex-start"]}
        >
            <Heading
                textAlign={["center", "left"]}
                fontSize={["1.75rem", "5xl"]}
                fontWeight="600"
                color="blackAlpha.50"
            >
                Europa
            </Heading>
        </Flex>
    )
}