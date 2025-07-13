export default function MainContent({ children }) {
  return (
    <section className="flex flex-col gap-16">
      {children}
    </section>
  );
}
