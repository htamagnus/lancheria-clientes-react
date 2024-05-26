import styles from "./SupportPage.module.scss";
import backArrow from "../../assets/arrow-back.png";
import arrowRight from "../../assets/icons/arrow-right.png";
import Background from "../../components/Background/Background";
import Modal from "../../components/Modal/Modal";
import Title from "../../components/Title/Title";
import Card from "../../components/Card/Card";

export default function SupportPage() {
  return (
    <Background>
      <Modal>
        <Title text="Suporte ao Cliente" arrow={backArrow}></Title>
        <Card additionalStyles={{ marginBottom: "30px" }}>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Perguntas frequentes</h3>
            <div className={styles.faqList}>
              <a href="/faq/coupon" className={styles.faqItem}>
                <span>Não recebo cupom de desconto</span>
                <img src={arrowRight} alt="arrow" className={styles.arrow} />
              </a>
              <a href="/faq/delete-card" className={styles.faqItem}>
                <span>Excluir dados do cartão de crédito</span>
                <img src={arrowRight} alt="arrow" className={styles.arrow} />
              </a>
              <a href="/faq/update-account" className={styles.faqItem}>
                <span>Quero alterar dados cadastrais da conta</span>
                <img src={arrowRight} alt="arrow" className={styles.arrow} />
              </a>
            </div>
          </div>
        </Card>

        <Card>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Atendimentos</h3>
            <div className={styles.faqList}>
              <a href="/faq/coupon" className={styles.faqItem}>
                <span>Desejo falar diretamente com um atendente</span>
                <img src={arrowRight} alt="arrow" className={styles.arrowServices} />
              </a>
            </div>
          </div>
        </Card>
      </Modal>
    </Background>
  );
}
