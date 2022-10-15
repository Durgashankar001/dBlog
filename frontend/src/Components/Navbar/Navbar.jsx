import React from 'react'
import "./Navbar.css"
import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    Button,
    useDisclosure,
    useColorModeValue,
    Stack,
    Image,
    Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { useState } from 'react';
import { useSelector } from 'react-redux';

const links = ["Our Story", "Membership","write"]


const Links = ({ children }) => (
    <RouterLink
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
            textDecoration: "none",
            bg: useColorModeValue("blue.400", "blue.400"),
        }}
        to={`/${children}`}
    >
        <Text className='navbar_text'>{children}</Text>
    </RouterLink>
);


const Navbar = () => {
    const token = false
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [user, setUser] = useState(false)
    return (
        <div style={{background:"black"}}>
            <Box py={[1, 3]} px={[null, 20]}  border={"1px solid black"}>
                <Flex
                    h={[10, 10]}
                    className="navbar_flex"
                >
                    <IconButton
                        size={"md"}
                        bg={"black"}
                        color={"white"}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={"Open Menu"}
                        display={{ md: "none" }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} className='navbar_flex_button'>
                        <Box>
                            <RouterLink to={"/"}>
                                <Image src="C:\Users\Jyotirmaya\OneDrive\Desktop\Blogging\dBlog\frontend\src\Images\logo.jpeg"></Image>
                            </RouterLink>
                        </Box>
                    </HStack>
                    <Flex className='navbar_flex_button'>
                    <HStack
                            as={"nav"}
                            spacing={4}
                            color={"white"}
                            display={{ base: "none", md: "flex" }}
                        >
                            {links.map((el) => (
                                <Links key={el}>{el}</Links>
                            ))}
                        </HStack>
                        <Button
                            variant={"ghosted"}
                            colorScheme={"blue"}
                            size={["xs", "sm"]}
                            color={"white"}
                            mr={4}
                            _hover={{cursor:"pointer"}}
                        >
                            {token ?  (
                                <RouterLink to={"/login"}>Sign out</RouterLink>
                            ) : (
                                <RouterLink to={"/login"}>Sign in</RouterLink>
                            )}
                        </Button>
                        <Button
                            variant={"outline"}
                            color={"black"}
                            borderColor={"black"}
                            borderRadius={"md"}
                            bg={"linear-gradient(#fff,#ffff)"}
                            _hover={{ color: "white", bg: "#0565ff",cursor:"pointer"}}
                            size={["xs", "sm"]}
                            mr={4}
                            px={7}
                            py={2}
                        >
                            <RouterLink to={"/signup"}>Get started</RouterLink>
                        </Button>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: "none" }}>
                        <Stack as={"nav"} spacing={4}>
                            {links.map((link) => (
                                <Links key={link}>{link}</Links>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </div>
    )
}

export default Navbar