import React from "react";
import AppPicker from "../../AppPicker/AppPicker";
import { useFormikContext } from "formik";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function AppFormPicker({
  items,
  numberOfColumns,
  name,
  PickerItemComponent,
  placeholder,
  width,
}) {
  const { setFieldValue, errors, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        numberOfColums={numberOfColumns}
        onSelectItem={(item) => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched} />
    </>
  );
}
