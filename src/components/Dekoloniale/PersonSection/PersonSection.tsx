import PersonCard from "@/components/Dekoloniale/PersonCard/PersonCard";

export default function PersonSection(){
    const teamMembers = [
        {
            name: 'Emily Clark',
            role: 'Manager',
            description: 'Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacusAenean tortor est, vulputate quis leo in, vehicula rhoncus lacus..',
            imageSrc: '/team/img1.jpg',
            socialLinks: {
                facebook: "#",
                twitter: "#",
                instagram: "#",
            },
        },
        {
            name: 'Carol Kent',
            role: 'Manager',
            description: 'Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacusAenean tortor est, vulputate quis leo in, vehicula rhoncus lacus..',
            imageSrc: '/team/img3.jpg',
            socialLinks: {
                facebook: "#",
                twitter: "#",
                instagram: "#",
            },
        },
    ];

    return (
        <section className="py-20 px-4">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                {teamMembers.map((member, index) => (
                    <PersonCard
                        key={index}
                        name={member.name}
                        role={member.role}
                        description={member.description}
                        imageSrc={member.imageSrc}
                        socialLinks={member.socialLinks}
                    />
                ))}
            </div>
        </section>
    );
};