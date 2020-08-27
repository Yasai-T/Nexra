import { PropsWithChildren } from "react";
import NextLink from "next/link";
import { Link as ChakraLink } from "@chakra-ui/core";
import type { LinkProps as NextLinkProps } from "next/dist/client/link";
import type { LinkProps as ChakraLinkProps } from "@chakra-ui/core";

export type LinkProps = PropsWithChildren<
  NextLinkProps & Omit<ChakraLinkProps, "as">
>;

const Link = ({
  href,
  as,
  replace,
  scroll,
  shallow,
  prefetch,
  children,
  ...chakraProps
}: LinkProps) => {
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
