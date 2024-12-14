// components/TeamSection.tsx
import { TeamMember } from "@/app/lib/interface";
import Image from "next/image";

const teamMembers: TeamMember[] = [
  {
    name: "Marie Schmidt",
    title: "Founder & Executive Director",
    imageUrl: "/team/img.jpg",
  },
  {
    name: "Hans Müller",
    title: "Co-founder, Program Director",
    imageUrl: "/team/img1.jpg",
  },
  {
    name: "Sophie Keller",
    title: "Chief Financial Officer",
    imageUrl: "/team/img2.jpg",
  },
  {
    name: "Lukas Becker",
    title: "Head of Community Outreach",
    imageUrl: "/team/img3.jpg",
  },
  {
    name: "Lea Fischer",
    title: "Head of Partnerships & Development",
    imageUrl: "/team/img4.jpg",
  },
  { name: "Jonas Wagner", title: "Project Manager", imageUrl: "/team/img.jpg" },
  {
    name: "Elena Hoffmann",
    title: "Communications & Marketing Lead",
    imageUrl: "/team/img1.jpg",
  },
  {
    name: "Felix Richter",
    title: "Volunteer Coordinator",
    imageUrl: "/team/img2.jpg",
  },
  {
    name: "Greta Braun",
    title: "Head of Research & Impact",
    imageUrl: "/team/img3.jpg",
  },
  {
    name: "Maja Weber",
    title: "Director of Operations",
    imageUrl: "/team/img4.jpg",
  },
  {
    name: "Tim Neumann",
    title: "IT & Digital Infrastructure Lead",
    imageUrl: "/team/img.jpg",
  },
  {
    name: "Sandra Krüger",
    title: "Human Resources Manager",
    imageUrl: "/team/img1.jpg",
  },
  { name: "Paul Engel", title: "Legal Advisor", imageUrl: "/team/img2.jpg" },
  {
    name: "Anna Vogel",
    title: "Fundraising & Donor Relations Lead",
    imageUrl: "/team/img3.jpg",
  },
  {
    name: "Niklas Baumann",
    title: "Educational Program Coordinator",
    imageUrl: "/team/img4.jpg",
  },
];

export default function TeamSection() {
  return (
    <>
      <section className="container px-6 py-10 mx-auto mt-20 bg-gray-100 shadow-2xl rounded-2xl">
        <h2
          id="team"
          className="text-3xl text-center font-bold text-[#ffb400] mb-20 mt-10 drop-shadow-sm"
        >
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 mx-auto mb-4">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  width={60}
                  height={60}
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-lg font-medium text-[#ffb400]">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500">{member.title}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
