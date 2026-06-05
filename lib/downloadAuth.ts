/**
 * 下载内容统一授权检查
 *
 * 密码保护已关闭，所有文件下载无需认证。
 */

export function isDownloadAuthorized(_request?: Request): boolean {
  return true;
}
