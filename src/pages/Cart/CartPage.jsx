import Background from "../../components/Background/Background";
import Modal from "../../components/Modal/Modal";
import Title from "../../components/Title/Title";
import Card from "../../components/Card/Card";
import styles from "./CartPage.module.scss";
import arrowBack from "../../assets/arrow-back.png";
import burger from "../../assets/images/burger.png";
import coke from "../../assets/images/coke.png";
import toppings from "../../assets/images/toppings.png";

const CartPage = () => {
  return (
    <Background>
      <Modal>
        <Title text="Carrinho" arrow={arrowBack} />
        <div className={styles.cards}>
          {[
            {
              image: burger,
              title: "Hambúrguer de costela",
              description: "adicionar cheddar",
              price: "R$ 30,00",
            },
            {
              image: coke,
              title: "Refrigerante",
              description: "enviar canudos",
              price: "R$ 8,00",
            },
            {
              image: toppings,
              title: "Sobremesa",
              description: "adicionar chantilly",
              price: "R$ 30,00",
            },
          ].map((item, index) => (
            <div key={index} className={styles.cardContainer}>
              <Card height="150px">
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.image}
                />
                <div className={styles.texts}>
                  <h3 className={styles.textsTitle}>{item.title}</h3>
                  <p className={styles.textsParagraph}>{item.description}</p>
                  <p className={styles.textsPrice}>{item.price}</p>
                </div>
                <div className={styles.quantityControls}>
                  <button className={styles.quantityButton}>-</button>
                  <p className={styles.quantityNumber}>1</p>
                  <button className={styles.quantityButton}>+</button>
                </div>
              </Card>
            </div>
          ))}
        </div>
        <div className={styles.totalContainer}>
          <p className={styles.totalText}>Total</p>
          <p className={styles.totalValue}>R$ 68,00</p>
        </div>
      </Modal>
    </Background>
  );
};

export default CartPage;
