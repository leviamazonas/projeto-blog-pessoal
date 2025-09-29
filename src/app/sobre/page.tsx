"use client";

import { useRouter } from 'next/navigation';

export default function Sobre() {
  const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-600 mb-6">
        Sobre o blog e o autor
      </h1>

      <div className="space-y-4 text-justify leading-relaxed">
        <p>
          Olá, eu sou o Levi. Um homem trans de 34 anos, aquariano nascido em Manaus, publicitário por formação e desenvolvedor por vocação. Fui diagnosticado com autismo nível 1 e TDAH já na vida adulta, o que me ajudou a entender meu próprio manual.
        </p>
        <p>
          Este blog nasceu da necessidade de documentar minhas três grandes transições: a de <strong>carreira</strong>, saindo da publicidade para mergulhar no universo da tecnologia; a de <strong>gênero</strong>, uma jornada de autoconhecimento que me permitiu finalmente viver, e não apenas sobreviver; e a de <strong>percepção</strong>, ao entender como a neurodiversidade molda a minha forma de existir no mundo.
        </p>
        <p>
          E qual a liga que une tudo isso? A paixão pelo Corinthians.
        </p>
        <p>
          O "Transição em Preto e Branco" é meu manifesto. É um espaço para falar sobre código, identidade, saúde mental e recomeços, tudo sob a ótica de quem aprendeu que a vida, assim como o Coringão, exige raça, resiliência e uma fé inabalável.
        </p>
        <p>
          Aqui, cada desafio é um jogo difícil e cada vitória é um gol aos 45 do segundo tempo. Sinta-se em casa nesta arquibancada. Bem-vindo ao bando.
        </p>
      </div>

      <div className="mt-8">
        <button
          onClick={() => router.back()}
          className="bg-gray-800 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors duration-300"
        >
          Voltar
        </button>
      </div>
    </div>
  );
}