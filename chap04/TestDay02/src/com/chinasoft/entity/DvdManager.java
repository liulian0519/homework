package com.chinasoft.entity;

public class DvdManager
{

    Dvd[] dvds = new Dvd[1000];

    public DvdManager()
    {
        dvds[0] = new Dvd("CD001", "叶问", "动作片");
        dvds[1] = new Dvd("CD002", "叶问", "动作片");
        dvds[2] = new Dvd("CD003", "叶问", "动作片");
        dvds[3] = new Dvd("CD004", "叶问", "动作片");
    }

    public boolean addDvd(Dvd dvd)
    {
        return false;
    }

    public boolean removeDvd(Dvd dvd)
    {
        return false;
    }

    public boolean queryDvd()
    {
        return true;
        // return false;
    }

    public void lendDvd()
    {

    }

    public void showMenu()
    {
        System.out.println("***************DvD管理系统*********************");
        System.out.println("1.查询所有DVD资料");
        System.out.println("2.增加DVD资料");
        System.out.println("3.删除DVD资料");
        System.out.println("4.借出DVD");
        System.out.println("5.归还DVD");
        System.out.println("6.推出");
        System.out.println("请输入你的操作（1-6）：");
    }
}
