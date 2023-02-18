MENU=$(cat menu.misc)
export MENU
cat index.template | envsubst >index.html
../styleguide/html/format_html.sh index.html
cat contact.template | envsubst >contact.html
../styleguide/html/format_html.sh contact.html
cat about_us.template | envsubst >about_us.html
../styleguide/html/format_html.sh about_us.html

