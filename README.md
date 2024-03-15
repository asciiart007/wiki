# Markyun Wikipedia Code

api:https://vitepress.dev/zh/reference/site-config

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

  To quickly start a new project, run the following commands:

  vercel init     # Pick an example project
  cd <PROJECT>    # Change directory to the new project
  vercel          # Deploy to the cloud


## 参考

实现用语雀写文档，发布后自动更新到博客：
https://github.com/elog-x/yuque-vitepress?tab=readme-ov-file

生成目录：
npm i -D vite-plugin-vitepress-auto-nav

自定义风格
https://github.com/neilmispelaar/Blog
https://github.com/RadiBarq/plasticdb.com-blog


## about me

```js
// On this page, you’ll find  about me.
const my = {
  name: 'markyun',
  tags: ['Web Developer','Photog','Cycling enthusiast', 'INFJ'],
  adress: '江苏 - 南京',
  email: 'majinyun@outlook.com',
  introduce: 'Hi, I’m a frontend developer. This is my spot on the web for writing, projects, tutorials and anything else I want to put out there. check out the blog, or of my weekly.',
  github: 'https://github.com/markyun',
  blog: 'https://markyun.github.io/',
  wiki: 'https://markyun.github.io/wiki/',
  weekly: 'https://markyun.github.io/weekly/',

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
