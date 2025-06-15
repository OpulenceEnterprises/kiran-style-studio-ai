
export const translations = {
  en: {
    // Navbar
    services: "Services",
    pricing: "Pricing",
    products: "Products",
    contact: "Contact",
    joinTraining: "Join Training",
    brandName: "Kiran's Studio",
    brandSubtitle: "Professional Tailoring",

    // Hero Section
    heroTitle1: "Professional Tailoring &",
    heroTitle2: "Sewing Excellence",
    heroSubtitle: "Master craftsmanship meets modern techniques. From bespoke wedding attire to everyday alterations, we deliver precision and style.",
    bookConsultation: "Book Consultation",
    joinTrainingProgram: "Join Training Program",
    viewPricing: "View Pricing",
    videoCaption: "Meet Your Expert Tailor | Studio Showcase",
  },
  hi: {
    // Navbar
    services: "सेवाएं",
    pricing: "कीमतें",
    products: "उत्पाद",
    contact: "संपर्क",
    joinTraining: "प्रशिक्षण में शामिल हों",
    brandName: "किरण का स्टूडियो",
    brandSubtitle: "पेशेवर सिलाई",

    // Hero Section
    heroTitle1: "पेशेवर सिलाई और",
    heroTitle2: "सिलाई में उत्कृष्टता",
    heroSubtitle: "आधुनिक तकनीकों के साथ विशेषज्ञ शिल्प कौशल। विशेष शादी की पोशाक से लेकर रोजमर्रा के बदलाव तक, हम सटीकता और शैली प्रदान करते हैं।",
    bookConsultation: "परामर्श बुक करें",
    joinTrainingProgram: "प्रशिक्षण कार्यक्रम में शामिल हों",
    viewPricing: "कीमतें देखें",
    videoCaption: "अपने विशेषज्ञ दर्जी से मिलें | स्टूडियो शोकेस",
  },
  hn: {
    // Navbar
    services: "Services",
    pricing: "Pricing",
    products: "Products",
    contact: "Contact",
    joinTraining: "Training Join Karein",
    brandName: "Kiran's Studio",
    brandSubtitle: "Professional Tailoring",

    // Hero Section
    heroTitle1: "Professional Tailoring aur",
    heroTitle2: "Behtareen Silai",
    heroSubtitle: "Master karigari modern techniques ke saath. Khaas shaadi ke kapdon se lekar rozmarra ke alterations tak, hum precision aur style dete hain.",
    bookConsultation: "Consultation Book Karein",
    joinTrainingProgram: "Training Program Join Karein",
    viewPricing: "Pricing Dekhein",
    videoCaption: "Miliye Apne Expert Tailor se | Studio Showcase",
  },
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;
