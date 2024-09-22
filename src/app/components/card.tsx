interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={`bg-white dark:bg-black rounded-2xl p-6 h-full ${className}`}
    >
      {children}
    </div>
  );
};
export default Card;
