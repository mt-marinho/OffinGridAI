import { Feather } from '@expo/vector-icons';
import { SymbolView } from 'expo-symbols';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import { BorderBeam } from '@/presentation/components/ui/base/border-beam';

const RADIUS = 23;
const WIDTH = Dimensions.get('window').width;
const ICON_SIZE = 19;

export function PromptInput() {
  return (
    <BorderBeam
      style={styles.beam}
      borderRadius={RADIUS}
      borderWidth={0.5}
      colors={['#c15f3c', '#c15f3c', '#c15f3c']}
      ambient={0}
      duration={3}
      intensity={0.9}
      glow={8}
    >
      <View style={styles.card}>
        <Text style={styles.placeholder}>
          Pergunte sobre suas finanças
        </Text>

        <View style={styles.row}>
          <Feather
            name="plus"
            size={ICON_SIZE}
            color="#e9e9ee"
          />

          <View style={{ flex: 1 }} />

          <View style={styles.actions}>
            <Feather
              name="mic"
              size={ICON_SIZE}
              color="#e9e9ee"
            />

            <View style={styles.send}>
              <SymbolView
                name="arrow.up"
                size={ICON_SIZE}
                tintColor="#000"
              />
            </View>
          </View>
        </View>
      </View>
    </BorderBeam>
  );
}

const styles = StyleSheet.create({
  beam: {
    width: WIDTH * 0.9,
  },

  card: {
    width: '100%',
    borderRadius: RADIUS,
    backgroundColor: '#121212',
    padding: 20,
  },

  placeholder: {
    color: '#6b6b73',
    fontSize: 16,
    marginBottom: 28,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },

  send: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});