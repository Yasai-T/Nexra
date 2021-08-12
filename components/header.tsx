import { FC } from "react";
import { Box, Flex, IconButton, useColorMode } from "@chakra-ui/core";
import Link from "./link";

const Header: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Box as="header" position="sticky" top={0}>
      <Box bg="orange.500" p="0 2rem">
        <Flex
          as="nav"
          height="80px"
          alignItems="center"
          justifyContent="space-between"
        >
          <Link href="/">Home</Link>
          <IconButton
            isRound
            size="lg"
            variantColor="orange"
            aria-label="Toggle dark mode"
            icon={isDark ? "sun" : "moon"}
            onClick={toggleColorMode}
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default Header;
