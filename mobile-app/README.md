# Combat Ready 🥊

Aplicação móvel para praticantes de desportos de combate (boxe, muay thai,
kickboxing, MMA, jiu-jitsu e luta olímpica) treinarem sozinhos, com conteúdo
adaptado a três níveis — **iniciante**, **intermédio** e **profissional**.

Este projeto é independente do site de encontros neste repositório: vive
inteiramente dentro da pasta `mobile-app/` e não partilha código com o
Symfony.

## Funcionalidades (MVP)

- **Onboarding**: nome, nível e modalidades favoritas (guardado no telemóvel).
- **Técnicas**: por modalidade e nível, com pontos-chave e drills para
  treinar sozinho (shadow, saco, drills solo).
- **Preparação física**: plano semanal de treino (força, condicionamento,
  mobilidade) adaptado ao nível, com marcação de sessões concluídas.
- **Dieta**: princípios de nutrição, hidratação, exemplo de dia alimentar e
  notas sobre suplementação por nível.
- **Perfil**: editar nível/modalidades e ver progresso (sessões concluídas).

## Como correr a app

Precisas de ter o [Node.js](https://nodejs.org) instalado no computador, e a
app **Expo Go** instalada no telemóvel (grátis na App Store / Google Play).

```bash
cd mobile-app
npm install
npm start
```

Isto abre o Expo Dev Tools no terminal com um QR code. Aponta a câmara do
telemóvel (iOS) ou a app Expo Go (Android) para o QR code e a app abre
diretamente no teu telemóvel — não precisas de compilar nada.

Também podes correr:

```bash
npm run android   # emulador Android
npm run ios       # simulador iOS (só em macOS)
npm run web       # no browser
```

## Estrutura do projeto

```
mobile-app/
├── App.tsx                      # ponto de entrada
├── src/
│   ├── context/UserContext.tsx  # perfil do utilizador (AsyncStorage)
│   ├── data/                    # conteúdo: técnicas, treinos, dietas
│   ├── navigation/               # tabs + stacks
│   ├── screens/                  # ecrãs da app
│   ├── components/               # componentes reutilizáveis
│   └── theme/                    # cores, espaçamento, tipografia
```

## Próximos passos sugeridos

- Vídeos/GIFs demonstrativos para cada técnica.
- Temporizador integrado para os drills e rounds.
- Conta na cloud (backend) para sincronizar progresso entre dispositivos.
- Mais modalidades e mais técnicas por nível.
- Plano de dieta personalizado por peso/objetivo (não só por nível).
