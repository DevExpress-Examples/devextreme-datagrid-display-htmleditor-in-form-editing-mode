import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import DataGrid, {
  Column,
  Editing,
  FormItem,
  Paging,
} from 'devextreme-react/data-grid';
import 'devextreme-react/html-editor';
import { employees } from './data';

const htmlEditorOptions = {
  height: 190,
  toolbar: {
    items: ['bold', 'italic', 'underline'],
  },
};

function App(): JSX.Element {
  return (
    <div className="main">
      <DataGrid dataSource={employees} keyExpr="ID" showBorders={true}>
        <Paging enabled={false} />
        <Editing mode="form" allowUpdating={true} />
        <Column dataField="Prefix" caption="Title" width={70} />
        <Column dataField="FirstName" />
        <Column dataField="LastName" />
        <Column dataField="Position" width={170} />
        <Column dataField="Notes" visible={false}>
          <FormItem
            colSpan={2}
            editorType="dxHtmlEditor"
            editorOptions={htmlEditorOptions}
          />
        </Column>
      </DataGrid>
    </div>
  );
}

export default App;
