/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_RUNPOD_ENDPOINT: string;
    readonly VITE_RUNPOD_API_KEY: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  