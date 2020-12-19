#!/usr/bin/bash

#upload to github
# before backup, make sure your branch with command git branch and set with git checkout <branch_name>
# if trouble
# git pull origin master
# git reset --mixed origin/master
# and than countinue bottom command
git add .
echo "Input commit description"
read n
git commit -m "$n"
# git push --set-upstream origin master
git push

