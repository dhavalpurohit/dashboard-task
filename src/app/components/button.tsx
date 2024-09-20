interface props {
  name: string;
  style?: string;
}

const Button: React.FC<props> = ({ name, style }) => {
  return (
    <button
      className={`rounded-lg px-5 py-2.5 text-sm text-center text-white font-medium ${style}`}
    >
      {name}
    </button>
  );
};
export default Button;
