# 브랜치 이름을 변수에 할당
BRANCH=$(git rev-parse --abbrev-ref HEAD)

# 현재 브랜치의 최종 커밋의 해시값
HASH=$(git rev-parse HEAD)

# 원격에 업로드된 현재 브랜치의 커밋 해시
REMOTE_HASH=$(git rev-parse --verify origin/$BRANCH)


if [ $HASH != $REMOTE_HASH ]; then
	git pull
	npm i
	pm2 reload app
fi 
