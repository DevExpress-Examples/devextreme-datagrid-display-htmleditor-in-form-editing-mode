<script setup lang="ts">
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import {
  DxColumn,
  DxDataGrid,
  DxEditing,
  DxFormItem,
  DxPaging,
} from 'devextreme-vue/data-grid';
import 'devextreme-vue/html-editor';
import { employees } from '../data';

const htmlEditorOptions = {
  height: 190,
  toolbar: {
    items: ['bold', 'italic', 'underline'],
  },
};
</script>
<template>
  <div>
    <DxDataGrid
      :data-source="employees"
      :show-borders="true"
      key-expr="ID"
    >
      <DxPaging :enabled="false"/>
      <DxEditing
        :allow-updating="true"
        mode="form"
      />
      <DxColumn
        :width="70"
        data-field="Prefix"
        caption="Title"
      />
      <DxColumn data-field="FirstName"/>
      <DxColumn data-field="LastName"/>
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
  </div>
</template>
