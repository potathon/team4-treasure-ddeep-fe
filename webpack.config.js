const path = require('path');

module.exports = {
  entry: './src/index.js', 
  output: {
    filename: 'bundle.js', 
    path: path.resolve(__dirname, 'dist'), 
  },
  devServer: {
    allowedHosts: "all", // 모든 호스트를 허용하는 설정
    port: 3000, 
    open: true, 
  },
};
