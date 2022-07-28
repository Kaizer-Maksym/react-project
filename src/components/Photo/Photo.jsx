import { MyAvatar } from './Photo.styled';

export const Photo = ({ alt, src }) => {
  return <MyAvatar src={src} alt={alt} />;
};
