import { useState } from 'react'
import { FiMail, FiLock } from 'react-icons/fi'

import { Background, Content, Container, Input } from './styles'
import Characters from '../../assets/characters.png';
import Logo from '../../assets/logo.png';

function useFormik({ initialValues }) {

    const [values, setValues] = useState(initialValues);
    const [isFocused, setIsFocused] = useState(false);

    function handleBlur(event) {
        setIsFocused(false);
    }
    function handleSubmit(event) {
        event.preventDefault();
        console.log(values)
    }

    function handleFocus(event) {
        if(event.target.value === '')
        {
            event.target.value = '';
        }

        setIsFocused(true)
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
        handleFocus,
        handleBlur,
        isFocused
    }
}

function SignIn() {
    const formik = useFormik({
        initialValues: {
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
                    <Input isFocused={formik.isFocused}>
                        <FiMail />
                        <input value={formik.values.userEmail} onBlur={formik.handleBlur} onFocus={formik.handleFocus} onChange={formik.handleChange} type="email" placeholder="Email" id="userEmail" name="userEmail"/>
                    </Input>
                    <Input isFocused={formik.isFocused}>
                        <FiLock />
                        <input value={formik.values.userPassword} onBlur={formik.handleBlur} onFocus={formik.handleFocus} onChange={formik.handleChange} type="password" placeholder="Senha" id="userPassword" name="userPassword"/>
                    </Input>
                    <label htmlFor="remember">
                        <input onChange={formik.handleChange} type="checkbox" name="remember" id="remember"/>
                        &nbsp; Manter-me conectado
                    </label>
                    <button type="submit">Entrar</button>

                    <a href="">ou faça seu cadastro agora</a>

                </form>

            </Content>
            <Background>
                <img src={Logo} alt="Techmentors logo"/>
                <img src={Characters} alt="Characters" />
            </Background>
        </Container>
    );
}

export default SignIn;
