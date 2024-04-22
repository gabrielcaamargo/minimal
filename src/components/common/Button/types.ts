import { TTheme } from '@/theme';

type TButtonVariants = 'default' | 'success' | 'alert' | 'danger' | 'disabled';
type TButtonPresets = 'default' | 'outline';

type TPresets = {
	[preset in TButtonPresets]: {
		[variant in TButtonVariants]: {
			backgroundColor: keyof TTheme['colors'];
			borderColor?: keyof TTheme['colors'];
			textColor?: keyof TTheme['colors'];
		};
	};
};

export { type TPresets, type TButtonVariants, type TButtonPresets };
