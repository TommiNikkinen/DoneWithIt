import React, { useState } from "react";
import { Text, TextInput } from "react-native";

import Screen from "./app/components/Screen/Screen";

export default function App() {
  const [firstName, setFirstName] = useState("");
  return (
    <Screen>
      <Text>{firstName}</Text>
      <TextInput
        placeholder="firstname"
        onChangeText={(e) => setFirstName(e)}
        value={firstName}
      />
    </Screen>
  );
}
