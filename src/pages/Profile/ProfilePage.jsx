import Background from "../../components/Background/Background";
import styles from "./ProfilePage.module.scss";
import Modal from "../../components/Modal/Modal";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import arrowBack from "../../assets/arrow-back.png";

export default function ProfilePage() {
  return (
    <Background>
      <Modal>
        <Title text="Dados pessoais" arrow={arrowBack} redirectTo="/"></Title>
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
          <Button text="Atualizar"></Button>
        </form>
      </Modal>
    </Background>
  );
}
