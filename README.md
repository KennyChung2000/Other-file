# `第一次markdown測試`
## `代辦事項`
>###### 搬家:
>>1.直接載  
>>2.機車托運  
>>~~3.詢問大型垃圾 舊衣回收箱~~  
>>~~4.筆電回收~~  
>>5.床墊處理  

>###### 未來瞭解目標:
>>1.資料庫語法  
>>2.spring、現今網路架構  
>>3.git版控是如何為共同編寫程式省時間的?  
>>4.MarkDowm語法  
>>5.設置github page  

>###### 當兵準備:
>>1.3合1沐浴乳  
>>2.牙刷牙膏  
>>3.衛生紙(大)(小)  
>>4.Commit Change test  

## `圖片測試`
 <!-- ![image]( https://github.com/KennyChung2000/Other-file/blob/main/README_PIC/2127237449.webp "MarkDown") -->
 <img src=" https://github.com/KennyChung2000/Other-file/blob/main/README_PIC/2127237449.webp" width = "100" height = "100" alt="pic" align=center />

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