import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface CardContainer {
    children: ReactNode;
}

export function CardContainer({ children }: CardContainer) {
    return (
        <Flex w="256px" h="279px" flexDirection="column">
            {children}
        </Flex>
    )
}