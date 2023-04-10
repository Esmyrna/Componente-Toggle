import React, { useState } from 'react';
import SwitchButton from './components/Toggle/Toggle';

const App: React.FC = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <SwitchButton isOn={isOn} handleToggle={handleToggle} />
    </div>
  );
};

export default App;