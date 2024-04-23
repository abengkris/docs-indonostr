---
title: Mulai Menggunakan Nostr
description: Sebuah panduan langkah-langkah untuk memulai dengan Nostr.
---

Sebuah panduan langkah-langkah untuk memulai dengan Nostr.

## Memahami kunci

Setiap akun Nostr didasarkan pada pasangan kunci publik/pribadi. Cara sederhana untuk memikirkan hal ini adalah kunci publik Anda adalah nama pengguna Anda dan kunci pribadi Anda adalah kata sandi Anda, dengan satu peringatan utama. Berbeda dengan kata sandi, kunci pribadi Anda tidak dapat dipulihkan jika hilang.

Kunci publik umumnya disajikan sebagai string dengan awalan **`npub1`** dan kunci pribadi dengan awalan **`nsec1`**. Pastikan Anda menyimpan kunci pribadi Anda di tempat yang aman, seperti pengelola kata sandi.

## Protokol vs Klien

Nostr sendiri hanyalah sebuah protokol; prosedur yang disepakati untuk menyampaikan pesan di internet.

Anda akan mengakses Nostr (protokol) melalui klien. Klien dapat berupa web, desktop, atau aplikasi seluler. Klien dapat mengambil data dari relay dan juga menghasilkan data baru dan mengirimkannya ke relay sehingga orang lain dapat membacanya.

Satu-satunya bentuk "data" yang ada di Nostr adalah **[event](/nostr-protocol/event)**.


### Menandatangani Peristiwa

Peristiwa (_event_) tersebut harus mengandung tanda tangan (**sig**). Tanda tangan tersebut memastikan bahwa dapat dibuktikan secara matematis bahwa karya tersebut diciptakan oleh siapa pun yang merupakan penulis aslinya.

Untuk dapat membuat tanda tangan, klien memerlukan kunci pribadi Anda. Aplikasi asli umumnya memiliki tempat di mana Anda dapat menempelkan kunci pribadi Anda saat pertama kali membukanya. Dari kunci privat mereka juga dapat memperoleh kunci publik Anda.

<p>Untuk aplikasi web, tidak disarankan untuk menempelkan kunci pribadi, kami merekomendasikan penggunaan ekstensi browser yang mengimplementasikan <a href="https://nips.be/7" title="fungsionalitas terkait Nostr" target="_blank" rel="nofollow noopener"><strong>fungsionalitas terkait Nostr</strong></a> yang memungkinkan klien web menggunakan kunci Anda tanpa pernah mempelajarinya. Beberapa contohnya termasuk <a href="https://www.getflamingo.org/" title="Flamingo" target="_blank" rel="nofollow noopener"><strong>Flamingo</strong></a>, <a href="https://getalby.com/" title="Alby" target="_blank" rel="nofollow noopener"><strong>Alby</strong></a> dan <a href="https://github.com/fiatjaf/nos2x" title="nos2x" target="_blank" rel="nofollow noopener"><strong>nos2x</strong></a>.</p>

## Mari kita coba!

Berikut **[beberapa klien nostr](/clients)** rekomendasi kami.

## Temukan teman untuk diikuti

<ul>
<li>Jika Anda pengguna Twitter, Anda dapat menggunakan <a href="https://nostr.directory/" title="Nostr.directory" target="_blank" rel="nofollow noopener"><strong>nostr.directory</strong></a> untuk menemukan orang-orang Twitter yang Anda ikuti yang telah menautkan akun Twitter mereka ke kunci publik Nostr. <a href="https://snort.social/" title="Snort.social" target="_blank" rel="nofollow noopener"><strong>Snort</strong></a> juga melakukan impor pengikut tanpa hambatan atas nama Anda.</li>
<li>Jika tidak, Anda bisa mulai mengikuti selusin kunci Nostr yang menarik perhatiaan Anda, misalnya, dengan memeriksa <a href="https://nostr.band/" title="nostr.band" target="_blank" rel="nofollow noopener"><strong>nostr.band</strong></a> dan melihat interaksinya, balasannya, dan sebagainya.</li>
</ul>

## Bisakah saya menggunakan klien lain?

Ya! Sekarang setelah Anda membuat pasangan kunci publik/pribadi, Anda dapat menggunakan pasangan ini di klien Nostr mana pun untuk mengakses akun Anda. Ingat, klien hanyalah sebuah antarmuka untuk melihat pesan yang disiarkan pada protokol Nostr.

Karena pengembangan Nostr masih sangat awal, tidak semua klien mendukung semua fitur protokol dengan cara yang sama. Ada baiknya Anda memeriksa <a href="/clients" title="Halaman klien"><strong>halaman klien</strong></a> kami untuk menemukan klien terbaik untuk Anda, atau terjun ke dalam kekacauan semua klien lain yang tersedia di <a href="https://nostr.net/" title="nostr.net" target="_blank" rel="nofollow noopener"><strong>nostr.net</strong></a>.