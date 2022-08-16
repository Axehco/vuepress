git checkout --orphan Newbranch
git add -A
git commit -m "deploy"
git branch -D master
git branch -m master
git push -f origin master