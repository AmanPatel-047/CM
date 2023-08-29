import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
// import { useMutation,  useQueryClient } from 'react-query';
// import { useAuth } from './authContext';
import axios from 'axios';

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'


export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isSigningUp, setIsSigningUp] = useState(false);
  const [signupError, setSignupError] = useState(null);

  // const auth = useAuth();
  const navigate = useNavigate();
  const isEmailValid = (email) => {
    // You can implement your own email format validation logic here.
    // For a simple check, you can use a regular expression.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsSigningUp(true);
    setSignupError(null);

    try {
      if (
        firstName &&
        lastName &&
        email &&
        password &&
        isEmailValid(email) // Step 3: Check email format
      ) {
        // All fields are filled and email format is valid
        // auth.signup(email, password);
    
        await axios.post('http://localhost:3001/', { firstName, lastName, email, password })
          .then((result) => {
            console.log(result);
            navigate('/login'); // Step 4: Navigate to login page
          })
          .catch((error) => {
            // Handle errors that occur during the POST request
            console.error('Error:', error);
            // You can set an error message or perform other error handling here
            setSignupError('An error occurred during signup. Please try again later.');
          });
      } else {
        setSignupError('Please fill in all fields correctly.');
      }
    } catch (error) {
      setSignupError(error.message);
    } finally {
      setIsSigningUp(false);
    }
  }
    
    
//     await axios.post('http://localhost:3001/', {firstName, lastName, email, password })
//     .then( (result) => { 
//       console.log(result)
   
//   })
//   .catch((error) => {
//     // Handle errors that occur during the POST request
//     console.error('Error:', error);
//     // You can set an error message or perform other error handling here
//   })
// }


// try {
//   if (
//     firstName &&
//     lastName &&
//     email &&
//     password &&
//     isEmailValid(email) // Step 3: Check email format
//   ) {
//     // All fields are filled and email format is valid
//     // auth.signup(email, password);

//     navigate('/login'); // Step 4: Navigate to login page
//   } else {
//     setSignupError('Please fill in all fields correctly.');
//   }
// } catch (error) {
//   setSignupError(error.message);
// } finally {
//   setIsSigningUp(false);
// }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" Required>
              <FormLabel>Email Address</FormLabel>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password" Required>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                type='submit'
                bg={'blue.400'}
                color={'white'}
                onClick={handleSignup}
                isLoading={isSigningUp}
                _hover={{
                  bg: 'blue.500',
                }}
                disabled={!firstName || !lastName || !email || !password || isSigningUp}>
                {/* {(!firstName || !lastName || !email || !password || isSigningUp) ? (
                  <span>Sign up</span>
                ) : (
                  <NavLink>Sign up</NavLink>
                )} */}
                SignUp
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'} >
                {signupError && <Text color="red">{signupError}</Text>}
                Already a user? <Link color={'blue.400'} to="/login" >Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
