/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_CONTACT_WEBHOOK: string;
    // Add more environment variables here as needed
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
