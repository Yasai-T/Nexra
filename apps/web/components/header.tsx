import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton, useColorMode } from '@chakra-ui/react';
import { FC } from 'react';
import Link from './link';

const Header: FC = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  const isDark = colorMode === 'dark';
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
            icon={isDark ? <SunIcon /> : <MoonIcon />}
            aria-label="Toggle dark mode"
            onClick={toggleColorMode}
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default Header;
