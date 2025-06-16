import Image from "next/image";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-badge">Start learning your way.</div>

      <h2 className="text-3xl font-bold">
        Build and Personalize Learning Companion
      </h2>
      <p>
        Pick a name, subject, voice, & personality — and start learning through
        voice conversations that feel natural and fun.
      </p>
      <Image src="images/cta.svg" alt="cta" width={362} height={232} />
      <Link href="/companions/new" className="group">
        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-medium shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <Image
            src="/icons/plus.svg"
            alt="plus"
            width={16}
            height={16}
            className="transition-transform duration-300 group-hover:rotate-90"
          />
          <span>Build a New Companion</span>
        </button>
      </Link>
    </section>
  );
};

export default CTA;
