import {Box, Heading} from 'native-base';
import React from 'react';
import {CHeaderProps} from './index.interface';

const CHeader: React.FC<CHeaderProps> = ({
  title,
  HeadingLeftElement,
  HeadingRightElement,
  ...props
}) => {
  return (
    <Box flexDirection={'row'} alignItems="center" justifyContent="space-between" p='3' bgColor={(HeadingLeftElement || HeadingRightElement) ? 'white' : 'transparent'}>
      <Box>{HeadingLeftElement}</Box>
      <Heading
        textTransform={'uppercase'}
        fontWeight={'400'}
        textAlign="center"
        fontSize={'3xl'}
        {...props}
        >
        {title}
      </Heading>
      <Box>{HeadingRightElement}</Box>
    </Box>
  );
};
export default CHeader;
