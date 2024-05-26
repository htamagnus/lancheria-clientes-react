import styles from "./PaymentPage.module.scss";
import Background from "../../components/Background/Background";
import Modal from "../../components/Modal/Modal";
import Card from "../../components/Card/Card";
import backArrow from "../../assets/arrow-back.png";
import Title from "../../components/Title/Title";
import more from "../../assets/icons/more.png";

export default function PaymentPage() {
  return (
    <Background>
      <Modal>
        <Title text="Formas de Pagamento" arrow={backArrow}></Title>
        <Card
          height="100px"
          additionalStyles={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            flexDirection: "column",
            marginBottom: "40px",
          }}
        >
          <div className={styles.card}>
            <h3 className={styles.card__title}>Saldo disponível</h3>
            <p className={styles.card__paragraph}>R$ 0,00</p>
          </div>
        </Card>

        <Card height="53px" additionalStyles={{ marginBottom: "30px" }}>
          <img src={more} className={styles.image} alt="" />
          <h3 className={styles.title__card}>Cadastrar cartão de crédito</h3>
        </Card>

        <Card height="53px" additionalStyles={{ marginBottom: "30px" }}>
          <img src={more} className={styles.image} alt="" />
          <h3 className={styles.title__card}>Cadastrar cartão de débito</h3>
        </Card>

        <Card height="53px" additionalStyles={{ marginBottom: "30px" }}>
          <img src={more} className={styles.image} alt="" />
          <h3 className={styles.title__card}>Cadastrar Apple Pay</h3>
        </Card>

        <Card height="53px" additionalStyles={{ marginBottom: "30px" }}>
          <img src={more} className={styles.image} alt="" />
          <h3 className={styles.title__card}>Pagar na entrega</h3>
        </Card>

      </Modal>
    </Background>
  );
}
