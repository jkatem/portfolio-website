import React from 'react';
import {
    Box,
    Link, 
    Text,
    Heading,
    Flex,
    HStack,
    Stack,
    SimpleGrid,
    useColorModeValue
} from "@chakra-ui/react";
import { SiLinkedin } from "react-icons/si"
// import { FaGithub, FaLinkedin } from 'react-icons/fa';




const Footer = () => {
    return (

        <Box
            bg={useColorModeValue(`gray.50`, `gray.900`)}
            color={useColorModeValue(`gray.700`, `gray.200`)}
        >
            <SimpleGrid
                columns={{ base: 1, md: 3 }}
                gridTemplate={{ base: `1fr`, md: `1fr 1fr 1fr` }}
                mx="auto"
                maxW="7xl"
                py={4}
                px={5}
                spacing={4}
                align="center"
            >
                <Flex
                    direction="row"
                    maxW="full"
                    mx={{ base: `auto`, md: 5 }}
                    alignItems="center"
                >
                </Flex>
                <Text display="flex" alignSelf="center" mx="auto">Built with: </Text>
                <Stack
                    direction="row"
                    spacing={6}
                    ml="auto"
                    mr={{ base: `auto`, md: 5 }}
                    >
                    <Link href="https://github.com/jkatem" isExternal>
                        Github
                    </Link>
                    <Link href="https://www.linkedin.com/in/jenmiao" isExternal>
                        <SiLinkedin />
                    </Link>

                    {/* <SocialIcons
                        label="Instagram"
                        href="https://www.instagram.com/michael.__.hall/"
                    >
                        <FaInstagram />
                    </SocialIcons> */}
                    </Stack>
            </SimpleGrid>

        </Box>

    )
}

export default Footer