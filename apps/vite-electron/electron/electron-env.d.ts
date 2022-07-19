declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    readonly DEV_HOST: string;
    readonly DEV_PORT: string;
  }
}
