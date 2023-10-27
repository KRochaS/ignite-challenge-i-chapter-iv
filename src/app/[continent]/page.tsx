import { BannerContinent } from '@/components/BannerContinent';
import { CardContainer } from '@/components/CardContainer';
import { CardImage } from '@/components/CardImage';
import { CardInfo } from '@/components/CardInfo';
import { Content } from '@/components/Content';
import { Header } from '@/components/Header';
import { Info } from '@/components/Info';
import { cardData, infoData } from '@/mock/mockData';
import { Flex, Heading, Stack } from '@chakra-ui/react';

export default function Continent() {
    return (
        <>
            <Header />

            <BannerContinent />

            <Flex px={["16px", "140px"]}>
                <Flex flexDirection={"column"}>
                    <Flex mt={["24px", "80px"]} w="100%" gap="70px" flexDirection={["column", "row"]}>
                        <Content />

                        <Stack direction='row' w={["343px", "600px"]} gap="42px" alignItems="center">
                            {infoData.map((item) => (
                                <Info key={item.id} number={item.number} text={item.text} />
                            ))}
                        </Stack>
                    </Flex>

                    <Flex mt="80px" flexDirection="column">
                        <Heading h="37px" fontSize={["24px", "36px"]} fontWeight={500}>
                            Cidades +100
                        </Heading>

                        <Flex mt="40px" flexWrap="wrap" mb="100px" gap="45px" pl={["35px", "0px"]} >
                            {cardData.map((item) => (
                                <CardContainer key={item.id}>
                                    <CardImage imageSrc={item.imageSrc} />
                                    <CardInfo city={item.city} country={item.country} flag={item.flag} />
                                </CardContainer>
                            ))}
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}