import { Flex, Text } from "@chakra-ui/react";

interface CardInfo {
    city: string;
    country: string;
    flag: string;
}

export function CardInfo({ city, country, flag }: CardInfo) {
    return (
        <Flex borderRadius="4px" borderX="1px solid #ffba08" borderBottom="1px solid #ffba08">

            <Flex w="100%" justifyContent="space-between" mt="18px" alignItems="center" px="24px" mb="25px">
                <Flex flexDirection="column">
                    <Text color="teal.650" fontSize="20px" fontWeight="600">
                        {city}
                    </Text>
                    <Text mt="12px" color="gray.500" fontSize="16px" fontWeight={500}>
                        {country}
                    </Text>

                </Flex>

                <Flex w="30px"
                    h={"30px"}
                    bgImage={`url(${flag})`}
                    bgRepeat="no-repeat"
                    bgSize="cover">

                </Flex>
            </Flex>
        </Flex>
    )
}