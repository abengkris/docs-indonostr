import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [
    starlight({
      // site: "indonostr.xyz",
      title: "IndoNostr.xyz",
      locales: {
        root: {
          label: "Indonesian",
          lang: "id",
        },
      },
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Panduan",
          items: [
            {
              label: "Apa itu Nostr?",
              link: "/apa-itu-nostr",
            },
            {
              label: "Mulai menggunakan Nostr",
              link: "/panduan/mulai-menggunakan-nostr",
            },
          ],
        },
        {
          label: "Protokol",
          items: [
            {
              label: "Nostr tingkat atas",
              link: "/protokol/nostr-tingkat-atas",
            },
            {
              label: "Event",
              link: "/protokol/events",
            },
            {
              label: "NIP",
              link: "/protokol/nostr-implementation-possibilities-nip",
            },
          ],
        },
        {
          label: "Klien dan relay",
          items: [
            {
              label: "Klien",
              link: "/klien",
            },
            {
              label: "Relay",
              link: "/relay",
            },
          ],
        },
      ],
    }),
  ],
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
