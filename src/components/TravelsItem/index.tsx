import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface CardItemProps {
    image: string;
    info: string;
}

export function TravelsItem({ image, info }: CardItemProps) {

    const isDesktop = useBreakpointValue({ base: false, lg: true })

    return (
        <Flex flexDirection={{ base: "row", lg: "column" }} alignItems="center">
            {isDesktop ?
                (
                    <Image src={image} w="85px" h="85px" mb="6" />

                ) :
                <Image src={`/images/dot.svg`} w="8px" h="8px" mr="8px" />
            }
            <Text fontSize="24px" fontWeight="600"> {info} </Text>
        </Flex>
    )
}