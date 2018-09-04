package com.chinasoft.test;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.util.Scanner;

public class TestEnc
{
    public static void main(String[] args) throws Exception
    {
        byte enc = 56;
        Scanner sc = new Scanner(System.in);
        System.out.println("请输入要加密的文件名");
        String org = sc.next();

        System.out.println("请输入加密后的文件名");
        String newName = sc.next();

        FileInputStream fi = new FileInputStream(org);
        FileOutputStream fo = new FileOutputStream(newName);

        byte[] buffer = new byte[2048];
        int len = -1;
        while((len = fi.read(buffer)) > 0)
        {
            for(int i = 0; i < len; i++)
            {
                buffer[i] = (byte) (buffer[i] ^ enc);
            }
            fo.write(buffer, 0, len);
        }
        fi.close();
        fo.close();
        System.out.println("ok!.....");

    }

}
