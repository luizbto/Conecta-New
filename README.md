# CONECTA - NEW


Projeto da disciplina de programação de dispositivos móveis com ReactNative + Expo(Android)

Orientador: Prof Luiz Gustavo Turatti

A solução compartilhada neste repositório no desenvolvimento de uma plataforma desenvolvida com o propósito de criar uma plataforma web voltada à integração entre usuários, possibilitando o cadastro, login e interação por meio de perfis e postagens de projetos. A iniciativa surgiu da necessidade de compreender, na prática, o funcionamento de um sistema completo de autenticação e gerenciamento de dados utilizando tecnologias modernas do desenvolvimento web. 




# EQUIPE 
202302381286 - GABRIEL NAKAMURA RAMOS


202302423108 - LUIZ ALBERTO DA SILVA JUNIOR


# SUMÁRIO 
1. Requisitos

2.  Configuração de acesso aos dados

3.  Estrutura do projeto

4. Instale os requisitos do projeto

5. Executando o projeto


# REQUISITOS 

- NODEJS LTS versão "1.2.0"

- React Native versão "0.81.4"

- ExpoGO (https://apps.apple.com/br/app/expo-go/id982107779) / (https://play.google.com/store/apps/details?id=host.exp.exponent)


# TABELA USUÁRIOS

| id          | uuid (Primary Key) | Gerado automaticamente |


| title       | text               | Nome do projeto        |


| description | text               | Descrição              |


| professor   | text               | Responsável            |


| created_at  | timestamp          | Data de criação        |


# CONFIGURAÇÃO DO ACESSO AO BANCO DE DADOS

import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://lrwzxowwdxipjrzapbjc.supabase.co'


const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxyd3p4b3d3ZHhpcGpyemFwYmpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE0NTMxODUsImV4cCI6MjA3NzAyOTE4NX0.50TFQRMFzmxXQSDeUCuJiesSgWJRypAmusp22ctUXhI'



export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)


# ESTRUTURA DO PROEJETO

CONECTA - NEW/
├── apresentacao


│ ├── apresentacao.pdf


│   └── apresentacao.pptx


├── backend


│   ├── src


│   ├── .gitignore


│   ├── readme.md


│   └── ...demais arquivos


├── documentacao


│   ├── 01_cartaDeApresentacao.pdf


│   ├── 02_cartaDeAutorizacao.pdf


│   ├── 03_declaracaoDeUsoDeDadosPublicos.pdf


│   ├── 04_roteiroDeExtensao.pdf


│   └── documentacao.md


├── frontend


│   ├── assets


│   ├── src


│   ├── .gitignore


│   ├── package.json


│   ├── readme.md


│   └── ...demais arquivos


├── video


│   ├── apresentacao.gif


│   ├── apresentacao.mkv


│   ├── apresentacao.mp4


│   └── video.txt


# INSTALE OS REQUISITOS DO PROJETO: 

Instruções para instalação em um computador com Windows 11

Caso não tenha o chocolatey instalado, inicie o preparo do sistema abrindo um terminar do powershell com privilégio de administrador


PS> Set-ExecutionPolicy AllSigned


PS> Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))


PS> choco --version


Com o chocolatey instalado, continuamos com a instalação dos requisitos do projeto


PS> choco install nodejs-lts -y


PS> choco install openjdk17 -y


PS> choco install nvm -y


# EXECUTE O PROJETO: 

"dash
npx expo start
