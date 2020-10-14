cd /home/wonseok/javascript-w5-accountbook/

git fetch --all

LOCAL=$(git rev-parse HEAD)

REMOTE=$(git rev-parse origin/master)

if [ $LOCAL != $REMOTE ]; then
      git pull origin master
      /home/wonseok/.nvm/versions/node/v14.13.0/bin/npm install
      /home/wonseok/.nvm/versions/node/v14.13.0/bin/npx webpack
      /home/wonseok/.nvm/versions/node/v14.13.0/bin/pm2 reload app
fi