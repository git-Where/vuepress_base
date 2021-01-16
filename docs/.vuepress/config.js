module.exports = {
    title: "学习笔记文档",
    description: "每天学一点,进步多一点",
    extend: "@vuepress/theme-default",
    plugins: ["@vuepress/back-to-top"],
    base: "/",
    head: [
        [
            "link",
            {
                rel: "icon",
                href: `/favicon.ico`
            },
            [
                "script",
                {
                    src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js"
                }
            ],
            [
                "script",
                {
                    src: "https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.js"
                }
            ],
            [
                "link",
                {
                    rel: "stylesheet",
                    type: "text/css",
                    href: "https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.css"
                }
            ]
        ]
    ],
    dest: "./docs/.vuepress/dist",
    ga: "",
    evergreen: true,
    serviceWorker: true,
    themeConfig: {
        smoothScroll: true,
        docsRepo: "https://github.com/2662419405/vuepress_admin",
        docsDir: "docs",
        docsBranch: "master",
        activeHeaderLinks: true,
        editLinks: true,
        lastUpdated: "上次更新 ",
        editLinkText: "发现问题!及时纠正",
        nav: [
            { text: "首页", link: "/" }
            // { text: "笔记文档", link: "/home/" },
            // { text: "面试题", link: "/code/" },
            // { text: "思维导图", link: "/xmind/" },
            // { text: "最后冲刺", link: "/once/" },
            // { text: "源码", link: "https://github.com/2662419405/vuepress_admin" },
            // {
            //     text: "SunHang",
            //     items: [{
            //             text: "博客园",
            //             link: "https://www.cnblogs.com/sunhang32"
            //         },
            //         {
            //             text: "个人博客",
            //             link: "https://sunhang.top/"
            //         },
            //         {
            //             text: "CSDN",
            //             link: "https://blog.csdn.net/qq_43268396"
            //         },
            //         {
            //             text: "github",
            //             link: "https://github.com/2662419405"
            //         }
            //     ]
            // }
        ],
        sidebarDepth: 2,
        sidebar: {
            "/yeqs/": [
                "",
                {
                    title: "前端之路",
                    collapsable: true,
                    children: ["css", "html"]
                }
            ],
            xmind: [""]
        }
    },
    markdown: {
        lineNumbers: true
    }
};