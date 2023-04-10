import styled from "styled-components"


export const SwitchButtonContainer = styled.div<{ isOn: boolean }>`
  width: 200px;
  height: 40px;
	margin: 35px auto;
	position: relative;
	border-radius: 6px;
  background-color: #c4c4c4;
  transition: background-color 0.2s ease;
  z-index: 1;
  font-weight: 700;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 1.5px;
    left: ${(props) => (props.isOn ? '97px' : '2px')};
    width: 100px;
    height: 35px;
    z-index: 2;
    border-radius: 3px;
    background-color: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: left 0.2s ease;
  }
   
`
 
 
export const ToggleBtn = styled.button `
  padding: 10px 40px;
	cursor: pointer;
	background: transparent;
	border: 0;
	outline: none;
	position: relative;
	text-align: center;
  font-weight: 600;
  left: 0;
  z-index: 3;
  
`

export const ToggleBtn2 = styled.button`
  padding: 10px 45px;
	cursor: pointer;
	background: transparent;
	border: 0;
	outline: none;
	position: absolute;
  font-weight: 600;
	text-align: center;
  left: 85px;
  z-index: 3;
`