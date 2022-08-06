import styled from 'styled-components';

export const SwitchContainer = styled.div`
  width: 100%;
`;

export const SwitchWrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  margin:auto;
  padding-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px
`;

export const SwitchBGC = styled.div`
  position: relative;
  width: 45px;
  height: 25px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.toggle};
  transition: 1s all ease-in;
`;

export const ButtonSwitch = styled.button`
  position: absolute;
  cursor: pointer;
  bottom: 5px;
  left: ${({ position }) => position ? '25px' : '5px'};
  width: 15px;
  height: 15px;
  border: none;
  border-radius: 50%;
  background-color: #fff;
  transition: 0.4s all ease-in;
  outline: none;
`;
