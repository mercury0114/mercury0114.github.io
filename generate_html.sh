MENU=$(cat menu.html)
export MENU
cat index.html_template | envsubst >index.html
cat contact.html_template | envsubst >contact.html

