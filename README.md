# `第一次markdown測試`
## `代辦事項`
>###### 搬家:
>>* 直接載  
>>* 機車托運  
>>~~詢問大型垃圾 舊衣回收箱~~  
>>~~筆電回收~~  
>>* 床墊處理  

>###### 未來瞭解目標:
>>* 資料庫語法  
>>* spring、現今網路架構  
>>* git版控是如何為共同編寫程式省時間的?  
>>* MarkDowm語法  
>>* 設置github page  

>###### 當兵準備:
>>* 3合1沐浴乳  
>>* 牙刷牙膏  
>>* 衛生紙(大)(小)  
>>* Commit Change test  

## `圖片測試`
 <!-- ![image]( https://github.com/KennyChung2000/Other-file/blob/main/README_PIC/2127237449.webp "MarkDown") -->
 <img src=https://github.com/KennyChung2000/Other-file/blob/main/README_PIC/2127237449.webp  width = "100" height = "100" alt="pic" align=center />

## `JS CODE SHOW SPACE`
```js
    function save(time_select,category,cash,remark) {                                                                                                                      
            if(cash!=""  & category!="項目" ){
                //上傳
                db.collection('users')                                                  
                .add({
                    time:time_select,
                    type:category,
                    money:cash,
                    title:remark
                })
                .then(function(docRef) {
                    console.log('Document written with ID: ', docRef.id)
                    db.collection('users')
                    .doc(docRef.id)
                    .set(
                        {
                        id: docRef.id
                        },
                        { merge: true }
                    )
                })
                .catch(function(error) {
                    console.error('Error adding document: ', error)
                })
            }
            else{
                alert("未輸入金額或選擇項目");
            }
        }
```
## `區塊測試`
##### `大區塊`
    區塊分為小區塊跟大區塊，通常用於一段相關內容的撰寫，一小段文字或是註釋都可能會用小區塊來表示
    ，而篇幅較大又不希望與一般段落內容混在一起的文字，就會使用大區塊來包覆。
##### `小區塊`
`這是小區塊`