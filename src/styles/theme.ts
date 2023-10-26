import { extendTheme } from '@chakra-ui/react';

import { Poppins } from 'next/font/google';

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin']
});

const fonts = {
    heading: poppins.style.fontFamily,
    body: poppins.style.fontFamily,
};


export const theme = extendTheme({
    colors: {
        blackAlpha: {
            '50': '#F5F8FA',
        },
        teal: {
            '650': '#47585B'
        },
        gray: {
            '300': '#DADADA',
            '500': '#999'
        },
        yellow: {
            '200': '#FFBA08'
        }
    },
    fonts,
    styles: {
        global: {
            body: {
                bg: 'blackAlpha.50',
                color: 'teal.650',
            },
        },
    },
});

