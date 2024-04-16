module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
			require.resolve('babel-plugin-module-resolver'),
			{
				root: ["./src/"],
				alias: {
					'@': './src',
					'@assets': './src/assets',
					'@screens': './src/screens',
					'@utils': './src/utils',
					'@components': './src/components',
					'@routes': './src/routes',
					'@theme': './src/theme',
					'@store': './src/store',
					'@services': './src/services',
					'@hooks': './src/hooks'
				},
    	}
		],
  ],
};
