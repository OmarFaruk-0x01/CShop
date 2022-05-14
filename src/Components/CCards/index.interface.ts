export type Variant = 'small' | 'medium' | 'big';

export interface SmallCardProps<T> {
  title: string;
  imgUrl: string;
  children: T[]
}

export type CardsProps<T> = {
  [k in keyof T]: T[k];
};

