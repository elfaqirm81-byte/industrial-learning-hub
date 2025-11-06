import Container from "@/components/Container";

export default function Page() {
  return (
    <main>
      <Container>
        <div className="py-12">
          <h1 className="text-3xl font-bold">Mentions légales</h1>
          <div className="prose max-w-none text-sm text-gray-700 mt-4">
            <p><strong>Responsable de publication :</strong> Mustapha El Faqir</p>
            <p><strong>Contact :</strong> contact@example.com</p>
            <p><strong>Hébergement :</strong> Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA.</p>
            <p><strong>Données personnelles :</strong> vos emails sont utilisés pour vous envoyer les ressources et mises à jour. 
              Vous pouvez vous désinscrire à tout moment via le lien présent dans chaque email.</p>
          </div>
        </div>
      </Container>
    </main>
  );
}
