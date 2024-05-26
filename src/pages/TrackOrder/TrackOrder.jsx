import styles from "./TrackOrder.module.scss";
import Background from "../../components/Background/Background";
import Modal from "../../components/Modal/Modal";
import Title from "../../components/Title/Title";
import backArrow from "../../assets/arrow-back.png";
import Card from "../../components/Card/Card";

export default function TrackOrderPage() {
    return (
        <Background>
            <Modal>
                <Title text="Acompanhar Pedido" arrow={backArrow}></Title>
                <Card height="290px" additionalStyles={{ marginBottom: '30px' }}>
                    <div className={styles.card}>
                        <h3>Lancheria Xis do Rei</h3>
                        <p>Previsão de entrega:</p>
                        <h3>Hoje, entre 15:30 e 16:00</h3>
                        <div className={styles.statusContainer}>
                            <div className={styles.statusItem}>
                                <p>Enviamos o pedido ao restaurante</p>
                                <p>15:20</p>
                            </div>
                            <div className={styles.statusItem}>
                                <p>O pedido foi confirmado</p>
                                <p>15:21</p>
                            </div>
                            <div className={styles.statusItem}>
                                <p>O entregador está a caminho do restaurante</p>
                                <p>15:25</p>
                            </div>
                            <div className={styles.statusItem}>
                                <p>O entregador está a caminho da sua casa</p>
                                <p>15:30</p>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card height="290px">
                    <div className={styles.card}>
                        <h3>Lancheria Quiosque do Parque</h3>
                        <p>Previsão de entrega:</p>
                        <h3>Hoje, entre 15:30 e 16:00</h3>
                        <div className={styles.statusContainer}>
                            <div className={styles.statusItem}>
                                <p>Enviamos o pedido ao restaurante</p>
                                <p>15:20</p>
                            </div>
                            <div className={styles.statusItem}>
                                <p>O pedido foi confirmado</p>
                                <p>15:21</p>
                            </div>
                            <div className={styles.statusItem}>
                                <p>O entregador está a caminho do restaurante</p>
                                <p>15:25</p>
                            </div>
                            <div className={styles.statusItem}>
                                <p>O entregador está a caminho da sua casa</p>
                                <p>15:30</p>
                            </div>
                        </div>
                    </div>
                </Card>
            </Modal>
        </Background>
    );
}
