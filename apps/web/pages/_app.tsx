import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import Layout from '../components/layout';
import en from '../content/compiled-locales/en.json';
import ja from '../content/compiled-locales/ja.json';

function MyApp({ Component, pageProps }: AppProps) {
  const { locale, defaultLocale } = useRouter();

  const messages = locale === 'en' ? en : ja;

  return (
    <IntlProvider
      locale={locale ?? 'en'}
      defaultLocale={defaultLocale}
      messages={messages}
    >
      <ChakraProvider>
        <CSSReset />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </IntlProvider>
  );
}

export default MyApp;
