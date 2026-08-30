# UmeHanami 的个人学习网站

我的个人学习日志 + 作品集，托管在 GitHub Pages 上。

- 在线地址：https://你的GitHub用户名.github.io
- 技术：HTML / CSS 手写，评论用 giscus（基于 GitHub Discussions）
- 内容：每周一篇学习日志，记录实验室主线（Linux → ROS2 → YOLO → 机械臂）的进展

## 首次发布步骤

1. 把本文件夹里的 4 个文件（index.html / blog.html / about.html / style.css）放进
   `<你的用户名>.github.io` 仓库根目录
2. 推送到 GitHub（见下方"日常更新命令"）
3. 仓库 Settings → Pages → Source 选 `Deploy from a branch`，Branch 选 `main` / `/(root)`
   → 等 1~2 分钟，访问上面的地址
4. 开启评论：
   - Settings → General → Features → 勾选 Discussions
   - 安装 https://github.com/apps/giscus 并授权本仓库
   - 打开 https://giscus.app/zh-CN 按提示生成代码，
     粘贴到 blog.html 和 about.html 里标了注释的位置，再推一次

## 日常更新（每周日写日志）

```bash
git add .
git commit -m "blog: 第N周学习日志"
git push
```

## 文件结构

- `index.html` 首页（自我介绍 + 项目导航卡片）
- `blog.html` 学习日志（每周在最上面加一篇文章）
- `about.html` 关于我
- `style.css` 全站样式
