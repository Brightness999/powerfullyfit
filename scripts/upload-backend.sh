# build frontend
cd ../web_app && ng build --prod

# build backend
cd ../backend && npm run prebuild && npm run build 

rm -rf ../backend/client/*
cp ../web_app/dist/* ../backend/client

zip -r web_backend ../backend/dist/*
zip -r web_frontend ../web_app/dist/*

scp -r web_frontend.zip root@66.42.110.119:/var/www/
scp -r web_backend.zip root@66.42.110.119:/var/www/

ssh root@66.42.110.119 << EOF
    cd /var/www
    rm -rf web_app
    rm -rf backend
    unzip web_frontend.zip
    unzip web_backend.zip
    rm -rf web_backend.zip
    rm -rf web_frontend.zip
EOF

# Password: }J8g_1LX*[o}{f7W

# sudo systemctl restart nginx