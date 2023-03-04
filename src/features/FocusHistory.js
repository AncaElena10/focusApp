import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

const Item = ({ title }) => (
  <View style={styles.historyItem}>
    <Text style={styles.historyItemTitle}>{title}</Text>
  </View>
);

export const FocusHistory = ({ historyItems }) => {
  if (!historyItems || !historyItems.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>You have not focused on anything yet.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things you have focused on by now:</Text>
      <FlatList
        data={historyItems}
        renderItem={({ item }) => <Item title={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    padding: spacing.md,
    fontWeight: 'bold',
  },
  historyItem: {
    backgroundColor: colors.historyItem,
    padding: spacing.md,
    marginVertical: spacing.sm,
    marginHorizontal: spacing.md,
  },
  historyItemTitle: {
    fontSize: fontSizes.md,
  },
});
