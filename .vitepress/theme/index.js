// .vitepress/theme/index.js
// VitePress 检测到主题入口文件存在时，将始终使用自定义主题而不是默认主题

/* import Theme from 'awesome-vitepress-theme'

export default {
  extends: Theme,
  enhanceApp(ctx) {
    // ...
  }
} */

import DefaultTheme from "vitepress/theme";
import "./custom.css";

export default DefaultTheme;
