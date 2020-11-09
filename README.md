# How to display HtmlEditor in DataGrid in the 'form' editing mode

This example illustrates how to display HtmlEditor as an in-line editor in DataGrid. 
For this, we define it using the [columns[].formItem](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#formItem) option and set HtmlEditor's options in the [formItem.editorOptions](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#editorOptions) configuration object.

Note that you need to reference [Quill](https://quilljs.com/) on your page / in your project. It is necessary for HtmlEditor - see https://js.devexpress.com/Documentation/Guide/Widgets/HtmlEditor/Overview/



