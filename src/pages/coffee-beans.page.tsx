import { Link } from "../components/Link";

export { Page };

function Page() {
  return (
    <div className="p-8">
      <p className="text-red-500">Coffee Beans</p>
      <Link href="/" className="text-blue-500 hover:underline">← Back to Home</Link>
    </div>
  );
}