# Conecta-New
Projeto da disciplina de programação de dispositivos móveis com ReactNative + Expo
Orientador : Prof. Luiz Gustavo Turatti
 A solução compartilhada nesse repositório consiste no desenvolvimento de uma plataforma para Kumon que integra alunos, responsáveis e equipe da unidade Kumon. O público participante é composto principalmente por famílias com filhos em idade escolar, de diferentes realidades socioeconômicas, com faixa etária média entre 3 a 18 anos. O grupo também envolve a equipe da unidade (orientador e auxiliares) e, de forma indireta, a comunidade escolar da região. O principal parceiro é o próprio Kumon Barão Geraldo Santa Isabel, por meio da orientação pedagógica e dos materiais de estudo, além do apoio das famílias na realização das atividades.
 
# EQUIPE:
202302381286 - Gabriel Nakamura Ramos


202302423108 - Luiz Alberto da Silva Junior

# SUMÁRIO:
1. Requisitos
2. Configuração do acesso de dados
3. Estrutura do Projeto
4. Instale os requisitos do projeto
5. Executando o porjeto
6. Telas do projeto

 # REQUISITOS:
NodeJS LTS versão X.Y.Z

React Native versão X.Y.Z

ExpoGo Android: https://play.google.com/store/apps/details?id=host.exp.exponent) / Ios: https://apps.apple.com/br/app/expo-go/id982107779
Banco de dados: Supabase

# TABELA USUÁRIOS 





# CONFIGURAÇÃO DO ACESSO DO BANCO DE DADOS



# ESTRUTURA DO PROJETO




# INSTALE OS REQUISITOS DO PROJETO
Instruções para instalação em um computador com Windows 11
Caso não tenha o chocolatey instalado, inicie o preparo do sistema abrindo um terminar do powershell com privilégio de administrador.



PS> Set-ExecutionPolicy AllSigned
PS> Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
PS> choco --version  




Com o chocolatey instalado, continuamos com a instalação dos requisitos do projeto.




PS> choco install nodejs-lts -y
PS> choco install openjdk17 -y
PS> choco install nvm -y





# EXECUTE O PROJETO

```bash
npx expo start




