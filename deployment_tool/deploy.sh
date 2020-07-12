cat deploy-logo.txt
sleep 2.5
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
nvm install 13
nvm use 13
apt-get install git -y
git clone https://github.com/Thatcooldevguy/mechGG-bot.git
cd mechGG-bot
npm install
echo ""
echo "done."
exit 0
