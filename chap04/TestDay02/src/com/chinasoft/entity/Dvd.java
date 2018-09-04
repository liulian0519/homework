package com.chinasoft.entity;

import java.text.SimpleDateFormat;
import java.util.Date;

public class Dvd
{
    private String id;
    private String name;
    private String type;
    private boolean status; // 是否被借出
    private Date lendTime;
    private Date returnTime;

    public Dvd(String id, String name, String type)
    {
        super();
        this.id = id;
        this.name = name;
        this.type = type;
        this.lendTime = null;
        this.returnTime = null;
    }

    public Dvd()
    {

    }

    public String showInfor()
    {
        SimpleDateFormat sDateFormat = new SimpleDateFormat("yyyy年MM月dd日 HH:mm:ss a");
        String isLend = null;
        isLend = this.status ? "已借出" : "未借出";
        String bt;
        bt = this.lendTime == null ? "" : sDateFormat.format(this.lendTime);

        String rt;
        rt = this.returnTime == null ? "" : sDateFormat.format(this.returnTime);

        return "编号：" + this.id + "片名：" + this.name + "是否借出" + isLend + "借出时间：" + bt + "归还时间" + rt;
    }

}
