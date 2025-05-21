// 全局常量配置？
const PROXY_URL = '/proxy/';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',
    verificationTTL: 90 * 24 * 60 * 60 * 1000,
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: './image/retrotv_5520.png',
    version: '1.0.3'
};

// API站点配置
const API_SITES = {
    dyttzy: {
        api: 'http://caiji.dyttzyapi.com',
        name: '电影天堂资源',
        detail: 'http://caiji.dyttzyapi.com',
    },
    ruyi: {
        api: 'https://cj.rycjapi.com',
        name: '如意资源',
    },
    bfzy: {
        api: 'https://bfzyapi.com',
        name: '暴风资源',
    },
    tyyszy: {
        api: 'https://tyyszy.com',
        name: '天涯资源',
    },
    xiaomaomi: {
        api: 'https://zy.xiaomaomi.cc',
        name: '小猫咪资源',
    },
    ffzy: {
        api: 'http://ffzy5.tv',
        name: '非凡影视',
        detail: 'http://ffzy5.tv',
    },
    heimuer: {
        api: 'https://json.heimuer.xyz',
        name: '黑木耳',
        detail: 'https://heimuer.tv',
    },
    zy360: {
        api: 'https://360zy.com',
        name: '360资源',
    },
    wolong: {
        api: 'https://wolongzyw.com',
        name: '卧龙资源',
    },
    hwba: {
        api: 'https://cjhwba.com',
        name: '华为吧资源',
    },
    jisu: {
        api: 'https://jszyapi.com',
        name: '极速资源',
        detail: 'https://jszyapi.com'
    },
    dbzy: {
        api: 'https://dbzy.com',
        name: '豆瓣资源',
    },
    mozhua: {
        api: 'https://mozhuazy.com',
        name: '魔爪资源',
    },
    mdzy: {
        api: 'https://www.mdzyapi.com',
        name: '魔都资源',
    },
    zuid: {
        api: 'https://api.zuidapi.com',
        name: '最大资源'
    },
    yinghua: {
        api: 'https://m3u8.apiyhzy.com',
        name: '樱花资源'
    },
    baidu: {
        api: 'https://api.apibdzy.com',
        name: '百度云资源'
    },
    wujin: {
        api: 'https://api.wujinapi.me',
        name: '无尽资源'
    },
    wwzy: {
        api: 'https://wwzy.tv',
        name: '旺旺短剧'
    },
    ikun: {
        api: 'https://ikunzyapi.com',
        name: 'iKun资源'
    },
    testSource: {
        api: 'https://www.example.com',
        name: '空内容测试源',
        adult: true
    },
    ckzy: {
        api: 'https://www.ckzy1.com',
        name: 'CK资源',
        adult: true
    },
    jkun: {
        api: 'https://jkunzyapi.com',
        name: 'jkun资源',
        adult: true
    },
    bwzy: {
        api: 'https://api.bwzym3u8.com',
        name: '百万资源',
        adult: true
    },
    souav: {
        api: 'https://api.souavzy.vip',
        name: 'souav资源',
        adult: true
    },
    r155: {
        api: 'https://155api.com',
        name: '155资源',
        adult: true
    },
    lsb: {
        api: 'https://apilsbzy1.com',
        name: 'lsb资源',
        adult: true
    },
    huangcang: {
        api: 'https://hsckzy.vip',
        name: '黄色仓库',
        adult: true,
        detail: 'https://hsckzy.vip'
    },
    yutu: {
        api: 'https://yutuzy10.com',
        name: '玉兔资源',
        adult: true
    }
};

// ✅ 添加成人源开关
const HIDE_BUILTIN_ADULT_APIS = false;

// ✅ 自动过滤隐藏成人源
const getFilteredApiSites = () => {
    return HIDE_BUILTIN_ADULT_APIS
        ? Object.fromEntries(Object.entries(API_SITES).filter(([_, site]) => site.adult !== true))
        : API_SITES;
};

const FILTERED_API_SITES = getFilteredApiSites(); // ✅ 渲染或聚合搜索时请用这个变量

// 聚合搜索配置
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,
    timeout: 8000,
    maxResults: 10000,
    parallelRequests: true,
    showSourceBadges: true
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        path: '/api.php/provide/vod/?ac=videolist&wd=',
        pagePath: '/api.php/provide/vod/?ac=videolist&wd={query}&pg={page}',
        maxPages: 50,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        path: '/api.php/provide/vod/?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 播放器相关
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;
const CUSTOM_PLAYER_URL = 'player.html';

const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,
    filterAds: true,
    autoPlayNext: true,
    adFilteringEnabled: true,
    adFilteringStorage: 'adFilteringEnabled'
};

// 错误提示
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,
    sanitizeUrls: true,
    maxQueryLength: 100
};

// 自定义 API 配置
const CUSTOM_API_CONFIG = {
    separator: ',',
    maxSources: 5,
    testTimeout: 5000,
    namePrefix: 'Custom-',
    validateUrl: true,
    cacheResults: true,
    cacheExpiry: 5184000000,
    adultPropName: 'isAdult'
};
