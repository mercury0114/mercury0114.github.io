MENU=$(cat menu.misc)
export MENU
cat index.html_template | envsubst >index.html
../../styleguide/html/format_html.sh index.html
cat contact.html_template | envsubst >contact.html
../../styleguide/html/format_html.sh contact.html
cat about_us.html_template | envsubst >about_us.html
../../styleguide/html/format_html.sh about_us.html
mv *.html ../
