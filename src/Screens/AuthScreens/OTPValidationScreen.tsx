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
  useTheme,
  VStack,
} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ErrorMessage, Formik} from 'formik';
import * as yup from 'yup';
import React, {useState} from 'react';
import CButton from '../../Components/CButton';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {StyleSheet} from 'react-native';

const OTPValidationScreen: React.FC = () => {
  const [isDisable, setIsDisable] = useState(true);
  const {colors} = useTheme();
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
            Verify Email
          </Text>
          <Text
            textAlign={'center'}
            fontWeight={'600'}
            fontFamily="mono"
            fontSize={'md'}>
            Please enter OTP to get verified.
          </Text>
        </VStack>
        <Formik
          onSubmit={values => console.log(values)}
          validateOnChange={false}
                  validateOnBlur={false}
                  validationSchema={yup.object().shape({code: yup.string().min(6, 'OTP code have to be 6 digits').required('OTP code required')})}
          initialValues={{
            code: '',
          }}>
          {({handleSubmit, handleChange, isSubmitting}) => {
            return (
              <VStack space={5} px={'6'}>
                <Box alignItems="center">
                  <OTPInputView
                    style={{width: '90%', height: 100}}
                    pinCount={6}
                    editable={!isSubmitting}
                    keyboardType="number-pad"
                    // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                    // onCodeChanged = {code => { this.setState({code})}}
                    autoFocusOnLoad
                    codeInputFieldStyle={{
                      backgroundColor: colors.gray[100],
                      fontSize: 20,
                      color: '#000',
                      borderColor: colors.black,
                      borderRadius: 5,
                      borderWidth: 0,
                    }}
                    codeInputHighlightStyle={{
                      backgroundColor: colors.gray[200],
                    }}
                    onCodeChanged={handleChange('code')}
                    onCodeFilled={code => {
                      setIsDisable(false);
                    }}
                  />
                  <ErrorMessage name='code'>
                            {err => <Text color={'red.500'}>{err}</Text>}
                  </ErrorMessage>

                  {/* <Input
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
                  </ErrorMessage> */}
                </Box>

                <CButton
                  disabled={isDisable}
                  isLoading={isSubmitting}
                  onPress={handleSubmit}
                  variant={'solid'}
                  _pressed={{bgColor: 'primary.700'}}
                  _text={{fontSize: 'lg'}}>
                  Submit
                </CButton>
              </VStack>
            );
          }}
        </Formik>
      </ScrollView>
    </Box>
  );
};

export default OTPValidationScreen;

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderWidth: 2,
    backgroundColor: 'red',
    borderColor: '#03DAC6',
  },
});
