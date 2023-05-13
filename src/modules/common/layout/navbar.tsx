import React from "react";
import { Box, Button, Container, Flex } from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";
import NextLink from "next/link";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <Box as="header">
      <Flex as={Container} alignItems="center" justifyContent="space-between">
        <Box>
          <Link href="/">Logo</Link>
        </Box>
        <Flex>
          <NextLink href="">How it works</NextLink>
          <NextLink href="">Blog</NextLink>
          <NextLink href="/posts">Posts</NextLink>
          {!session && <NextLink href="/auth/login">Login</NextLink>}
          {!session ? (
            <Button>Join Findschools - It&apos;s Free</Button>
          ) : (
            <Button onClick={() => signOut()}>Signout</Button>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
