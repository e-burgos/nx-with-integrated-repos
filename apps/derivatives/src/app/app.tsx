import { NxWelcome, Layout, QueryContainer } from '@membrane-webapp-mfe/ui';

export interface AppProps {
  withHost?: boolean;
}

export function App({ withHost }: AppProps) {
  return (
    <Layout withFrame={!withHost}>
      <QueryContainer queryKey={['derivatives']} />
      <NxWelcome title="derivatives" />
    </Layout>
  );
}

export default App;
