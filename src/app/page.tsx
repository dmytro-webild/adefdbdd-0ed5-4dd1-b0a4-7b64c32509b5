"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import { Shield, FileText, CheckCircle, Zap } from "lucide-react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="small"
        sizing="mediumLarge"
        background="fluid"
        cardStyle="glass-depth"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="solid"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        { name: "Home", id: "hero" },
        { name: "About", id: "about" },
        { name: "Capabilities", id: "features" },
        { name: "Trust", id: "testimonials" },
        { name: "Contact", id: "contact" }
      ]}
      brandName="Henegan Construction"
      button={{ text: "Consultation", href: "#contact" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{ variant: "gradient-bars" }}
      logoText="Henegan Construction"
      description="First-Class Construction. Professional Excellence. Proven Results. Henegan Construction delivers premium building solutions with security-first operations and institutional integrity at every project stage."
      buttons={[{ text: "Schedule Consultation", href: "#contact" }]}
      imageSrc="http://img.b2bpic.net/free-photo/crop-person-making-draft_23-2147785613.jpg"
      imageAlt="Henegan Construction luxury project"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={true}
      title="Institutional Excellence in Construction"
      description="With a legacy of professional precision, Henegan Construction specializes in high-stakes commercial projects. We combine institutional maturity with security-conscious execution to protect your reputation and your timeline."
      metrics={[
        { value: "40+", title: "Years Experience" },
        { value: "98%", title: "On-Time Delivery" },
        { value: "100%", title: "Security Certified" }
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-men-work-with-laptop_23-2148921389.jpg"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        { title: "Security-First Execution", description: "Strict site access and credential verification protocols ensure institutional safety throughout every phase.", buttonIcon: Shield, imageSrc: "http://img.b2bpic.net/free-photo/world-trade-center_1368-6220.jpg", imageAlt: "Security site protocols" },
        { title: "Transparent Management", description: "Real-time project documentation and regular reporting provide full transparency for facility managers.", buttonIcon: FileText, imageSrc: "http://img.b2bpic.net/free-photo/young-japanese-man-spending-time-outdoors_23-2149010106.jpg", imageAlt: "Transparent reporting" },
        { title: "Precision Execution", description: "Our team of seasoned professionals ensures every architectural detail meets premium quality benchmarks.", buttonIcon: CheckCircle, imageSrc: "http://img.b2bpic.net/free-photo/hallway-building_23-2149397577.jpg", imageAlt: "Precision work" },
        { title: "Reliable Timelines", description: "Proven methodologies minimize risk and ensure commercial projects are delivered to your exact schedule.", buttonIcon: Zap, imageSrc: "http://img.b2bpic.net/free-photo/graph-data-show-summary-analysis-icon-graphic_53876-121371.jpg", imageAlt: "Reliable timelines" }
      ]}
      title="Premium Building Standards"
      description="Our operational excellence is grounded in rigorous methodology and transparency."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      metrics={[
        { id: "1", value: "$500M+", title: "Projects Completed", items: ["Commercial Office", "Healthcare Facilities", "Retail Complexes"] },
        { id: "2", value: "150+", title: "Verified Partners", items: ["Top Developers", "Architectural Firms", "Strategic Suppliers"] },
        { id: "3", value: "0", title: "Safety Incidents", items: ["Total Compliance", "Zero Downtime", "Elite Protocol"] }
      ]}
      title="Proven Performance"
      description="The numbers demonstrate our institutional reliability and capacity for complex builds."
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={["Beacon Development", "Summit Real Estate", "Horizon Commercial", "Urban Institutional", "Capital Property Group", "Metro Builders", "Elite Facility Mgmt"]}
      title="Trusted by Market Leaders"
      description="We are proud partners to the region's most prominent developers and facility managers."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        { id: "1", name: "Seth Barns", handle: "Local Guide", testimonial: "First class operation run by highly professional people. Easy access and professional staff.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/close-up-businessman-with-tie_1098-2867.jpg" },
        { id: "2", name: "James Murphy", handle: "Commercial Developer", testimonial: "First class operation run by highly professional people, reliable and efficient.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/low-angle-smiley-lawyer-with-crossed-arms_23-2148230781.jpg" },
        { id: "3", name: "Lisa Thompson", handle: "Property Owner", testimonial: "Exceptional attention to detail and professional integrity throughout the build.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/smiling-successful-middle-aged-business-leader_1262-5690.jpg" },
        { id: "4", name: "Craig Nadeau", handle: "Facility Manager", testimonial: "Their security protocols and documentation are simply best in class.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/front-view-man-holding-schematics_23-2148269799.jpg" },
        { id: "5", name: "Glen L", handle: "Real Estate Team", testimonial: "Highly recommended for institutional-grade projects. Consistent and professional delivery.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/low-angle-male-engineer_23-2148480396.jpg" }
      ]}
      showRating={true}
      title="Client Perspectives"
      description="Why industry professionals trust Henegan Construction with their high-stakes builds."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        { id: "q1", title: "What are your site security protocols?", content: "We maintain strict access control, credentialing, and site monitoring protocols tailored to high-security commercial environments." },
        { id: "q2", title: "How do you manage project timelines?", content: "We use detailed scheduling and real-time reporting to provide full visibility and proactive risk management for stakeholders." },
        { id: "q3", title: "Are you licensed and insured?", content: "Yes, we carry full insurance and maintain all institutional certifications required for high-stakes commercial development." }
      ]}
      title="Operational Standards"
      description="Answering your questions about our construction management processes."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{ variant: "gradient-bars" }}
      tag="Consultation"
      title="Discuss Your Next Project"
      description="Schedule a private consultation with our professional team to discuss your upcoming project requirements."
      buttonText="Submit Request"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Henegan Construction"
      leftLink={{ text: "Privacy Policy", href: "#" }}
      rightLink={{ text: "Contact Us", href: "#contact" }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
