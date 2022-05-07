import { ReactElement } from 'react';

export const Avatar = (): ReactElement => {
  const avatarImgStyle =
    'shadow rounded-full max-w-full h-auto align-middle border-none h-[60px] w-[60px]';
  const avatars = [
    <img
      key={0}
      src="https://i.ibb.co/S00dX1q/avatar.png"
      className={avatarImgStyle}
    />,
    <img
      key={1}
      src="https://i.ibb.co/Dw1kdNd/avatar2.png"
      className={avatarImgStyle}
    />,
    <img
      key={2}
      src="https://i.ibb.co/JRhYD4t/avatar3.png"
      className={avatarImgStyle}
    />,
    <img
      key={3}
      src="https://i.ibb.co/2KTKsRY/avatar4.png"
      className={avatarImgStyle}
    />,
  ];
  return avatars[Math.floor(Math.random() * 4)];
};
