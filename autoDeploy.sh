# 브랜치 이름을 변수에 할당
LOCAL=$(git rev-parse HEAD)

# 현재 브랜치의 최종 커밋의 해시값
REMOTE=$(git rev-parse origin)

if [ $LOCAL != $REMOTE ]; then
	git pull origin master
	npm i
	pm2 reload app
fi