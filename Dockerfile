
FROM node:21-alpine

WORKDIR /frontend/

# executa a aplicação em produção (menor tempo de resposta)
ENV NODE_ENV=production

# exportação da porta do frotend 
EXPOSE 3000

# copia os arquivos de configuração
COPY vite.config.js .
COPY package*.json .

# executa o comando para instalar as dependencias
RUN npm install

# copia o projeto
COPY . .

# comando de inicialização do servidor
CMD ["npm","run","dev"]
