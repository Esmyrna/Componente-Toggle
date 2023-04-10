import React from 'react';
 
import { SwitchButtonContainer } from './style';
import { ToggleBtn } from './style';
import { ToggleBtn2 } from './style';
interface SwitchButtonProps {
  isOn: boolean;
  handleToggle: () => void;
}

const SwitchButton: React.FC<SwitchButtonProps> = ({ isOn, handleToggle }) => {
  return (
    <>
		<SwitchButtonContainer isOn={isOn} onClick={handleToggle}> 
			<ToggleBtn>Card</ToggleBtn>
       <ToggleBtn2>Página</ToggleBtn2>
      </SwitchButtonContainer>
      </>
      )}

export default SwitchButton;