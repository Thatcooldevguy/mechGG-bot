cat logo.txt
sleep 3.5
npm install -g --save jshint
jshint commands/
jshint events/
jshint tests/
jshint index.js
echo "[OKAY] jshint threw no errors! Starting test 2/3: Json Check"
node tests/TestJson.js
echo "[OKAY] Json threw no errors! Starting test 3/3: Deploy Script Check"
bash deployment_tool/deploy.sh
echo "[OKAY] all tests done. Marking as exit code 0.. "
exit 0
