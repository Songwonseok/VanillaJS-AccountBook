git fetch

LOCAL=$(git rev-parse HEAD)

REMOTE=$(git rev-parse origin/master)

if [ $LOCAL != $REMOTE ]; then
      git pull origin master
      npm i
      pm2 reload app
fi