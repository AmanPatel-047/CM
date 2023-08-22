import React from "react"

import {
  Container,
  Heading,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react"
import { NavLink } from "react-router-dom"



export default function Dashboard() {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Website Design{" "}
          <Text as={"span"} color={"orange.400"}>
            made easy
          </Text>
        </Heading>
        <Text maxW={"3xl"}>
          Effortlessly manage, create, and share content with our intuitive Content Management System.
          Unlock the power of seamless collaboration and dynamic publishing today!
        </Text>
        <Stack spacing={6} direction={"row"}>
          <NavLink to='/addpages'>
            <Button
              rounded={"full"}
              px={6}
              colorScheme={"orange"}
              bg={"orange.400"}
              _hover={{ bg: "orange.500" }}
            >
              Get started
            </Button>
          </NavLink>
        </Stack>
        <div w={"full"} display={"Flex"} justifyContent={"Center"}>
            
        </div>
      </Stack>
    </Container>
  )
}
