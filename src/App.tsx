import React from 'react';
import CounterWithReduce from './CounterWithReduce';

interface AppProps{
  message?: string;
}

const App: React.FunctionComponent<AppProps> = ({message}) => {
  return (
    <div>
      <CounterWithReduce/>
    </div>
  );
};

App.defaultProps = {
  message:'Hello World! App props',
};
export default App;
