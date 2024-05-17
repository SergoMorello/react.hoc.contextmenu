const path = require('path');

module.exports = {
	entry: {
		index: '/src/index.tsx'
	},
	target: 'web',
	mode: 'production', //production | development
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: [
					'ts-loader'
				],
				exclude: /node_modules/,
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [
									[
										"autoprefixer",
										{
											// Options
										},
									],
								],
							},
						}
					}
				]
			}
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		library: 'ContextMenu',
		libraryTarget: 'umd',
		auxiliaryComment: 'React Hoc Context Menu'
	},
	externals: {
		react: {
			root: 'React',
			commonjs: 'react',
			commonjs2: 'react',
			amd: 'react',
		}
	}
};