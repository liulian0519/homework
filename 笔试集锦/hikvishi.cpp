/**
�������� 2019/8/21 
��Ŀ��
	���룺3
	����� 1
		   1 2 1
		   1 2 3 2 1
		   
	���룺N
	�����1
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
