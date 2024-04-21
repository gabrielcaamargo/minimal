import { createText } from '@shopify/restyle';
import { ComponentProps } from 'react';
import { TextProps as RNTextProps } from 'react-native';

import { textPresets } from './textPresets';
import { TTextPresets } from './types';

import { TTheme } from '@/theme';

interface ITextProps extends ComponentProps<typeof RText>, RNTextProps {
	preset?: TTextPresets;
}

const RText = createText<TTheme>();

export function Text({
	children,
	preset = 'default',
	variant = 'commonText',
	...rest
}: ITextProps) {
	return (
		<RText color={textPresets[preset].color} variant={variant} {...rest}>
			{children}
		</RText>
	);
}
