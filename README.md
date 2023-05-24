# parallel_and_sequentials-pipelines

Esta repo é para mostrar como são executadas as pipelines sequenciais e paralelas ao mesmo tempo.
Ao executar testes em paralelo, é possível distribuir a carga de trabalho entre várias máquinas, processadores ou threads, permitindo que os testes sejam executados em paralelo e aproveitando melhor os recursos disponíveis. Isso é especialmente útil para casos em que há uma grande quantidade de testes ou quando os testes são demorados.

Steps:
1. Clona este projecto
2. npm init --y 
3. npm install cypress --save-dev
4. npm run open e adicione o projecto no Cypress Cloud (Está acção é necessária para executar testes paralelos com sucesso) e passe o ID no package.json

Para ver as pipeline a funcionarem localmente, execute:
1. npm run test:parallel
2. npm run test:sequential

Para ver as pipeline a funcionarem no repo com github Actions, faça alguma alteração e faça push no repo
