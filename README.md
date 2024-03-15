# Markyun Wikipedia Code

api:https://vitepress.dev/zh/reference/site-config

换肤:https://blog.csdn.net/weixin_44803753/article/details/130903396

实现用语雀写文档，发布后自动更新到博客：
https://github.com/elog-x/yuque-vitepress?tab=readme-ov-file

生成目录：
npm i -D vite-plugin-vitepress-auto-nav
源码：https://github.com/Xaviw/vite-plugin-vitepress-auto-nav

https://github.com/Xaviw/XaviDocs/tree/b34041ea0a504c9609346d390fd56b56e1fdc9cb/工具系列/VitePress搭建
https://github.com/Xaviw/vite-plugin-vitepress-auto-nav/issues/1

https://xaviw.github.io/XaviDocs/

自定义风格
https://github.com/neilmispelaar/Blog
https://github.com/RadiBarq/plasticdb.com-blog

## develop

```js
  "scripts": {
    "dev": "vitepress dev --host --port 888",
    "docs:dev": "vitepress dev --host --open --port 8889",
    "docs:build": "vitepress build",
    "docs:preview": "vitepress preview --port 8080",
    "docs:deploy": "bash scripts/deploy-docs.sh"
  },
```


##  deploy using Vercel CLI

npm i -g vercel

### To quickly start a new project, run the following commands:
vercel init     # Pick an example project
cd <PROJECT>    # Change directory to the new project
vercel          # Deploy to the cloud


## about me

```js
// On this page, you’ll find  about me.
const my = {
  name: '马云云',
  tags: ['Web Developer','Photog','Cycling enthusiast', 'INFJ'],
  adress: '江苏 - 南京',
  email: 'majinyun@outlook.com',
  introduce: 'Hi, I’m a frontend developer. This is my spot on the web for writing, projects, tutorials and anything else I want to put out there. check out the blog, or of my weekly.',
  github: 'https://github.com/markyun',
  blog: 'https://markyun.github.io/',
  wiki: 'https://markyun.github.io/wiki/',
  weekly: 'https://markyun.github.io/weekly/',


  // 文档资料
  'cubox(Read Later)': 'https://cubox.pro/my/all',
  'subscribe(RSS)': 'https://www.yuque.com/markyun/zs/rss',
     // （整理为 2 个 wiki 库：大前端 [前端技术体系]、学习资料 [MyCode、知识库、工具库等]）
    '学习资料 - 知识库': 'https://www.yuque.com/markyun/zs',
    '大前端 - 知识库':  'https://www.yuque.com/markyun/fe',

      '前端开发工具':     'https://www.yuque.com/markyun/tools',

  // 代码仓库
  'Wikipedia': 'https://gitee.com/markyun/my-wiki.git',
  'MyCode':  'https://gitee.com/markyun/mycode.git',
  'Weekly':  'https://github.com/markyun/weekly',
      // code Snippets
      'React Snippets': 'https://gitee.com/markyun/reactSnippets.git',
      'Vue Snippets': 'https://gitee.com/markyun/vueSnippets.git',
      'NextSSR': 'https://gitee.com/markyun/ssr.git',

  // 技术装备
  TechnicalGear:[
    'M1 MacBook Pro for coding',
    'MacMini for home',
    'iPad for reading books',
    'DELL 27 G2723H Monitor',
    'FILCO Keyboard',
    'AirPods',
  ],

  // 常用应用
  Apps:[
    'Ding Talk(工作沟通)',
    'Yuque(线上文档)',
    'Pocket(Read Later)',
    'Cubox(IF|Read Later)',
    'RSSHub(Subscribe)',
    'Bilibili(video)',
    'Twitter(news)',
    'PixCake(AI 修图)',
    'VSCode(coding)',
    'Chrome(debugger)',
    'GitHub(代码仓库)',
    'Vercel(CI/CD)',
    'Figma(UI 图)',
    'ChatGPT(AI 助理)',
  ],
}

```
