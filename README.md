<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/209549151/19.1.3%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T828510)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
<!-- default badges end -->
# How to display HtmlEditor in DataGrid in the 'form' editing mode

This example illustrates how to display HtmlEditor as an in-line editor in DataGrid. 
For this, we define it using the [columns[].formItem](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#formItem) option and set HtmlEditor's options in the [formItem.editorOptions](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#editorOptions) configuration object.

Note that you need to reference [Quill](https://quilljs.com/) on your page / in your project. It is necessary for HtmlEditor - see https://js.devexpress.com/Documentation/Guide/Widgets/HtmlEditor/Overview/



