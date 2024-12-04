import AboutRow from "@/components/AboutPage/AboutRow/AboutRow";


export default function AboutSection() {
  return (
    <>
      <section className="container mx-auto px-6 mt-20">
        <div>
          {/* Row 1: Über Uns */}
          <AboutRow
            title="Über Uns"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum accumsan fermentum. Pellentesque suscipit vestibulum est eget scelerisque. Nunc faucibus lacus sed nibh fermentum lobortis. Vestibulum risus urna, feugiat ut sem a, condimentum rhoncus nunc. Curabitur vehicula venenatis ipsum vel bibendum. Sed vitae erat ipsum. Maecenas malesuada nisl at congue vehicula. Integer augue odio, elementum ut pretium sed, gravida vel purus. Nulla vestibulum diam a sollicitudin viverra. Aenean convallis finibus laoreet. Quisque posuere odio odio, ac condimentum urna varius eu. Cras congue dolor id ante iaculis facilisis. Nullam in gravida massa. Nulla finibus nunc a venenatis tempus. Nunc vehicula ipsum ut massa suscipit, vitae laoreet ligula condimentum."
            imageUrl="/bgs/img1.jpg"
          />
        </div>

        <div id="verein">
          {/* Row 2: Verein */}
          <AboutRow
            title="Verein"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum accumsan fermentum. Pellentesque suscipit vestibulum est eget scelerisque. Nunc faucibus lacus sed nibh fermentum lobortis. Vestibulum risus urna, feugiat ut sem a, condimentum rhoncus nunc. Curabitur vehicula venenatis ipsum vel bibendum. Sed vitae erat ipsum. Maecenas malesuada nisl at congue vehicula. Integer augue odio, elementum ut pretium sed, gravida vel purus. Nulla vestibulum diam a sollicitudin viverra. Aenean convallis finibus laoreet. Quisque posuere odio odio, ac condimentum urna varius eu. Cras congue dolor id ante iaculis facilisis. Nullam in gravida massa. Nulla finibus nunc a venenatis tempus. Nunc vehicula ipsum ut massa suscipit, vitae laoreet ligula condimentum."
            imageUrl="/bgs/img2.jpg"
            reverse
          />
        </div>
      </section>
    </>
  );
}
