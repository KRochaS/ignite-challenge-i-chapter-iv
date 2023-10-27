import { Flex } from "@chakra-ui/react";

interface CardImage {
    imageSrc: string;
}

export function CardImage({ imageSrc }: CardImage) {
    return (
        <Flex w="100%"
            h={["173px"]}
            bgImage={`url(${imageSrc})`}
            bgRepeat="no-repeat"
            bgSize="cover">
        </Flex>
    )
}