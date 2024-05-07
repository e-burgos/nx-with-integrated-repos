import { useSharedStore } from '@membrane-webapp-mfe/store';
import {
  NxWelcome,
  Layout,
  QueryContainer,
  CounterBox,
} from '@membrane-webapp-mfe/ui';

export interface AppProps {
  withHost?: boolean;
}

export function App({ withHost }: AppProps) {
  const { count, increment, decrement } = useSharedStore();
  return (
    <Layout withFrame={!withHost}>
      <CounterBox count={count} increment={increment} decrement={decrement} />
      <QueryContainer queryKey={['collateral']} />
      <QueryContainer queryKey={['derivatives']} />
      <NxWelcome title="collateral" />
    </Layout>
  );
}

export default App;
