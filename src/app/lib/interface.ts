export interface AboutRowProps {
  title: string;
  text: string;
  imageUrl: string;
  reverse?: boolean;
  id?: string;
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
};
