import CompanionCard from "@/components/ui/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";

const page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>

      <section className="home-section">
        <CompanionCard
          id="123"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="Science"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard
          id="456"
          name="Country the Number Wizard"
          topic="Derivatives & Integrals"
          subject="Science"
          duration={30}
          color="#e5d0ff"
        />
        <CompanionCard
          id="789"
          name="Verbs and Vocalbulary"
          topic="Language"
          subject="English LitreAature"
          duration={30}
          color="#BDE7EE"
        />
      </section>

      <section className="home-section">
        <CompanionsList
          title="Recently completed session"
          companions={recentSessions}
          className="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default page;
