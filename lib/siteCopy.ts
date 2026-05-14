/**
 * 黄子谊个人网站文案中心。
 * 第一阶段采用中文单语展示；为兼容模板既有 i18n 类型，en 字段暂时复用中文内容。
 */

export const INSTITUTION_OFFICIAL_URL = "https://www.njfu.edu.cn/";

export const introBioSegments = {
  zh: {
    before: "黄子谊是",
    linkLabel: "南京林业大学",
    after:
      "信息科学技术学院、人工智能学院电子信息工程专业本科生，已确定获得推荐免试研究生资格。他的学习与实践经历集中在光谱感知、机器学习建模、智能仪器、嵌入式系统与数学优化等方向。作为省级大学生创新创业训练项目负责人，他完成了植物叶片光谱检测相关研究，并以第一作者向 SCI 期刊投稿论文；同时在数学建模、挑战杯和电子设计竞赛中积累了算法建模、数据分析与系统实现经验。",
  },
  en: {
    before: "黄子谊是",
    linkLabel: "南京林业大学",
    after:
      "信息科学技术学院、人工智能学院电子信息工程专业本科生，已确定获得推荐免试研究生资格。他的学习与实践经历集中在光谱感知、机器学习建模、智能仪器、嵌入式系统与数学优化等方向。作为省级大学生创新创业训练项目负责人，他完成了植物叶片光谱检测相关研究，并以第一作者向 SCI 期刊投稿论文；同时在数学建模、挑战杯和电子设计竞赛中积累了算法建模、数据分析与系统实现经验。",
  },
} as const;

export const INTRO_BIO_LIVELY_PLAIN = {
  zh:
    introBioSegments.zh.before +
    introBioSegments.zh.linkLabel +
    introBioSegments.zh.after,
  en:
    introBioSegments.en.before +
    introBioSegments.en.linkLabel +
    introBioSegments.en.after,
} as const;

export const INTRO_CV_PATH = "/api/about/file/huang-ziyi-cv.pdf";
export const INTRO_RESEARCH_PROPOSAL_PATH =
  "/api/about/file/research-proposal-placeholder.pdf";
export const INTRO_CET6_PATH = "/api/about/file/resource/cet6-placeholder.pdf";
export const INTRO_SUMMER_CAMP_RANK_PATH =
  "/api/about/file/resource/rank-placeholder.jpg";
export const INTRO_NATIONAL_SCHOLARSHIP_PATH =
  "/api/about/file/resource/scholarship-placeholder.jpg";
export const INTRO_COMPETITION_AWARD_PATH =
  "/api/about/file/resource/competition-placeholder.pdf";
export const INTRO_MATH_COMPETITION_AWARD_PATH =
  "/api/about/file/resource/math-competition-placeholder.jpg";

export const INTRO_CONTACT = {
  email: "hzyyy@njfu.edu.cn",
  phone: "15051300296",
  wechat: "15051300296",
  qq: "1735494291",
} as const;

