import styles from "./FeedbackPage.module.scss";
import Background from "../../components/Background/Background";
import Modal from "../../components/Modal/Modal";
import Title from "../../components/Title/Title";
import backArrow from "../../assets/arrow-back.png";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";

const FeedbackCard = ({ title, paragraph }) => (
    <div className={styles.card}>
        <h2 className={styles.card__title}>{title}</h2>
        <Card height="110px" additionalStyles={{ display: 'flex', alignItems: 'flex-start', paddingTop: '20px' }}>
            <p className={styles.card__paragraph}>{paragraph}</p>
        </Card>
    </div>
);

export default function FeedbackPage() {
    return (
        <Background>
            <Modal>
                <Title text="Avaliações e Feedbacks" arrow={backArrow} redirectTo="/home"/>
                <FeedbackCard 
                    title="Produtos" 
                    paragraph="Conte como tem sido sua experiência com os produtos da nossa aplicação" 
                />
                <FeedbackCard 
                    title="Serviço" 
                    paragraph="Conte como tem sido sua experiência com os produtos da nossa aplicação" 
                />
                <div className={styles.button}>
                    <Button text="Enviar" />
                </div>
            </Modal>
        </Background>
    )
}
