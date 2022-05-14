import {Box, Image, Text} from 'native-base';
import React from 'react';

const SmallCard: React.FC = ({imgUrl, title}) => {
  return (
    <Box maxW="32" h="32" bgColor="white" borderRadius={'md'} overflow="hidden">
      <Box flex={1}>
        <Image
          w={'full'}
          flex={1}
          source={{uri: imgUrl}}
          resizeMode="cover"
          alt={title}
        />
      </Box>
      <Text
        p="2"
        bgColor={'white'}
        fontSize="md"
        textAlign={'center'}
        borderWidth={1}
        borderColor="gray.200"
        borderBottomLeftRadius={'md'}
        borderBottomRightRadius={'md'}>
        {title}
      </Text>
    </Box>
  );
};

export default SmallCard;
