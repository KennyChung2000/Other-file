
    function change(x) {                                                                                                                    //改變下拉選單
        document.getElementById("button1").innerHTML = x;
        }

    function save() {                                                                                                                       //儲存輸入資料
    var times = localStorage.getItem('times');
    var time_select = document.getElementById("time_value").value;
    var category = document.getElementById("button1").innerHTML;
    var cash = document.getElementById("cash_input").value;
    var remark = document.getElementById("remark").value;
    add_list(times, time_select, category, cash, remark)                                                                                   //新增表格

    var all = [category, cash, time_select,remark]
    var all_j = JSON.stringify(all);

    localStorage.setItem(parseInt(times) + 'st', all_j);
    localStorage.setItem('times', parseInt(times) + parseInt('1'));
        }

    function check() {                                                                                                                      //開啟網頁檢查資料
            //document.write(localStorage.getItem('times'));
            if (localStorage.getItem('times') === null) {
        localStorage.setItem("times", 1);
            }
    else {
                var times = localStorage.getItem('times')
    for(var i=1;i<times; i++){
                    var getData = localStorage.getItem(i+'st')
    var getDataArr = JSON.parse(getData);
    add_list(i,getDataArr[2],getDataArr[0],getDataArr[1],getDataArr[3])
                }
            }
                
        }

    function add_list(z, x, c, v, b) {                                                                                                         //新增表格
        let row_1 = document.createElement('tr');

    let heading_1 = document.createElement('th');
    heading_1.innerHTML = z;
    let heading_2 = document.createElement('td');
    heading_2.innerHTML = x;


    let heading_3 = document.createElement('td');


    let heading_4 = document.createElement('td');
    heading_4.innerHTML = v;
    let heading_5 = document.createElement('td');
    heading_5.innerHTML = b;
    let heading_6 = document.createElement('button')
    heading_6.innerHTML = 'Delete';
    let heading_7 = document.createElement('td');
    heading_7.appendChild(heading_6);


    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);
    row_1.appendChild(heading_5);
    row_1.appendChild(heading_7);

    document.getElementById('tbody1').appendChild(row_1);
    change_span(c)
        }

    function change_span(text) {
            var x = document.getElementById("tbody1");                                     /////////選擇span標籤
    var el = x.querySelectorAll('tr');
    var elLen = el.length;
    var el1 = el[elLen - 1].querySelectorAll('td');
    var elbut = el[elLen - 1].querySelector('button');

    var elLen1 = el1.length;

    var t = document.createElement("SPAN");
    var t1 = document.createTextNode(text);
    t.appendChild(t1);
    el1[elLen1 - 4].appendChild(t);
    var el2 = el1[elLen1 - 4].querySelector('SPAN');

    var category
    if (text === '食物') category = 'badge badge-success'                          ////////依類別設置badges
    else if (text === '服裝') category = 'badge badge-secondary'
    else if (text === '交通') category = 'badge badge-danger'
    else if (text === '水電') category = 'badge badge-warning'
    else if (text === '生活用品') category = 'badge badge-info'
    else if (text === '娛樂') category = 'badge badge-dark'
    else category = 'badge badge-primary'

    el2.setAttribute('class', category);                                            /////////設定class
    elbut.setAttribute('class', 'btn btn-danger');
    elbut.setAttribute('type', 'button');
           

        }

    $('.datepicker').datepicker()

    $("#tbody1").on('click', 'button', function () {
        //document.write();
    $(this).closest('tr').remove();
    var deletenum = $(this).parent().prev().prev().prev().prev().prev().text()
    localStorage.removeItem($(this).parent().prev().prev().prev().prev().prev().text()+'st');
    var times=localStorage.getItem('times');
    for(;deletenum<times-1; deletenum++){       
    var ittt = localStorage.getItem(parseInt(deletenum)+1 + 'st')
    localStorage.setItem(deletenum+'st',ittt )}
    localStorage.removeItem(parseInt(times)-1+'st');
    localStorage.setItem('times',times-1)
    $("#tbody1").children().empty();
    check()
        });