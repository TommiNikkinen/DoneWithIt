import React, { useState } from "react";
import { Text, TextInput, Switch } from "react-native";

import Screen from "./app/components/Screen/Screen";
import AppText from "./app/components/AppText/AppText";
import AppTextInput from "./app/components/AppTextInput/AppTextInput";
import AppPicker from "./app/components/AppPicker/AppPicker";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);
  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        icon="apps"
        placeholder="Category"
      />
      <AppTextInput icon="email" placeholder="email" />
    </Screen>
  );
}
