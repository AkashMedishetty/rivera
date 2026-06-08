import { UnwrapHero } from "@/components/UnwrapHero";
import { StatsStrip } from "@/components/StatsStrip";
import { CategoryStrip } from "@/components/CategoryStrip";
import { ServicesSection } from "@/components/ServicesSection";
import { FeaturedHamper } from "@/components/FeaturedHamper";
import { ProcessSection } from "@/components/ProcessSection";
import { RecentDeliveries } from "@/components/RecentDeliveries";
import { StorySplit } from "@/components/StorySplit";
import { SectorMarquee } from "@/components/SectorMarquee";
import { CTAFooterBlock } from "@/components/CTAFooterBlock";

export default function HomePage() {
  return (
    <>
      <UnwrapHero />
      <StatsStrip />
      <CategoryStrip />
      <ServicesSection />
      <FeaturedHamper />
      <ProcessSection />
      <RecentDeliveries />
      <StorySplit />
      <SectorMarquee />
      <CTAFooterBlock />
    </>
  );
}
