ng build --prod --aot
cd dist/ipu-ranklist
cp index.html 200.html
echo 'ipuranklist.surge.sh' > CNAME
surge