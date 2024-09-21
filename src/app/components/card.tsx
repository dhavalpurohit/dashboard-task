interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-white dark:bg-black rounded-2xl p-6">{children}</div>
  );
};
export default Card;
