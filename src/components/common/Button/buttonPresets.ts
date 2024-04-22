import { TPresets } from './types';

export const buttonPresets: TPresets = {
	default: {
		default: {
			backgroundColor: 'indigoDark',
		},
		disabled: {
			backgroundColor: 'zincDark',
		},
		alert: {
			backgroundColor: 'yellowDark',
		},
		success: {
			backgroundColor: 'emeraldDark',
		},
		danger: {
			backgroundColor: 'redDark',
		},
	},
	outline: {
		default: {
			backgroundColor: 'transparent',
			borderColor: 'indigoDark',
			textColor: 'indigoDark',
		},
		alert: {
			backgroundColor: 'transparent',
			borderColor: 'yellowDark',
			textColor: 'yellowDark',
		},
		danger: {
			backgroundColor: 'transparent',
			borderColor: 'redDark',
			textColor: 'redDark',
		},
		disabled: {
			backgroundColor: 'transparent',
			borderColor: 'zincDark',
			textColor: 'zincDark',
		},
		success: {
			backgroundColor: 'transparent',
			borderColor: 'emeraldDark',
			textColor: 'emeraldDark',
		},
	},
};
