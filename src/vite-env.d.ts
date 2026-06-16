/// <reference types="vite/client" />

declare module "@huntersofbook/chatwoot-vue" {
  import type { Plugin } from "vue";

  export interface ChatWootOptions {
    init: {
      websiteToken: string;
    };
    settings?: {
      position?: "left" | "right";
      launcherTitle?: string;
    };
    partytown?: boolean;
  }

  export function createChatWoot(options: ChatWootOptions): Plugin;
}
