import type { LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import { Link as ChakraLink } from '@chakra-ui/react';
import type { LinkProps as NextLinkProps } from 'next/dist/client/link';
import NextLink from 'next/link';
import { FC, PropsWithChildren } from 'react';

export type LinkProps = PropsWithChildren<
  NextLinkProps & Omit<ChakraLinkProps, 'as'>
>;

const Link: FC<LinkProps> = ({
  href,
  as,
  replace,
  scroll,
  shallow,
  prefetch,
  children,
  ...chakraProps
}) => {
  return (
    <NextLink
      passHref={true}
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      prefetch={prefetch}
    >
      <ChakraLink {...chakraProps}>{children}</ChakraLink>
    </NextLink>
  );
};

export default Link;
