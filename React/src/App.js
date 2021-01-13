import React from 'react';

import DataGrid, {
  Column,
  FormItem,
  Editing
} from 'devextreme-react/data-grid';
import 'devextreme-react/html-editor';

import {employees} from './data.js';

const htmlEditorOptions = {
  height: 190,
  toolbar: {
    items: ["bold", "italic", "underline"]
  }
};

function App() {
    return (
      <DataGrid
        dataSource={employees}
        keyExpr="ID"
        showBorders={true}
      >
        <Editing
          mode="form"
          allowUpdating={true}/>
        <Column dataField="Prefix" caption="Title" width={70}/>
        <Column dataField="FirstName"/>
        <Column dataField="LastName"/>
        <Column dataField="Position" width={170}/>
        <Column dataField="Notes" visible={false}>
          <FormItem colSpan={2} editorType="dxHtmlEditor" editorOptions={htmlEditorOptions}/>
        </Column>
      </DataGrid>
    );
}

export default App;
