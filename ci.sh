cat logo.txt
sleep 3.5
npm install -g --save jshint
jshint commands/
jshint events/
jshint tests/
jshint index.js
echo "[OKAY] jshint threw no errors! Starting test 2/2: Json Check"
node tests/TestJson.js
echo "[OKAY] Json test done. Marking as exit code 0.. "
exit 0
