class Solution:
    def defangIPaddr(self, address: str) -> str:
        text=""
        for i in address :
            if(i==".") :
                text+="[.]"
            else :
                text+=i
        return text

obj=Solution()
result=obj.defangIPaddr("127.23.14")
print(result)