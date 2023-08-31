import React, {useState} from 'react'
import { Link} from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

import {
  
  InputGroup,
  InputRightElement,


} from '@chakra-ui/react'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'



export default function SimpleCard() {

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  ;
  const [signupError, setSignupError] = useState(null);

  const navigate = useNavigate();

  const handleSignIn= (e)=>{
    
    e.preventDefault();
        axios.post('http://localhost:3001/login', {email, password })
          .then(result => {
            console.log(result);
            if(result.data === "Success"){
              navigate('/home'); // Step 4: Navigate to login page
            } else{
              setSignupError('Login Failed');
            }
          })
          .catch((error) => {
            // Handle errors that occur during the POST request
            console.error('Error:', error);
            // You can set an error message or perform other error handling here
            setSignupError('An error occurred during Login. Please try again');
          });
  }

  
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Text color={'blue.400'}>features</Text> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password">
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
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Text color={'blue.400'}><Link to="/" >Forget Password</Link></Text>
              </Stack>
              <Button
              loadingText="Logging"
              onClick={handleSignIn}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                 
                Sign in
                 
              </Button>
            </Stack>
          </Stack>
          <Stack pt={6}>
              <Text align={'center'}>
              {signupError && <Text color="red">{signupError}</Text>}
                Create an Account: <Link to="/" color={'blue.400'}>SignUp</Link>
              </Text>
            </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}