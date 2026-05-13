import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** 关闭开发环境下左下角 Next 图标，避免遮挡页面 */
  devIndicators: false,
  env: {
    /** 构建时间戳，用于图片缓存破坏 */
    NEXT_PUBLIC_BUILD_TIME: Date.now().toString(),
  },
};

export default nextConfig;
