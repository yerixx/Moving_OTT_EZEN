import { Outlet } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import { useNavigate } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  body {
    font-family: "Ubuntu", sans-serif;
    background-color: ${(props) => props.theme.black.lighter};
  }
`;

export interface GoToProps {
  goToMain: () => void;
  goToLogin: () => void;
  goToSignup: () => void;
}

const Root = () => {
  const navigate = useNavigate();

  const goToMain = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const handleconfirm: boolean =
      window.confirm("메인 페이지로 이동하시겠습니까?");
    if (handleconfirm) {
      navigate("/");
    }
  };

  const goToLogin = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const handleConfirm = window.confirm("로그인 페이지로 이동하시겠습니까?");

    if (handleConfirm) {
      navigate("/login");
    }
  };
  const goToSignup = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const handleconfirm: boolean = window.confirm(
      "회원가입 페이지로 이동하시겠습니까?"
    );
    if (handleconfirm) {
      navigate("/signup");
    }
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet context={{ goToMain, goToLogin, goToSignup }} />
    </>
  );
};

export default Root;