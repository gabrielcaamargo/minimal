import { TTheme } from '@/theme';

type TTextPresets = 'default' | 'success' | 'alert' | 'danger';
type TPresets = {
	[key in TTextPresets]: {
		color: keyof TTheme['colors'];
	};
};

export type { TTextPresets, TPresets };
