export interface ContactPersonProps {
  name: string;
  position: string;
  email: string;
  phone: string;
  imageSrc: string;
}

export interface TeamMember {
  name: string;
  title: string;
  imageUrl: string;
}

export interface YouTubeSectionProps {
  videoId: string;
}

export interface PersonCardProps {
  name: string;
  role: string;
  imageSrc: string;
  description: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
}
