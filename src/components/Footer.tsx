export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-gray-600">
        <div className="md:flex items-center justify-between">
          <p>© {new Date().getFullYear()} Industrial Learning Hub</p>
          <div className="flex gap-5 mt-3 md:mt-0">
            <a href="#" className="underline">LinkedIn</a>
            <a href="#" className="underline">YouTube</a>
            <a href="mailto:contact@example.com" className="underline">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
