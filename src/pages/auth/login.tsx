import React from "react";
import {
  Box,
  Text,
  Flex,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  IconButton,
  InputGroup,
  InputRightElement,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Link as ChakraLink } from "@chakra-ui/next-js";
// import Link from "next/link";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormFields, loginSchema } from "@/utils/schemas";
import { Input } from "@/modules/common/components";

const School = () => {
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormFields>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async ({ email, password }: LoginFormFields) => {
    const result = await signIn("credentials", {
      email: email,
      password: password,
      type: "PARENT",
      redirect: true,
      callbackUrl: (router.query.callbackUrl as string) || "/",
    });

    console.log(result);
  };

  return (
    <Box as="section" minH="100vh" pt="10rem">
      <Box
        maxW="400px"
        mx="auto"
        w="full"
        px=".5rem"
        py="1rem"
        bg="#fff"
        border="1px solid #e0e0e0"
      >
        <Heading fontSize="2xl" mb={8} textAlign="center">
          Login to your account
        </Heading>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Box p={4}>
            <FormControl mb={6} isInvalid={!!errors.email}>
              <FormLabel htmlFor="email" color="#100B05" fontSize="14px">
                Email
              </FormLabel>
              <Input
                id="email"
                type="email"
                placeholder="Enter email address"
                isRequired
                register={register}
              />
              <FormErrorMessage>
                {errors.email && errors.email?.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl mb={2} isInvalid={!!errors.password}>
              <FormLabel htmlFor="password" color="#100B05" fontSize="14px">
                Password
              </FormLabel>

              <InputGroup>
                <Input
                  id="password"
                  placeholder="Enter password"
                  type={isOpen ? "text" : "password"}
                  register={register}
                />
                <InputRightElement h="full">
                  <IconButton
                    bg="none"
                    width="32px"
                    onClick={onToggle}
                    height="40px"
                    aria-label="toggle-passwors"
                    icon={
                      isOpen ? (
                        <FiEye size={18} color="#000" />
                      ) : (
                        <FiEyeOff size={18} color="#000" />
                      )
                    }
                    _hover={{
                      bg: "none",
                    }}
                    _active={{
                      bg: "none",
                    }}
                  />
                </InputRightElement>
              </InputGroup>

              <FormErrorMessage>
                {errors.password && errors.password?.message}
              </FormErrorMessage>
            </FormControl>

            <Flex mb={6} justify="flex-end">
              <ChakraLink
                href="/forgot-password"
                fontSize="sm"
                color="brand"
                fontWeight={500}
              >
                Forgot password?
              </ChakraLink>
            </Flex>

            <Button type="submit" isLoading={isSubmitting}>
              Login
            </Button>

            <Text mt="1rem" textAlign="center" fontSize="sm">
              Don&apos;t have an account?{" "}
              <ChakraLink
                href="/register"
                _hover={{
                  textDecor: "underline",
                }}
              >
                Register
              </ChakraLink>
            </Text>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default School;
