/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SMTP_HOST?: string;
  readonly SMTP_PORT?: string;
  readonly SMTP_USER?: string;
  readonly SMTP_PASS?: string;
  readonly SMTP_FROM?: string;
  readonly ENQUIRY_RECIPIENT_EMAIL?: string;
  readonly SITE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
