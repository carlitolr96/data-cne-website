'use client';

export default function Footer() {
  return (
    <footer className="bg-gray text-gray-600 py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} CNE Dominicana. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
