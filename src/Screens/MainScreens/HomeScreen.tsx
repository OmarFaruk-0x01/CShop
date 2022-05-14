import {Box, Icon, Text} from 'native-base';
import React from 'react';
import CHeader from '../../Components/CHeader';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CCards from '../../Components/CCards';

const HomeScreen: React.FC = () => {
  return (
    <Box bgColor='white' flex={1}>
      <CHeader
        fontSize={'xl'}
        title="CShop"
        HeadingLeftElement={<Icon as={AntDesign} name="menufold" size={'md'} />}
        HeadingRightElement={
          <Icon as={AntDesign} name="notification" size={'md'} />
        }
      />
      <Box>
        <CCards
          variant="small"
          title="Omar"
          imgUrl="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
      </Box>
    </Box>
  );
};

export default HomeScreen;
