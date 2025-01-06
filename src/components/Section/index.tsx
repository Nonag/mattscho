interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id: string;
}

const Section = ({ id, className = "", children }: SectionProps) => {
  return (
    <section id={id} className={`min-h-screen py-24 ${className}`}>
      {children}
    </section>
  );
};

export default Section;
