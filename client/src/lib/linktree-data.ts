
interface LinkItem {
  title: string;
  url: string;
  description: string;
  icon: string;
}

interface LinktreeData {
  registration: LinkItem[];
  instagram: LinkItem[];
  facebook: LinkItem[];
  youtube: LinkItem[];
  tiktok: LinkItem[];
  whatsapp: LinkItem[];
}

export const linktreeData: LinktreeData = {
  registration: [
    {
      title: "Pendaftaran",
      url: "https://s.id/PPDB_MA_2025",
      description: "s.id/PPDB_MA_2025",
      icon: "user-graduate",
    },
  ],
  instagram: [
    {
      title: "BES Matcha",
      url: "https://www.instagram.com/besmatcha_?igsh=MTN4OWt1djJpYXpxZA==",
      description: "@besmatcha_",
      icon: "camera",
    },
    {
      title: "Matcha 105",
      url: "https://www.instagram.com/matcha105?igsh=dWNxaWIxY3BtcTNo",
      description: "@matcha105",
      icon: "camera-retro",
    },
  ],
  facebook: [
    {
      title: "OSIS MA Almanshuriyah",
      url: "https://www.facebook.com/osis.maalmansuriyah",
      description: "osis.maalmansuriyah",
      icon: "users",
    },
    {
      title: "MA Almanshuriyah",
      url: "https://www.facebook.com/profile.php?id=100010475287342",
      description: "Halaman Facebook Sekolah",
      icon: "school",
    },
  ],
  youtube: [
    {
      title: "BES MA Almanshuriyah",
      url: "https://youtube.com/@besmaalmanshuriyah?si=1vtHSK8pgHLUFV02",
      description: "@besmaalmanshuriyah",
      icon: "video",
    },
  ],
  tiktok: [
    {
      title: "Alman 105",
      url: "https://www.tiktok.com/@alman_105?_t=ZS-8tjpulg8wLA&_r=1",
      description: "@alman_105",
      icon: "music",
    },
  ],
  whatsapp: [
    {
      title: "Hariri DR, S.HI.",
      url: "https://wa.me/6285798989997",
      description: "+62 857-9898-9997",
      icon: "user-tie",
    },
    {
      title: "Sofitri, S.Pd.",
      url: "https://wa.me/6285795884228",
      description: "+62 857-9588-4228",
      icon: "user-graduate",
    },
  ],
};
