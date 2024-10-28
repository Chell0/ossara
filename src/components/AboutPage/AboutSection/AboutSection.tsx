import AboutRow from "@/components/AboutPage/AboutRow/AboutRow";


export default function AboutSection() {
  return (
    <>
      <section className="container mx-auto px-6">
        {/* Row 1: Über Uns */}
        <AboutRow
          title="Über Uns"
          text="We are committed to making a positive impact by engaging and working towards a better future. Our mission is to support the community and foster sustainable growth through various projects and initiatives."
          imageUrl="/path-to-your-first-image.jpg"
        />

        {/* Row 2: Verein */}
        <AboutRow
          title="Verein"
          text="As a dedicated organization, our team comprises passionate individuals who aim to create meaningful change in the community. We work closely with our partners and volunteers to address social, economic, and environmental challenges."
          imageUrl="/path-to-your-second-image.jpg"
          reverse
        />
      </section>
    </>
  );
}