export const introCopy = {
  zh: {
    title: "介绍",
    sectionHeading: "介绍",
    photoAlt: "黄子谊",
    cvLinkLabel: "下载简历 PDF",
    cvPreviewLabel: "在线预览",
    researchPlanLinkLabel: "研究计划",
    profileHeading: "个人信息",
    profileSummerCampRank: "出生年月：2005.05",
    profileExpectedRecommendationRank: "籍贯：江苏宿迁；政治面貌：中共党员",
    profileProofLabel: "（下载证明）",
    profileEnglishLevelPrefix: "专业排名：",
    profileCET6Label: "1/73（已确定获得保研资格）",
    profileAlgorithmLevel:
      "综合定位：电子信息工程本科生，具备科研建模、算法优化与嵌入式系统实践经历。",
    contactHeading: "联系方式",
    contactEmailLabel: "邮箱",
    contactPhoneLabel: "电话",
    contactWechatLabel: "微信",
    contactQqLabel: "QQ",
    educationHeading: "教育经历",
    educationColTime: "时间",
    educationColDegree: "学历",
    educationColSchool: "学校",
    awardsHeading: "奖项与荣誉",
    awardsHonorHeading: "荣誉奖项",
    awardsCompetitionHeading: "竞赛奖项",
    awardsColTime: "时间",
    awardsColAward: "奖项",
    awardsProofLabel: "（证明材料）",
    researchHeading: "科研成果",
    researchCopyrightHeading: "论文与科研项目",
    researchColTime: "时间",
    researchColAbbr: "类型",
    researchColName: "成果 / 状态",
  },
  en: {
    title: "介绍",
    sectionHeading: "介绍",
    photoAlt: "黄子谊",
    cvLinkLabel: "下载简历 PDF",
    cvPreviewLabel: "在线预览",
    researchPlanLinkLabel: "研究计划",
    profileHeading: "个人信息",
    profileSummerCampRank: "出生年月：2005.05",
    profileExpectedRecommendationRank: "籍贯：江苏宿迁；政治面貌：中共党员",
    profileProofLabel: "（下载证明）",
    profileEnglishLevelPrefix: "专业排名：",
    profileCET6Label: "1/73（已确定获得保研资格）",
    profileAlgorithmLevel:
      "综合定位：电子信息工程本科生，具备科研建模、算法优化与嵌入式系统实践经历。",
    contactHeading: "联系方式",
    contactEmailLabel: "邮箱",
    contactPhoneLabel: "电话",
    contactWechatLabel: "微信",
    contactQqLabel: "QQ",
    educationHeading: "教育经历",
    educationColTime: "时间",
    educationColDegree: "学历",
    educationColSchool: "学校",
    awardsHeading: "奖项与荣誉",
    awardsHonorHeading: "荣誉奖项",
    awardsCompetitionHeading: "竞赛奖项",
    awardsColTime: "时间",
    awardsColAward: "奖项",
    awardsProofLabel: "（证明材料）",
    researchHeading: "科研成果",
    researchCopyrightHeading: "论文与科研项目",
    researchColTime: "时间",
    researchColAbbr: "类型",
    researchColName: "成果 / 状态",
  },
} as const;

export const INTRO_EDUCATION = {
  zh: [
    {
      time: "2023 –",
      degree: "本科",
      school: "南京林业大学信息科学技术学院、人工智能学院",
    },
    {
      time: "2020 – 2023",
      degree: "高中",
      school: "宿迁青华中学高中部",
    },
    {
      time: "2017 – 2020",
      degree: "初中",
      school: "宿迁青华中学初中部",
    },
    {
      time: "2011 – 2017",
      degree: "小学",
      school: "宿迁市第一实验小学",
    },
  ],
  en: [
    {
      time: "2023 –",
      degree: "本科",
      school: "南京林业大学信息科学技术学院、人工智能学院",
    },
    {
      time: "2020 – 2023",
      degree: "高中",
      school: "宿迁青华中学高中部",
    },
    {
      time: "2017 – 2020",
      degree: "初中",
      school: "宿迁青华中学初中部",
    },
    {
      time: "2011 – 2017",
      degree: "小学",
      school: "宿迁市第一实验小学",
    },
  ],
} as const;

export function getIntroContactLivelyPlain(locale: "zh" | "en"): string {
  const t = introCopy[locale];
  const c = INTRO_CONTACT;
  const rows = [
    `${t.contactEmailLabel} ${c.email}`,
    `${t.contactPhoneLabel} ${c.phone}`,
    `${t.contactWechatLabel} ${c.wechat}`,
  ];
  if (c.qq) rows.push(`${t.contactQqLabel} ${c.qq}`);
  return rows.join("\n");
}

export function getIntroEducationLivelyPlain(locale: "zh" | "en"): string {
  const t = introCopy[locale];
  const rows = INTRO_EDUCATION[locale];
  const header = `${t.educationColTime}  ${t.educationColDegree}  ${t.educationColSchool}`;
  const body = rows.map((r) => `${r.time}  ${r.degree}  ${r.school}`).join("\n");
  return `${header}\n${body}`;
}

export const INTRO_AWARDS_HONOR = {
  zh: [
    { date: "2025", title: "卓越创新先锋，奖金 10000 元" },
    { date: "2025", title: "三好学生，校长奖学金" },
    { date: "2024", title: "三好学生，校长奖学金" },
    { date: "2025", title: "优秀共青团员" },
  ],
  en: [
    { date: "2025", title: "卓越创新先锋，奖金 10000 元" },
    { date: "2025", title: "三好学生，校长奖学金" },
    { date: "2024", title: "三好学生，校长奖学金" },
    { date: "2025", title: "优秀共青团员" },
  ],
} as const;

export const INTRO_AWARDS_COMPETITION: Record<
  "zh" | "en",
  { date: string; title: string; proofPath?: string; proofFilename?: string }[]
