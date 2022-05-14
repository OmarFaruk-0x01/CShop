import {Box, Text, Image, Pressable} from 'native-base';
import React from 'react';
import {CCardsProps} from './index.interface';
import SmallCard from './Variants/small';

const CCards: React.FC<CCardsProps> = ({variant, ...props}) => {
  function renderCard() {
    switch (variant) {
      case 'small':
        return <SmallCard {...props} />;
      case 'medium':
        return <></>;
      case 'big':
        return <></>;
    }
  }
  return <Pressable m="2">{renderCard()}</Pressable>;
};

export default CCards;
