import { NxWelcome, Layout, QueryContainer } from '@membrane-webapp-mfe/ui';

export interface AppProps {
  withHost?: boolean;
}

export function App({ withHost }: AppProps) {
  return (
    <Layout withFrame={!withHost}>
      <QueryContainer queryKey={['trades']} />
      <NxWelcome title="trades" />
    </Layout>
  );
}

export default App;
