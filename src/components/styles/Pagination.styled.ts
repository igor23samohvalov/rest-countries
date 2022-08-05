import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  line-height: 16px;

  > * {
    display: inline-block;
    margin: 0 10px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 50%;
    border: none;
    padding: 7px;
    background-color: var(--bg-color);
    color: var(--font-color);

    &:hover {
      background-color: var(--font-color);
      color: var(--bg-color);
    }
  }
  .active {
    background-color: var(--font-color);
    font-weight: bold;
    color: var(--bg-color);
    cursor: default;
  }
`;
