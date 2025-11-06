import Container from "@/components/Container";
import Newsletter from "@/components/Newsletter";

const freebies = [
  { title: "Cheat Sheet – KPI industriels", tag: "PDF", href: "#" },
  { title: "Template – Business Case CAPEX", tag: "XLSX", href: "#" },
  { title: "Checklist – Audit 5S Sécurité", tag: "XLSX", href: "#" },
  { title: "Guide – Filtration pulpe phosphate", tag: "PDF", href: "#" },
  { title: "Mini-vidéo – NPV vs IRR (5 min)", tag: "VID", href: "#videos" },
];

export default function Page() {
  return (
    <main>
      <Container>
        <div className="py-12">
          <h1 className="text-3xl font-bold">Ressources gratuites</h1>
          <p className="text-gray-600 mt-2">Cheat sheets, modèles Excel, guides et mini-vidéos.</p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {freebies.map((f) => (
              <a key={f.title} href={f.href} className="rounded-2xl border p-4 bg-white hover:shadow transition block">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{f.title}</h3>
                  <span className="text-xs rounded-full border px-2 py-0.5">{f.tag}</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">Cliquez pour ouvrir</p>
              </a>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border p-5 bg-white" id="newsletter">
            <h3 className="font-semibold">Accès complet à la librairie</h3>
            <p className="text-sm text-gray-600">Recevez le lien + mises à jour mensuelles.</p>
            <div className="mt-4">
              <Newsletter />
              <p className="mt-2 text-xs text-gray-500">
                Branchable à Brevo/Mailchimp via <code>Environment Variables</code> (Vercel).
              </p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
