// custom.js

const fs = require('fs-extra');
const path = require('path');

// 定义子目录路径
const subdirectoryPath = 'blog';

// 定义 static 目录的源路径和目标路径
const staticSrcPath = path.join(__dirname, 'public', 'static');
const staticTargetPath = path.join(__dirname, 'public', subdirectoryPath, 'static');

// 移动 static 目录的内容到子目录下
fs.moveSync(staticSrcPath, staticTargetPath, { overwrite: true });
