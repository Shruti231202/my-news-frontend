export default function ErrorBanner({ message }) {
    if (!message) return null;
  
    return (
      <div className="bg-red-50 text-red-700 border border-red-200 px-4 py-2 rounded mb-4 text-sm">
        {message}
      </div>
    )
  }

  