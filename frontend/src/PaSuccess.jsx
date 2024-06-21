import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
const PaSuccess = () =>{

    const searchQuery = useSearchParams()[0]
    const referenceNum = searchQuery.get("reference")
    return(
        <Box>
            <VStack h ="100vh" justifyContent={"center"}>
                <Heading textTransform={"uppercase"}> Order successful</Heading>
                    <Text>
                        Reference No. {referenceNum}
                    </Text>
            </VStack>
        </Box>
    )
}


export default PaSuccess

