import { Box, Grid, Text } from '@chakra-ui/react';
import { FC } from 'react';

const Footer: FC = () => {
  const year = '2020';
  return (
    <Box as="footer" marginTop="auto">
      <Grid
        height="50px"
        alignItems="center"
        justifyItems="center"
        bg="orange.500"
      >
        <Text fontSize="xs">&copy; {year} Yasai-T</Text>
      </Grid>
    </Box>
  );
};

export default Footer;
