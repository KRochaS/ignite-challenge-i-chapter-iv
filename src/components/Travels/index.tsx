import { Stack } from "@chakra-ui/react";
import { ReactElement } from "react";

interface TravelsProps {
    children: ReactElement[];
}

export function Travels({ children }: TravelsProps) {
    return (
        <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="space-evenly"
            mt={["36px", "114px"]}
        >
            {children}
        </Stack>
    )
}