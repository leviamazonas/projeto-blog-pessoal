export type blog = {
  id: number;
  titulo: string;
  conteudo: string;
  autor: string;
}

export const blogs: blog[] = [
  {
    id: 1,
    titulo: "Meu Primeiro Commit: A história por trás do código",
    conteudo: `
      Sempre me disseram que a vida não é um roteiro, e a minha parece ter sido escrita com alguns plot twists. Me chamo Levi, e esta é a história de como saí de um roteiro que não era meu para começar a programar o meu próprio código-fonte.

      Tudo começou em Manaus, numa sexta-feira de carnaval. Como um bom aquariano, desde cedo fui movido pela curiosidade pelo tecnológico. Videogames e computadores eram meus companheiros, mas eu era apenas um espectador, longe de imaginar que um dia estaria do outro lado da tela, criando. Naquela época, a maior programação que eu tentava decifrar era eu mesmo.

      A primeira linha desse código que bugava minha mente veio aos 15 anos, quando entendi que sentia atração por mulheres. Em Manaus, o medo do preconceito era um firewall pesado, principalmente porque meu jeito de vestir já era considerado "masculino". Então, vivi em modo anônimo. Entrei em Direito na UFAM, mas a carreira me impunha um dress code que era um erro 404 para a minha alma: usar um terninho feminino e salto era impossível. Meu sistema travou ali.

      O ponto de virada foi uma viagem a São Paulo. A cidade que nunca dorme me despertou. Decidi que meu lugar não era mais em Manaus, nem nos corredores do fórum. Mudei-me, troquei o Direito por um curso de produção musical e senti pela primeira vez a liberdade de usar o cabelo curto e as roupas que sempre foram minhas. Mas a liberdade custava caro, e os equipamentos de som eram um investimento fora da minha realidade. Acabei no telemarketing, um trabalho estressante onde, pelo menos, minha aparência não era um problema.

      Foram sete anos vendendo serviços de telefonia e uma conclusão amarga: talvez eu devesse apenas aguentar firme para, quem sabe, "reencarnar como um homem" na próxima vida. Esse pensamento me afundou. A realidade me atingiu como um carrinho por trás quando uma supervisora, após me aprovar para uma vaga, pediu que eu me vestisse de "forma mais feminina" para não incomodar os clientes. Aquilo doeu mais que rebaixamento.

      A luz no fim do túnel veio de onde eu menos esperava: da nossa casa. Fui aprovado para ser anfitrião na Neo Química Arena. Ali, sendo constantemente "confundido" com um garoto, eu sentia uma alegria imensa. Era a confirmação do que eu sempre soube. A tristeza só vinha quando os olhares confusos apareciam ao me apresentar com meu nome de registro.

      Com a pandemia, o sentimento de estar preso num corpo que não era meu se tornou insuportável. Foi a minha terapeuta que me deu o empurrão que eu precisava. Acompanhar a transição de um amigo me mostrou que era possível, que hormônios e cirurgias não eram coisas de outro mundo. Vi outros homens trans nas redes sociais e a ficha caiu: eu não precisava esperar outra vida. Eu podia viver a minha agora.

      Reconhecer-me como um homem trans foi o apito inicial da minha verdadeira partida. Troquei a sobrevivência pela vontade de viver. Retifiquei meus documentos, comecei o tratamento hormonal, fiz a mamoplastia e entrei na faculdade de Publicidade e Propaganda, buscando usar a criatividade que todos diziam que eu tinha.

      Estagiei em uma grande agência, trabalhei com ações sociais na Secretaria de Direitos Humanos de São Paulo – uma experiência que enriqueceu minha alma, apesar do salário baixo. Mas a saudade de casa falou mais alto, e eu voltei para Manaus. Foi aqui, trabalhando presencialmente em uma agência local, que os gatilhos do meu autismo (recém-descoberto) começaram a apitar alto demais. O barulho, os estímulos... eu precisava de um novo plano de jogo.

      A tecnologia surgiu como a virada de chave: salários melhores para arcar com minhas medicações e a possibilidade de trabalhar de casa, em um ambiente controlado. Foi quando encontrei o DiversificaDev, um curso de HTML, CSS e JavaScript para pessoas trans. Eu, que não entendia nada de carreira tech, me apaixonei. Percebi que programar não era um bicho de sete cabeças e que eu tinha capacidade para isso.

      Hoje, ainda divido meu tempo entre planejar campanhas de marketing digital e tocar meus projetos de desenvolvimento, como este blog. Mas a cada linha de TypeScript e a cada componente em React, tenho mais certeza do meu caminho.

      Esta é a minha história até agora. Uma transição em preto e branco. É a crônica de quem está aprendendo a programar a própria vida, com a raça e a fé de quem acredita que, no final, a gente sempre vai lutar.

      Obrigado por estar aqui. A partida está só começando.
    `,
    autor: "Levi Amazonas",
  },
  {
    id: 2,
    titulo: "Do 'Sobre Mim' em HTML ao Sonho com Banco de Dados",
    conteudo: `
      Minha jornada oficial no mundo do código começou em outubro de 2024, quando me inscrevi em um curso para iniciantes do DiversificaDev. Ali, tive meu primeiro contato real com as três colunas da web: HTML, CSS e um pouco de JavaScript. A sensação de criar algo do zero, estruturando uma página e dando vida a ela com estilos e interações, foi transformadora.

      O projeto final daquele curso foi uma página simples "Sobre Mim". Era um arquivo HTML único, sem a complexidade de rotas e componentes que este blog possui hoje. Foi um trabalho feito com código puro, onde cada tag e cada propriedade CSS foram escritas manualmente. Mal sabia eu que aquela página estática era o alicerce para tudo que viria depois.

      Com o fim do curso, senti uma vontade de continuar conectado àquela comunidade incrível e me tornei voluntário no projeto. Fui monitor de uma nova turma, com a tarefa de acompanhar as aulas e ajudar os alunos que, assim como eu meses antes, estavam dando seus primeiros passos. Essa experiência foi fundamental. Ensinar é uma das melhores formas de aprender, e auxiliar nas dúvidas dos outros me forçou a solidificar tudo que eu havia estudado.

      No segundo semestre deste ano, uma nova oportunidade surgiu e precisei pausar o voluntariado para focar minhas energias no Programa Desenvolve, do Grupo Boticário. E que intensidade! O programa tem sido uma imersão profunda, com aulas e projetos que me desafiam a todo momento. A maior parte dos trabalhos é em grupo, e tive a sorte de cair em uma equipe excelente, com pessoas comprometidas e colaborativas, onde o trabalho flui de forma leve e a ajuda é mútua.

      Este blog é um marco importante dentro do programa: meu primeiro projeto solo usando uma stack moderna com Next.js, React, TypeScript e Tailwind. É o meu campo de provas, o lugar onde estou aplicando e aprofundando todo o conhecimento adquirido.

      O próximo passo? A ideia é ir além e integrar um banco de dados a este projeto. Se eu conseguir, vocês saberão, pois um campo de comentários aparecerá no final de cada artigo. Seria a prova definitiva de que a jornada, que começou com uma simples página "Sobre Mim", está evoluindo para algo muito maior.
    `,
    autor: "Levi Amazonas",
  },
  {
    id: 3,
    titulo: "Rounder round its the sound of the App Router",
    conteudo: `
      O Next.js evoluiu bastante desde as primeiras versões. Até a versão 12 (e parte da 13),
      o sistema de rotas era baseado na pasta "pages". Cada arquivo virava uma rota e o modelo
      funcionava bem, mas tinha limitações em layouts e aninhamento de rotas.
      
      O App Router chegou para mudar esse cenário. Agora, as rotas são definidas dentro da pasta
      "app", onde cada diretório pode ter um arquivo "page.tsx" (ou "page.js") e também arquivos
      especiais como "layout.tsx", "error.tsx" e "loading.tsx". Essa estrutura permite criar
      layouts compartilhados, rotas aninhadas e usar de forma natural os Server Components.
      
      Embora o Pages Router ainda funcione e seja mantido, o App Router é considerado o futuro do
      Next.js e já é recomendado para novos projetos. Ele oferece muito mais flexibilidade e
      performance, além de estar alinhado com a visão moderna do React.
    `,
    autor: "Levi Amazonas",
  },
  {
    id: 4,
    titulo: "Mesma coisa só que diferente",
    conteudo: `
      O Next.js evoluiu bastante desde as primeiras versões. Até a versão 12 (e parte da 13),
      o sistema de rotas era baseado na pasta "pages". Cada arquivo virava uma rota e o modelo
      funcionava bem, mas tinha limitações em layouts e aninhamento de rotas.
      
      O App Router chegou para mudar esse cenário. Agora, as rotas são definidas dentro da pasta
      "app", onde cada diretório pode ter um arquivo "page.tsx" (ou "page.js") e também arquivos
      especiais como "layout.tsx", "error.tsx" e "loading.tsx". Essa estrutura permite criar
      layouts compartilhados, rotas aninhadas e usar de forma natural os Server Components.
      
      Embora o Pages Router ainda funcione e seja mantido, o App Router é considerado o futuro do
      Next.js e já é recomendado para novos projetos. Ele oferece muito mais flexibilidade e
      performance, além de estar alinhado com a visão moderna do React.
    `,
    autor: "Levi Amazonas",
  },
];