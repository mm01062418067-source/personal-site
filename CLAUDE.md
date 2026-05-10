# 个人网站项目上下文

## 基本信息
- **项目路径**: `C:\Users\HZY\Desktop\temp\personal-site-template`
- **技术栈**: Next.js 16 + React 19 + Tailwind CSS v4 + TypeScript
- **部署平台**: Vercel (自动部署)
- **线上地址**: https://personal-site-template-sepia.vercel.app
- **GitHub 仓库**: https://github.com/mm01062418067-source/personal-site

## 环境变量
| 变量 | 值 |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://personal-site-template-sepia.vercel.app` |
| `SITE_PASSWORD` | `onlyfor-laoliu~` |
| `SITE_ACCESS_KEY` | `huangziyi` |

## 更新部署方式
修改文件后执行：
```bash
cd C:\Users\HZY\Desktop\temp\personal-site-template
git add .
git commit -m "更新说明"
git push origin master
```
Vercel 会自动检测 push 并重新部署。

## 项目结构
```
app/                    # 页面组件
  ├── page.tsx          # 首页
  ├── intro/            # 介绍页（密码保护）
  ├── projects/         # 项目列表 + 详情
  ├── research/         # 科研经历
  ├── life/             # 生活页（朋友圈 + 地图）
  └── settings/         # 设置页

lib/                    # 工具库
  ├── siteCopy.ts       # 全站文案（名字、介绍、联系方式等）
  ├── projects.ts       # 项目列表配置
  └── life/             # 朋友圈加载逻辑

data/                   # 数据文件
  ├── projects/         # 项目详情 JSON + 图片/PDF
  ├── life_photos/      # 朋友圈照片 + 志愿活动照片
  │   └── moments/      # 朋友圈: YYYY/MM/DD/slot/meta.json
  └── about_photos/     # 简历、证书等

public/                 # 静态资源
```

## 关键操作指南

### 修改文案
编辑 `lib/siteCopy.ts` 中的对应字段。

### 添加朋友圈动态
1. 复制 `data/life_photos/moments/模板` 目录
2. 按日期放到 `moments/YYYY/MM/DD/slot/` 目录下
3. 放入照片 + 编辑 `meta.json`
4. `git add . && git commit -m "添加朋友圈" && git push`

### 添加项目
1. 在 `data/projects/` 创建 `<slug>/` 目录
2. 放入 JSON + 图片/PDF
3. 在 `lib/projects.ts` 中注册项目
4. 在 `lib/projectDetailCopy.ts` 中添加详情文案（可选）
5. push 到 GitHub

### 修改密码
在 Vercel Dashboard → Environment Variables 中修改 `SITE_PASSWORD`，然后 Redeploy。

## 注意事项
- `data/` 目录约 75MB，首次 push 到 GitHub 需要几分钟
- 生活页图片路径使用零填充格式（`05` 而非 `5`）
- 介绍页和项目详情页需要密码访问
- 图片 API (`/api/life/file/`) 对图片免认证，其他文件需 cookie
