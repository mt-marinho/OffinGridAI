import { useColorScheme } from '@/presentation/hooks/use-color-scheme';
import { Colors } from '@/shared/constants/theme';

export function useTheme() {
  const scheme = useColorScheme();
  const theme = scheme === 'unspecified' ? 'light' : scheme;

  return Colors[theme];
}
