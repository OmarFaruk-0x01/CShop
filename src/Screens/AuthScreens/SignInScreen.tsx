import React from 'react';
import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  IconButton,
  Input,
  ScrollView,
  StatusBar,
  Text,
  VStack,
} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ErrorMessage, Formik} from 'formik';
import * as yup from 'yup';
import CHeader from '../../Components/CHeader';
import useCNav from '../../Hooks/useCNav';
const SignInValidationSchema = yup.object().shape({
  email: yup.string().email('Invalid Email!').required('Email Required!'),
  password: yup
    .string()
    .min(6, 'Minium 6 characters needed.')
    .required('Password Required'),
});
const SignInScreen: React.FC = () => {
  const {moveToRoute } = useCNav()
  return (
    <Box flex={1} bgColor={'white'}>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor="white"
      />
      <ScrollView>
        <Box marginTop={'5'}>
          <CHeader title='CShop'/>
        </Box>

        <VStack space={2} my={'10'} px={'10'}>
          <Text textAlign={'center'} fontWeight={'600'} fontSize={'3xl'}>
            WellCome to Login
          </Text>
          <Text
            textAlign={'center'}
            fontWeight={'600'}
            fontFamily="mono"
            fontSize={'md'}>
            Please enter below details to login to your account.
          </Text>
        </VStack>
        <Formik
          onSubmit={values => console.log(values)}
          validateOnChange={false}
          validateOnBlur={true}
          validate={({email, password}) => {}}
          validationSchema={SignInValidationSchema}
          initialValues={{
            email: '',
            password: '',
          }}>
          {({handleSubmit, handleChange, handleBlur, errors, values}) => {
            return (
              <VStack space={5} px={'6'}>
                <Box>
                  <Input
                    px={2}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    placeholder="Email"
                    rounded={'md'}
                    borderColor={errors.email ? 'red.300' : 'gray.200'}
                    fontSize={'lg'}
                    fontWeight="500"
                    _focus={{
                      bg: 'white',
                      borderColor: errors.email ? 'red.300' : 'gray.200',
                    }}
                    InputLeftElement={
                      <Box
                        bgColor="white"
                        py="4"
                        px="4"
                        borderRightWidth={1}
                        borderColor={errors.email ? 'red.300' : 'gray.200'}>
                        <Icon
                          size={'xl'}
                          as={AntDesign}
                          color={errors.email ? 'red.300' : 'gray.400'}
                          name="user"
                        />
                      </Box>
                    }
                  />
                  <ErrorMessage name="email">
                    {errmsg => <Text color="red.400">{errmsg}</Text>}
                  </ErrorMessage>
                </Box>
                <Box>
                  <Input
                    px={2}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    placeholder="Password"
                    rounded={'md'}
                    type="password"
                    borderColor={errors.password ? 'red.300' : 'gray.200'}
                    fontSize={'lg'}
                    passwordRules={
                      'required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;'
                    }
                    fontWeight="500"
                    _focus={{
                      bg: 'white',
                      borderColor: errors.password ? 'red.300' : 'gray.200',
                    }}
                    InputLeftElement={
                      <Box
                        bgColor="white"
                        py="4"
                        px="4"
                        borderRightWidth={1}
                        borderColor={errors.password ? 'red.300' : 'gray.200'}>
                        <Icon
                          size={'xl'}
                          as={AntDesign}
                          color={errors.password ? 'red.300' : 'gray.400'}
                          name="lock1"
                        />
                      </Box>
                    }
                    InputRightElement={
                      <IconButton
                        bgColor="white"
                        py="4"
                        px="4"
                        borderColor="gray.200"
                        icon={
                          <Icon
                            size={'xl'}
                            as={AntDesign}
                            color="gray.400"
                            name="eyeo"
                          />
                        }></IconButton>
                    }
                  />
                  <ErrorMessage name="password">
                    {errmsg => <Text color="red.400">{errmsg}</Text>}
                  </ErrorMessage>
                </Box>
                <Button
                  onPress={handleSubmit}
                  variant={'solid'}
                  bgColor="primary.900"
                  _pressed={{bgColor: 'primary.700'}}
                  _text={{fontSize: 'lg'}}>
                  Login
                </Button>
              </VStack>
            );
          }}
        </Formik>
        <Button my={'2'} _text={{fontSize: 'md'}} variant={'link'} onPress={moveToRoute('forgot')}>
          Forgot password?
        </Button>
        <Box>
          <Text my="5" textAlign="center" fontSize="md" color="gray.400">
            Or Login with
          </Text>
          <HStack px={'5'} justifyContent="center" space={5}>
            <Button
              flex={1}
              px="10"
              bgColor="red.100"
              _text={{fontSize: 'xl', color: 'red.500'}}
              _pressed={{bgColor: 'red.200'}}
              startIcon={
                <Icon
                  as={AntDesign}
                  name="google"
                  size={'lg'}
                  color="red.500"
                />
              }>
              Google
            </Button>
            <Button
              flex="1"
              px="10"
              bgColor="blue.100"
              _text={{fontSize: 'lg', color: 'blue.500'}}
              _pressed={{bgColor: 'blue.200'}}
              startIcon={
                <Icon
                  as={AntDesign}
                  name="facebook-square"
                  size={'lg'}
                  color="blue.500"
                />
              }>
              Facebook
            </Button>
          </HStack>
        </Box>
        <HStack space={2} justifyContent="center" my="5">
          <Text fontSize="md">Didn't have an account?</Text>
          <Button
            onPress={moveToRoute('signup')}
            _text={{fontSize: 'md', color: 'black', fontWeight: '500'}}
            p={0}
            variant={'link'}>
            Create Account
          </Button>
        </HStack>
      </ScrollView>
    </Box>
  );
};

export default SignInScreen;
