import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  NumberInput,
  ReferenceInput,
  AutocompleteInput,
} from "react-admin";
import { RichTextInput } from "ra-input-rich-text";
// import { Grid } from '@mui/material';

export const DailyUpdateCreate = () => (
  <Create>
    <SimpleForm>
      <h1>Daily Update</h1>
      <DateInput source="date" fullWidth />
      <h3>Task Update</h3>
      <ReferenceInput source="project" reference="projects">
        <AutocompleteInput
          label="Project"
          optionValue="id"
          optionText={(record) => {
            return `${record.id} - ${record.name}`;
          }}
        />
      </ReferenceInput>
      <TextInput source="task_name" fullWidth />
      <RichTextInput source="update_text" fullWidth />
      <h3>Billing</h3>
      <NumberInput source="hours_billed" fullWidth />
      <NumberInput source="time_spent" fullWidth />
    </SimpleForm>
  </Create>
);
