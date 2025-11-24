// src/components/common/Screen.tsx
import React, { ReactNode } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

interface ScreenProps {
  children: ReactNode;
}

const Screen: React.FC<ScreenProps> = ({ children }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: {
    flex: 1,
    padding: 16,
  },
});

export default Screen;
