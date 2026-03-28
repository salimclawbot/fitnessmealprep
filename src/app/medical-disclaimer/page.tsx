import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Disclaimer — Cat Care Guides",
  description: "Medical and veterinary disclaimer for Cat Care Guides. Our content is for educational purposes only and does not constitute professional veterinary advice.",
  alternates: { canonical: "/medical-disclaimer" },
};

const disclaimerSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Medical Disclaimer",
  "description": "Medical disclaimer for Cat Care Guides. Our content is for educational purposes only and does not constitute professional veterinary advice.",
  "url": "https://catcareguides.com/medical-disclaimer",
  "publisher": {
    "@type": "Organization",
    "name": "Cat Care Guides",
    "url": "https://catcareguides.com"
  }
};

export default function MedicalDisclaimerPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(disclaimerSchema) }} />
      <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-4xl font-black tracking-tight text-slate-900">Medical Disclaimer</h1>
        <div className="prose mt-8 max-w-none">
          <p>
            Cat Care Guides provides educational information about cat health, nutrition, behaviour, and care. The content published on this website is intended for general informational purposes only. It is not a substitute for professional veterinary advice, diagnosis, or treatment, and it does not establish a veterinarian-client-patient relationship between Cat Care Guides and any reader.
          </p>
          <p>
            Every cat is unique. Health conditions, nutritional needs, and behavioural patterns vary significantly between individual animals based on age, breed, weight, pre-existing conditions, and other factors. The information on this site represents general guidance that may not apply to your specific cat&apos;s situation.
          </p>
          <p>
            Always seek the advice of a qualified, licensed veterinarian or other qualified animal health professional with any questions you may have regarding your cat&apos;s health, medical conditions, medications, nutritional requirements, or treatment options. Never disregard professional veterinary advice or delay seeking it because of something you have read on this website.
          </p>
          <p>
            Cat symptoms can overlap across a wide range of conditions. For example, loss of appetite, lethargy, or changes in litter box behaviour may indicate anything from minor stress to serious medical conditions requiring immediate veterinary care. Do not attempt to self-diagnose or self-treat your cat based on information found on this site.
          </p>
          <p>
            If your cat is experiencing a medical emergency — including but not limited to difficulty breathing, uncontrolled bleeding, suspected poisoning, seizures, collapse, or inability to urinate — seek emergency veterinary care immediately. Do not use this website as a substitute for emergency care.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Product Recommendations</h2>
          <p>
            Some articles on Cat Care Guides include recommendations for cat food, supplements, toys, litter, and other products. These recommendations are provided for informational purposes only and do not constitute endorsements or guarantees of any specific product&apos;s safety or suitability for your cat. Always consult your veterinarian before changing your cat&apos;s diet, introducing new supplements, or making significant changes to their care routine.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Affiliate Disclosure and Accuracy</h2>
          <p>
            Cat Care Guides may earn commissions on purchases made through links on this site. Our editorial recommendations are based on research and are not influenced by commercial relationships. Product prices, availability, and formulations change over time; always verify current information directly with the manufacturer or retailer before making a purchase decision.
          </p>
          <p>
            While we make every effort to ensure the accuracy of the information published on Cat Care Guides, veterinary medicine evolves rapidly. Guidelines, recommendations, and best practices may change. We cannot guarantee that all content reflects the most current veterinary research or standards of care.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Contact</h2>
          <p>
            If you have questions about this disclaimer or the information provided on Cat Care Guides, please <a href="/contact" className="text-teal-700 hover:underline">contact us</a>. For urgent cat health concerns, please contact your veterinarian or an emergency animal hospital.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Limitation of Liability</h2>
          <p>
            Cat Care Guides, its owners, contributors, editors, and affiliates make no warranties, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on this website. Any reliance you place on such information is strictly at your own risk.
          </p>
          <p>
            In no event will Cat Care Guides be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website or its content.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Children and Pets</h2>
          <p>
            The information on this site is intended for adult cat owners and caregivers. If children are involved in cat care, adult supervision is recommended at all times. Children should be taught proper cat handling techniques, and interactions between young children and cats should always be supervised by a responsible adult.
          </p>
          <p>
            Cats may scratch or bite when stressed, in pain, or when they feel threatened. Teach children to recognise signs of stress in cats and to give cats space when they display these behaviours. A calm, gentle approach to handling cats reduces stress for both the cat and the child and makes for a safer, more rewarding relationship.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Third-Party Links and Resources</h2>
          <p>
            Cat Care Guides may contain links to third-party websites, including veterinary resources, product manufacturers, and external research databases. These links are provided for your convenience and informational purposes only. We do not endorse, control, or take responsibility for the content, privacy practices, or accuracy of any linked external sites.
          </p>
          <p>
            We encourage readers to evaluate the credibility of any source they consult when making decisions about their cat&apos;s health and care. Look for resources from licensed veterinary professionals, accredited veterinary schools, or peer-reviewed journals when seeking guidance on specific medical questions.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Jurisdiction and Applicable Law</h2>
          <p>
            This disclaimer has been prepared in accordance with general principles applicable in English-speaking jurisdictions. Regulations governing pet health advice, product advertising, and online content may vary between countries and states. Cat owners should consult local regulations and seek professional advice from veterinarians licensed in their jurisdiction.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Changes to This Disclaimer</h2>
          <p>
            Cat Care Guides reserves the right to update or modify this medical disclaimer at any time without notice. We recommend checking this page periodically to stay informed of any changes. Continued use of this website after any modifications constitutes your acceptance of the updated disclaimer. This disclaimer was last updated in March 2026.
          </p>
        </div>
      </article>
    </section>
  );
}
