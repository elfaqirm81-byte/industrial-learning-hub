import Container from "@/components/Container";

const courses = [
  {
    title: "NEBOSH PSM – Exam Prep by Practice",
    desc: "QCM, cas pratiques, checklists téléchargeables.",
    url: "https://www.udemy.com/course/nebosh-psm/?utm_source=website&utm_medium=landing&utm_campaign=home_hero",
  },
  {
    title: "FMVA pour projets industriels",
    desc: "NPV/IRR, scénarios, dashboards.",
    url: "https://www.udemy.com/?utm_source=website&utm_medium=landing&utm_campaign=courses_grid",
  },
  {
    title: "Lean Six Sigma – Black Belt Toolkit",
    desc: "DMAIC avancé, SPC, DOE, templates.",
    url: "https://www.udemy.com/?utm_source=website&utm_medium=landing&utm_campaign=courses_grid",
  },
];

export default function Page() {
  return (
    <main>
      <Container>
        <div className="py-12">
          <h1 className="text-3xl font-bold">Cours Udemy</h1>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((c) => (
            <div key={c.title} className="rounded-3xl border p-5 hover:shadow transition">
              <div className="h-36 rounded-2xl bg-gray-100 flex items-center justify-center text-4xl">🎓</div>
              <h3 className="mt-4 font-semibold">{c.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{c.desc}</p>
              <a href={c.url} className="mt-4 inline-flex rounded-xl px-4 py-2 text-sm font-semibold bg-black text-white hover:opacity-90">
                Accéder sur Udemy
              </a>
            </div>
          ))}
        </div>
        <div className="h-10" />
      </Container>
    </main>
  );
}
