import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import NewsLetter from "@/components/Newsletter/Newsletter";
import Image from "next/image";

export default function Home() {
	return (
		<div>
			<main className="container mx-auto p-6">
				<NavBar />
				<h1 className="text-black text-xl py-2 px-4 sm:text-md md:text-xl lg:text-2xl font-semibold text-center">Welcome to OSSARA!</h1>
				<section className="flex flex-col md:flex-row items-center gap-10 py-10 mx-10 mt-20 mb-20">
                    <div className="w-full md:w-1/2 flex-shrink-0">
                        <Image
							src={`/bgs/img1.jpg`}
							alt="About Photo"
							width={200}
							height={200}
                            className="w-full h-auto rounded-lg shadow-lg"
						/>
                    </div>
                    <div className="w-full md:w-1/2">
                        <p className="mt-4 text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum accumsan
                            fermentum.
                            Pellentesque suscipit vestibulum est eget scelerisque. Nunc faucibus lacus sed nibh
                            fermentum
                            lobortis. Vestibulum risus urna, feugiat ut sem a, condimentum rhoncus nunc. Curabitur
                            vehicula
                            venenatis ipsum vel bibendum. Sed vitae erat ipsum. Maecenas malesuada nisl at congue
                            vehicula.
                            Integer augue odio, elementum ut pretium sed, gravida vel purus. Nulla vestibulum diam a
                            sollicitudin viverra. Aenean convallis finibus laoreet. Quisque posuere odio odio, ac
                            condimentum urna varius eu. Cras congue dolor id ante iaculis facilisis. Nullam in gravida
                            massa. Nulla finibus nunc a venenatis tempus. Nunc vehicula ipsum ut massa suscipit, vitae
                            laoreet ligula condimentum.
                        </p>
                    </div>
                </section>

				{/* Newsletter Section */}
				<section className="flex flex-row justify-center mt-10">
          			<NewsLetter />
        		</section>

				<Footer />
			</main>
		</div>
	);
}
