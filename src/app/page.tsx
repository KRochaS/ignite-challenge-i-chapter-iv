'use client';

import { Banner } from '@/components/Banner';
import { ContinentText } from '@/components/ContinentText';
import { Divider } from '@/components/Divider';
import { Header } from '@/components/Header';
import Slider from '@/components/Slider';
import { Travels } from '@/components/Travels';
import { TravelsItem } from '@/components/TravelsItem';
import { travelsData } from '@/mock/mockData';


export default function Home() {

    return (
        <>
            <Header />
            <Banner />
            <Travels>
                {travelsData?.map(item => {
                    return (
                        <TravelsItem key={item.id} image={item.image} info={item.info} />
                    )
                })}
            </Travels>
            <Divider />
            <ContinentText />
            <Slider />
        </>

    )
}
