import { Link } from "../components/Link";

export { Page };

function Page() {
  return (
    <div className="p-8">
      <p>Brewing Methods</p>
      <Link href="/" className="text-blue-500">← Back to Home</Link>
    </div>
  );
}