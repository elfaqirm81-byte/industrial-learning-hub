import Container from "@/components/Container";

export default function Page() {
  return (
    <main>
      <Container>
        <div className="py-12">
          <h1 className="text-3xl font-bold">Blog</h1>
          <p className="text-gray-600 mt-2">Bientôt : articles SEO (problème → solution), études de cas, scripts de négociation.</p>
        </div>
      </Container>
    </main>
  );
}