> = {
  zh: [
    { date: "2025.09", title: "高教社杯全国大学生数学建模竞赛 A 题，国家级一等奖" },
    { date: "2025.06–2025.10", title: "第十九届“挑战杯”全国大学生课外学术科技作品竞赛，国家级优胜奖" },
    { date: "2025", title: "第二十二届五一数学建模竞赛，省级二等奖" },
    { date: "2025", title: "第十六届全国大学生数学竞赛，省级三等奖" },
    { date: "2025.08", title: "江苏省大学生电子设计竞赛（TI 杯）E 题，队长 / 硬件与嵌入式开发" },
  ],
  en: [
    { date: "2025.09", title: "高教社杯全国大学生数学建模竞赛 A 题，国家级一等奖" },
    { date: "2025.06–2025.10", title: "第十九届“挑战杯”全国大学生课外学术科技作品竞赛，国家级优胜奖" },
    { date: "2025", title: "第二十二届五一数学建模竞赛，省级二等奖" },
    { date: "2025", title: "第十六届全国大学生数学竞赛，省级三等奖" },
    { date: "2025.08", title: "江苏省大学生电子设计竞赛（TI 杯）E 题，队长 / 硬件与嵌入式开发" },
  ],
};

export function getIntroAwardsLivelyPlain(locale: "zh" | "en"): string {
  const t = introCopy[locale];
  const headerLine = `${t.awardsColTime}  ${t.awardsColAward}`;
  const honor = INTRO_AWARDS_HONOR[locale]
    .map((row) => `${row.date}  ${row.title}`)
    .join("\n");
  const comp = INTRO_AWARDS_COMPETITION[locale]
    .map((row) => `${row.date}  ${row.title}`)
    .join("\n");
  return `${t.awardsHonorHeading}\n${headerLine}\n${honor}\n\n${t.awardsCompetitionHeading}\n${headerLine}\n${comp}`;
}

export const INTRO_RESEARCH_SOFTWARE: Record<
  "zh" | "en",
  readonly { date: string; abbr: string; name: string }[]
> = {
  zh: [
    {
      date: "2024.06–2026.04",
      abbr: "省级大创",
      name:
        "《手持式植物叶片重金属光谱检测仪的研发》，项目负责人，已结项。",
    },
    {
      date: "一审中",
      abbr: "SCI 论文",
      name:
        "Cross-species transfer of foliar dust retention by UV–Vis–NIR spectroscopy: classification and quantitative evaluation，第一作者，投稿至 Microchemical Journal。",
    },
    {
      date: "研究贡献",
      abbr: "光谱迁移",
      name:
        "提出跨物种迁移检测框架、裁剪波段策略与斜率-偏置校正；分类迁移准确率 91.1%，定量迁移 R² 由 0.265 提升至 0.797。",
    },
  ],
  en: [
    {
      date: "2024.06–2026.04",
      abbr: "省级大创",
      name:
        "《手持式植物叶片重金属光谱检测仪的研发》，项目负责人，已结项。",
    },
    {
      date: "一审中",
      abbr: "SCI 论文",
      name:
        "Cross-species transfer of foliar dust retention by UV–Vis–NIR spectroscopy: classification and quantitative evaluation，第一作者，投稿至 Microchemical Journal。",
    },
    {
      date: "研究贡献",
      abbr: "光谱迁移",
      name:
        "提出跨物种迁移检测框架、裁剪波段策略与斜率-偏置校正；分类迁移准确率 91.1%，定量迁移 R² 由 0.265 提升至 0.797。",
    },
  ],
} as const;

export function getIntroResearchLivelyPlain(locale: "zh" | "en"): string {
  const t = introCopy[locale];
  const headerLine = `${t.researchColTime}  ${t.researchColAbbr}  ${t.researchColName}`;
  const body = INTRO_RESEARCH_SOFTWARE[locale]
    .map((row) => `${row.date}  ${row.abbr}  ${row.name}`)
    .join("\n");
  return `${t.researchCopyrightHeading}\n${headerLine}\n${body}`;
}

export const projectsCopy = {
  zh: {
    title: "项目经历",
    detailTodo: "内容待补充。",
    backToProjects: "← 返回项目列表",
    detailFootnotesHeading: "术语与注释",
  },
  en: {
    title: "项目经历",
    detailTodo: "内容待补充。",
    backToProjects: "← 返回项目列表",
    detailFootnotesHeading: "术语与注释",
  },
} as const;

