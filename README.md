### Que comecem os desafios !
 - A intenção desse desafio é poder aprender sobre convenções de código do Angular, com isso vamos aprender sobre *Data biding*, *One way Data biding ( Data biding unidirecional )*

  * Após entender a estrutura inicial, vamos implementar e ir além do que ja temos.
    
  **1 Etapa - Inicial**

  1 - Crie duas variaveis dentro do nosso componente: src e title. src deve receber a url da imagem e title o titulo definido por você.
    
  2 - No HTML use as expressões e exiba na tela a imagem e o titulo defindo.
    
  3 - ( Nao obrigatorio ) Adicionar o bootstrap
    
  4 - Crie um componente que seja referente a informações de que uma foto precisa.
    4.1 - Se necessário não esqueça de refatorar o componente ```AppComponent```.
    4.2 - Esta com problema ? Leia o topico **1.02 Componentes**
    
  5 - Componente criado ? Então vamos la ! 
    5.1 - Adicione mais 3 ou 4 tags iguais no html para termos mais fotos na tela, 
    5.2 - Remova a urls fixa no código do componente e passe esse valor na declaraçao do componente que esta na página html que o usa.
    5.3 - Está com dúvidas sobre como fazer essa declaração ? Leia o tópico **1.03 Inbound properties**
    
  6 - Antes que seu código vire uma bagunça vamos criar um módulo
  6.1 - Crie um novo módulo pertinente apenas ao que for referente a foto, não esqueça de arrumar a estutura de pastas !
  6.2 - Remova o componente de foto de *app.module.ts** e passe para seu novo módulo.
  6.3 - Adicione / declare o novo modulo criado em *app.module.ts** e garanta que tudo esta funcionando.
  6.4 - Esta com duvidas ? Leia o topico **1.04 Módulos**
    
  7 - Substitua sua lista fixa de fotos por um recurso de laço do angular, use uma *diretiva*.
    7.1 - Ao invés do *app.component.html* receber 3 ou 4 componentes iguais, faça que ele receba apenas uma lista aonde contenha todas as urls.
    7.2 - Esta com  dúvidas ? Leia o tópico **1.05 - Usando diretivas** 

---
  **2 Etapa - Integração com API e camada de seriço**

  1 - Agora será necessário fazer uma integração com uma API externa, para isso use a lib http client do Angular na classe app.component.ts e crie uma variavel do tipo: ```http: HttpClient; ... @angular/common/http```. Para que tudo funcione corretamente faça a injeção dessa dependência no momento em que a aplicação é iniciada.

  2 - Faça uma requisição para este link: ```http://localhost:3000/angelo/photos``` e retorne na tela todas as imagens retornadas da requisição. 

  3 - Para melhorar o código, isole em uma camada de serviço a chamda para a api, deixando esse serviço disponível para qualquer classe em nossa aplicação. Este serviço deve receber como paramâmetro uma *string* aonde será informado o nome que sera utilizado na url. *Ex*.:```http://localhost:3000/${userName}/photos```

  4 - Esta com dúvidas ? Leia o tópico **2.01 - HttpClient, Injeção de Dependência, Observable, Criando um serviço e usando @Injectable**

---

  **3 Etapa - Single Page Aplication, CommonModule e Rotas**

  1 - Use os comando do Angular CLI para criar um novo componente que vai tratar a lista de fotos. Com isso organize seu código tirando toda responsabilidade de fotos de dentro app-componente.
    
  2 - Para que as diretivas funcione corretamente não esqueça de usar o módulo correto.

  3 - Código organizado crie sua primeira rota para exibir a lista de fotos.

  4 - Com a rota funcionando, crie um componente que renderize as imagens na tela corretamente usando uma lista de 6 x 6 
  4.1 - Ex: [0,1,2,3,4,5] / [6,7,8,9,10,11] ...
  4.2 - Esta lista não pode ser renderizada por css apenas pelo componente.

  X - Esta com dúvidas ? Leia o tópico **3 - Single Page Aplication, BrowserModule, CommonModule, Rotas e ActivatedRoute**

  **4 Etapa - Eventos de modificações**
  1 - Crie um campo para consulta das fotos.
  
  2 - Filtre as fotos pelo nome digitado no campo.
  
  3 - Após o filtro criado, crie uma validação que se caso não exisitir a foto digitada, mostrar na tela a mensagem "Status não encontrado!"
  
  4 - Organize seu código e não deixe que cada letra digitada no campo seja pesquisada. Use um pattern para resolver isso.
  
  5 - Na página inicial exiba apenas as 12 primeiras fotos e adicione um botão para carregar mais.

  6 - Está com dúvidas ? Leia o tópico **## 4 - Eventos no DOM, criando um PIPE**


