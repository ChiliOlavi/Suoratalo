// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/Suoratalo/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        // Main HTML file (already in root)
        main: path.resolve(__dirname, 'index.html'),

        // All other HTML files, now moved to the project root
        zyntex: path.resolve(__dirname, 'zyntex-puuro.html'), // Path changed!
        guest: path.resolve(__dirname, 'guest_arrival_&_stay_information.html'), // Path changed!
        breakfast: path.resolve(__dirname, 'aamupala_&_aamiaistarjoilu.html'), // Path changed!
        news: path.resolve(__dirname, 'ajankohtaista_ja_tiedotteet.html'), // Path changed!
        cleaning: path.resolve(__dirname, 'siivouspalvelut_ja_huoneiden_puhdistus.html'), // Path changed!
        rules: path.resolve(__dirname, 'talon_säännöt.html'), // Path changed!
        events: path.resolve(__dirname, 'tapahtumien_varaus_ja_lipunmyynti.html'), // Path changed!
        tv: path.resolve(__dirname, 'television_and_media_device_instructions.html'), // Path changed!
        water: path.resolve(__dirname, 'water_supply_interruption_notice.html'), // Path changed!
        nightclub: path.resolve(__dirname, 'yökerho_–_sisäänkäynti_pubin_kautta.html'), // Path changed!
        error: path.resolve(__dirname, 'error_reporting_and_troubleshooting.html'), // Path changed!
        flower_festival: path.resolve(__dirname, 'kukkafestivaalitoivotus.html'), // Path changed!
        'another-breakfast': path.resolve(__dirname, 'aamiaistarjoilu.html'), // Path changed!
        'hidden-page': path.resolve(__dirname, 'valmispakettien_myyntiraportti.html'), // Path changed!
      },
    },
  },
});