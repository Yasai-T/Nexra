import { Avatar, Box, CircularProgress } from '@chakra-ui/react';
import { gql, GraphQLClient } from 'graphql-request';
import type { RequestDocument } from 'graphql-request/dist/types';
import { NextPage } from 'next';
import Head from 'next/head';
import useSWR from 'swr';
import EmojiFavicon from '../components/emojiFavicon';
import Link from '../components/link';

const ENDPOINT_URL = 'https://api.github.com/graphql';

const graphQLClient = new GraphQLClient(ENDPOINT_URL, {
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_AUTH}`,
  },
});

type ResType = {
  viewer: { name: string; avatarUrl: string };
};

const fetcher = (query: RequestDocument) =>
  graphQLClient.request<ResType>(query);

const query = gql`
  {
    viewer {
      name
      avatarUrl
    }
  }
`;

const Home: NextPage = () => {
  const { data, error } = useSWR(query, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <CircularProgress isIndeterminate />;

  return (
    <div>
      <Head>
        <title>Home</title>
        <EmojiFavicon emoji="🐊" rotate />
      </Head>

      <Box>
        <Avatar name={data.viewer.name} src={data.viewer.avatarUrl} />
        <div>hello {data.viewer.name}</div>
      </Box>
      <div>
        <Link href="/dnd">to drag and drop</Link>
      </div>
      <div>
        <Link href="/recoil">to recoil</Link>
      </div>
      <div>
        <Link href="/404">to 404 not found</Link>
      </div>
    </div>
  );
};

export default Home;
