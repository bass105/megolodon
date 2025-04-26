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
      title: "PPDB MA 2025",
      url: "https://s.id/PPDB_MA_2025",
      description: "s.id/PPDB_MA_2025",
      icon: "user-plus",
    },
  ],
  instagram: [
    {
      title: "BES Matcha",
      url: "https://www.instagram.com/besmatcha_?igsh=MTN4OWt1djJpYXpxZA==",
      description: "@besmatcha_",
      icon: "instagram",
    },
    {
      title: "Matcha 105",
      url: "https://www.instagram.com/matcha105?igsh=dWNxaWIxY3BtcTNo",
      description: "@matcha105",
      icon: "instagram",
    },
  ],
  facebook: [
    {
      title: "OSIS MA Almanshuriyah",
      url: "https://www.facebook.com/osis.maalmansuriyah",
      description: "osis.maalmansuriyah",
      icon: "facebook-f",
    },
    {
      title: "MA Almanshuriyah",
      url: "https://www.facebook.com/profile.php?id=100010475287342",
      description: "Halaman Facebook Sekolah",
      icon: "facebook-f",
    },
  ],
  youtube: [
    {
      title: "BES MA Almanshuriyah",
      url: "https://youtube.com/@besmaalmanshuriyah?si=1vtHSK8pgHLUFV02",
      description: "@besmaalmanshuriyah",
      icon: "youtube",
    },
  ],
  tiktok: [
    {
      title: "Alman 105",
      url: "https://www.tiktok.com/@alman_105?_t=ZS-8tjpulg8wLA&_r=1",
      description: "@alman_105",
      icon: "tiktok",
    },
    {
      title: "MA Almanshuriyah Official",
      url: "https://www.tiktok.com/@almanshuriyah",
      description: "@almanshuriyah",
      icon: "tiktok",
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
    {
      title: "Sekretariat",
      url: "https://wa.me/628970007105",
      description: "+62 897-0000-7105",
      icon: "building",
    },
  ],
};
