import lottie, { AnimationConfig } from 'lottie-web';
import { useEffect, useRef } from 'react';

interface LottieProps {
  options: {
    animationData: any;
  } & Pick<AnimationConfig, 'loop' | 'autoplay' | 'rendererSettings'>;
  width: number;
  height: number;
}

export const Lottie = ({ options, width, height }: LottieProps) => {
  const element = useRef<HTMLDivElement>(null);
  const lottieInstance = useRef<any>();

  useEffect(() => {
    if (element.current) {
      lottieInstance.current = lottie.loadAnimation({
        ...options,
        container: element.current,
      });
    }
  }, [options]);

  return <div style={{ width, height }} ref={element}></div>;
};
