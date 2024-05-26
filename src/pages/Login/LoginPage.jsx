import Background from "../../components/Background/Background";
import styles from "./LoginPage.module.scss";
import logo from "../../assets/logo-transparente.png";
import Modal from "../../components/Modal/Modal";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const formFields = [
    { id: "email", label: "E-mail", type: "email", placeholder: "email@example.com" },
    { id: "password", label: "Senha", type: "password", placeholder: "Digite sua senha" },
];

function FormGroup({ id, label, type, placeholder }) {
    return (
        <div className={styles.form_group}>
            <label htmlFor={id} className={styles.label}>
                {label}
            </label>
            <input
                id={id}
                name={id}
                type={type}
                className={styles.input}
                placeholder={placeholder}
            />
        </div>
    );
}

export default function LoginPage() {
    const navigate = useNavigate();

    const handleRegisterRedirect = () => {
        navigate("/register");
    };

    return (
        <Background>
            <Modal>
                <img src={logo} alt="Logo" className={styles.logo} />
                <Title text="Faça o login" />
                <form className={styles.form}>
                    <div className={styles.form_gap}>
                        {formFields.map((field) => (
                            <FormGroup key={field.id} {...field} />
                        ))}
                    </div>
                    <p className={styles.forgetPassword}>Esqueceu sua senha?</p>
                    <Button text="Entrar" />
                    <hr className={styles.divider} />
                    <button
                        type="button"
                        className={styles.button}
                        onClick={handleRegisterRedirect}
                    >
                        Não tenho conta
                    </button>
                </form>
            </Modal>
        </Background>
    );
}
