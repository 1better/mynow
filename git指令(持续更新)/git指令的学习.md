## git指令的学习（下边的还是尽量默写出来）

基本操作

+ git clone + ... .git 克隆自己或别人的项目
+ git  status    查看状态
+ git add .       将修改添加到git上
+ git status     再次查看状态
+ git  commit  -m  'mymymy'    为修改地方添加上修改信息(一定不要忘记,新建分支因为这个失败了好多次！)
+ git  push      推送上去

创建分支(没我想的那么难)  

+ git   branch   查看分支状态
+ git   branch   moveweb    创建分支moveweb
+ git   push  branch   origin   moveweb :  moveweb   远程创建分支
+ git  checkout   moveweb    切换分支到moveweb
+ git push --set-upstream origin h5     为分支添加东西必不可少（一般都有提示）
+ git  commit  -m  'mymymy'   *** 一定不要忘记这一步操作！！**

删除仓库

+  find . -name ".git" | xargs rm -Rf   （删除本地仓库,可以把master给去掉）