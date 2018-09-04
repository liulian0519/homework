package com.chinasoft.test;

import java.util.ArrayList;
import java.util.Date;
import java.util.LinkedList;

import com.chinasoft.entity.Student;

public class TestCollection
{

    public static void main(String[] args)
    {
        // 定义一个list集合
        ArrayList list = new ArrayList();
        LinkedList list2 = new LinkedList<>();
        list.add("aa");
        list.add(1223);
        list.add(new Date());
        list.add(true);
        list.add(new Student("04153095", "liulian", 21));
        System.out.println(list);

        ArrayList<Student> list1 = new ArrayList<Student>();
        list1.add(new Student("04153095", "liulian", 21));
        list1.add(new Student("04153096", "quanyue", 21));
        list1.add(new Student("04153094", "liuxin", 21));
        System.out.println(list1);
    }
}
