import { PromptInput } from '@/presentation/components/prompt-input/prompt-input';
import { StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedKeyboard,
  useAnimatedStyle,
} from 'react-native-reanimated';

export default function HomeScreen() {
  const keyboard = useAnimatedKeyboard();

  const promptAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: -keyboard.height.value }],
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.promptWrapper, promptAnimatedStyle]}>
        <PromptInput />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d111a',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  promptWrapper: {
    width: '100%',
  },
});
