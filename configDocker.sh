echo 'Configurar usuario de docker'
usermod -aG docker estudiantes
echo 'Crear archivo de configuracion de proxy para docker'
mkdir -p /etc/systemd/system/docker.service.d
cd /etc/systemd/system/docker.service.d
touch http-proxy.conf
echo 'Escribiendo configuracion de proxy'
echo '[Service]' >> http-proxy.conf
echo 'Environment="HTTP_PROXY=http://proxy.udistrital.edu.co:3128/" "NO_PROXY=localhost,127.0.0.1"' >> http-proxy.conf
echo 'Reiniciando servicio de docker'
systemctl daemon-reload
systemctl restart docker
echo 'Reiniciando equipo'
reboot
