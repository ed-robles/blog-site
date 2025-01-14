export default function Footer() {
  return (
    <footer className="bg-gray-50 border-gray-100 border-t">
      <div className="container">
        <div className="flex flex-col items-center py-4 lg:flex-row">
          <p className="mb-2 text-center text-xl font-bold leading-tight tracking-tighter lg:mb-0 lg:w-1/2 lg:pr-4 lg:text-left">
            Built with Sanity + Next.js.
          </p>
        </div>
      </div>
    </footer>
  );
}
