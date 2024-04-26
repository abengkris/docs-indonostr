---
title: Apa itu Klien (Client) di Nostr?
description: Klien adalah cara Anda mengakses dan berinteraksi dengan protokol Nostr.
lastUpdated: 2024-04-26
---

Klien adalah cara Anda mengakses dan berinteraksi dengan protokol Nostr.

Klien di Nostr hanyalah aplikasi yang Anda gunakan untuk mengakses dan berinteraksi dengan protokol. Ini seperti aplikasi X iOS/Android atau aplikasi web yang Anda gunakan untuk berinteraksi dengan feed postingan di X.

Karena protokol Nostr sangat sederhana dan fleksibel, klien yang berbeda melakukan pendekatan terhadap protokol ini dengan cara yang berbeda: beberapa mencoba membuat pengalaman terlihat persis seperti X (Twitter), yang lain mencoba untuk menyoroti pentingnya relay ke protokol dan memaparkannya kepada pengguna, dan yang lain mencoba menggunakan heuristik dan algoritma untuk memastikan tingkat ketahanan sensor maksimum tanpa terlalu membebani pengguna.

## Bisakah saya berpindah klien?

Ya. Karena klien hanyalah cara untuk mengakses data dasar yang disimpan oleh relay, Anda dapat berpindah klien atau masuk ke klien sebanyak yang Anda inginkan. Selama setiap klien melihat kumpulan relay yang sama untuk datanya, Anda akan melihat pesan yang sama di setiap klien.

## Haruskah saya memasukkan kunci pribadi saya ke klien?

Secara umum, lebih baik tidak memasukkan kunci pribadi Anda ke klien mana pun. Sebagian besar klien yang meminta kunci pribadi melakukan yang terbaik untuk menjaga keamanan kunci Anda, namun mengingat sifat perangkat lunak, selalu ada pelanggaran, eksploitasi, dan bug yang berpotensi mengekspos kunci pribadi Anda.

Ingat, kunci pribadi Anda adalah identitas Anda di Nostr, jadi jika dibobol, Anda akan kehilangan pengikut dan harus mulai dari awal membangun kembali identitas Anda.

## Beberapa klien favorit kami

### Web

<ul>
<li><a href="https://nostter.app" title="Nostter.app" target="_blank" rel="nofollow noopener"><strong>Nostter</strong></a></li>
<li><a href="https://coracle.social/" title="Coracle.social" target="_blank" rel="nofollow noopener"><strong>Coracle</strong></a></li>
<li><a href="https://nostrudel.ninja/" title="noStrudel.ninja" target="_blank" rel="nofollow noopener"><strong>noStrudel</strong></a></li>
<li><a href="https://snort.social/" title="Snort.social" target="_blank" rel="nofollow noopener"><strong>Snort</strong></a></li>
<li><a href="https://syusui-s.github.io/rabbit/" title="Rabbit di Github" target="_blank" rel="nofollow noopener"><strong>Rabbit</strong></a></li>
</ul>

### iOS

<ul>
<li><a href="https://damus.io/" title=" Damus App untuk iOS" target="_blank" rel="nofollow noopener"><strong>Damus<strong></a>, klien Nostr pertama yang dilarang di Cina.</li>
<li><a href="https://nos.social/" title="nos.social" target="_blank" rel="nofollow noopener"><strong>Nos</strong></a>, klien yang bagus dan aman untuk non-bitcoiner.</li>
<li><a href="https://nostur.com/" title="nostur" target="_blank" rel="nofollow noopener"><strong>Nostur</strong></a>, klien dengan fitur yang lengkap.</li>
</ul>

### iOS dan Android

