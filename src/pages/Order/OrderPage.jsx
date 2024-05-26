import styles from "./OrderPage.module.scss";
import Background from "../../components/Background/Background";
import Modal from "../../components/Modal/Modal";
import Title from "../../components/Title/Title";
import arrowBack from "../../assets/arrow-back.png";
import Card from "../../components/Card/Card";

export default function OrderPage() {
    return (
        <Background>
            <Modal>
                <Title text="Histórico de Pedidos" arrow={arrowBack}></Title>
                <Card height="120px" additionalStyles={{ flexDirection: 'column', alignItems: 'flex-start', marginBottom: "30px"}}>
                    <div className={styles.card}>
                    <h3>Lancheria Xis do Rei</h3>
                    <p>Cartão de cŕedito</p>
                    <p>Pedido nº 2322</p>
                    <p>24/03/2024 às 11:16</p>
                    </div>
                    <div className={styles.price}>R$ 34,99</div>
                </Card>

                <Card height="120px" additionalStyles={{ flexDirection: 'column', alignItems: 'flex-start', marginBottom: "30px"}}>
                    <div className={styles.card}>
                    <h3>Lancheria Quiosque do Parque</h3>
                    <p>Cartão de cŕedito</p>
                    <p>Pedido nº 2322</p>
                    <p>24/03/2024 às 11:16</p>
                    </div>
                    <div className={styles.price}>R$ 29,99</div>
                </Card>

                <Card height="120px" additionalStyles={{ flexDirection: 'column', alignItems: 'flex-start', marginBottom: "30px"}}>
                    <div className={styles.card}>
                    <h3>Lancheria Xis do Rei</h3>
                    <p>Cartão de cŕedito</p>
                    <p>Pedido nº 2322</p>
                    <p>24/03/2024 às 11:16</p>
                    </div>
                    <div className={styles.price}>R$ 23,99</div>
                </Card>

                <Card height="120px" additionalStyles={{ flexDirection: 'column', alignItems: 'flex-start', marginBottom: "30px"}}>
                    <div className={styles.card}>
                    <h3>Lancheria Quiosque do Parque</h3>
                    <p>Cartão de cŕedito</p>
                    <p>Pedido nº 2322</p>
                    <p>24/03/2024 às 11:16</p>
                    </div>
                    <div className={styles.price}>R$ 49,99</div>
                </Card>
            </Modal>
        </Background>
    )
}