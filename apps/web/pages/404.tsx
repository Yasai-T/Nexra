import { Flex } from '@chakra-ui/react';
import { FC } from 'react';
import animationData from '../assets/31159-robot-404.json';
import { Lottie } from '../components/lottie';

const Custom404: FC = () => {
  const options = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Flex justifyContent="center">
      <Lottie options={options} height={500} width={500} />
    </Flex>
  );
};

export default Custom404;
