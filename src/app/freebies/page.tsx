import Container from "@/components/Container";

const freebies = [
  { title: "Cheat Sheet – KPI industriels", tag: "PDF", href: "#" },
  { title: "Template – Business Case CAPEX", tag: "XLSX", href: "#" },
  { title: "Checklist – Audit 5S Sécurité", tag: "XLSX", href: "#" },
  { title: "Guide – Filtration pulpe phosphate", tag: "PDF", href: "#" },
];

export default function Page() {
  return (
    <main>
      <Container>
        <div className="py-12">
          <h1 className="text-3xl font-bold">Ressources gratuites</h1>
          <p className="text-gray-600 mt-2">Cheat sheets, modèles, guides, mini-vidéos.</p>
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
        </div>
      </Container>
    </main>
  );
}
