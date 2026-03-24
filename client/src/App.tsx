import React, { Suspense, lazy } from 'react';
import { CircularProgress, Box } from '@mui/material';
// import { ErrorBoundary } from './ErrorBoundary';
const Home = lazy(() => import('@/pages/home'));
const App = () => {
  return (
    // <ErrorBoundary
    //   fallback={
    //     <Box p={2} textAlign="center" color="error.main">
    //       Something went wrong while loading the page.
    //     </Box>
    //   }
    // >
    <Suspense
      fallback={
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      }
    >
      <Home />
    </Suspense>
    // </ErrorBoundary>
  );
};

export default App;
