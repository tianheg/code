#!/usr/bin/env bash

echo "`whoami` ALL=(ALL) NOPASSWD:ALL" | sudo tee "/etc/sudoers.d/dont-prompt-$USER-for-sudo-password"

# https://soulteary.com/2022/06/21/building-a-cost-effective-linux-learning-environment-on-a-laptop-the-basics.html#%E9%85%8D%E7%BD%AE%E6%89%A7%E8%A1%8C%E7%89%B9%E6%9D%83%E5%91%BD%E4%BB%A4%E5%85%8D%E8%BE%93%E5%85%A5%E5%AF%86%E7%A0%81
