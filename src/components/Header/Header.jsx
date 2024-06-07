import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/nannies">Nannies</Link>
      </nav>
    </div>
  );
};
