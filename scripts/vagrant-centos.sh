#!/bin/bash/

echo "Make Sure Vagrant, Virtual BOX and Aria2c are installed and in path ;)"

echo "Creating Directory"
mkdir -p ~/vagrant/centos7/ && cd ~/vagrant/centos7

echo "Downloading CentOS Box"
aria2c -x 10 -s 10 -c "https://github.com/tommy-muehle/puppet-vagrant-boxes/releases/download/1.1.0/centos-7.0-x86_64.box"

echo "Adding Box to Vagrant"
vagrant box add centos-7.0-x86_64.box --name centos7

echo "Initializing Added box for Vagrant"
vagrant init

echo "Changing Box Name to CentOS 7 from base"
sed -i 's/config.vm.box = "base"/config.vm.box = "centos7"/' Vagrantfile

echo "Starting up Vagrant Box"
vagrant up
