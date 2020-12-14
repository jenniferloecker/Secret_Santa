import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Families from "./Data/Families";

export default function App() {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <Text>"My Christmas list app!"</Text>
        <Text>
          {Families.families[0].members[0]}: {Families.families[1].members[3]}
        </Text>
        <Text>
          {Families.families[0].members[1]}: {Families.families[3].members[1]}
        </Text>
        <Text>
          {Families.families[1].members[0]}: {Families.families[0].members[1]}
        </Text>
        <Text>
          {Families.families[1].members[1]}: {Families.families[2].members[3]}
        </Text>
        <Text>
          {Families.families[1].members[2]}: {Families.families[2].members[1]}
        </Text>
        <Text>
          {Families.families[1].members[3]}: {Families.families[3].members[3]}
        </Text>
        <Text>
          {Families.families[2].members[0]}: {Families.families[1].members[1]}
        </Text>
        <Text>
          {Families.families[2].members[1]}: {Families.families[3].members[0]}
        </Text>
        <Text>
          {Families.families[2].members[2]}: {Families.families[3].members[2]}
        </Text>
        <Text>
          {Families.families[2].members[3]}: {Families.families[0].members[0]}
        </Text>
        <Text>
          {Families.families[3].members[0]}: {Families.families[1].members[0]}
        </Text>
        <Text>
          {Families.families[3].members[1]}: {Families.families[2].members[0]}
        </Text>
        <Text>
          {Families.families[3].members[2]}: {Families.families[2].members[2]}
        </Text>
        <Text>
          {Families.families[3].members[3]}: {Families.families[1].members[2]}
        </Text>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
