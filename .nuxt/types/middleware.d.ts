import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "admin" | "auth" | "guest" | "rate-limit"
declare module 'nuxt/app' {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}