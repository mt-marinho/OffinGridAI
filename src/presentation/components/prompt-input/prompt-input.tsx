import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Button } from '@/presentation/components/ui/base/button';
import { BorderBeam } from '@/presentation/components/ui/base/border-beam';

export function PromptInput() {
  const [message, setMessage] = useState('');

  return (
    <BorderBeam
      style={styles.beam}
      borderRadius={23}
      borderWidth={0.5}
      colors={['#666464', '#666464', '#666464']}
      ambient={0}
      duration={3}
      intensity={0.9}
      glow={8}
    >
      <View style={styles.card}>
        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder="Pergunte sobre suas finanças"
          placeholderTextColor="#6b6b73"
          cursorColor="#16a34a"
          selectionColor="#16a34a"
          style={styles.input}
          multiline
        />

        <View style={styles.row}>
          <Button.Root
            width={28}
            height={28}
            borderRadius={0}
            backgroundColor="transparent"
            withPressAnimation={false}
            accessibilityLabel="Adicionar"
          >
            <Button.Content>
              <Feather name="plus" size={28} color="#e9e9ee" />
            </Button.Content>
          </Button.Root>

          <View style={{ flex: 1 }} />

          <View style={styles.actions}>
            <Feather
              name="mic"
              size={24}
              color="#e9e9ee"
              
            />

            {message.trim().length > 0 && (
              <Button.Root
                width={28}
                height={28}
                borderRadius={18}
                backgroundColor="#16a34a"
                withPressAnimation={true}
                accessibilityLabel="Enviar mensagem"
              >
                <Button.Content>
                  <Feather name="arrow-up" size={24} color="#fff" />
                </Button.Content>
              </Button.Root>
            )}
          </View>
        </View>
      </View>
    </BorderBeam>
  );
}

const styles = StyleSheet.create({
  beam: {
    width: '100%',
    maxWidth: 1020,
    alignSelf: 'center',
  },

  card: {
    width: '100%',
    borderRadius: 23,
    borderWidth: 0.5,
    borderColor: '#505050',
    backgroundColor: '#1f2937',
    padding: 16,
  },

  input: {
    width: '100%',
    color: '#e9e9ee',
    fontSize: 16,
    marginBottom: 24,
    minHeight: 24,
    maxHeight: 100,
    padding: 0,
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
    width: 40,
    height: 40,
    borderRadius: 14,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
