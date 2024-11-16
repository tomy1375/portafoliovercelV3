// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// Configuración de variables de entorno
process.env.RESEND_API_KEY = "re_BuLeMtYd_6Tuyo4PwrxmMhXdcJK8Rumxy";
process.env.RESEND_SENDER_EMAIL = 'tomy_ramos1991@yahoo.com.ar';

export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'server',
});
