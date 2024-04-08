import { useRef } from "react";
import { ContactContainer, ContactLeftSide, ContactRightSide, ContactSection } from "./style";
import * as emailjs from 'emailjs-com';               
//ICONS
import {FiGithub, FiLinkedin} from 'react-icons/fi';
import { AiOutlineSend } from 'react-icons/ai';
import { BiSolidError } from 'react-icons/bi';
import Motion from "../Motion";

export const Contact = () =>{
  const form = useRef<HTMLFormElement>(null);
  

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (form.current) {
        await emailjs.sendForm(
          'service_ih7gzgz',
          'template_l7f93gf',
          form.current,
          '8vz3Si-zbTt4i5w7Y'
        );
        form.current.reset();
        console.log('E-mail enviado com sucesso!');
      }
    } catch (error) {
      console.error('Erro ao enviar o e-mail:', error);
    }
  };

  const handleSendClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
  
    const msgSend = document.querySelector('.msg-send') as HTMLElement;
    const msgErro = document.querySelector('.msg-error') as HTMLElement;
    const email = document.querySelector('#email') as HTMLInputElement;
    const obs = document.querySelector('#textarea') as HTMLTextAreaElement;
  
    const formElement = form.current as HTMLFormElement | null;
  
    if (email.value !== '' && obs.value !== '' && formElement) {
      msgSend.style.display = 'flex';
  
      emailjs.sendForm('service_ih7gzgz', 'template_l7f93gf', formElement, '8vz3Si-zbTt4i5w7Y');
  
      email.value = '';
      obs.value = '';
  
      setTimeout(() => {
        msgSend.style.display = 'none';
      }, 3000);
    } else {
      msgErro.style.display = 'flex';
  
      setTimeout(() => {
        msgErro.style.display = 'none';
      }, 3000);
    }
  };
  
  return (
    <ContactSection id="contato">
      <Motion className="contato-section" id="contato">
        <ContactContainer>
          <ContactLeftSide>
            <h2>Fale comigo</h2>
            <p>Quer dar vida aos seus projetos? Vamos conversar! Estou aqui para colocar em prática todas as suas ideias, sinta-se a vontade para entrar em contato comigo!</p>
            <a href="https://github.com/Gguife" target='__blank'><FiGithub /></a>
            <a href="https://www.linkedin.com/in/gguife/" target='__blank'><FiLinkedin /></a>
          </ContactLeftSide>
          <ContactRightSide>
            <form ref={form} onSubmit={sendEmail} className="conatct-form">
              <label htmlFor="email">Seu email</label>
              <input type="email"
              name='email'
              className='contact-form-input'
              placeholder='gguifedev@gmail.com'
              id='email'
              required
              />
              <label htmlFor="textarea">Mensagem</label>
              <textarea name="textarea" id='textarea' cols={30} rows={7} className='contact-form-input' placeholder='Vamos conversar' required></textarea>
              <button className="button button--flex" onClick={handleSendClick} type="submit">Enviar</button>
            </form>
          </ContactRightSide>
        </ContactContainer>
      </Motion>
      <div className="msg-send">
        <AiOutlineSend className='checkIcon'/>
      </div>
      <div className='msg-error'>
        <BiSolidError className='erroIcon'/>
      </div>
    </ContactSection>
  )
}