import React from 'react';
import logo from './logo.svg';
import './App.css';
import { UseEffectComponent } from './UseEffectComponent';
import { UseRefComponent } from './UseRefComponent';
import { UseReducerComponent } from './UseReducerComponent';
import { UseContextComponent } from './UseContextComponent/indext';
import { UseCallbackComponent } from './UseCallbackComponent';
import { CustomHookComponent } from './CustomHookComponent';
import { UseMemoComponent } from './UseMemoComponent';

function App() {
  return (
    <div className="App">
      <UseEffectComponent />
      <UseRefComponent />
      <UseReducerComponent />
      <UseContextComponent />
      <UseCallbackComponent />
      <UseMemoComponent />
      <CustomHookComponent />
    </div>
  );
}

export default App;
