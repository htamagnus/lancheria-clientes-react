import styles from "./NotificationPage.module.scss";
import Background from "../../components/Background/Background";
import Card from "../../components/Card/Card";
import Modal from "../../components/Modal/Modal";
import Title from "../../components/Title/Title";
import arrowBack from "../../assets/arrow-back.png";
import notifications from "../../assets/icons/notifications.png";


export default function NotificationPage() {
    return (
        <Background>
            <Modal>
                <Title text="Notificações" arrow={arrowBack} />
                <div className={styles.card}>
                <Card>
                    <div className={styles.container}>
                    <p>Alerta sobre status do pedido</p>
                    <img src={notifications} alt="" className={styles.image1} />
                    </div>
                </Card>

                <Card>
                    <div className={styles.container}>
                    <p>Promoções e ofertas</p>
                    <img src={notifications} alt="" className={styles.image2} />
                    </div>
                </Card>

                <Card>
                    <div className={styles.container}>
                    <p>Novidades</p>
                    <img src={notifications} alt="" className={styles.image3} />
                    </div>
                </Card>


                <Card>
                    <div className={styles.container}>
                    <p>Avaliação do Pedido Entregue</p>
                    <img src={notifications} alt="" className={styles.image4} />
                    </div>
                </Card>
                </div>
            </Modal>
        </Background>
    )
}