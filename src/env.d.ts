/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SANITY_PROJECT_ID: string;
  readonly PUBLIC_SANITY_DATASET: string;
  readonly SANITY_API_READ_TOKEN?: string;
  readonly PUBLIC_GTAG_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

import type { EmailMessage } from "cloudflare:email";

interface SendEmailBinding {
  send(message: EmailMessage): Promise<void>;
}

// Module augmentation — extends the `Env` interface that the Cloudflare
// adapter generates so `import { env } from "cloudflare:workers"` is fully
// typed inside actions and endpoints.
declare module "cloudflare:workers" {
  interface Env {
    NOTIFY_EMAIL: SendEmailBinding;
    ASSETS: Fetcher;
    FROM_EMAIL: string;
    FROM_NAME: string;
    NOTIFY_TO: string;
  }
}
