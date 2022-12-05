# `第一次markdown測試`
 ![image]( https://github.com/KennyChung2000/Other-file/blob/main/README_PIC/2127237449.webp "MarkDown")
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