import { navigator, naviagorMenu } from "./Navigator.css";

const Navigator = () => {
  return <nav className={navigator} >
    <h1>MOVIE</h1>
    <ul className={naviagorMenu}>
      <li>둘러보기</li>
      <li>좋아요</li>
      <li>소개</li>
    </ul>
  </nav>
};

export default Navigator;