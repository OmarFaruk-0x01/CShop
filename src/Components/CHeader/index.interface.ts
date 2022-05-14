import { IHeadingProps } from "native-base";

export interface CHeaderProps extends IHeadingProps{
    title: string;
    HeadingLeftElement?: JSX.Element;
    HeadingRightElement?: JSX.Element;
}