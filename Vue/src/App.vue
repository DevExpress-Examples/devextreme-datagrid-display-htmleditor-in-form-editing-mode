<template>
    <DxDataGrid
        :data-source="dataSource"
        :show-borders="true"
        key-expr="ID"
    >
      <DxEditing
          :allow-updating="true"
          mode="form"
      />
      <DxColumn
          :width="70"
          data-field="Prefix"
          caption="Title"
      />
      <DxColumn
          data-field="FirstName"
      />
      <DxColumn
          data-field="LastName"
      />
      <DxColumn
          :width="170"
          data-field="Position"
      />
      <DxColumn
          :visible="false"
          data-field="Notes"
      >
        <DxFormItem
            :col-span="2"
            :editor-options="htmlEditorOptions"
            editor-type="dxHtmlEditor"
        />
      </DxColumn>
    </DxDataGrid>
  </template>
<script>
import {
  DxDataGrid,
  DxColumn,
  DxFormItem,
  DxEditing,
} from 'devextreme-vue/data-grid';
import 'devextreme-vue/html-editor';

import { employees } from './data.js';

export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxFormItem,
    DxEditing,
  },
  data() {
    return {
      dataSource: employees,
      htmlEditorOptions: {
        height: 190,
        toolbar: {
          items: ["bold", "italic", "underline"]
        }
      }
    };
  }
};
</script>
