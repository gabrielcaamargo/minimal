import { createTheme } from '@shopify/restyle';

const palette = {
	zincLight: '#fafafa',
	zincLighter: '#f4f4f5',
	zincLightest: '#e4e4e7',
	zincDarkLight: '#d4d4d8',
	zincDark: '#a1a1aa',
	zincDarker: '#71717a',
	zincDarkest: '#52525b',
	zincDarkBlack: '#3f3f46',
	zincBlack: '#27272a',
	zincDarkestBlack: '#18181b',
	zincBlackest: '#09090b',

	redLight: '#fef2f2',
	redLighter: '#fee2e2',
	redLightest: '#fecaca',
	redDarkLight: '#fca5a5',
	redDark: '#f87171',
	redDarker: '#ef4444',
	redDarkest: '#dc2626',
	redDarkBlack: '#b91c1c',
	redBlack: '#991b1b',
	redDarkestBlack: '#7f1d1d',
	redBlackest: '#450a0a',

	yellowLight: '#fefce8',
	yellowLighter: '#fef9c3',
	yellowLightest: '#fef08a',
	yellowDarkLight: '#fde047',
	yellowDark: '#facc15',
	yellowDarker: '#eab308',
	yellowDarkest: '#ca8a04',
	yellowDarkBlack: '#a16207',
	yellowBlack: '#854d0e',
	yellowDarkestBlack: '#713f12',
	yellowBlackest: '#42200',

	indigoLight: '#eef2ff',
	indigoLighter: '#e0e7ff',
	indigoLightest: '#c7d2fe',
	indigoDarkLight: '#a5b4fc',
	indigoDark: '#818cf8',
	indigoDarker: '#6366f1',
	indigoDarkest: '#4f46e5',
	indigoDarkBlack: '#4338ca',
	indigoBlack: '#3730a3',
	indigoDarkestBlack: '#312e81',
	indigoBlackest: '#1e1b4b',

	emeraldLight: '#ecfdf5',
	emeraldLighter: '#d1fae5',
	emeraldLightest: '#a7f3d0',
	emeraldDarkLight: '#6ee7b7',
	emeraldDark: '#34d399',
	emeraldDarker: '#10b981',
	emeraldDarkest: '#059669',
	emeraldDarkBlack: '#047857',
	emeraldBlack: '#065f46',
	emeraldDarkestBlack: '#064e3b',
	emeraldBlackest: '#022c22',
};
const theme = createTheme({
	colors: palette,
	spacing: {
		xs: 2,
		sm: 4,
		md: 6,
		lg: 8,
		xl: 10,
		'2xl': 12,
		'3xl': 14,
		'4xl': 16,
		'5xl': 18,
		'6xl': 20,
		'7xl': 22,
		'8xl': 24,
		'9xl': 26,
		'10xl': 28,
		'11xl': 30,
		'12xl': 32,
	},
	borderRadii: {
		sm: 4,
		md: 6,
		lg: 8,
		xl: 10,
		'2xl': 12,
		'3xl': 14,
		'4xl': 16,
		'5xl': 18,
		'6xl': 20,
		'7xl': 22,
		'8xl': 24,
		'9xl': 26,
		'10xl': 28,
		'11xl': 30,
		'12xl': 32,
	},
	textVariants: {
		commonText: {
			fontFamily: 'OpenSans-Regular',
			fontSize: 16,
		},
		mediumText: {
			fontFamily: 'OpenSans-Medium',
			fontSize: 16,
		},
		semiboldText: {
			fontFamily: 'OpenSans-Semibold',
			fontSize: 16,
		},
		strongText: {
			fontFamily: 'OpenSans-Semibold',
			fontSize: 16,
		},
		pageTitle: {
			fontFamily: 'Sora-Bold',
			fontSize: 32,
		},
		sectionTitle: {
			fontFamily: 'Sora-Semibold',
			fontSize: 28,
		},
		commonTitle: {
			fontFamily: 'Sora-Bold',
			fontSize: 18,
		},
	},
});

export type TTheme = typeof theme;
export default theme;
