export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {" "}
      {/* Adjust based on your navbar/footer height */}
      <section className="h-screen bg-gradient-to-b from-sky-100 to-white flex items-center justify-center">
        <h1 className="text-4xl font-bold text-sky-600">
          Welcome to Soft Skills Club
        </h1>
      </section>
    </div>
  );
}
