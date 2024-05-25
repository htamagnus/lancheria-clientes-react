import Background from "../../components/Background/Background";
import styles from "./LoginPage.module.scss";
import logo from "../../assets/logo-transparente.png";
import Modal from "../../components/Modal/Modal";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleRegisterRedirect = () => {
    navigate("/register");
  };

  return (
    <Background>
      <Modal>
        <img src={logo} alt="Logo" className={styles.logo} />
        <Title text="Faça o login"></Title>
        <form className={styles.form}>
          <div className={styles.form_gap}>
            <div className={styles.form_group}>
              <label htmlFor="email" className={styles.label}>
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={styles.input}
                placeholder="email@example.com"
              />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="password" className={styles.label}>
                Senha
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className={styles.input}
                placeholder="Digite sua senha"
              />
            </div>
          </div>
            <p className={styles.forgetPassword}>Esqueceu sua senha?</p>
          <Button text="Entrar"></Button>
          <hr className={styles.divider} />
          <button className={styles.button} onClick={handleRegisterRedirect}>
              Não tenho conta
          </button>
        </form>
      </Modal>
    </Background>
  );
}
