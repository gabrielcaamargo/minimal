import { TTheme } from '@/theme';

type TButtonPresets = 'default' | 'success' | 'alert' | 'danger' | 'disabled';

type TPresets = {
	[key in TButtonPresets]: {
		backgroundColor: keyof TTheme['colors'];
	};
};

export { type TPresets, type TButtonPresets };
