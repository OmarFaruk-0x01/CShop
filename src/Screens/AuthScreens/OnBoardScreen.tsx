import {useNavigation} from '@react-navigation/native';
import {
  Box,
  Button,
  Image,
  StatusBar,
  Text,Heading,
  useTheme,
  VStack,
} from 'native-base';
import React from 'react';
import CButton from '../../Components/CButton';
import CHeader from '../../Components/CHeader';

const OnBoardScreen = () => {
  const {navigate} = useNavigation();

  function moveToScreen(route: string): () => void {
    return () => {
      navigate(route as never);
    };
  }

  return (
    <Box flex={1}>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor={'#6BBFF1'}
      />
      <Image
        position="absolute"
        resizeMode="contain"
        opacity={0.6}
        source={require('../../../assets/imgs/onbg.jpg')}
        alt={'BG'}
      />
      <Box flex={1}>
        <CHeader title='Cshop'/>
      </Box>

      <Box
        position={'absolute'}
        top={0}
        left={0}
        w={'100%'}
        h={'100%'}
        bg={{
          linearGradient: {
            colors: ['white', '#ffff', '#fff9', '#fff0'],
            location: [0.7, 0.3],
            start: [0, 1],
            end: [0, 0],
          },
        }}
      />
      <Box p={5} justifyContent="space-between">
        <Text my={10} fontSize={'3xl'} fontWeight="black" textAlign={'center'}>
          Discover the latest menswear
        </Text>
        <VStack space={3}>
          <Button variant={'ghost'} _text={{fontSize: 'xl'}}>
            Continue as Guest
          </Button>
          <Button
            onPress={moveToScreen('signin')}
            variant={'outline'}
            _text={{fontSize: 'lg'}}
            borderWidth={2}
            borderColor={'primary.900'}>
            Log In
          </Button>
          <CButton
            bgColor={'primary.900'}
            onPress={moveToScreen('signup')}
            _pressed={{bgColor: 'primary.500'}}
            _text={{fontSize: 'lg'}}
            variant={'solid'}>
            Create Account
          </CButton>
        </VStack>
      </Box>
    </Box>
  );
};

export default OnBoardScreen;
