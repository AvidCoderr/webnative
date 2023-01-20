import { ComponentType, ComponentProps } from 'react';
import { Text as RNText } from 'react-native';

type NTextProps = ComponentProps<typeof RNText>;
type WebTextProps = NTextProps & {
  href?: string;
};

export const Text = RNText as ComponentType<WebTextProps>;

// export type Text = ComponentType<
//   React.ComponentProps<typeof RNText> & { href?: string }
// >;