export const settingsCopy = {
  zh: {
    title: "设置",
    subtitle: "选择网站主题和字体。第一版建议保留默认 Claude 主题，后续可按个人偏好调整。",
    currentLabel: "当前主题",
    fontHeading: "字体",
    fontSubtitle: "正文字体可单独切换。中文学术主页建议优先使用霞鹜文楷或系统字体。",
    currentFontLabel: "当前字体",
    fontNames: {
      geist: "Geist",
      system: "系统界面",
      serif: "衬线 / 宋体",
      mono: "等宽",
      wenkai: "霞鹜文楷",
      pixel: "像素（Zpix）",
    } as const,
    fontBlurbs: {
      geist: "无衬线，与 Next / Geist 文档气质接近。",
      system: "跟随操作系统 UI 字体。",
      serif: "衬线字体，适合长文阅读。",
      mono: "全站使用等宽字体，偏工程与代码风格。",
      wenkai: "开源楷体风格，适合中文阅读。",
      pixel: "点阵字体，偏个性化展示。",
    } as const,
    themeNames: {
      vercel: "Vercel",
      linear: "Linear",
      cursor: "Cursor",
      notion: "Notion",
      stripe: "Stripe",
      supabase: "Supabase",
      ollama: "Ollama",
      raycast: "Raycast",
      claude: "Claude",
      resend: "Resend",
    } as const,
    themeBlurbs: {
      vercel: "黑白精密，与 Next / Geist 栈一致。",
      linear: "深色底、紫色点缀，工程向极简。",
      cursor: "AI 编辑器感，深色与渐变强调。",
      notion: "暖色纸感，适合长文阅读。",
      stripe: "浅底与紫色强调，偏正式作品集。",
      supabase: "深底翠绿，开源后端气质。",
      ollama: "终端单色、极简本地 LLM 感。",
      raycast: "深灰底与高饱和强调，工具感。",
      claude: "陶土暖色，区别于常见冷色学术站。",
      resend: "极简深黑与等宽气质，开发者向。",
    } as const,
  },
  en: {
    title: "设置",
    subtitle: "选择网站主题和字体。第一版建议保留默认 Claude 主题，后续可按个人偏好调整。",
    currentLabel: "当前主题",
    fontHeading: "字体",
    fontSubtitle: "正文字体可单独切换。中文学术主页建议优先使用霞鹜文楷或系统字体。",
    currentFontLabel: "当前字体",
    fontNames: {
      geist: "Geist",
      system: "系统界面",
      serif: "衬线 / 宋体",
      mono: "等宽",
      wenkai: "霞鹜文楷",
      pixel: "像素（Zpix）",
    } as const,
    fontBlurbs: {
      geist: "无衬线，与 Next / Geist 文档气质接近。",
      system: "跟随操作系统 UI 字体。",
      serif: "衬线字体，适合长文阅读。",
      mono: "全站使用等宽字体，偏工程与代码风格。",
      wenkai: "开源楷体风格，适合中文阅读。",
      pixel: "点阵字体，偏个性化展示。",
    } as const,
    themeNames: {
      vercel: "Vercel",
      linear: "Linear",
      cursor: "Cursor",
      notion: "Notion",
      stripe: "Stripe",
      supabase: "Supabase",
      ollama: "Ollama",
      raycast: "Raycast",
      claude: "Claude",
      resend: "Resend",
    } as const,
    themeBlurbs: {
      vercel: "黑白精密，与 Next / Geist 栈一致。",
      linear: "深色底、紫色点缀，工程向极简。",
      cursor: "AI 编辑器感，深色与渐变强调。",
      notion: "暖色纸感，适合长文阅读。",
      stripe: "浅底与紫色强调，偏正式作品集。",
      supabase: "深底翠绿，开源后端气质。",
      ollama: "终端单色、极简本地 LLM 感。",
      raycast: "深灰底与高饱和强调，工具感。",
      claude: "陶土暖色，区别于常见冷色学术站。",
      resend: "极简深黑与等宽气质，开发者向。",
    } as const,
  },
} as const;

export const blogCopy = {
  zh: {
    livelyPlain: `博客\n\n本页面暂不展示。`,
    title: "博客",
    body: "本页面暂不展示。",
  },
  en: {
    livelyPlain: `博客\n\n本页面暂不展示。`,
    title: "博客",
    body: "本页面暂不展示。",
  },
} as const;

