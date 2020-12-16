import React from "react";
import styled from "styled-components";
import { typeScale } from "../utils";
import { Illustrations, CloseIcon } from "../assets";
import { PrimaryButton } from "./Button.component";
import { useSpring, animated } from "react-spring";
const Wrapper = styled.div`
  width: 900px;
  height: 690px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.3);
  background-color: ${(props) => props.theme.formElementBackground};
  color: ${(props) => props.theme.textOnFormElementBackground};
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
`;

const SignUpHeader = styled.h3`
  font-size: ${typeScale.header3};
  margin-bottom: 1rem;
`;

const SignUpText = styled.p`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
  margin-bottom: 1rem;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  right: 40px;
  top: 40px;
  width: 24px;
  height: 24px;
  padding: 0;
`;

export const Modal = ({ showModal, setShowModal }) => {
  const animation = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0)` : `translateY(-200%)`,
  });

  return (
    <animated.div style={animation}>
      <Wrapper>
        <img
          src={Illustrations.SignUp}
          alt="Sign up for an account"
          aria-hidden="true"
        />
        <SignUpHeader>Sign up</SignUpHeader>
        <SignUpText>Sign up today to get access</SignUpText>
        <PrimaryButton>Sign up!</PrimaryButton>
        <CloseModalButton
          aria-label="Close modal"
          onClick={() => setShowModal(false)}
        >
          <CloseIcon />
        </CloseModalButton>
      </Wrapper>
    </animated.div>
  );
};
