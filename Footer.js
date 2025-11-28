export default function Footer() {
    return (
      <footer className="bg-gray-100 text-gray-700 mt-10">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} LiveHindustan Clone.
          </p>
          <p className="text-xs mt-2 text-gray-500">
            This project uses mock data and is created for demonstration purposes only.
          </p>
        </div>
      </footer>
    );
  }
  