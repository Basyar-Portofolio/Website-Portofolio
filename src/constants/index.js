import {
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    carrent,
    jobit,
    tripguide,
    teamwork,
    salary,
    coding,
    zahirah,
    koperasisyariah,
    muamalat,
    gs,
    excel,
    pph21,
    pphter,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Payroll",
      icon: salary,
    },


    {
      title: "Web Developer",
      icon: coding,
    },
   
    {
      title: "HRGA",
      icon: teamwork,
    },
   
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
  ];


  const technologies1 = [
    {
      name: "Excel",
      icon: excel,
    },
    {
      name: "Google Sheets",
      icon: gs,
    },
    {
      name: "PPh 21",
      icon: pph21,
    },
  ];


  const experiences = [
    {
      title: "Student Intern",
      company_name: "Koperasi Syariah Manfaat",
      icon: koperasisyariah,
      iconBg: "#f1f1f1",
      date: "Mei 2018 - Juni 2018",
      points: [
        "Mempelajari praktek Koperasi Syariah.",
        "Front Office - Menyambut dan berinteraksi dengan customers.",
        "Mempelajari proses alur zakat dan dana sosial di Koperasi Syariah Manfaat.",
        "Membuat pembukuan sederhana.",

      ],
    },
    {
      title: "Student Intern",
      company_name: "Bank Muamalat",
      icon: muamalat,
      iconBg: "#E6DEDD",
      date: "Juli 2018 - September 2018",
      points: [
        "Mengikuti berbagai event Outdoor maupun Indoor yang diadakan oleh Bank Muamalat.",
        "Mempelajari Akuntasi Bank Sederhana.",
        "Mempelajari cara berinteraksi dengan customers untuk mempromosikan produk dari Bank Muamalat.",
        "Menyusun dan Merekap dokumen jaminan kredit Bank Muamalat.",
      ],
    },
   
    {
      title: "Payroll Officer",
      company_name: "Rumah Sakit Umum Zahirah",
      icon: zahirah,
      iconBg: "#E6DEDD",
      date: "September 2019 - Present",
      points: [
        "Menyiapkan Berkas dan Dokumentasi Apapun yang Berhubungan dengan Payroll.",
        "Membuat Laporan Gaji Bulanan Karyawan.",
        "Melakukan Update Data Karyawan, Masuk dan Keluar.",
        "Melakukan Perhitungan BPJS Kesehatan dan BPJS TK.",
        "Melakukan Perhitungan PPH21.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "PPh 21 TER 2024",
      description:
        "Terdapat perubahan perumusan perhitungan PPh 21 dari tahun 2024 dengan tahun sebelumnya. Disini saya buatkan tabel dan contoh pengaplikasian sederhananya.",
      tags: [
        {
          name: "excel",
          color: "green-text-gradient",
        },
        {
          name: "pph21",
          color: "blue-text-gradient",
        },
      ],
      image: pphter,
      source_code_link: "https://github.com/Basyar-Portofolio/PPh-TER-2024",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, technologies1 };