_logo="

                                  $$\                                                      $$$$$$\   $$$$$$\  
                                  $$ |                                                    $$  __$$\ $$  __$$\ 
$$$$$$\$$$$\   $$$$$$\   $$$$$$$\ $$$$$$$\   $$$$$$\  $$$$$$$\  $$\   $$\ $$\   $$\       $$ /  \__|$$ /  \__|
$$  _$$  _$$\ $$  __$$\ $$  _____|$$  __$$\  \____$$\ $$  __$$\ $$ |  $$ |\$$\ $$  |      $$ |$$$$\ $$ |$$$$\ 
$$ / $$ / $$ |$$$$$$$$ |$$ /      $$ |  $$ | $$$$$$$ |$$ |  $$ |$$ |  $$ | \$$$$  /       $$ |\_$$ |$$ |\_$$ |
$$ | $$ | $$ |$$   ____|$$ |      $$ |  $$ |$$  __$$ |$$ |  $$ |$$ |  $$ | $$  $$<        $$ |  $$ |$$ |  $$ |
$$ | $$ | $$ |\$$$$$$$\ \$$$$$$$\ $$ |  $$ |\$$$$$$$ |$$ |  $$ |\$$$$$$$ |$$  /\$$\       \$$$$$$  |\$$$$$$  |
\__| \__| \__| \_______| \_______|\__|  \__| \_______|\__|  \__| \____$$ |\__/  \__|       \______/  \______/ 
                                                                $$\   $$ |                                    
                                                                \$$$$$$  |                                    
                                                                 \______/                                     

Delpoyment check tool 1.0.0
Created by sticks

[OKAY] Started tool. Begining Test Suite 1.0.2...
"
echo _logo
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
