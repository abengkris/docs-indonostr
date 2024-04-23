---
title: Protokol Nostr Pada Tingkat Atas
description: Detail tentang cara kerja Protokol Nostr.
lastUpdated: 2024-04-23
---

Detail tentang cara kerja Protokol Nostr.

<ul>
<li>Ada dua komponen utama: klien & relay. Setiap pengguna menjalankan klien. Siapapun dapat menjalankan relay.</li>
<li>Setiap pengguna diidentifikasi dengan kunci publik. Setiap posting ditandatangani. Setiap klien memvalidasi tanda tangan ini.</li>
<li>Klien mengambil data dari relay pilihan mereka dan mempublikasikan data ke relay pilihan mereka. relay tidak berkomunikasi satu sama lain, hanya langsung dengan pengguna.</li>
<li>Misalnya, untuk "mengikuti" seseorang, pengguna cukup menginstruksikan kliennya untuk menanyakan relay yang diketahuinya untuk kiriman dari kunci publik tersebut.</li>
</ul>