import Container from "@/components/Container";

export default function Page() {
  return (
    <main>
      <Container>
        <div className="py-12">
          <h1 className="text-3xl font-bold">Contact</h1>
          <div className="mt-6 rounded-2xl border p-5 bg-white">
            <p className="text-sm">
              Email : <a className="underline" href="mailto:contact@example.com">contact@example.com</a>
            </p>
            <p className="text-sm mt-2">
              LinkedIn : <a className="underline" href="#" target="_blank">Mon profil</a>
            </p>
            <p className="text-sm mt-2">
              YouTube : <a className="underline" href="#" target="_blank">Ma chaîne</a>
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
