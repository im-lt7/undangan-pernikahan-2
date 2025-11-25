export const weddingConstants = {
  // Informasi pasangan
  couple: {
    groom: {
      name: "contoh putra",
      family: "Putra keluarga Rahimov",
      image: "/boy.png",
    },
    bride: {
      name: "contoh putri",
      family: "Putri keluarga Olimov",
      image: "/girl.png",
    },
  },

  // Tanggal dan waktu pernikahan
  date: {
    full: "15 Juni 2026",
    time: "Pukul 16:00 sampai 22:00",
    dateObject: new Date("2026-06-15T16:00:00"),
    rsvpDeadline: "1 Juni 2026",
  },

  // Informasi tempat
  venue: {
    name: 'simpang cikangkung',
    address: "jalan cikangkung ",
    mapLink: "https://maps.app.goo.gl/YiPHj8piSpofR7t57",
  },

  // Jadwal acara
  program: [
    {
      time: "16:00",
      event: "Kedatangan tamu",
      icon: "Clock",
    },
    {
      time: "17:00",
      event: "Prosesi pengantin",
      icon: "Users",
    },
    {
      time: "18:30",
      event: "Hiburan Dangdut",
      icon: "Music",
    },
    {
      time: "20:00",
      event: "Pemotongan kue pernikahan",
      icon: "Cake",
    },
  ],

  // Informasi kontak
  contact: {
    phone: "+62 858-6330-8655",
    email: "envlens@gmail.com",
  },

  // Teks UI
  messages: {
    invitation: "Kami mengundang Anda di pernikahan kami",
    countdown: "Hingga hari pernikahan:",
    timeUnits: {
      days: "Hari",
      hours: "Jam",
      minutes: "Menit",
      seconds: "Detik",
    },
    weddingInfo: "Acara Pernikahan",
    weddingProgram: "Jadwal Pernikahan",
    rsvpQuestion: "Apakah Anda hadir?",
    rsvpButton: "Kirim RSVP",
    submittedThankYou: "Terima kasih, tamu terhormat!",
    attendingMessage: "Kami menantikan kehadiran Anda.",
    notAttendingMessage: "Terima kasih atas pemberitahuan Anda.",
    contactTitle: "Untuk pertanyaan lebih lanjut",
    footerMessage: "Kami senang melihat Anda di pernikahan kami!",
    formLabels: {
      name: "Nama Anda",
      phone: "Nomor telepon",
      attending: "Hadir?",
      guests: "Jumlah tamu",
      wishes: "Ucapan & doa",
      submit: "Kirim",
    },
    attendanceOptions: {
      yes: "Ya, tentu",
      no: "Maaf, tidak bisa",
    },
    toasts: {
      chooseOption: "Silakan pilih hadir atau tidak",
      thankYouAttending: "Terima kasih atas konfirmasi Anda! Sampai jumpa di pernikahan!",
      thankYouNotAttending: "Terima kasih atas informasinya!",
    },
  },
};
