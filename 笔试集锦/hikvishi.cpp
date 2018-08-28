/**
海康威视 2019/8/21 
题目：
	输入：3
	输出： 1
		   1 2 1
		   1 2 3 2 1
		   
	输入：N
	输出：1
	      1 2 1
		  1 2 3 2 1
		  1 2 3 4 3 2 1
		  ....
		  1 2 3 ... n ... 3 2 1 
*/ 
#include<stdio.h>
int main(void){
	int i,j,n;
	scanf("%d",&n);
	for(i=1;i<=n;i++){
		for(j=1;j<i;j++)
			printf("%d ",j);
		for(j=i;j>0;j--)
			printf("%d ",j);
		printf("\n");
	}
	return 0;
}
