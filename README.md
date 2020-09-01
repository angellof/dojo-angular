# Que comecem os desafios !
  * A intenção desse desafio é poder aprender sobre convenções de código do Angular. Mão na massa!

---

 ## **1 - Etapa: Componentes, Modulos, Inbound propertie, Diretivas**

  1 - Crie um componente e um módulo que seja referente a exibição de uma imagem.

---

 ## **2 - Etapa: HttpClient, Injeção de Dependência, Observable, serviço, @Injectable, Ciclo de vida de um componente**

  1 - Hora de chamar uma API externa. Existe uma lib do Angular que pode te ajudar, use esta lib e faça a requisição para: ```http://localhost:3000/angelo/photos```.
  
  2 - Exiba todas as imagens retornadas pela API.

  3 - Para finalizar receba o valor da rota "/*angelo*/" via parametro. *Ex.: http://localhost:3000/${userName}/photos*

  4 - Crie um serviço que trate a lista de imagens recebidas e direcione para o *componente correto* em sua inicialização. 

---

 ## **3 - Etapa: Single Page Aplication, BrowserModule, CommonModule, Rotas e ActivatedRoute**
 
  1 - Crie uma rota nova para acessar as imagens. *Ex.: http://localhost:4200/images/list*

  2 - Com a rota funcionando, crie um componente que renderize as imagens na tela corretamente usando uma lista de 6 x 6. *Ex.: [0,1,2,3,4,5] / [6,7,8,9,10,11] ...*

--- 

 ## **4 - Etapa: Eventos no DOM, PIPE, Resolvers, RxJS, Debounce Pattern**
  1 - Crie um campo para consulta das fotos.
  
  2 - Filtre as fotos pelo nome digitado no campo.
  
  3 - Após o filtro criado, crie uma validação que se caso não exisitir a foto digitada, mostrar na tela a mensagem "Status não encontrado!"
  
  4 - Organize seu código e não deixe que cada letra digitada no campo seja pesquisada. Use um pattern para resolver isso.
  
  5 - Na página inicial exiba apenas as 12 primeiras fotos e adicione um botão para carregar mais.



