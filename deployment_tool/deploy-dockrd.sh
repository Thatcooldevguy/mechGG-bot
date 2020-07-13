sleep 2.5
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
nvm install 13
nvm use 13
apt-get install git -y
git clone https://github.com/Thatcooldevguy/mechGG-bot.git
cd mechGG-bot
npm install
echo "DEPLOY COMPLETE FOR ALT DOCKER."
echo "done."
exit 0
