interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <article className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col gap-3">
      {icon && <div className="text-blue-600 text-3xl">{icon}</div>}
      <h3 className="text-4xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
    </article>
  );
}