export const lifeCopy = {
  zh: {
    livelyPlain: `生活\n\n这里用于展示学习科研之外的个人侧面。`,
    momentsPageTitle: "生活",
    footprintHeading: "我的足迹",
    feedHeading: "动态",
    displayName: "尜尜",
    scoreLabel: "足迹分",
    legendLong: "久居 · 5 分",
    legendTour: "旅游 · 3 分",
    legendPass: "经过 · 1 分",
    legendPlan: "计划旅游 · 0 分",
    legendNone: "未去",
    feedEmpty: "暂无动态。后续可添加生活照片、比赛记录、校园活动或旅行片段。",
    postLinkAria: "发布动态",
    avatarAlt: "生活页头像",
    profileMeBadge: "我",
    profileAvatarHint: "科研、竞赛、工程实践之外，也记录真实的学习与生活。",
    imagePreviewDialog: "图片预览",
    imagePreviewOpen: "查看大图",
    imagePreviewClose: "关闭",
  },
  en: {
    livelyPlain: `生活\n\n这里用于展示学习科研之外的个人侧面。`,
    momentsPageTitle: "生活",
    footprintHeading: "我的足迹",
    feedHeading: "动态",
    displayName: "尜尜",
    scoreLabel: "足迹分",
    legendLong: "久居 · 5 分",
    legendTour: "旅游 · 3 分",
    legendPass: "经过 · 1 分",
    legendPlan: "计划旅游 · 0 分",
    legendNone: "未去",
    feedEmpty: "暂无动态。后续可添加生活照片、比赛记录、校园活动或旅行片段。",
    postLinkAria: "发布动态",
    avatarAlt: "生活页头像",
    profileMeBadge: "我",
    profileAvatarHint: "科研、竞赛、工程实践之外，也记录真实的学习与生活。",
    imagePreviewDialog: "图片预览",
    imagePreviewOpen: "查看大图",
    imagePreviewClose: "关闭",
  },
} as const;

export const lifePostCopy = {
  zh: {
    title: "发布动态",
    secretLabel: "发布密钥",
    secretHint: "与服务端环境变量 LIFE_POST_SECRET 一致",
    textLabel: "文字",
    imagesLabel: "图片（最多 9 张）",
    scheduleModeLabel: "发布方式",
    scheduleImmediate: "立即发布",
    scheduleLater: "定时发布（7 天内）",
    scheduleTimeLabel: "发布时间",
    scheduleHint: "须晚于当前时间，且不超过 7 天",
    submit: "发布",
    success: "已保存",
    successScheduled: "已保存。将于 {time} 发布",
    unauthorized: "密钥错误",
  },
  en: {
    title: "发布动态",
    secretLabel: "发布密钥",
    secretHint: "与服务端环境变量 LIFE_POST_SECRET 一致",
    textLabel: "文字",
    imagesLabel: "图片（最多 9 张）",
    scheduleModeLabel: "发布方式",
    scheduleImmediate: "立即发布",
    scheduleLater: "定时发布（7 天内）",
    scheduleTimeLabel: "发布时间",
    scheduleHint: "须晚于当前时间，且不超过 7 天",
    submit: "发布",
    success: "已保存",
    successScheduled: "已保存。将于 {time} 发布",
    unauthorized: "密钥错误",
  },
} as const;

/* ───── 志愿活动 ───── */

export const LIFE_VOLUNTEER = {
  zh: {
    heading: "志愿活动",
    emptyHint: "志愿活动经历正在整理中，敬请期待……",
    colTime: "时间",
    colTitle: "活动",
    colRole: "角色 / 内容",
  },
  en: {
    heading: "志愿活动",
    emptyHint: "志愿活动经历正在整理中，敬请期待……",
    colTime: "时间",
    colTitle: "活动",
    colRole: "角色 / 内容",
  },
} as const;

export const LIFE_VOLUNTEER_ITEMS: Record<
  "zh" | "en",
  { time: string; title: string; role: string; slug: string; hasPhoto: boolean }[]
