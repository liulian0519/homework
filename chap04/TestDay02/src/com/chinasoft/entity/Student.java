package com.chinasoft.entity;

public class Student
{

    private String stuNo;
    private String stuName;
    private int stuAge;

    public String getStuNo()
    {
        return stuNo;
    }

    public void setStuNo(String stuNo)
    {
        this.stuNo = stuNo;
    }

    public String getStuName()
    {
        return stuName;
    }

    public void setStuName(String stuName)
    {
        this.stuName = stuName;
    }

    public int getStuAge()
    {
        return stuAge;
    }

    public void setStuAge(int stuAge)
    {
        this.stuAge = stuAge;
    }

    public Student(String stuNo, String stuName, int stuAge)
    {
        super();
        this.stuNo = stuNo;
        this.stuName = stuName;
        this.stuAge = stuAge;
    }

    public Student()
    {

    }

    @Override
    public String toString()
    {
        return "Student [stuNo=" + stuNo + ", stuName=" + stuName + ", stuAge=" + stuAge + "]";
    }

}
