/// <reference types="vite-plus/client" />
/// <reference types="vite-svg-loader" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, unknown>;
  export default component;
}
