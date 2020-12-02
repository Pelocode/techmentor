import { useState } from 'react'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'

import { Background, Content, Container, Input } from './styles'
import Characters from '../../assets/characters-signup.png';
import Logo from '../../assets/logo.png';

function useFormik({ initialValues }) {

    const [values, setValues] = useState(initialValues);

    function handleSubmit(event) {
        event.preventDefault();
        console.log(values)
    }

    function handleFocus(event) {
        if(event.target.value === '')
        {
            event.target.value = '';
        }
    }

    function handleChange(event) {
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        setValues({
            ...values,
            [fieldName]: fieldValue,
        })
    }

    return {
        values,
        handleChange,
        handleSubmit,
        handleFocus
    }
}

function SignUp() {
    const formik = useFormik({
        initialValues: {
        userName: '',
        userEmail: '',
        userPassword: '',
        remember: false,
        },
    });

    return (
        <Container>
            <Content>
                <p>O seu portal de mentoria de <strong>programação</strong> em <strong>poucos cliques</strong></p>
                <form onSubmit={formik.handleSubmit}>

                    <h3>Faça seu login</h3>
                    <Input>
                        <FiUser />
                        <input value={formik.values.userName} onFocus={formik.handleFocus} onChange={formik.handleChange} type="text" placeholder="Nome Completo" id="userName" name="userName"/>
                    </Input>
                    <Input>
                        <FiMail />
                        <input value={formik.values.userEmail} onFocus={formik.handleFocus} onChange={formik.handleChange} type="email" placeholder="Email" id="userEmail" name="userEmail"/>
                    </Input>
                    <Input>
                        <FiLock />
                        <input value={formik.values.userPassword} onFocus={formik.handleFocus} onChange={formik.handleChange} type="password" placeholder="Senha" id="userPassword" name="userPassword"/>
                    </Input>
                    <label htmlFor="remember">
                        <input onChange={formik.handleChange} type="checkbox" name="remember" id="remember"/>
                        &nbsp; Manter-me conectado
                    </label>
                    <button type="submit">Entrar</button>
                </form>
            </Content>
            <Background>
                <img src={Logo} alt="Techmentors logo"/>
                <img src={Characters} alt="Characters" />
            </Background>
        </Container>
    );
}

export default SignUp;
