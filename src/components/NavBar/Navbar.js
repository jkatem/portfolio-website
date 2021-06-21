import React from 'react';
import { Box, Flex, Link as ChakraLink, chakra, useColorModeValue } from '@chakra-ui/react'
// import { Link } from 'react-router-dom' 
// import Link from 'next/link'



const Links = [
    {
        name: 'Projects',
        link: '/projects'
    },
    {
        name: 'About',
        link: '/about'
    }
]


const Navbar = () => {
    return (
        <chakra.header
            width='full'
            position='fixed'
            top={0}
            left={0}
            zIndex={10}
            bg={useColorModeValue(`rgba(255, 255, 255, 0.8)`, `rgba(26, 33, 41, 0.8)`)}
            sx={{ backdropFilter: `saturate(180%) blur(5px)` }}
        >
            
        <chakra.nav mx='auto' p={3}>
            <Flex
            margin='auto'
            justifyContent='space-between'
            alignContent='center'
            maxW='7xl'
            width='full'
            >
            <Box display='flex' alignContent='center'>
            <Links> 
                <ChakraLink
                    fontSize='lg'
                    margin='auto'
                    fontWeight='semibold'
                    position='relative'
                    textTransform='capitalize'
                    _after={{
                    transition: `all 0.25s ease-in-out`,
                    content: `''`,
                    /* Fixes anti-aliasing issue in chrome that leaves one pixel' */
                    outline: `1px solid transparent`,
                    width: `0%`,
                    height: `30%`,
                    position: `absolute`,
                    bottom: 1,
                    left: 0,
                    bg: useColorModeValue(`brand.200`, `brand.700`),
                    zIndex: -1,
                    }}
                    _hover={{
                    _after: {
                        width: `100%`,
                    },
                    color: useColorModeValue(`gray.900`, `white`),
                    }}
                >
                JENNIFER MIAO | Software Engineer
              </ChakraLink>
            </Links>
          </Box>
          {/* <MobileNav links={links} />
          <DesktopNav links={links} /> */}
        </Flex>
      </chakra.nav>
    </chakra.header>
    )
}

export default Navbar