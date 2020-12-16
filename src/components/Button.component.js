import styled from "styled-components";
import { typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
  small: () => `
  font-size: ${typeScale.helperT};
  padding: 8px;
  `,
  large: () => `
  font-size: ${typeScale.header5};
  padding: 16px 24px;
  `,
  primarySuccess: ({ theme }) => `
  font-size: ${typeScale.paragraph};
  border-color:${theme.status.successColor}; 
  background-color:${theme.status.successColor};
  &:hover{
    background-color: ${theme.status.successColorHover};
  }

  &:active{
    background-color:${theme.status.successColorActive};
  }

  &:focus{
    outline-color: ${theme.status.successColor}
  }
  `,
  secondarySuccess: () => `
  
  `,
  terciarySuccess: ({ props }) => `
  background-color:none;
  border-color:${props.status.successColor};
  &:hover,&:active{
    background-color:${props.status.successColorActive};
  }
  &:focus{
    outline-color:${props.status.successColor};
  }
  `,

  error: ({ props }) => `
  font-size: ${typeScale.paragraph};
  color: ${props.textColorInverted};
  background-color:${props.status.errorColor};
  &:focus, &:hover{
    outline-color:${props.status.errorColorActive};
    background-color: ${props.status.errorColorHover};
  }
  `,

  warning: ({ props }) => `
  font-size:${typeScale.paragraph};
  color: ${props.textColorInverted};
  background-color: ${props.status.warningColor};

  &:focus,&:hover{
    outline-color:${props.status.warningColorActive};
    background-color:${props.status.warningColorHover};
  }
  
  `,
};

const Button = styled.button`
  padding: 12px 24px;
  min-width: 100px;
  font-size: ${typeScale.paragraph};
  border: none;
  cursor: pointer;
  transition: all 0.4s ease-in;
  font-family: ${(props) => props.theme.primaryFont};
  &:hover {
    background-color: ${(props) => props.theme.primaryColorHover};
    color: ${(props) => props.theme.textColorInverted};
  }

  &:active {
    background-color: ${(props) => props.theme.primaryColorActive};
  }
  &:disabled {
    background-color: ${(props) => props.theme.primaryColorDisabled};
    border-color: ${(props) => props.theme.primaryColorDisabled};
    color: ${(props) => props.theme.textColorDisabled};
    cursor: not-allowed;
  }

  &:focus {
    outline: 2px solid ${(props) => props.theme.primaryColorHover};
    outline-offset: 0.5px;
  }
`;

export const PrimaryButton = styled(Button)`
  border-radius: 5px;
  background-color: ${(props) => props.theme.primaryColor};

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(PrimaryButton)`
  border-radius: 2rem;

  &:focus {
    outline: 0;
    box-shadow: 0px 0px 0px 5px ${(props) => props.theme.primaryColor};
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
  background-color: white;
  border-radius: 5px;
  border: solid 2px ${(props) => props.theme.primaryColor};
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

