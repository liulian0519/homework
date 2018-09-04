package com.chinasoft.test;

import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

public class TestMap
{

    public static void main(String[] args)
    {
        Map map = new HashMap();
        map.put("cn", "中国");
        map.put("us", "美国");
        map.put("uk", "英国");
        System.out.println(map);

        Set keysetSet = map.keySet();
        Iterator iterator = keysetSet.iterator();
        while(iterator.hasNext())
        {
            System.out.print(iterator.next() + " ");
        }
        System.out.println();
        Collection values = map.values();
        Iterator iterator2 = values.iterator();
        while(iterator2.hasNext())
        {
            System.out.print(iterator2.next() + " ");
        }

    }
}
