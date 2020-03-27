import React, {useEffect, useState} from 'react';
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import './App.css';
import {
  Heading,
  PaddingSurroundTopAndBottomOneEm,
  PaddingTopAndBottomThreeEm,
  StyledButton
} from "./components/commonStyles";
import {Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

function RenderCate(input) {
  return (
    <div>
      {input.map((each, index) => {
        return (
          <div>
            <Grid container>
              <Grid sm={1}>

              </Grid>

              <Grid sm={5}>
                <h2>{each[0]}</h2>
              </Grid>

              <Grid sm={3}>
                <h2>{each[1]}</h2>
              </Grid>

              <Grid sm={3}>
                <h2>{each[2]}</h2>
              </Grid>
            </Grid>
          </div>
        )
      })}
    </div>
  )
}

const StyledText = styled(Typography)`
  color: #eeeeee;
`;

function App() {


  const [items, setItems] = useState([[1, 2, 3], [4, 5, 6]]);

  // newItem format [itemID, default-production, default-cycle-time]
  function HandleAddVCate(){
    let newItem = [0, 0, 0];
    setItems([...items, newItem]);
  }

  useEffect(() => {
    RenderCate(items);
  });

  return (
    <div className={"App"}>
      <Container maxWidth={"lg"}>
        <PaddingTopAndBottomThreeEm>
        <h2>Anno 1800 Modding Editor (Alpha)</h2>
        </PaddingTopAndBottomThreeEm>

        <h3>Tutorial</h3>
        <hr />
        <div>
          <StyledText paragraph>
            1. Using mods in Anno 1800 is recommended in Single player/offline mode only. Using mods in online mode may considered as cheating and cause account blocked.
          </StyledText>
          <StyledText paragraph>
            2. Author of this page has not received any feedback of suspend/ban of players who only use mods on single/offline.
          </StyledText>
          <StyledText paragraph>
            3. Use the mods or this tool at your own risk. Author of this page will not take any responsibility of any causes.
          </StyledText>
          <StyledText paragraph>
            4. Real tutorial begin
          </StyledText>
          <StyledText paragraph>
            1. Install Anno-1800-mod-loader <a href={"https://github.com/xforce/anno1800-mod-loader"} target={"_blank"} rel="noopener noreferrer"> here</a>,
            use the <a href={"https://github.com/xforce/anno1800-mod-loader#installation"} target={"_blank"} rel="noopener noreferrer"> video tutorial </a>
          </StyledText>
          <StyledText paragraph>
            2. Customize your own mods in the editor section. Enter the item ID (see the table in the appendix), change the production amount and speed.
          </StyledText>
          <StyledText paragraph>
            3. Click download and extract the zip file at your game directory.
          </StyledText>
          <StyledText paragraph>
            4. (Restart game) Done!
          </StyledText>
          <StyledText paragraph>
            5. Entering numbers too large may crash the game.
          </StyledText>
          <StyledText paragraph>
            6. Will update when I get more knowledge.
          </StyledText>
          <StyledText paragraph>
            7. Enjoy your game.
          </StyledText>
        </div>

        <PaddingSurroundTopAndBottomOneEm>
          <h3>Editor</h3>
          <hr />
        </PaddingSurroundTopAndBottomOneEm>

        <StyledButton onClick={HandleAddVCate}>Add new category </StyledButton>
        {RenderCate(items)}
      </Container>
    </div>

  );
}

export default App;
