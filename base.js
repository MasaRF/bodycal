var num_flag = 0; //数字の入力があるか
var first_flag = 0; //.が押されたか
var dot_flag = 0; //最初にボタンが押されたか
var dis_num = ''; //ディスプレイに表示
var total = 0; //計算結果

var op_flag = 0;
var op;


var number = function (value) {
    if (value == '.') {
        if (first_flag == 0) {
            dis_num = total + value
            document.getElementById('cal_space').textContent = dis_num;
            first_flag = 1;
            dot_flag = 1;

        } else if (dot_flag != 1) {
            dis_num += value;
            document.getElementById('cal_space').textContent = dis_num;
            dot_flag = 1;

        }
    } else if (first_flag == 1 || value != '0') {
        num_flag = 1;
        dis_num += value;
        document.getElementById('cal_space').textContent = dis_num;
        first_flag = 1;

    }

}

var check = function (dis_num) {
    return dis_num > 10;
}

var stop = function (dis_num) {
    if (check) {

    }
}

/*var check = function (value) {
    dis_num += value;
    dis_num = document.getElementById('cal_space').textContent;
    var n = dis_num.length;
    if (n < 10) {
        dis_num =;
    }
}*/



var operate = function (value) {
    if (num_flag == 1) {
        if (op_flag == 0) {
            if (value != '=') {
                op_flag = 1;
                total = dis_num;
                op = value;
                dis_num = '';
                document.getElementById('cal_space').textContent = total;
                console.log(op);

            };
        } else {
            if (value == '=') {
                op_flag = 0;
                total = eval(total + op + dis_num);
                document.getElementById('cal_space').textContent = total;
                dis_num = total;
            } else {
                num_flag = 0;
                total = eval(total + op + dis_num);
                dis_num = '';
                document.getElementById('cal_space').textContent = total;
                op = value;
                console.log(op);
            }
        }
        dot_flag = 0;
    }
}


// var percent = function () {
//     var tmp = document.getElementById('cal_space').textContent;
//     dis_num = eval(tmp / 100);
//     document.getElementById('cal_space').textContent = dis_num;

// }


var plu_mi = function () {
    var tmp = document.getElementById('cal_space').textContent;
    dis_num = eval(-1 * tmp)
    document.getElementById('cal_space').textContent = dis_num;
}

var all_clear = function () {
    num_flag = 0;
    op_flag = 0;
    first_flag = 0;
    dot_flag = 0;
    dis_num = '';
    total = 0;
    document.getElementById('cal_space').textContent = total;
    console.log(total)
}
document.getElementById('cal_space').textContent = total;

var bd_bm = function () {
    document.getElementById('cal_space').textContent;
    var sex = "1M/2WM";
    dis_num = sex;
    document.getElementById('cal_space').textContent = dis_num;

}

var health = function (value) {
    document.getElementById('cal_space').textContent;
    var data = "H/W/O";
    if (value == "1") {
        dis_num = document.getElementById('cal_space').textContent;
    } else if (value == "2") {
        dis_num = console.log(data);
        dis_num = document.getElementById('cal_space').textContent;
    }

}


var bd_ci = function () {
    var tmp = document.getElementById('cal_space').textContent;
    dis_num = eval(tmp * 1.75);
    document.getElementById('cal_space').textContent = dis_num;

}