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
import React from 'react';
import CButton from '../../Components/CButton';

const ForgotPasswordValidationSchema = yup.object().shape({
    email: yup.string().email("Invalid Email Address").required('Email Required')
})

const ForgotPasswordScreen: React.FC = () => {
  return (
    <Box flex={1} bgColor={'white'}>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor="white"
      />
      <ScrollView contentContainerStyle={{paddingBottom: 20}}>
        <Box marginTop={'5'}>
          <Heading
            textAlign={'center'}
            fontWeight={'600'}
            fontFamily="mono"
            fontSize={'4xl'}>
            CShop
          </Heading>
        </Box>

        <VStack space={2} my={'10'} px={'10'}>
          <Text textAlign={'center'} fontWeight={'600'} fontSize={'3xl'}>
            Forgot Password
          </Text>
          <Text
            textAlign={'center'}
            fontWeight={'600'}
            fontFamily="mono"
            fontSize={'md'}>
            Please enter email to get OTP code.
          </Text>
        </VStack>
        <Formik
          onSubmit={values => console.log(values)}
          validationSchema={ForgotPasswordValidationSchema}
          validateOnChange={false}
          validateOnBlur={false}
          initialValues={{
            username: '',
            email: '',
            password: '',
          }}>
          {({handleSubmit, handleChange, handleBlur, errors, values, isSubmitting}) => {
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
                          name="mail"
                        />
                      </Box>
                    }
                  />
                  <ErrorMessage name="email">
                    {errmsg => <Text color="red.400">{errmsg}</Text>}
                  </ErrorMessage>
                </Box>

                    <CButton
                  isLoading={isSubmitting}
                  onPress={handleSubmit}
                  variant={'solid'}
                  _pressed={{bgColor: 'primary.700'}}
                  _text={{fontSize: 'lg'}}>
                  Send Code
                </CButton>
              </VStack>
            );
          }}
        </Formik>
      </ScrollView>
    </Box>
  );
};

export default ForgotPasswordScreen;
