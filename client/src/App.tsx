import { lazy } from 'react';
import { ErrorBoundary } from './hoc/ErrorBoundry/ErrorBoundry';
import { SuspensePage } from './hoc/SuspensePage/SuspensePage';
const Home = lazy(() => import('@/pages/home'));

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <SuspensePage>
        <Home />
      </SuspensePage>
    </ErrorBoundary>
  );
};

export default App;
