'use client';

import { Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export function Header() {
    const router = useRouter();
    const pathName = usePathname();
    return (

        <Flex
            as="header"
            w="100%"
            h={["50px", "100px"]}
            alignItems="center"

        >

            {pathName === '/europe' && (
                <Flex pl={["16px", "140px"]}>
                    <Image
                        cursor="pointer"
                        src="/images/arrow-left.svg"
                        alt="arrow-left"
                        w={["16px",
                            "32px"]}
                        h={["16px",
                            "32px"]}
                        onClick={() => router.push('/')}
                    />
                </Flex>
            )}

            <Flex w="100%" justifyContent="center">
                <Link href="/">
                    <Image src="/images/logo.svg" alt="logo" w={["81px", "184px"]} />
                </Link>
            </Flex>
        </Flex>

    )
}
