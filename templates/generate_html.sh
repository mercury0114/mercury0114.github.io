MENU=$(cat menu.misc)
HEAD=$(cat head.misc)
export MENU HEAD
cat index.html_template | envsubst >index.html
../../styleguide/html/format_html.sh index.html
cat contact.html_template | envsubst >contact.html
../../styleguide/html/format_html.sh contact.html
cat about_us.html_template | envsubst >about_us.html
../../styleguide/html/format_html.sh about_us.html
cat services.html_template | envsubst >services.html
../../styleguide/html/format_html.sh services.html
mv *.html ../

