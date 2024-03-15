#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
pnpm run build

# 进入生成的文件夹
# cd wiki/.vitepress/dist

rm -rf .git
# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy docs'
git branch -m master main

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

# 意思为将 master 构建后的代码合并到docs分支上，然后在docs分支上部署~
git push -f https://gitee.com/markyun/my-wiki.git master:docs
cd -