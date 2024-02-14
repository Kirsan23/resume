import { Suspense } from 'react';

import './i18n';

import { Resume } from './components';

const App = () => {
  return (
    <Suspense fallback='Loading...'>
      <Resume />
    </Suspense>
  );
};

export default App;
