# GestaoConsultorioMedico

Sistema de Gestão de Consultórios Médicos desenvolvido utilizando Angular e .NET
O projeto foi gerado através do [.NET CLI](https://docs.microsoft.com/pt-br/aspnet/core/client-side/spa/angular?view=aspnetcore-2.2&tabs=visual-studio) version 2.1.801.
O comando utilizado foi `dotnet new angular`.

## Iniciar a Aplicação Cliente (front-end)

Acesse o diretório **/ClienteApp** e execute os seguintes comandos:

| Comando | Descrição |
| ------- | ----------- |
| `npm install` | Instalar dependências |
| `npm start` | Ligar servidor front-end no endereço `http://localhost:4200/` |


## Iniciar a Aplicação Servidor (back-end)

Acesse o diretório **raiz** e execute os seguintes comandos:

| Comando | Descrição |
| ------- | ----------- |
| `dotnet build` | Construir dependências e Compilar aplicação |
| `dotnet run` | Ligar servidor back-end no endereço `http://localhost:5000/` |

## Executar testes unitários

Desculpe... Em desenvolvimento...

## Informações importantes

Você pode precisar inserir variáveis de ambiente para usar os comandos `dotnet`. A string do banco de dados está configurada como `root:root` e você pode alterá-la em `appsettings`caso tenha interesse. Ressalto que a aplicação se encarregará de criar o banco de dados, caso ele não exista.

| Comando | Descrição |
| ------- | ----------- |
| `SET ASPNETCORE_Environment=Development` | Inserindo variável de ambiente em terminal (ambiente windows) |
| `export ASPNETCORE_Environment=Development` | Inserindo variável de ambiente em terminal (ambiente linux) |
