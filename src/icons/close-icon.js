import React from "react";
import styled from "styled-components";

const CloseIconWrapper = styled.svg`
  width: 100%;
  height: 100%;
  fill: ${props => props.theme.textColor};
`;

export const CloseIcon = () => {
  return (
    <CloseIconWrapper aria-hidden="true">
      <path
        fill="#fff"
        d="M423 307l261 -261c77,-77 193,40 116,117l-260 260 260 261c77,77 -39,193 -116,116l-261 -260 -260 260c-77,77 -194,-39 -117,-116l261 -261 -261 -260c-77,-77 40,-194 117,-117l260 261z"
      />
    </CloseIconWrapper>
  );
};

