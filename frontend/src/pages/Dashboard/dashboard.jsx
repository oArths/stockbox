import * as S from "./style";
import Nav from "../../components/nav/nav";
import Header from "../../components/header/header";

const Dashboard = () => {
  return (
    <S.Content>
      <Header />
      <S.test>
        <Nav />
        <S.Container>
          <S.IN>AAA</S.IN>
          <S.IN>AAA</S.IN>
          <S.IN>AAA</S.IN>
        </S.Container>
      </S.test>
    </S.Content>
  );
};

export default Dashboard;