> = {
  zh: [
    {
      time: "2025.11",
      title: "南京马拉松",
      role: "补给点志愿者，为参赛选手提供饮料和能量补给",
      slug: "nanjing-marathon",
      hasPhoto: true,
    },
    {
      time: "2025.11",
      title: "江苏足球超级联赛总决赛",
      role: "南通 vs 泰州赛事志愿，负责观众引导与后勤保障",
      slug: "jiangsu-football-final",
      hasPhoto: true,
    },
    {
      time: "2025.10",
      title: "江苏足球超级联赛半决赛",
      role: "南京 vs 连云港赛事志愿，负责观众引导与后勤保障",
      slug: "jiangsu-football-semi",
      hasPhoto: true,
    },
    {
      time: "2025.04",
      title: "银城花园社区科普志愿",
      role: "为社区儿童科普竹子相关知识",
      slug: "yincheng-community",
      hasPhoto: false,
    },
    {
      time: "2024.10",
      title: "国际标准舞赛事志愿",
      role: "负责现场检票与少儿后台舞蹈准备工作",
      slug: "standard-dance",
      hasPhoto: true,
    },
    {
      time: "2024.07",
      title: "金龟子艺术节志愿",
      role: "南京丰大国际会议中心，负责少儿后台演出准备",
      slug: "turtle-art",
      hasPhoto: false,
    },
    {
      time: "2024.06",
      title: "金陵 STYLE 景区志愿",
      role: "钟山风景区游客引导与景点盖章服务",
      slug: "jinling-style",
      hasPhoto: true,
    },
    {
      time: "2024.06",
      title: "「爱心筑梦·青益南京」公益跑",
      role: "省级活动，担任领跑者带领亲子家庭环玄武湖跑步",
      slug: "charity-run",
      hasPhoto: true,
    },
    {
      time: "2024.05–09",
      title: "南京城市文明示范岗",
      role: "赴南京多个景区进行游客引导与文明劝导",
      slug: "city-civilized",
      hasPhoto: true,
    },
    {
      time: "2024.03",
      title: "南林大樱花节志愿",
      role: "校园文明劝导与游客指引",
      slug: "cherry-blossom",
      hasPhoto: true,
    },
    {
      time: "2023.12",
      title: "研究生入学考试考务志愿",
      role: "南京林业大学，负责考生安检与考场指引",
      slug: "grad-exam",
      hasPhoto: true,
    },
  ],
  en: [
    {
      time: "2025.11",
      title: "南京马拉松",
      role: "补给点志愿者，为参赛选手提供饮料和能量补给",
      slug: "nanjing-marathon",
      hasPhoto: true,
    },
    {
      time: "2025.11",
      title: "江苏足球超级联赛总决赛",
      role: "南通 vs 泰州赛事志愿，负责观众引导与后勤保障",
      slug: "jiangsu-football-final",
      hasPhoto: true,
    },
    {
      time: "2025.10",
      title: "江苏足球超级联赛半决赛",
      role: "南京 vs 连云港赛事志愿，负责观众引导与后勤保障",
      slug: "jiangsu-football-semi",
      hasPhoto: true,
    },
    {
      time: "2025.04",
      title: "银城花园社区科普志愿",
      role: "为社区儿童科普竹子相关知识",
      slug: "yincheng-community",
      hasPhoto: false,
    },
    {
      time: "2024.10",
      title: "国际标准舞赛事志愿",
      role: "负责现场检票与少儿后台舞蹈准备工作",
      slug: "standard-dance",
      hasPhoto: true,
    },
    {
      time: "2024.07",
      title: "金龟子艺术节志愿",
      role: "南京丰大国际会议中心，负责少儿后台演出准备",
      slug: "turtle-art",
      hasPhoto: false,
    },
    {
      time: "2024.06",
      title: "金陵 STYLE 景区志愿",
      role: "钟山风景区游客引导与景点盖章服务",
      slug: "jinling-style",
      hasPhoto: true,
    },
    {
      time: "2024.06",
      title: "「爱心筑梦·青益南京」公益跑",
      role: "省级活动，担任领跑者带领亲子家庭环玄武湖跑步",
      slug: "charity-run",
      hasPhoto: true,
    },
    {
      time: "2024.05–09",
      title: "南京城市文明示范岗",
      role: "赴南京多个景区进行游客引导与文明劝导",
      slug: "city-civilized",
      hasPhoto: true,
    },
    {
      time: "2024.03",
      title: "南林大樱花节志愿",
      role: "校园文明劝导与游客指引",
      slug: "cherry-blossom",
      hasPhoto: true,
    },
    {
      time: "2023.12",
      title: "研究生入学考试考务志愿",
      role: "南京林业大学，负责考生安检与考场指引",
      slug: "grad-exam",
      hasPhoto: true,
    },
  ],
};