# uwe-majesteit
`/etc/nginx/sites-enabled/hostname.com`:
```
server {
  listen <ip>:80 default_server; # http
  listen <ip>:443 default_server ssl; # https
  
  root /var/www/hostname.com;
  index index.html;
  server_name hostname.com www.hostname.com;

  # http
  ssl_certificate <fullchain_path>;
  ssl_certificate_key <privkey_path>;
  
  # https
  ssl_certificate <fullchain_path>;
  ssl_certificate_key <privkey_path>;

  #include /etc/letsencrypt/options-ssl-nginx.conf;
  
  # force ssl
  if ($scheme != "https") {
    return 301 https://$host$request_uri;
  }

  location / {
    try_files $uri $uri/ =404;
  }
}
```
