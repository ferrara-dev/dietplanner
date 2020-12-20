import styled from "styled-components";
import {makeStyles} from "@material-ui/core";

export const Toolbar = styled("div")`
  height: 48px;
  padding: 0 16px;
  box-shadow: inset 0 -1px 0 0 rgba(100, 121, 143, 0.122);
  display: flex;
  align-items: center;
`;

export const ScrollView = styled('div')`
  height: calc(100vh - (64px + 48px));
  overflow: scroll;
  
  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  &::-webkit-scrollbar-track {
    &:hover {
      background-color: rgba(0,0,0,0.04);
      box-shadow: inset 1px 0 0 rgba(0,0,0,0.1)
    }
  }
  &::-webkit-scrollbar-button {
    width: 0;
    height: 0;
    display: none;
  }
  &::-webkit-scrollbar-corner {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,0.2);
    box-shadow: inset 1px 1px 0 rgba(0,0,0,0.10), inset 0 -1px 0 rgba(0,0,0,0.07);
    &:hover {
      background-color: rgba(0,0,0,0.38);
    }
  }
`

export const useContentStyles = makeStyles(() => ({
    root: {
        fontSize: 14,
        paddingLeft: 32,
        width: 160,
    },
}));

export const useCheckboxStyles = makeStyles(({ palette }) => ({
    checked: {
        color: palette.text.primary,
    },
}));
