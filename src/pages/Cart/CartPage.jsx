import Background from "../../components/Background/Background";
import styles from "./CartPage.module.scss";
import Modal from "../../components/Modal/Modal";
import Title from "../../components/Title/Title";
import { useNavigate } from "react-router-dom";
import arrowBack from "../../assets/arrow-back.png";
import Card from "../../components/Card/Card";
import burguer from "../../assets/images/burger.png";
import coke from "../../assets/images/coke.png";
import toppings from "../../assets/images/toppings.png";

export default function CartPage() {
  const navigate = useNavigate();

  const handleRegisterRedirect = () => {
    navigate("/home");
  };

  return (
    <Background>
      <Modal>
        <Title text="Carrinho" arrow={arrowBack}></Title>
        <div className={styles.cards}>
          <div className={styles.cardContainer}>
            <Card height="150px">
              <img src={burguer} alt="burger" className={styles.image} />
              <div className={styles.texts}>
                <h3 className={styles.texts__title}>Hambúrguer de costela</h3>
                <p className={styles.texts__paragraph}>adicionar cheddar</p>
                <p className={styles.texts__price}>R$ 30,00</p>
              </div>
              <div className={styles.quantityControls}>
                <button className={styles.quantityButton}>-</button>
                <p className={styles.quantityNumber}>1</p>
                <button className={styles.quantityButton}>+</button>
              </div>
            </Card>
          </div>

          <div className={styles.cardContainer}>
            <Card height="150px">
              <img src={coke} alt="burger" className={styles.image} />
              <div className={styles.texts}>
                <h3 className={styles.texts__title}>Refrigerante</h3>
                <p className={styles.texts__paragraph}>enviar canudos</p>
                <p className={styles.texts__price}>R$ 8,00</p>
              </div>
              <div className={styles.quantityControls}>
                <button className={styles.quantityButton}>-</button>
                <p className={styles.quantityNumber}>1</p>
                <button className={styles.quantityButton}>+</button>
              </div>
            </Card>
          </div>

          <div className={styles.cardContainer}>
            <Card height="150px">
              <img src={toppings} alt="burger" className={styles.image} />
              <div className={styles.texts}>
                <h3 className={styles.texts__title}>Sobremesa</h3>
                <p className={styles.texts__paragraph}>adicionar chantilly</p>
                <p className={styles.texts__price}>R$ 30,00</p>
              </div>
              <div className={styles.quantityControls}>
                <button className={styles.quantityButton}>-</button>
                <p className={styles.quantityNumber}>1</p>
                <button className={styles.quantityButton}>+</button>
              </div>
            </Card>
          </div>
        </div>
        
        <div className={styles.totalContainer}>
          <p className={styles.totalText}>Total</p>
          <p className={styles.totalValue}>R$ 68,00</p>
        </div>
      </Modal>
    </Background>
  );
}
