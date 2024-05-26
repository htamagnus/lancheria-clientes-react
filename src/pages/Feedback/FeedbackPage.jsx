import styles from "./FeedbackPage.module.scss";
import Background from "../../components/Background/Background";
import Modal from "../../components/Modal/Modal";
import Title from "../../components/Title/Title";
import backArrow from "../../assets/arrow-back.png";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";


export default function FeedbackPage() {
    return (
        <Background>
            <Modal>
                <Title text="Avaliações e Feedbacks" arrow={backArrow}/>
                <div className={styles.card}>
                    <h2 className={styles.card__title}>Produtos</h2>
                    <Card height="110px" additionalStyles={{ display: 'flex', alignItems: 'flex-start', paddingTop: '20px' }}>
                        <p className={styles.card__paragraph}>Conte como tem sido sua experiência com os produtos da nossa aplicação</p>
                    </Card>
                </div>

                <div className={styles.card}>
                    <h2 className={styles.card__title}>Serviço</h2>
                    <Card height="110px" additionalStyles={{ display: 'flex', alignItems: 'flex-start', paddingTop: '20px' }}>
                        <p className={styles.card__paragraph}>Conte como tem sido sua experiência com os produtos da nossa aplicação</p>
                    </Card>
                </div>

                <div className={styles.button}>
                <Button text="Enviar">

                </Button>
                </div>
            </Modal>
        </Background>
    )
}