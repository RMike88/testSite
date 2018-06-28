#!/usr/bin/python3
import subprocess
subprocess.check_output('mkdir ./testDir', shell=True)
subprocess.check_output('cp ./psd ./testDir -R', shell=True)
subprocess.check_output('cd  testDir', shell=True)
subprocess.check_output('mkdir ./test1', shell=True)
subprocess.check_output('mkdir ./test2', shell=True)
subprocess.check_output('mkdir ./test3', shell=True)