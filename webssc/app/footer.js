export default function Footer() {
  return (
    <footer className="bg-sky-600 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-xl font-bold">Soft Skills Club</h2>
          <p className="mt-2">NIT Jamshedpur</p>
          <p className="mt-4">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
