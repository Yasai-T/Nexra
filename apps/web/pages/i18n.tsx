import { NextPage } from 'next';
import Head from 'next/head';
import { useIntl } from 'react-intl';

const I18n: NextPage = () => {
  const { formatMessage } = useIntl();

  return (
    <div>
      <Head>
        <title>i18n</title>
      </Head>

      <div>{formatMessage({ id: 'm3HSJL', defaultMessage: 'hello' })}</div>
      <div>{formatMessage({ id: 'EYU99A', defaultMessage: 'world' })}</div>
    </div>
  );
};

export default I18n;
