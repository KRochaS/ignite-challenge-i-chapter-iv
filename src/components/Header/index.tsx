import { Flex } from "@chakra-ui/react";
import Link from "next/link";


export function Header() {
    return (
       
        <Flex
            as="header"
            w="100%"
            h="100"
            mx="auto"
           
            align="center"
            justify="center"

        >
            <Link href="/">
               
                    <img src="/images/logo.svg" alt="logo" />

               
            </Link>
        </Flex>
    )
}
