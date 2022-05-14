import React from 'react';
import {Button, IButtonProps} from 'native-base';

const CButton: React.FC<Partial<IButtonProps>> = ({
  children,
    variant,
  disabled,
  ...props
}) => {
    return (
        <Button
            bgColor={variant === 'solid' ? !disabled ? 'primary.900' : 'primary.300' : undefined}
      _loading={
        variant === 'solid'
          ? {
              py: '3',
              opacity: 1,
              fontSize: 'xl',

              bgColor: 'primary.900',
              _text: {
                fontSize: 'xl',
              },
            }
          : undefined
      }
          {...props}
      
      >
      {children}
    </Button>
  );
};

export default CButton;
