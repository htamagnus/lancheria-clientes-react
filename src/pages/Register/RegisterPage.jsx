import Background from "../../components/Background/Background";
import styles from "./RegisterPage.module.scss";
import logo from "../../assets/logo-transparente.png";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import arrowBack from "../../assets/arrow-back.png";

export default function RegisterPage() {
    return (
        <Background>
            <div className={styles.modal}>
            <div className={styles.modal_box}>
            <img src={logo} alt="Logo" className={styles.logo} />
        <Title text="Cadastre-se Aqui" arrow={arrowBack} redirectTo="/"></Title>
        <form className={styles.form}>
          <div className={styles.form_gap}>
            <div className={styles.form_group}>
              <label htmlFor="email" className={styles.label}>
                Nome
              </label>
              <input
                className={styles.input}
              />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="password" className={styles.label}>
                Celular
              </label>
              <input
                className={styles.input}
              />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="email" className={styles.label}>
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={styles.input}
              />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="email" className={styles.label}>
                Senha
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className={styles.input}
              />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="email" className={styles.label}>
                Confirmação de senha
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className={styles.input}
              />
            </div>
          </div>
          <Button text="Cadastre-se"></Button>
        </form>
        </div>
            </div>

        </Background>
    )
}