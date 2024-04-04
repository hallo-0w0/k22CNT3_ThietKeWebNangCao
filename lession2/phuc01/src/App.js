import React from 'react';
import './App.css';
import FuncJSXTrinhHuuPhuc from './Componet/func_JSX_TrinhHuuPhuc';
import ClassTrinhHuuPhuc from './Componet/class_TrinhHuuPhuc';

function App() {
  return (
    <section className='App'>
      <h2>Demo JSX</h2>
      {/* Function component demo */}
      <FuncJSXTrinhHuuPhuc fullName="Trinh Huu Phuc" age="20" />
      
      <ClassTrinhHuuPhuc info="Hoc ReactJS" time="11" />
    </section>
  );
}

export default App;
