import React from 'react';
import './LoginPage.css';

function App() {
  return (
    <>
      <div className="logo-container">
      </div>

      <div className="main-container">
        <div className="coluna-esquerda">
          
          <h2>Já tem uma conta?</h2>
          <p>Informe os seus dados abaixo para acessá-la.</p>

          <div className="icone">
            <i className="fas fa-user"></i> 
          </div>

          <form>
            <div className="campo-input">
              <label htmlFor="login-email">E-mail</label>
              <input type="email" id="login-email" placeholder="E-mail*" />
            </div>
            
            <div className="campo-input">
              <label htmlFor="login-senha">Senha</label>
              <input type="password" id="login-senha" placeholder="Senha*" />
            </div>

            <div className="lembrar-dados">
              <input type="checkbox" id="lembrar" />
              <label htmlFor="lembrar">Lembrar meus dados</label>
            </div>
            
            <button type="submit">Entrar</button>

            <div className="esqueci-senha">
              <a href="#">Esqueci minha senha</a>
            </div>
            
          </form>

        </div>

        <div className="coluna-direita">
          
          <h3>Novo Cliente</h3>
          <p>Criar uma conta é fácil! Informe seus dados e uma senha para aproveitar todos os benefícios de ter uma conta.</p>

          <div className="icone">
            <i className="fas fa-user-plus"></i>
          </div>

          <form>
            <button type="submit">Criar Conta</button>
          </form>

        </div>
      </div>
    </>
  );
}

export default App