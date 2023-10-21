
'use client';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Flex, Text } from '@chakra-ui/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



export default function Slider() {

    return (

        <Flex justifyContent="center" mb="40px" ml="100px" mr="100px" mt="52px">
            <Flex w="100%" h="450px">
                <Swiper
                    style={{ width: '100%', color: 'Alpha.50' }}
                    modules={[Navigation, Pagination]}

                    navigation={true}
                    pagination={true}
                >
                    <SwiperSlide>
                        <Flex w="100%"
                            h={["250px", "450px"]}
                            align="center"
                            justify="center"
                            direction="column"
                            bgImage="url(/images/europe.png)"
                            bgPosition="100% 30%"
                            bgRepeat="no-repeat"
                            bgSize="cover"
                            textAlign="center">

                            <Text pb="16px" color="blackAlpha.50" fontSize="48px" fontWeight={700}> Europa</Text>
                            <Text color="blackAlpha.50" fontSize="24px" fontWeight={700}> O continente mais antigo.</Text>
                        </Flex>
                    </SwiperSlide>
                </Swiper>
            </Flex>
        </Flex>
    )
}