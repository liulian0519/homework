package com.chinasoft.test;

import java.util.Scanner;

import com.chinasoft.entity.DvdManager;

public class DvdMenu
{

    public static void main(String[] args)
    {
        DvdManager dvdManager = new DvdManager();

        dvdManager.showMenu();
        Scanner scanner = new Scanner(System.in);
        int a = scanner.nextInt();
        switch(a)
        {
            case 1:
                if(dvdManager.queryDvd())
                {
                    System.out.println("查看所有dvd资料");
                }
                break;
            case 2:
                break;

            default:
                break;
        }
    }
}
