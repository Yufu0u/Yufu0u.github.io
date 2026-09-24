# Yufu0u.dev

静态个人学习网站，部署于 GitHub Pages。

## 技术栈

- HTML5：页面结构与内容
- CSS：全站样式与响应式布局
- 原生 JavaScript：日志目录搜索、年份筛选和分页（渐进增强）
- giscus：基于 GitHub Discussions 的评论
- GitHub Pages：静态托管

无框架、外部包、构建步骤或服务端运行时。

## 文件结构

- `index.html`：首页与最近日志入口
- `blog.html`：日志目录与原日志页留言板
- `posts/`：各篇日志详情页
- `archive.js`：目录搜索、年份筛选和分页
- `about.html`：个人介绍与留言板
- `404.html`：找不到页面时显示
- `style.css`：全站响应式样式
- `favicon.svg`：站点图标

## 本地预览

在仓库根目录运行 Python 3 自带的静态文件服务器：

```bash
python -m http.server 8000
```

然后在浏览器打开 `http://localhost:8000/`。无需安装项目依赖。

## GitHub Pages 发布

在 GitHub 仓库的 **Settings → Pages** 中，将发布来源设为 `main` 分支的仓库根目录（如果仓库当前使用此配置）。提交并推送后，由 GitHub Pages 发布静态文件。确保 `index.html` 位于发布目录根部。

## 新增日志

1. 在 `posts/` 新建一篇 HTML 文件，沿用现有详情页结构，使用日期和简短英文标题组成稳定文件名。
2. 填写文章标题、日期、正文、页面描述、规范网址和 giscus 配置。评论使用 `pathname` 映射，以便每篇文章有独立讨论。
3. 在 `blog.html` 的目录中加入一条摘要记录，按日期从新到旧排列，并填写匹配用的 `data-year` 和 `data-search`。
4. 在 `index.html` 更新最近日志链接，最多保留 3 篇。
5. 在浏览器检查目录链接、详情页、手机布局和评论。

## giscus 配置

评论使用仓库 `Yufu0u/Yufu0u.github.io` 的 Discussions：

- Repository ID：`R_kgDOUIkBjw`
- Category：`General`
- Category ID：`DIC_kwDOUIkBj84DEgXz`
- Mapping：`pathname`

如修改仓库或 Discussion 分类，请同步更新 `about.html`、`blog.html` 和 `posts/` 中的 giscus 属性，并确认仓库已启用 Discussions 且 giscus 应用有访问权限。
