import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export const Heading = styled(Typography)`
  color: #eeeeee;
`;

export const PaddingTopAndBottomThreeEm = styled.div`
  padding: 3em 0;
`;

export const PaddingSurroundTopAndBottomOneEm = styled.div`
  padding: 1em 0;
`;

export const StyledButton = styled(Button)`
  &:before {
    content: "";
    display: block;
  }
  && {
    color: #00ffff66;
    width: 100%;
    border-radius: 5px;
    animation: all 2s;
    font-size: 2em;
    font-weight: 300;
    &:hover {
      color: aqua; 
    }
  }
`;