<ul>
<li><a href="https://plebstr.com/" title="plebstr" target="_blank" rel="nofollow noopener"><strong>Plebstr</strong></a>, klien sumber tertutup yang cantik, cepat, dan lancar.</li>
<li><a href="https://primal.net/downloads" title="Halaman download Primal.net" target="_blank" rel="nofollow noopener"><strong>Primal</strong></a>, klien yang sangat cepat yang mengandalkan caching sisi server.</li>
<li><a href="https://app.getcurrent.io/" title="Current.io" target="_blank" rel="nofollow noopener"><strong>Current</strong></a>, klien yang dilengkapi dengan dompet Bitcoin bawaan.</li>
<li><a href="https://zbd.link/hcHi/invite?af_sub1=0LBEZD" title="ZeeBeeDee / ZBD" target="_blank" rel="nofollow noopener"><strong>ZBD</strong></a>, klien kustodian yang dihosting untuk pengguna ZBD.</li>
</ul>

### Android

<ul>
<li><a href="https://github.com/frnandu/yana/releases" title="Yana di Github" target="_blank" rel="nofollow noopener"><strong>Yana</strong></a>, klien multi-platform yang lancar dan berfitur lengkap.</li>
<li><a href="https://spring.site/" title="Spring.site" target="_blank" rel="nofollow noopener"><strong>Spring</strong></a>, klien untuk menggunakan klien web dengan aman di Android Anda.</li>
<li><a href="https://play.google.com/store/apps/details?id=com.vitorpamplona.amethyst" title="Amethyst di playstore" target="_blank" rel="nofollow noopener"><strong>Amethyst</strong></a>, klien yang memiliki semua fitur yang dapat Anda bayangkan.</li>
<li><a href="https://freefrom.space/" title="FreeFrom.space" target="_blank" rel="nofollow noopener"><strong>FreeFrom</strong></a>, klien yang mirip seperti Twitter.</li>
<li><a href="https://github.com/dluvian/Nozzle/releases" title="Nozzle di Github" target="_blank" rel="nofollow noopener"><strong>Nozzle</strong></a>, klien yang sangat ramping, tetapi masih dalam proses pengembangan.</li>
</ul>

### Desktop

<ul>
<li><a href="https://github.com/mikedilger/gossip" title="Gossip di Github" target="_blank" rel="nofollow noopener"><strong>Gossip</strong></a>, klien natif yang mencoba mengikuti orang secara efisien di mana pun mereka berada, dibuat di Rust dengan egui.</li>
<li><a href="https://github.com/unclebob/more-speech" title="more-speech di Github" target="_blank" rel="nofollow noopener"><strong>more-speech</strong></a>, klien yang memberi Anda pandangan global yang kuat dan cara berinteraksi dengan pemfilteran khusus berdasarkan web-of-trust dan pilihan relai, yang dibuat di Clojure. <a href="https://www.youtube.com/watch?v=q3gQ42aUhls" title="Tonton di YouTube" target="_blank" rel="nofollow noopener">Lihat panduannya di sini</a>.</li>
<li><a href="https://lume.nu/" title="Lume.nu" target="_blank" rel="nofollow noopener"><strong>Lume</strong></a>, klien ambisius yang dibuat dengan Tauri.</li>
</ul>

### Klien Non-microblogging

<ul>
<li><a href="https://zap.stream/" title="zap.stream" target="_blank" rel="nofollow noopener"><strong>zap.stream</strong></a>, browser streaming siaran langsung video dan platform hosting.</li>
<li><a href="https://yakihonne.com/" title="Yakihonne" target="_blank" rel="nofollow noopener"><strong>Yakihonne</strong></a>, sebuah aplikasi untuk membaca, menulis, dan menyusun artikel panjang.</li>
<li><a href="https://highlighter.com/" title="Highlighter" target="_blank" rel="nofollow noopener"><strong>Highlighter</strong></a>, sebuah aplikasi untuk membuat anotasi dan kurasi konten.</li>
<li><a href="https://habla.news/" title="Habla.news" target="_blank" rel="nofollow noopener"><strong>Habla</strong>.news</a>, sebuah aplikasi untuk membaca dan menulis artikel panjang.</li>
<li><a href="https://wikistr.com/" title="wikistr" target="_blank" rel="nofollow noopener"><strong>wikistr</strong></a>, pengganti Wikipedia terdesentralisasi tahap awal.</li>
</ul>
