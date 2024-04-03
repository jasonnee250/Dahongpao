# 图形描述语言RMGL
> 缩写来源于kimi
> "RubyMatrix Graphics Language (RMGL)" “Ruby”取自“大红袍”茶的红色，代表颜色的丰富性；“Matrix”则代表节点的位置关系，整个名称传达出语言在图形节点描述上的精确性和多样性。

# 1.简单行描述
## 1.1.描述图形
### 1.1.1.一个图形的完整描述
如下所示：  
```java
Rect a x 0,y 0,w 100,h 50,angle 0,color 0xCCCCCC,text "hello world",alpha 1,borderWidth 2,borderColor 0x000000,borderAlpha 1;
```
Rect a 代表常见了一个矩形a；  
x 0 代表图形x坐标为0；  
y 0 代表图形y坐标为0；  
w 100代表图形宽度为100；  
h 50代表图形高度为50；   
angle 0代表图形旋转角度为0；   
color 0xCCCCCC代表图形填充颜色为0xCCCCCC；  
text "hello world" 代表图形内部文字为"hello world"；  
alpha 1代表图形填充透明度为1；  
borderWidth代表图形描边宽度为1；  
borderColor代表图形描边颜色为0x000000；  
borderAlpha代表图形描边透明度为1；  
### 1.1.2.省略描述
以上图形属性可以省略，属性省略的话会默认属性为缺省值，省略描述如下：  
```java
Rect a x 0,y 0,w 100,h 50,color 0xCCCCCC;
```
### 1.1.3.同时描述多个图形
可以对多个图形同时描述，如下：
```java
Rect a,b,c x 0,y 0,w 100,h 50,color 0xCCCCCC;
```
上述描述表示创建了三个矩形，位置坐标都是(0,0),宽度为100，高度为50，颜色为0xCCCCCC;

## 1.2 描述连接关系
```java
a --> b
```
上面表示a和b以直线相连接，箭头指向b；
```java
a -line-> b
```
上面表示方式和 <p>a --> b</p> 相同，表示a和b以直线相连接，箭头指向b；
```java
a -poly-> b
```
上面表示a和b以折线相连接，箭头指向b；
```java
a -curve-> b
```
上面表示a和b以曲线相连接，箭头指向b；