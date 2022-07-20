import { navigator, naviagorMenu, navigatorWhite } from "./Navigator.css";
import cx from "classnames";
import { Link } from "react-router-dom";

interface Props {
  isMain?: boolean;
}

const Navigator = ({ isMain = false }: Props) => {
  return <nav className={cx(navigator, {
    [navigatorWhite]: isMain
  })} >
    <Link to="/"><h1>MOVIE</h1></Link>
    <ul className={naviagorMenu}>
      <li>둘러보기</li>
      <li>좋아요</li>
      <li>소개</li>
    </ul>
  </nav>
};

export default Navigator;