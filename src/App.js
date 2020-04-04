import React from 'react';
import './App.css';
import {
  PaddingSurroundTopAndBottomOneEm,
  PaddingTopAndBottomThreeEm,
} from "./components/commonStyles";
import {Container} from "@material-ui/core";
import Editor from "./container/editor";
import {StyledText} from "./components/commonStyles";


function App() {

  return (
    <div>
      <Container maxWidth={"lg"}>
        <PaddingTopAndBottomThreeEm>
        <h2>Anno 1800 Modding Editor (Alpha)</h2>
          <h4>by 丘山北鲲 </h4>
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
            3. Click download and extract the zip file at your game mods directory. (locate mods directory from <a href={"https://github.com/xforce/anno1800-mod-loader#installation"} target={"_blank"} rel="noopener noreferrer"> video tutorial </a>)
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

        <Editor />

      </Container>
    </div>

  );
}

export default App;
