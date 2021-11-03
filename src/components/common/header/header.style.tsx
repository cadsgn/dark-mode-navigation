import styled from "styled-components";

// styles
export const HeaderContainerStyle = styled.nav`
  display: flex;
  flex-flow: column;
  width: 100%;
  margin: 0 auto;
  height: auto;
  margin-bottom: 32px;
  padding: 16px;
  justify-content: center;
  place-items: center;
  place-content: space-between;
  box-shadow: 0px 9px 12px 1px rgba(0, 0, 0, 0.1);
`;

export const LinkContainerStyle = styled.section`
  padding-top: 16px;
`;

export const LinkStyle = {
  padding: "16px",
};

export const ActiveStyle = {
  color: "#00AA9C",
};
