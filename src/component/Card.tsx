export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-lg border bg-white dark:bg-gray-800 shadow-md ${className} `}
    >
      {children}
    </div>
  );
}
