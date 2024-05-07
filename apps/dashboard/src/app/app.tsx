import {
  NxWelcome,
  Layout,
  QueryContainer,
  CounterBox,
} from '@membrane-webapp-mfe/ui';
import Planets from '../components/Planets';
import { useSharedStore } from '@membrane-webapp-mfe/store';

export interface AppProps {
  withHost?: boolean;
}

export function App({ withHost }: AppProps) {
  const { count, increment, decrement } = useSharedStore();
  return (
    <Layout withFrame={!withHost}>
      <CounterBox count={count} increment={increment} decrement={decrement} />
      <Planets />
      <QueryContainer />
      <NxWelcome title="dashboard" />
    </Layout>
  );
}

export default App;
