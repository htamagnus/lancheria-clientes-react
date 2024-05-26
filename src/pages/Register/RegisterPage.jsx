import Background from "../../components/Background/Background";
import styles from "./RegisterPage.module.scss";
import logo from "../../assets/logo-transparente.png";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import arrowBack from "../../assets/arrow-back.png";

const formFields = [
    { id: "name", label: "Nome", type: "text" },
    { id: "phone", label: "Celular", type: "text" },
    { id: "email", label: "E-mail", type: "email" },
    { id: "password", label: "Senha", type: "password" },
    { id: "confirmPassword", label: "Confirmação de senha", type: "password" },
];

function FormGroup({ id, label, type }) {
    return (
        <div className={styles.form_group}>
            <label htmlFor={id} className={styles.label}>
                {label}
            </label>
            <input id={id} name={id} type={type} className={styles.input} />
        </div>
    );
}

export default function RegisterPage() {
    return (
        <Background>
            <div className={styles.modal}>
                <div className={styles.modal_box}>
                    <img src={logo} alt="Logo" className={styles.logo} />
                    <Title text="Cadastre-se Aqui" arrow={arrowBack} redirectTo="/" />
                    <form className={styles.form}>
                        <div className={styles.form_gap}>
                            {formFields.map((field) => (
                                <FormGroup key={field.id} {...field} />
                            ))}
                        </div>
                        <Button text="Cadastre-se" />
                    </form>
                </div>
            </div>
        </Background>
    );
}
