function inicio() {
    return (
        <div className="auth-container">
      {/* Logo no topo e centralizado */}
      <header className="logo-header">
        {/* Adicione a imagem do logo da FlashTech aqui */}
        <img 
          src="c:\Users\vitorsantana\Downloads\Gemini_Generated_Image_vlxb87vlxb87vlxb.png" // Substitua pela URL/caminho real da imagem
          alt="FlashTech Logo" 
          className="logo-img" 
        />
      </header>

      {/* Container das duas colunas (Login e Cadastro) */}
      <div className="form-split-container">
        
        {/* Coluna da Esquerda: Login (Já tem uma conta?) */}
        <div className="column login-column">
          <h2 className="column-title">Já tem uma conta?</h2>
          <p className="column-instruction">
            Informe os seus dados abaixo para acessá-la.
          </p>
          
          {/* Ícone de Pessoa */}
          <div className="icon-placeholder">
            {/* Você pode usar uma biblioteca de ícones como react-icons aqui */}
            👤 
          </div>

          <form className="auth-form">
            <input type="email" placeholder="E-mail*" className="input-field" required />
            <input type="password" placeholder="Senha*" className="input-field" required />
            <label className="remember-me">
              <input type="checkbox" />
              Lembrar meus dados
            </label>
            {/* O botão de acesso (login) estaria aqui, mas não está visível na imagem */}
            {/* <button type="submit" className="submit-button">Acessar</button> */}
          </form>
        </div>

        {/* Coluna da Direita: Cadastro (Novo Cliente) */}
        <div className="column register-column">
          <h2 className="column-title right-aligned">Novo Cliente</h2>
          <p className="column-instruction right-aligned">
            Criar uma conta é fácil! Informe seus dados e uma senha para aproveitar todos os benefícios de ter uma conta.
          </p>
          
          {/* Ícone de Pessoa com + */}
          <div className="icon-placeholder">
            {/* Você pode usar uma biblioteca de ícones como react-icons aqui */}
            👥+
          </div>

          <form className="auth-form">
            <input type="text" placeholder="Nome" className="input-field" required />
            <input type="email" placeholder="E-mail*" className="input-field" required />
            <input type="password" placeholder="Senha*" className="input-field" required />
            {/* <button type="submit" className="submit-button">Cadastrar</button> */}
          </form>
        </div>
      </div>
    </div>
    )
}

export  default inicio;