const { themes } = require('prism-react-renderer')

const path = require('path')
const beian = '豫ICP备2023033634号-1'

const announcementBarContent = ''

export default async function createConfigAsync() {
  /** @type {import('@docusaurus/types').Config} */
  return {
    title: '李大猫的小站',
    url: 'https://lidamao.top',
    baseUrl: '/',
    favicon: 'img/favicon.ico',
    organizationName: 'Lidamao',
    projectName: 'blog',
    tagline: '道阻且长，行则将至',
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    themeConfig: {
      // announcementBar: {
      //   id: 'announcementBar-3',
      //   content: announcementBarContent,
      // },
      metadata: [
        {
          name: 'keywords',
          content: '李大猫, lidamao',
        },
        {
          name: 'keywords',
          content:
            'blog, javascript, typescript, node, react, vue, php, go, web, python, 爬虫',
        },
        {
          name: 'keywords',
          content: '编程爱好者, Web开发者, 写过爬虫, 学过逆向, 现在主攻ts全栈',
        },
      ],
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      headTags: [
        {
          tagName: 'meta',
          attributes: {
            name: 'description',
            content: '李大猫的个人小站',
          },
        },
      ],
      navbar: {
        logo: {
          alt: '李大猫',
          src: 'img/logo.webp',
          srcDark: 'img/logo.webp',
        },
        hideOnScroll: true,
        items: [
          {
            label: '博客',
            position: 'right',
            to: 'blog',
          },
          {
            label: '项目',
            position: 'right',
            to: 'project',
          },
          {
            label: '更多',
            position: 'right',
            items: [
              { label: '归档', to: 'blog/archive' },
              { label: '笔记', to: 'docs/skill' },
              { label: '资源', to: 'resource' },
              { label: '友链', to: 'friends' },
              { label: '工具推荐', to: 'docs/tools' },
            ],
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '学习',
            items: [
              { label: '博客', to: 'blog' },
              { label: '归档', to: 'blog/archive' },
              { label: '技术笔记', to: 'docs/skill' },
              { label: '实战项目', to: 'project' },
              { label: '前端示例', to: 'https://example.kuizuo.cn' },
            ],
          },
          {
            title: '社交媒体',
            items: [
              { label: '关于我', to: '/about' },
              { label: 'GitHub', href: 'https://github.com/lidamaomao' },
              {
                label: '掘金',
                href: 'https://juejin.cn/user/289926798377112',
              },
            ],
          },
          {
            title: '更多',
            items: [
              { label: '友链', position: 'right', to: 'friends' },
              { label: '导航', position: 'right', to: 'resource' },
              // { label: '我的站点', position: 'right', to: 'website' },
              {
                html: `<a href="https://docusaurus.io/zh-CN/" target="_blank"><img style="height:50px;margin-top:0.5rem" src="/img/buildwith.png" /><a/>`,
              },
            ],
          },
        ],
        copyright: `<p><a href="http://beian.miit.gov.cn/" >${beian}</a></p><p>Copyright © 2020 - PRESENT 愧怍 Built with Docusaurus.</p>`,
      },
      //algolia: {
      //  appId: 'GV6YN1ODMO',
      //  apiKey: '50303937b0e4630bec4a20a14e3b7872',
      //  indexName: 'kuizuo',
      //},
      giscus: {
        repo: 'lidamaomao/blog',
        repoId: 'R_kgDOKwgTkg',
        category: 'General',
        categoryId: 'DIC_kwDOKwgTks4CbYVR',
        theme: 'light',
        darkTheme: 'dark',
      },
      socials: {
        github: 'https://github.com/lidamaomao',
        //twitter: 'https://twitter.com/kuizuo',
        juejin: 'https://juejin.cn/user/289926798377112',
        // csdn: 'https://blog.csdn.net/kuizuo12',
        qq: 'https://wpa.qq.com/msgrd?v=3&amp;uin=916929789&amp;site=qq',
        //zhihu: 'https://www.zhihu.com/people/kuizuo',
        //cloudmusic: 'https://music.163.com/#/user/home?id=1333010742',
        email: 'mailto:lidamao@lidamao.top',
      },
      prism: {
        theme: themes.oneLight,
        darkTheme: themes.oneDark,
        additionalLanguages: ['bash', 'json', 'java', 'php', 'rust', 'toml'],
        defaultLanguage: 'javascript',
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' },
          },
          {
            className: 'code-block-error-line',
            line: 'This will error',
          },
        ],
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      liveCodeBlock: {
        playgroundPosition: 'top',
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)',
        },
      },
    },
    presets: [
      [
        '@docusaurus/preset-classic',
        {
          docs: {
            path: 'docs',
            sidebarPath: 'sidebars.js',
          },
          blog: false,
          theme: {
            customCss: ['./src/css/custom.scss'],
          },
          sitemap: {
            changefreq: 'daily',
            priority: 0.5,
          },
          gtag: {
            trackingID: 'G-S4SD5NXWXF',
            anonymizeIP: true,
          },
          // debug: true,
        },
      ],
    ],
    plugins: [
      'docusaurus-plugin-image-zoom',
      'docusaurus-plugin-sass',
      path.resolve(__dirname, './src/plugin/plugin-baidu-tongji'),
      path.resolve(__dirname, './src/plugin/plugin-baidu-push'),
      [
        path.resolve(__dirname, './src/plugin/plugin-content-blog'), // 为了实现全局 blog 数据，必须改写 plugin-content-blog 插件
        {
          path: 'blog',
          editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
            `https://github.com/lidamaomao/blog/edit/main/${blogDirPath}/${blogPath}`,
          editLocalizedFiles: false,
          blogDescription: '愿有一颗阔大的心，让它容下整个宇宙和人生',
          blogSidebarCount: 10,
          blogSidebarTitle: 'Blogs',
          postsPerPage: 10,
          showReadingTime: true,
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
          feedOptions: {
            type: 'all',
            title: '李大猫',
            copyright: `Copyright © ${new Date().getFullYear()} 李大猫 Built with Docusaurus.<p><a href="http://beian.miit.gov.cn/" class="footer_lin">${beian}</a></p>`,
          },
        },
      ],
      ['@docusaurus/plugin-ideal-image', { disableInDev: false }],
      [
        '@docusaurus/plugin-pwa',
        {
          debug: true,
          offlineModeActivationStrategies: [
            'appInstalled',
            'standalone',
            'queryString',
          ],
          pwaHead: [
            { tagName: 'link', rel: 'icon', href: '/img/logo.png' },
            { tagName: 'link', rel: 'manifest', href: '/manifest.json' },
            { tagName: 'meta', name: 'theme-color', content: '#12affa' },
          ],
        },
      ],
    ],
    stylesheets: [],
    i18n: {
      defaultLocale: 'zh-CN',
      locales: ['en', 'zh-CN'],
      localeConfigs: {
        en: {
          htmlLang: 'en-GB',
        },
      },
    },
  }
}
