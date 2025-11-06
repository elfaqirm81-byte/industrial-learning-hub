import Container from "@/components/Container";

export default function Page() {
  return (
    <main>
      <Container>
        <div className="py-12">
          <h1 className="text-3xl font-bold">Contact</h1>
          <div className="mt-6 rounded-2xl border p-5 bg-white">
            <p className="text-sm">Email : <a className="underline" href="mailto:contact@example.com">contact@example.com</a></p>
          </div>
        </div>
      </Container>
    </main>
  );
}
