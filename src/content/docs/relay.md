---
title: Apa itu Relay di Nostr?
description: Apa itu Relay Nostr dan Bagaimana Cara Kerjanya?
lastUpdated: 2024-04-26
---

Apa itu Relay dan Bagaimana Cara Kerjanya?

Relay seperti server backend untuk Nostr. Mereka mengizinkan klien Nostr mengirimi mereka pesan, dan mereka mungkin (atau mungkin tidak) menyimpan pesan tersebut dan menyiarkan pesan tersebut ke semua klien lain yang terhubung.

Dunia relay berubah dengan cepat, jadi diperkirakan akan ada banyak perubahan di masa depan. Satu hal yang perlu diperhatikan, karena Nostr terdesentralisasi dan bergantung pada relay untuk menyimpan dan mengambil data, jika Anda melihat klien Nostr Anda terasa lambat, kemungkinan besar disebabkan oleh relay yang Anda gunakan. Mungkin ada baiknya menambahkan beberapa relay lagi ke klien Anda.

## Di mana saya dapat menemukan daftar relay?

Sumber daya terbaik yang kami temukan untuk menelusuri dan menilai kecepatan relai yang diketahui adalah situs <a href="https://nostr.watch/relays/find" title="nostr.watch" target="_blank" rel="nofollow noopener"><strong>nostr.watch</strong></a>.

## Apa yang terjadi jika semua relay yang saya gunakan berhenti bekerja?

Jika _semua_ relay yang Anda gunakan sebelumnya offline, semua postingan Anda tidak dapat diambil kembali. Ini adalah salah satu alasan Nostr memungkinkan pengguna untuk terhubung ke banyak relay – ini memastikan cadangan pada tingkat tertentu. Meskipun demikian, jika Anda benar-benar tertarik untuk tidak dapat disensor, Anda dapat menjalankan relay pribadi Anda sendiri.

## Haruskah saya menjalankan relay saya sendiri?

Bagi kebanyakan orang, tidak, itu tidak sebanding dengan kerumitannya. Tetapi, jika Anda ahli dalam hal teknis dan ingin memastikan bahwa opini atau postingan Anda benar-benar tidak dapat disensor, maka Anda dapat dan harus menjalankan relay Anda sendiri. Kami sedang mengerjakan panduan untuk hal ini, namun sementara ini, berikut adalah <a href="https://andreneves.xyz/p/set-up-a-nostr-relay-server-in-under" title="Membuat server Nostr Relay dalam waktu kurang dari 5 menit - Andre Neves" target="_blank" rel="nofollow noopener"><strong>panduan dari Andre Neves</strong></a>.

## Bagaimana seseorang dapat menemukan saya secara pribadi atau dengan relay yang terhubung?

Anda seharusnya dapat memberi petunjuk ke mana Anda menerbitkan kepada orang-orang yang mungkin tertarik dengan menggunakan kode **`nprofile`** <a href="https://github.com/nostr-protocol/nips/blob/master/19.md" title="NIP-19" target="_blank" rel="nofollow noopener"><strong>NIP-19</strong></a> atau bidang **`"relai"`** <a href="https://github.com/nostr-protocol/nips/blob/master/05.md" title="NIP-05" target="_blank" rel="nofollow noopener"><strong>NIP-05</strong></a>.

Jika Anda berhasil (dan klien Anda membantu), Anda dapat mempublikasikan <a href="https://github.com/nostr-protocol/nips/blob/master/65.md" title="NIP-65" target="_blank" rel="nofollow noopener"><strong>daftar relay yang Anda gunakan</strong></a> ke beberapa relay lain yang _tidak_ Anda gunakan, sehingga orang lain dapat menemukan daftar itu dan mulai mengikuti Anda di mana pun Anda berada.

Terakhir, klien dari orang lain harus menyertakan petunjuk relay dalam `event` yang menyebutkan atau membalas Anda, petunjuk tersebut harus menunjukkan di mana `note` Anda dapat ditemukan, sehingga dapat memberikan petunjuk kepada klien.

## Relay publik apa saja yang ada saat ini?

Situs web <a href="https://nostr.watch/" title="nostr.watch" target="_blank" rel="nofollow noopener"><strong>nostr.watch</strong></a> menyimpan daftar yang sangat lengkap yang berisi banyak informasi tentang setiap relay, tidak hanya alamatnya.

## Bagaimana cara menjalankan relay?

Anda dapat menjalankan salah satu <a href="/relay/implementasi" title="open-source implementations" target="_blank" rel="nofollow noopener"><strong>implementasi sumber terbuka</strong></a> di server Anda sendiri atau menyewanya dari layanan hosting relai seperti <a href="https://relay.tools/" title="relay tools" target="_blank" rel="nofollow noopener"><strong>relay.tools</strong></a> dan <a href="https://relaying.io/" title="relaying.io" target="_blank" rel="nofollow noopener"><strong>relaying.io</a>.