# Amigo Secreto

## Descrição
Projeto web desenvolvido em JavaScript para simular um jogo de Amigo Secreto.  
O usuário pode adicionar nomes, removê-los com um clique, embaralhar os participantes e realizar um sorteio automático, garantindo que todos participem sem repetições indevidas.

O foco principal do projeto é o treinamento de lógica de programação, manipulação de arrays e interação com o DOM, utilizando HTML e CSS apenas como ferramentas de suporte visual.

---

## Funcionalidades
- Adição de nomes com validação contra duplicatas
- Remoção de nomes ao clicar diretamente sobre eles
- Embaralhamento aleatório dos participantes
- Sorteio automático em ciclo fechado
- Reinicialização completa da aplicação
- Interface visual organizada

---

## Lógica do Sorteio
Os nomes são armazenados em um array e embaralhados utilizando um algoritmo de randomização.  
Após o embaralhamento, cada participante é associado ao próximo da lista, e o último é ligado ao primeiro, formando um ciclo fechado.

Esse método garante:
- Nenhuma repetição
- Nenhuma autoatribuição
- Sorteio consistente e justo

---

## Tecnologias Utilizadas
- HTML5
- CSS3
- JavaScript (Vanilla JS)

---

## Conceitos Praticados
- Manipulação de arrays (push, splice, embaralhamento)
- Eventos de clique
- Interação com o DOM
- Criação dinâmica de elementos HTML
- Validação de entradas do usuário
- Controle de estado da aplicação
- Separação entre lógica e interface

---

## Estrutura do Projeto
/assets

index.html

style.css

/js

└── app.js

---

## Objetivo do Projeto
Projeto desenvolvido com fins educacionais para praticar lógica de programação e JavaScript puro, consolidando conceitos fundamentais que podem ser reutilizados em aplicações mais complexas.

---

## Otávio Faria
GitHub: otavioFaria0 

---