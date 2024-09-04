Feature: Acesso ao Netflix

  Scenario: Acessar o Netflix
    Given Estou na página inicial do Netflix
    When  Eu clico no botão Entrar no Login
    And   Eu clico no X da mensagem
    And   Eu informo o USERNAME "meu_usuario" e PASSWORD "minha_senha"   
    And   Eu clico no botão Entrar no Gerenciador de Usuário
    Then   Devo ver a página inicial 
    Then  Devo ver uma mensagem de erro "Nome de usuário ou senha inválidos"


  Scenario: Acessar o Perfil
    Given Que acesso o Perfil


 Scenario: Pesquisar Filme
    Given Que clico no menu Filmes
    When  Eu pesquiso um filme
    Then  Eu seleciono o filme

    
