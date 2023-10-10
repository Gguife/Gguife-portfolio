import { useRef } from "react";
import { ContactContainer, ContactLeftSide, ContactRightSide, ContactSection } from "./style";
import * as emailjs from 'emailjs-com';               
//ICONS
import {FiGithub, FiLinkedin} from 'react-icons/fi';
import { AiOutlineSend } from 'react-icons/ai';
import { BiSolidError } from 'react-icons/bi';

export const Contact = () =>{
  const form = useRef<HTMLFormElement>(null);
  

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (form.current) {
        await emailjs.sendForm(
          'service_ymhe1jk',
          'template_pbthub7',
          form.current,
          'OvbrKX0pZ57OzMih6'
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
  
      emailjs.sendForm('service_ymhe1jk', 'template_pbthub7', formElement, 'OvbrKX0pZ57OzMih6');
  
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
      <ContactContainer>
        <ContactLeftSide>
          <h2>Vamos nos Conectar</h2>
          <p>Atualmente, estou em busca de novas oportunidades e minha caixa de entrada está sempre aberta. Se você tiver alguma pergunta ou simplesmente quiser dizer oi, sinta-se a vontade!</p>
          <a href="https://github.com/Gguife" target='__blank'><FiGithub /></a>
          <a href="https://www.linkedin.com/in/guilherme-gomes-b09444254/" target='__blank'><FiLinkedin /></a>
        </ContactLeftSide>
        <ContactRightSide>
          <form ref={form} onSubmit={sendEmail} className="conatct-form">
            <label htmlFor="email">Seu email</label>
            <input type="email"
            name='email'
            className='contact-form-input'
            placeholder='gguife747@gmail.com'
            id='email'
            required
            />
            <label htmlFor="textarea">Mensagem</label>
            <textarea name="textarea" id='textarea' cols={30} rows={7} className='contact-form-input' placeholder='Vamos conversar' required></textarea>
            <button className="button button--flex" onClick={handleSendClick} type="submit">Enviar</button>
          </form>
        </ContactRightSide>
      </ContactContainer>
      <div className="msg-send">
        <AiOutlineSend className='checkIcon'/>
      </div>
      <div className='msg-error'>
        <BiSolidError className='erroIcon'/>
      </div>
    </ContactSection>
  )
}