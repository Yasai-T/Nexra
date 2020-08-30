import { FC, ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";
import { Box, Flex } from "@chakra-ui/core";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <Flex flexDirection="column" minH="100vh">
      <Header />
      <main>
        <Box maxW="1024px" margin="1rem auto">
          {children}
        </Box>
      </main>
      <Footer />
    </Flex>
  );
};

export default Layout;
