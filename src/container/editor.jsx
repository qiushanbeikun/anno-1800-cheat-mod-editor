import Grid from "@material-ui/core/Grid";
import React, {useEffect, useState} from "react";
import {StyledButton} from "../components/commonStyles";
import {XMLTest} from "../zip/exampleXMLCode";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-xml";
import "ace-builds/src-noconflict/theme-monokai";

function onChange(newValue) {
  console.log("change");
}

let parser = new DOMParser();


export default function Editor() {


  let existingMods = [];


  function formatXMLMod(XMLString) {
    let xmlDoc = parser.parseFromString(XMLString, "text/xml");
    let allMods = xmlDoc.getElementsByTagName("ModOps")[0].getElementsByTagName("ModOp");
    for (let each of allMods) {
      const guid = each.getAttribute("GUID");
      const path = each.getAttribute("Path");
      const amount = each.getElementsByTagName("Amount")[0].childNodes[0].nodeValue;
      existingMods[existingMods.length] = [guid, path,amount];
    }
    console.log(existingMods);
  }

  formatXMLMod(XMLTest);


  const [items, setItems] = useState(existingMods);
  const [XMLCode, setXMLCode] = useState(XMLTest);


  function HandleAddVCate(){
    let newItem = [0, 0, 0];
    setItems([...items, newItem]);
  }

  // newItem format [itemID, default-production, default-cycle-time]
  useEffect(() => {
    RenderCate(items);
  });

  return (
    <div>

      <Grid container spacing={0}>
        <Grid item sm={6}>
          <StyledButton> To XML </StyledButton>
          {RenderCate(items)}
          <StyledButton onClick={HandleAddVCate}>Add new category </StyledButton>
        </Grid>

        <Grid item sm={6}>
          <StyledButton>To Table</StyledButton>
          <AceEditor
            width="100%"
            height="90vh"
            placeholder="Placeholder Text"
            mode="xml"
            theme="monokai"
            name="blah2"
            onChange={onChange}
            fontSize={14}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={XMLCode}
            setOptions={{
              showLineNumbers: true,
              tabSize: 2,
            }}/>
        </Grid>

      </Grid>




    </div>

  )
}

export function RenderCate(input) {

  return (
    <div>
      {input.map((each, index) => {
        return (
          <div>
            <Grid container>
              <Grid item sm={1}>

              </Grid>

              <Grid item sm={2}>
                <h6>{each[0]}</h6>
              </Grid>

              <Grid item sm={6}>
                <h6>{each[1]}</h6>
              </Grid>

              <Grid item sm={3}>
                <h6>{each[2]}</h6>
              </Grid>

            </Grid>
          </div>
        )
      })}
    </div>
  )
}
