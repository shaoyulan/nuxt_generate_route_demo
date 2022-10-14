  NAME=$1;
  SCRIPT=${2:-start}
  pm2 describe $NAME > /dev/null
  RUNNING=$?
  if [ "${RUNNING}" -ne 0 ]; then
    echo "start app '$NAME'..."
    pm2 start
  else
    echo "app is start"
    #pm2 restart $NAME
  fi;