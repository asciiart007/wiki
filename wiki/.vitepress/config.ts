import { defineConfig } from "vitepress";
import AutoNav from "vite-plugin-vitepress-auto-nav";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Markyun Wikipedia",
    description: "Markyun Wikipedia",
    titleTemplate: ":title - Yun Wiki",
    lang: "zh-Hans",
    base: "/wiki/",
    // markdown 页面的目录
    srcDir: "docs",
    // 放置生成的静态资源的目录
    // assetsDir: "static",
    // outDir: ".vitepress/dist", // "../public",
    // 删除 .html 后缀。
    cleanUrls: true,
    appearance: true,
    markdown: {
        lineNumbers: true,
        defaultHighlightLang: "js",
    },
    // 忽略解析部分 md 文件（默认忽略 node_modules），仅打包后生效，被忽略的文件不影响被其他文件导入
    srcExclude: [
        "**/(README|TODO).md",
        "(.vitepress|public|images|.guthub|components|snippets)/**/*.md",
    ],
    head: [
        // 浏览器头部 icon
        ["link", { rel: "icon", href: "/Wiki/logo.png" }],
        ["meta", { name: "theme-color", content: "#3c8772" }],
        ["meta", { property: "og:type", content: "website" }],
        ["meta", { property: "og:locale", content: "zh" }],
        ["meta", { property: "og:site_name", content: "Wikipedia" }],
        // ["meta", { property: "og:image", content: "/Wiki/home.png" }],
        ["meta", { property: "og:url", content: "https://vitepress.dev/" }],
    ],
    // AutoNav
    vite: {
        plugins: [
            AutoNav({
                pattern: ["**/!(README|TODO).md"], // 也可以在这里排除不展示的文件，例如不匹配 README 和 TODO 文件
                settings: {
                    test: { hide: true }, // 不显示名称为 test 的文件夹或 md 文件
                    // b: { title: 'bb' }, // 名称为 b 的文件夹或文件在菜单中显示为 bb
                    // c/b: { sort : 3 }, // 通过路径精确匹配 c 文件夹下的 b 进行配置，排序时位于下标 3 的位置或最后
                    // c/b2: { useArticleTitle: false }, // 关闭使用文章一级标题作为文章名称
                    // d: { collapsed: true }, // 文件夹折叠配置
                },
                itemsSetting: {
                    工具系列: { sort: 0 },

                    VitePress搭建: { sort: 0 },
                    搭建1: { sort: 1 },
                },
                // compareFn: (a, b) => {
                //     // 按最新提交时间 (没有提交记录时为本地文件修改时间) 升序排列 options
                //     // return b.updateTime - a.updateTime;
                // },
                // useArticleTitle: true, // 开启使用文章一级标题作为文章名称
            }),
        ],
    },

    // 主题级选项
    themeConfig: {
        siteTitle: "Wikipedia",
        // siteTitle: false,
        logo: "/logo.svg",
        outline: {
            label: "本页导航",
            level: [2, 6],
            // label: "目录",
        },
        search: {
            provider: "local",
            options: {
                translations: {
                    button: {
                        buttonText: "搜索文档",
                    },
                    modal: {
                        displayDetails: "显示详情",
                        noResultsText: "未找到相关结果",
                        resetButtonTitle: "清除",
                        footer: {
                            closeText: "关闭",
                            selectText: "选择",
                            navigateText: "切换",
                        },
                    },
                },
            },
        },
        i18nRouting: true,

        footer: {
            message: "基于 MIT 许可发布",
            copyright: `版权所有 © 2020-${new Date().getFullYear()} Markyun Wikipedia`,
        },
        docFooter: {
            prev: "上一篇",
            next: "下一篇",
        },

        lastUpdated: {
            text: "最后更新于",
            formatOptions: {
                dateStyle: "short",
                timeStyle: "medium",
            },
        },
        langMenuLabel: "切换语言",
        returnToTopLabel: "回到顶部",
        sidebarMenuLabel: "菜单",
        darkModeSwitchLabel: "主题",
        lightModeSwitchTitle: "切换到浅色主题",
        darkModeSwitchTitle: "切换到深色主题",

        editLink: {
            pattern: "https://gitee.com/markyun/my-wiki/edit/master/wiki/src/zs/:path",
            text: "在 Git 上编辑此页面",
        },

        socialLinks: [{ icon: "github", link: "https://gitee.com/markyun/my-wiki.git" }],
    },
});
