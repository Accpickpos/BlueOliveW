export default function Footer() {
  return (
    <footer className="bg-gray-200 border-2 text-gray-900 p-6 text-center">
      <p>&copy; {new Date().getFullYear()} My Webapp. All rights reserved.</p>
    </footer>
  );
}
