"use strict";
/* mau cv */
let cvIndex = 1;
let n_muctieu = 0;
let n_mxh = 0;
let n_hocvan = 0;
let n_kynang = 0;
let n_kn = 0;
let n_duan = 0;
let n_hd = 0;
let n_chungchi = 0;
let n_giaithuong = 0;
let n_sothich = 0;
let n_more = 0;


let pcompbar = document.getElementById("pcomp-bar")
let pnghebar = document.getElementById("pnghe-bar")
let pnoibar = document.getElementById("pnoi-bar")
let pdocbar = document.getElementById("pdoc-bar")
let pvietbar = document.getElementById("pviet-bar")

document.getElementById("download").addEventListener("mouseover", () => {
    document.getElementById("download-btn").style.display = 'flex';
    document.getElementById("download-show").classList.add("fa-angle-left");
    document.getElementById("download-show").classList.remove("fa-angle-right");
});

document.getElementById("download").addEventListener("mouseout", () => {
    document.getElementById("download-btn").style.display = 'none';
    document.getElementById("download-show").classList.add("fa-angle-right");
    document.getElementById("download-show").classList.remove("fa-angle-left");
})


/* add MXH */ //phong
document.getElementById("btn-add-mxh").addEventListener('click', () => {
    n_mxh++;
    let ul = document.getElementById("mxh");
    let li = document.createElement("li");
    let label = document.createElement("label");
    label.innerHTML = "Link ";
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    let del = document.createElement("i");
    input.classList.add('mini-input')
    del.classList.add('fas');
    del.classList.add('fa-times');
    del.classList.add('mini-del');
    li.append(label);
    li.append(input);
    li.append(del);
    ul.appendChild(li);

    let div = document.createElement("div");
    div.classList.add("div-l-child");
    let i_cv = document.createElement("i");
    i_cv.classList.add("fas");
    i_cv.classList.add("fa-link");
    i_cv.classList.add("info-icon");
    let span = document.createElement("span");
    div.appendChild(i_cv);
    div.appendChild(span);
    document.getElementById("ttlh").appendChild(div);

    let ptb = document.getElementById('pbthongtin');
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let pspan = document.createElement('span')

    td2.appendChild(pspan);
    tr.appendChild(td1);
    tr.appendChild(td2);
    ptb.appendChild(tr);

    let gsocial = document.getElementById('gsocial');
    let li3 = document.createElement('li');
    let a3 = document.createElement('a');
    li3.append(a3);
    gsocial.append(li3);

    input.addEventListener("keyup", (e) => {
        span.innerHTML = e.target.value;
        pspan.innerHTML = e.target.value;
        a3.innerHTML = e.target.value;
        a3.setAttribute("href","https://www."+a3.innerHTML);
    })

    del.addEventListener("click", () => {
        ul.removeChild(li);
        document.getElementById("ttlh").removeChild(div);
        document.getElementById("pbthongtin").removeChild(tr);
        document.getElementById("gsocial").removeChild(li3);
        n_mxh--;
        ptb.removeChild(tr);
    })

})

/* add HOC VAN */
document.getElementById("btn-add-hocvan").addEventListener('click', () => {
    n_hocvan++;

    let ul = document.getElementById("hocvan");
    let li = document.createElement("li");
    let div = document.createElement("div");
    div.classList.add('div-hocvan')


    let timeIcon = document.createElement("i");
    timeIcon.classList.add('fas');
    timeIcon.classList.add('fa-calendar-check');
    timeIcon.classList.add('mini-icon');

    let timeS = document.createElement("input");
    timeS.setAttribute("type", "date");
    let timeE = document.createElement("input");
    timeE.setAttribute("type", "date");
    timeS.classList.add('mini-input-time')
    timeE.classList.add('mini-input-time')
    let to = document.createElement("label");
    to.innerHTML = "&#8594 ";

    let truongIcon = document.createElement("i");
    truongIcon.classList.add('fas');
    truongIcon.classList.add('fa-university');
    truongIcon.classList.add('mini-icon');
    let tenTruong = document.createElement("input");
    tenTruong.setAttribute("type", "text");
    tenTruong.classList.add('mini-input')
    tenTruong.placeholder = " School's name";

    let khoaIcon = document.createElement("i");
    khoaIcon.classList.add('fas');
    khoaIcon.classList.add('fa-shapes');
    khoaIcon.classList.add('mini-icon');
    let tenKhoa = document.createElement("input");
    tenKhoa.setAttribute("type", "text");
    tenKhoa.classList.add('mini-input')
    tenKhoa.placeholder = " Faculty's name";


    let loaiIcon = document.createElement("i");
    loaiIcon.classList.add('fas');
    loaiIcon.classList.add('fa-user-graduate');
    loaiIcon.classList.add('mini-icon');
    let Loai = document.createElement("input");
    Loai.setAttribute("type", "text");
    Loai.classList.add('mini-input')
    Loai.placeholder = " Graduation";

    let diemIcon = document.createElement("label");
    diemIcon.classList.add('fas');
    diemIcon.classList.add('fa-pen-fancy');
    diemIcon.classList.add('mini-icon');
    let diem = document.createElement("input");
    diem.setAttribute("type", "text");
    diem.classList.add('mini-input')
    diem.placeholder = " Scores";


    let del = document.createElement("i");

    del.classList.add('fas');
    del.classList.add('fa-times');
    del.classList.add('mini-del');


    div.append(timeIcon);
    div.append(timeS);
    div.append(to);
    div.append(timeE);
    div.append(document.createElement('br'));

    div.append(truongIcon);
    div.append(tenTruong);
    div.append(document.createElement('br'));

    div.append(khoaIcon);
    div.append(tenKhoa);
    div.append(document.createElement('br'));

    div.append(loaiIcon);
    div.append(Loai);
    div.append(document.createElement('br'));

    div.append(diemIcon);
    div.append(diem);
    div.append(document.createElement('br'));

    li.append(div)
    li.append(del)
    ul.appendChild(li);

    let div_r_child = document.createElement("div");
    div_r_child.classList.add("div-r-child");
    let span1 = document.createElement("span");
    span1.classList.add("date");
    let span2 = document.createElement("span");
    span2.classList.add("date");
    span2.innerHTML = "_____";
    let span3 = document.createElement("span");
    span3.classList.add("date");
    let span4 = document.createElement("span");
    span4.classList.add("title-r");
    let span5 = document.createElement("span");
    let span6 = document.createElement("span");
    let span7 = document.createElement("span");

    div_r_child.append(span3);
    div_r_child.append(span2);
    div_r_child.append(span1);
    div_r_child.append(document.createElement('br'));
    div_r_child.append(span4);
    div_r_child.append(document.createElement('br'));
    div_r_child.append(span5);
    div_r_child.append(document.createElement('br'));
    div_r_child.append(span6);
    div_r_child.append(document.createElement('br'));
    div_r_child.append(span7);
    div_r_child.append(document.createElement('br'));
    document.getElementById("trinhdo").append(div_r_child);



    let phocvan = document.getElementById('phocvan');
    let ptable = document.createElement('table');
    ptable.classList.add("content-profile-right");
    let ptr1 = document.createElement('tr');
    let ptd1 = document.createElement('td');    //truong
    ptd1.classList.add("muc1");
    let ptd2 = document.createElement('td');
    ptd2.classList.add("thoigian");
    let pspan1 = document.createElement('span');    //ngay1
    let pspan2 = document.createElement('span');
    pspan2.innerHTML = " - ";
    let pspan3 = document.createElement('span');    //ngay2
    ptd2.appendChild(pspan1);
    ptd2.appendChild(pspan2);
    ptd2.appendChild(pspan3);
    ptr1.appendChild(ptd1);
    ptr1.appendChild(ptd2);

    let ptr2 = document.createElement('tr');    //khoa
    let ptd21 = document.createElement('td');
    let ptd22 = document.createElement('td');
    ptr2.appendChild(ptd21);
    ptr2.appendChild(ptd22);

    let ptr3 = document.createElement('tr');    //nganh
    let ptd31 = document.createElement('td');
    let ptd32 = document.createElement('td');
    ptr3.appendChild(ptd31);
    ptr3.appendChild(ptd32);


    let ptr4 = document.createElement('tr');    //diem
    let ptd41 = document.createElement('td');
    ptd41.classList.add("muc3");
    let pspan41 = document.createElement('span');
    if (document.getElementById("language").value == 'English') {
        pspan41.innerHTML = "Scores: ";
    } else {
        pspan41.innerHTML = "Điểm trung bình: ";
    }

    let pspan42 = document.createElement('span');
    ptd41.appendChild(pspan41);
    ptd41.appendChild(pspan42);
    let ptd42 = document.createElement('td');
    ptr4.appendChild(ptd41);
    ptr4.appendChild(ptd42);

    ptable.appendChild(ptr1);
    ptable.appendChild(ptr2);
    ptable.appendChild(ptr3);
    ptable.appendChild(ptr4);
    phocvan.appendChild(ptable);

    //jiang
    let gedu = document.getElementById('gedu');
    let gdiv_wrap = document.createElement('div');
    gdiv_wrap.classList.add("wrap"); //add class

        let gdiv_time_cv = document.createElement('div');
        gdiv_time_cv.classList.add("time-cv");
            let gp_time = document.createElement('span');
            let gp_con = document.createElement('span');
            gp_con.innerHTML = " - ";
            let gp_time2 = document.createElement('span');
        let gdiv_content = document.createElement('div');
        gdiv_content.classList.add("content");
            let gh3 = document.createElement('h3');
            gh3.classList.add("location-name");
            let gh4 = document.createElement('h4');
            gh4.classList.add("position-name");
            let gp = document.createElement('p');
            gp.classList.add("descr");
            let ggpa = document.createElement('span');
            ggpa.innerHTML = "GPA: "
            let gi = document.createElement('i');
            gi.classList.add("score");
    gdiv_content.appendChild(gh3);
    gdiv_content.appendChild(gh4);
    gdiv_content.appendChild(gp);
    gdiv_content.appendChild(ggpa);
    gdiv_content.appendChild(gi);

    gdiv_time_cv.appendChild(gp_time);
    gdiv_time_cv.appendChild(gp_con);
    gdiv_time_cv.appendChild(gp_time2);


    gdiv_wrap.appendChild(gdiv_time_cv);
    gdiv_wrap.appendChild(gdiv_content);

    gedu.appendChild(gdiv_wrap);

    timeS.addEventListener("change", e => {
        span1.innerHTML = e.target.value;

        var d = new Date(e.target.value);
        var YYYY = d.getFullYear();
        var YY = YYYY.toString().substring(2);
        var MM = ("0" + (d.getMonth() + 1)).slice(-2);
        var DD = ("0" + d.getDate()).slice(-2);

        pspan1.innerHTML = MM + "/" + YYYY;
        gp_time.innerHTML = MM + "/" + YYYY;
    })
    timeE.addEventListener("change", e => {
        span3.innerHTML = e.target.value;

        var d = new Date(e.target.value);
        var YYYY = d.getFullYear();
        var YY = YYYY.toString().substring(2);
        var MM = ("0" + (d.getMonth() + 1)).slice(-2);
        var DD = ("0" + d.getDate()).slice(-2);

        pspan3.innerHTML = MM + "/" + YYYY;
        gp_time2.innerHTML = MM + "/" + YYYY;
    })
    tenTruong.addEventListener("keyup", e => {
        span4.innerHTML = e.target.value;
        ptd1.innerHTML = e.target.value;
        gh3.innerHTML = e.target.value;
    })

    
    tenKhoa.addEventListener("keyup", e => {
        span5.innerHTML = "- " + e.target.value;
        ptd21.innerHTML = e.target.value;
        gh4.innerHTML = e.target.value;
    })
    Loai.addEventListener("keyup", e => {
        span6.innerHTML = "- " + e.target.value;
        ptd31.innerHTML = e.target.value;
        gp.innerHTML = e.target.value;
    })
    diem.addEventListener("keyup", e => {
        span7.innerHTML = "- " + e.target.value;
        pspan42.innerHTML = e.target.value;
        gi.innerHTML = e.target.value;
    })
    del.addEventListener("click", () => {
        document.getElementById("trinhdo").removeChild(div_r_child);
        document.getElementById("phocvan").removeChild(ptable);
        document.getElementById("gedu").removeChild(gdiv_wrap);
        ul.removeChild(li);
        n_hocvan--;
    })
})

/* add MUC TIEU */
document.getElementById("btn-add-muctieu").addEventListener('click', () => {
    n_muctieu++;
    let ul = document.getElementById("muctieu");
    let li = document.createElement("li");
    let del = document.createElement("i");
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.classList.add('mini-input')
    del.classList.add('fas');
    del.classList.add('fa-times');
    del.classList.add('mini-del');
    li.append(input);
    li.append(del);
    ul.appendChild(li);

    let div = document.createElement("div");
    div.classList.add("div-l-child");
    let i_cv = document.createElement("i");
    i_cv.classList.add("fas");
    i_cv.classList.add("fa-align-right");
    i_cv.classList.add("info-icon");
    let span = document.createElement("span");
    div.appendChild(i_cv);
    div.appendChild(span);
    document.getElementById("mtnn").appendChild(div);

    let mtnn = document.getElementById('pmtnn');
    let li2 = document.createElement('li');
    mtnn.appendChild(li2);

    let gmtnn = document.getElementById('gmtnn');
    let p3 = document.createElement('p');
    gmtnn.appendChild(p3);

    input.addEventListener("keyup", (e) => {
        span.innerHTML = e.target.value;
        li2.innerHTML = e.target.value;
        p3.innerHTML = e.target.value;
    })
    del.addEventListener("click", () => {
        ul.removeChild(li);
        document.getElementById("mtnn").removeChild(div);
        document.getElementById("pmtnn").removeChild(li2);
        document.getElementById("gmtnn").removeChild(p3);
        n_muctieu--;
    })
})

/*add ky nang */
document.getElementById("btn-add-kynang").addEventListener('click', () => {
    n_kynang++;
    let ul = document.getElementById("kynang");
    let li = document.createElement("li");
    let del = document.createElement("i");
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.classList.add('mini-input')
    del.classList.add('fas');
    del.classList.add('fa-times');
    del.classList.add('mini-del');
    li.append(input);
    li.append(del);
    ul.appendChild(li);

    let div = document.createElement("div");
    div.classList.add("div-l-child");
    let i_cv = document.createElement("i");
    i_cv.classList.add("fas");
    i_cv.classList.add("fa-chevron-circle-down");
    i_cv.classList.add("info-icon");
    let span = document.createElement("span");
    div.appendChild(i_cv);
    div.appendChild(span);
    document.getElementById("cknk").appendChild(div);

    let pkynangkhac = document.getElementById('pkynangkhac');
    let li2 = document.createElement('li');
    pkynangkhac.appendChild(li2);
    //999
    input.addEventListener("keyup", (e) => {
        span.innerHTML = e.target.value;
        li2.innerHTML = e.target.value;
    })
    del.addEventListener("click", () => {
        document.getElementById("cknk").removeChild(div);
        document.getElementById("pkynangkhac").removeChild(li2);
        ul.removeChild(li);
        n_kynang--;
    })
})

/*add kn lam viec */
document.getElementById("btn-add-kn").addEventListener('click', () => {
    n_kn++;
    let ul = document.getElementById("kn");
    let li = document.createElement("li");

    let div = document.createElement("div");
    div.classList.add('div-kn')


    let timeIcon = document.createElement("i");
    timeIcon.classList.add('fas');
    timeIcon.classList.add('fa-calendar-check');
    timeIcon.classList.add('mini-icon');

    let timeS = document.createElement("input");
    timeS.setAttribute("type", "date");
    let timeE = document.createElement("input");
    timeE.setAttribute("type", "date");
    timeS.classList.add('mini-input-time')
    timeE.classList.add('mini-input-time')
    let to = document.createElement("label");
    to.innerHTML = "&#8594 ";

    let positionIcon = document.createElement("i");
    positionIcon.classList.add('fas');
    positionIcon.classList.add('fa-map-pin');
    positionIcon.classList.add('mini-icon');
    let positionName = document.createElement("input");
    positionName.setAttribute("type", "text");
    positionName.classList.add('mini-input')
    positionName.placeholder = " Title/ Position";

    let companyIcon = document.createElement("i");
    companyIcon.classList.add('fas');
    companyIcon.classList.add('fa-building');
    companyIcon.classList.add('mini-icon');
    let companyName = document.createElement("input");
    companyName.setAttribute("type", "text");
    companyName.classList.add('mini-input')
    companyName.placeholder = " Company Name";


    let desIcon = document.createElement("i");
    desIcon.classList.add('fas');
    desIcon.classList.add('fa-pen-fancy');
    desIcon.classList.add('mini-icon');
    let des = document.createElement("input");
    des.setAttribute("type", "text")
    des.classList.add('mini-input')
    des.placeholder = " Description about your work";

    let del = document.createElement("i");

    del.classList.add('fas');
    del.classList.add('fa-times');
    del.classList.add('mini-del');

    div.append(timeIcon);
    div.append(timeS);
    div.append(to);
    div.append(timeE);
    div.append(document.createElement('br'));

    div.append(companyIcon);
    div.append(companyName);
    div.append(document.createElement('br'));

    div.append(positionIcon);
    div.append(positionName);
    div.append(document.createElement('br'));

    div.append(desIcon);
    div.append(des);
    div.append(document.createElement('br'));

    li.append(div)
    li.append(del)
    ul.appendChild(li);


    let div_r_child = document.createElement("div");
    div_r_child.classList.add("div-r-child");
    let span1 = document.createElement("span");
    span1.classList.add("date");
    let span2 = document.createElement("span");
    span2.classList.add("date");
    span2.innerHTML = "_____";
    let span3 = document.createElement("span");
    span3.classList.add("date");
    let span4 = document.createElement("span");
    span4.classList.add("title-r");
    let span5 = document.createElement("span");
    let span6 = document.createElement("span");

    div_r_child.append(span3);
    div_r_child.append(span2);
    div_r_child.append(span1);
    div_r_child.append(document.createElement('br'));
    div_r_child.append(span4);
    div_r_child.append(document.createElement('br'));
    div_r_child.append(span5);
    div_r_child.append(document.createElement('br'));
    div_r_child.append(span6);
    div_r_child.append(document.createElement('br'));
    document.getElementById("kinhnghiemlamviec").append(div_r_child);



    let pkinhnghiem = document.getElementById('pkinhnghiem');
    let ptable = document.createElement('table');
    ptable.classList.add("content-profile-right");
    let ptr1 = document.createElement('tr');
    let ptd1 = document.createElement('td');    //truong
    ptd1.classList.add("muc1");
    let ptd2 = document.createElement('td');
    ptd2.classList.add("thoigian");
    let pspan1 = document.createElement('span');    //ngay1
    let pspan2 = document.createElement('span');
    pspan2.innerHTML = " - ";
    let pspan3 = document.createElement('span');    //ngay2
    ptd2.appendChild(pspan1);
    ptd2.appendChild(pspan2);
    ptd2.appendChild(pspan3);
    ptr1.appendChild(ptd1);
    ptr1.appendChild(ptd2);

    let ptr2 = document.createElement('tr');    //khoa
    let ptd21 = document.createElement('td');
    let ptd22 = document.createElement('td');
    ptr2.appendChild(ptd21);
    ptr2.appendChild(ptd22);

    let ptr4 = document.createElement('tr');    //diem
    let ptd41 = document.createElement('td');
    ptd41.classList.add("muc3");
    let pspan41 = document.createElement('span');
    let pspan42 = document.createElement('span');
    ptd41.appendChild(pspan41);
    ptd41.appendChild(pspan42);
    let ptd42 = document.createElement('td');
    ptr4.appendChild(ptd41);
    ptr4.appendChild(ptd42);

    ptable.appendChild(ptr1);
    ptable.appendChild(ptr2);
    ptable.appendChild(ptr4);
    pkinhnghiem.appendChild(ptable);

    //kn
    let gexp = document.getElementById('gexp');
    let gdiv_wrap = document.createElement('div');
    gdiv_wrap.classList.add("wrap"); //add class

        let gdiv_time_cv = document.createElement('div');
        gdiv_time_cv.classList.add("time-cv");
            let gp_time = document.createElement('span');
            let gp_con = document.createElement('span');
            gp_con.innerHTML = " - ";
            let gp_time2 = document.createElement('span');
        let gdiv_content = document.createElement('div');
        gdiv_content.classList.add("content");
            let gh3 = document.createElement('h3');
            gh3.classList.add("location-name");
            let gh4 = document.createElement('h4');
            gh4.classList.add("position-name");
            let gp = document.createElement('p');
            gp.classList.add("descr");
    gdiv_content.appendChild(gh3);
    gdiv_content.appendChild(gh4);
    gdiv_content.appendChild(gp);

    gdiv_time_cv.appendChild(gp_time);
    gdiv_time_cv.appendChild(gp_con);
    gdiv_time_cv.appendChild(gp_time2);


    gdiv_wrap.appendChild(gdiv_time_cv);
    gdiv_wrap.appendChild(gdiv_content);

    gexp.appendChild(gdiv_wrap);

    timeS.addEventListener("change", e => {
        span1.innerHTML = e.target.value;

        var d = new Date(e.target.value);
        var YYYY = d.getFullYear();
        var YY = YYYY.toString().substring(2);
        var MM = ("0" + (d.getMonth() + 1)).slice(-2);
        var DD = ("0" + d.getDate()).slice(-2);

        pspan1.innerHTML = MM + "/" + YYYY;
        gp_time.innerHTML = MM + "/" + YYYY;
    })
    timeE.addEventListener("change", e => {
        span3.innerHTML = e.target.value;

        var d = new Date(e.target.value);
        var YYYY = d.getFullYear();
        var YY = YYYY.toString().substring(2);
        var MM = ("0" + (d.getMonth() + 1)).slice(-2);
        var DD = ("0" + d.getDate()).slice(-2);

        pspan3.innerHTML = MM + "/" + YYYY;
        gp_time2.innerHTML = MM + "/" + YYYY;

    })
    companyName.addEventListener("keyup", e => {
        span4.innerHTML = e.target.value;
        ptd1.innerHTML = e.target.value;
        gh3.innerHTML = e.target.value;

    })
    positionName.addEventListener("keyup", e => {
        span5.innerHTML = "- " + e.target.value;
        ptd21.innerHTML = e.target.value;
        gh4.innerHTML = e.target.value;

    })
    des.addEventListener("keyup", e => {
        span6.innerHTML = "- " + e.target.value;
        ptd41.innerHTML = e.target.value;
        gp.innerHTML = e.target.value;

    })
    del.addEventListener("click", () => {
        document.getElementById("kinhnghiemlamviec").removeChild(div_r_child);
        document.getElementById("pkinhnghiem").removeChild(ptable);
        document.getElementById("gexp").removeChild(gdiv_wrap);

        ul.removeChild(li);
        n_kn--;
    })
})

/*add du an */
document.getElementById("btn-add-duAn").addEventListener('click', () => {
    n_kn++;
    let ul = document.getElementById("duAn");
    let li = document.createElement("li");

    let div = document.createElement("div");
    div.classList.add('div-duAn')


    let timeIcon = document.createElement("i");
    timeIcon.classList.add('fas');
    timeIcon.classList.add('fa-calendar-check');
    timeIcon.classList.add('mini-icon');

    let projectIcon = document.createElement("i");
    projectIcon.classList.add('fas');
    projectIcon.classList.add('fa-map-pin');
    projectIcon.classList.add('mini-icon');
    let projectName = document.createElement("input");
    projectName.setAttribute("type", "text");
    projectName.classList.add('mini-input')
    projectName.placeholder = "Project";

    let timeS = document.createElement("input");
    timeS.setAttribute("type", "date");
    let timeE = document.createElement("input");
    timeE.setAttribute("type", "date");
    timeS.classList.add('mini-input-time')
    timeE.classList.add('mini-input-time')
    let to = document.createElement("label");
    to.innerHTML = "&#8594 ";

    let desIcon = document.createElement("i");
    desIcon.classList.add('fas');
    desIcon.classList.add('fa-pen-fancy');
    desIcon.classList.add('mini-icon');
    let des = document.createElement("input");
    des.setAttribute("type", "text")
    des.classList.add('mini-input')
    des.placeholder = " Description about your project";

    let positionIcon = document.createElement("i");
    positionIcon.classList.add('fas');
    positionIcon.classList.add('fa-map-pin');
    positionIcon.classList.add('mini-icon');
    let positionName = document.createElement("input");
    positionName.setAttribute("type", "text");
    positionName.classList.add('mini-input')
    positionName.placeholder = "Your position in project";

    let techIcon = document.createElement("i");
    techIcon.classList.add('fas');
    techIcon.classList.add('fa-cogs');
    techIcon.classList.add('mini-icon');
    let techName = document.createElement("input");
    techName.setAttribute("type", "text");
    techName.classList.add('mini-input')
    techName.placeholder = " Technology used";



    let del = document.createElement("i");

    del.classList.add('fas');
    del.classList.add('fa-times');
    del.classList.add('mini-del');

    div.append(timeIcon);
    div.append(timeS);
    div.append(to);
    div.append(timeE);
    div.append(document.createElement('br'));

    div.append(projectIcon);
    div.append(projectName);
    div.append(document.createElement('br'));

    div.append(positionIcon);
    div.append(positionName);
    div.append(document.createElement('br'));

    div.append(desIcon);
    div.append(des);
    div.append(document.createElement('br'));

    div.append(techIcon);
    div.append(techName);
    div.append(document.createElement('br'));

    li.append(div)
    li.append(del)
    ul.appendChild(li);

    let div_r_child = document.createElement("div");
    div_r_child.classList.add("div-r-child");
    let span1 = document.createElement("span");
    span1.classList.add("date");
    let span2 = document.createElement("span");
    span2.classList.add("date");
    span2.innerHTML = "_____";
    let span3 = document.createElement("span");
    span3.classList.add("date");
    let span4 = document.createElement("span");
    span4.classList.add("title-r");
    let span5 = document.createElement("span");
    let span6 = document.createElement("span");
    let span7 = document.createElement("span");

    div_r_child.append(span3);
    div_r_child.append(span2);
    div_r_child.append(span1);
    div_r_child.append(document.createElement('br'));
    div_r_child.append(span4);
    div_r_child.append(document.createElement('br'));
    div_r_child.append(span5);
    div_r_child.append(document.createElement('br'));
    div_r_child.append(span6);
    div_r_child.append(document.createElement('br'));
    div_r_child.append(span7);
    div_r_child.append(document.createElement('br'));
    document.getElementById("duan").append(div_r_child);



    let pduan = document.getElementById('pduan');
    let ptable = document.createElement('table');
    ptable.classList.add("content-profile-right");
    let ptr1 = document.createElement('tr');
    let ptd1 = document.createElement('td');    //truong
    ptd1.classList.add("muc1");
    let ptd2 = document.createElement('td');
    ptd2.classList.add("thoigian");
    let pspan1 = document.createElement('span');    //ngay1
    let pspan2 = document.createElement('span');
    pspan2.innerHTML = " - ";
    let pspan3 = document.createElement('span');    //ngay2
    ptd2.appendChild(pspan1);
    ptd2.appendChild(pspan2);
    ptd2.appendChild(pspan3);
    ptr1.appendChild(ptd1);
    ptr1.appendChild(ptd2);

    let ptr2 = document.createElement('tr');    //khoa
    let ptd21 = document.createElement('td');
    let ptd22 = document.createElement('td');
    ptr2.appendChild(ptd21);
    ptr2.appendChild(ptd22);

    let ptr3 = document.createElement('tr');    //nganh
    let ptd31 = document.createElement('td');
    let ptd32 = document.createElement('td');
    ptr3.appendChild(ptd31);
    ptr3.appendChild(ptd32);


    let ptr4 = document.createElement('tr');    //diem
    let ptd41 = document.createElement('td');
    ptd41.classList.add("muc3");
    let ptd42 = document.createElement('td');
    ptr4.appendChild(ptd41);
    ptr4.appendChild(ptd42);

    let ptr5 = document.createElement('tr');    //nganh
    let ptd51 = document.createElement('td');
    let ptd52 = document.createElement('td');
    ptr5.appendChild(ptd51);
    ptr5.appendChild(ptd52);

    ptable.appendChild(ptr1);
    ptable.appendChild(ptr2);
    ptable.appendChild(ptr3);
    ptable.appendChild(ptr5);
    ptable.appendChild(ptr4);
    pduan.appendChild(ptable);

    //projects
    let gprj = document.getElementById('gprj');
    let gdiv_wrap = document.createElement('div');
    gdiv_wrap.classList.add("wrap"); //add class

        let gdiv_time_cv = document.createElement('div');
        gdiv_time_cv.classList.add("time-cv");
            let gp_time = document.createElement('span');
            let gp_con = document.createElement('span');
            gp_con.innerHTML = " - ";
            let gp_time2 = document.createElement('span');
        let gdiv_content = document.createElement('div');
        gdiv_content.classList.add("content");
            let gh3 = document.createElement('h3');
            gh3.classList.add("location-name");
            let gh4 = document.createElement('h4');
            gh4.classList.add("position-name");
            let gp = document.createElement('p');
            gp.classList.add("descr");
            let gp2 = document.createElement('p');
            gp2.classList.add("tech");
    gdiv_content.appendChild(gh3);
    gdiv_content.appendChild(gh4);
    gdiv_content.appendChild(gp);
    gdiv_content.appendChild(gp2);


    gdiv_time_cv.appendChild(gp_time);
    gdiv_time_cv.appendChild(gp_con);
    gdiv_time_cv.appendChild(gp_time2);


    gdiv_wrap.appendChild(gdiv_time_cv);
    gdiv_wrap.appendChild(gdiv_content);
    gprj.appendChild(gdiv_wrap);



    timeS.addEventListener("change", e => {
        span1.innerHTML = e.target.value;

        var d = new Date(e.target.value);
        var YYYY = d.getFullYear();
        var YY = YYYY.toString().substring(2);
        var MM = ("0" + (d.getMonth() + 1)).slice(-2);
        var DD = ("0" + d.getDate()).slice(-2);

        pspan1.innerHTML = MM + "/" + YYYY;
        gp_time.innerHTML = MM + "/" + YYYY;

    })
    timeE.addEventListener("change", e => {
        span3.innerHTML = e.target.value;

        var d = new Date(e.target.value);
        var YYYY = d.getFullYear();
        var YY = YYYY.toString().substring(2);
        var MM = ("0" + (d.getMonth() + 1)).slice(-2);
        var DD = ("0" + d.getDate()).slice(-2);

        pspan3.innerHTML = MM + "/" + YYYY;
        gp_time2.innerHTML = MM + "/" + YYYY;

    })
    projectName.addEventListener("keyup", e => {
        span4.innerHTML = e.target.value;

        ptd1.innerHTML = e.target.value;
        gh3.innerHTML = e.target.value;

    })
    positionName.addEventListener("keyup", e => {
        span5.innerHTML = "- " + e.target.value;
        ptd31.innerHTML = e.target.value;
        gh4.innerHTML = e.target.value;

    })
    des.addEventListener("keyup", e => {
        span6.innerHTML = "- " + e.target.value;
        ptd51.innerHTML = e.target.value;
        gp.innerHTML = e.target.value;

    })
    techName.addEventListener("keyup", e => {
        span7.innerHTML = "- " + e.target.value;
        ptd41.innerHTML = e.target.value;
        gp2.innerHTML = "Technology used: "+ e.target.value;

    })
    del.addEventListener("click", () => {
        document.getElementById("duan").removeChild(div_r_child);
        document.getElementById("pduan").removeChild(ptable);
        document.getElementById("gprj").removeChild(gdiv_wrap);

        ul.removeChild(li);
        n_kn--;
    })
})

/*add hoat dong */
document.getElementById("btn-add-hd").addEventListener('click', () => {
    n_hd++;
    let ul = document.getElementById("hd");
    let li = document.createElement("li");

    let div = document.createElement("div");
    div.classList.add('div-hd')


    let timeIcon = document.createElement("i");
    timeIcon.classList.add('fas');
    timeIcon.classList.add('fa-calendar-check');
    timeIcon.classList.add('mini-icon');

    let timeS = document.createElement("input");
    timeS.setAttribute("type", "date");
    let timeE = document.createElement("input");
    timeE.setAttribute("type", "date");
    timeS.classList.add('mini-input-time')
    timeE.classList.add('mini-input-time')
    let to = document.createElement("label");
    to.innerHTML = "&#8594 ";

    let organizationIcon = document.createElement("i");
    organizationIcon.classList.add('fas');
    organizationIcon.classList.add('fa-building');
    organizationIcon.classList.add('mini-icon');
    let organizationName = document.createElement("input");
    organizationName.setAttribute("type", "text");
    organizationName.classList.add('mini-input')
    organizationName.placeholder = " Organization Name";

    let positionIcon = document.createElement("i");
    positionIcon.classList.add('fas');
    positionIcon.classList.add('fa-map-pin');
    positionIcon.classList.add('mini-icon');
    let positionName = document.createElement("input");
    positionName.setAttribute("type", "text");
    positionName.classList.add('mini-input')
    positionName.placeholder = " Title/ Position";

    let desIcon = document.createElement("i");
    desIcon.classList.add('fas');
    desIcon.classList.add('fa-pen-fancy');
    desIcon.classList.add('mini-icon');
    let des = document.createElement("input");
    des.setAttribute("type", "text")
    des.classList.add('mini-input')
    des.placeholder = " Description about your activities";

    let del = document.createElement("i");

    del.classList.add('fas');
    del.classList.add('fa-times');
    del.classList.add('mini-del');

    div.append(timeIcon);
    div.append(timeS);
    div.append(to);
    div.append(timeE);
    div.append(document.createElement('br'));

    div.append(organizationIcon);
    div.append(organizationName);
    div.append(document.createElement('br'));

    div.append(positionIcon);
    div.append(positionName);
    div.append(document.createElement('br'));

    div.append(desIcon);
    div.append(des);
    div.append(document.createElement('br'));

    li.append(div)
    li.append(del)
    ul.appendChild(li);


    let div_r_child = document.createElement("div");
    div_r_child.classList.add("div-r-child");
    let span1 = document.createElement("span");
    span1.classList.add("date");
    let span2 = document.createElement("span");
    span2.classList.add("date");
    span2.innerHTML = "_____";
    let span3 = document.createElement("span");
    span3.classList.add("date");
    let span4 = document.createElement("span");
    span4.classList.add("title-r");
    let span5 = document.createElement("span");
    let span6 = document.createElement("span");

    div_r_child.append(span3);
    div_r_child.append(span2);
    div_r_child.append(span1);
    div_r_child.append(document.createElement('br'));
    div_r_child.append(span4);
    div_r_child.append(document.createElement('br'));
    div_r_child.append(span5);
    div_r_child.append(document.createElement('br'));
    div_r_child.append(span6);
    div_r_child.append(document.createElement('br'));
    document.getElementById("hoatdong").append(div_r_child);



    let phoatdong = document.getElementById('phoatdong');
    let ptable = document.createElement('table');
    ptable.classList.add("content-profile-right");
    let ptr1 = document.createElement('tr');
    let ptd1 = document.createElement('td');    //truong
    ptd1.classList.add("muc1");
    let ptd2 = document.createElement('td');
    ptd2.classList.add("thoigian");
    let pspan1 = document.createElement('span');    //ngay1
    let pspan2 = document.createElement('span');
    pspan2.innerHTML = " - ";
    let pspan3 = document.createElement('span');    //ngay2
    ptd2.appendChild(pspan1);
    ptd2.appendChild(pspan2);
    ptd2.appendChild(pspan3);
    ptr1.appendChild(ptd1);
    ptr1.appendChild(ptd2);

    let ptr2 = document.createElement('tr');    //khoa
    let ptd21 = document.createElement('td');
    let ptd22 = document.createElement('td');
    ptr2.appendChild(ptd21);
    ptr2.appendChild(ptd22);

    let ptr4 = document.createElement('tr');    //diem
    let ptd41 = document.createElement('td');
    ptd41.classList.add("muc3");
    let pspan41 = document.createElement('span');
    let pspan42 = document.createElement('span');
    ptd41.appendChild(pspan41);
    ptd41.appendChild(pspan42);
    let ptd42 = document.createElement('td');
    ptr4.appendChild(ptd41);
    ptr4.appendChild(ptd42);

    ptable.appendChild(ptr1);
    ptable.appendChild(ptr2);
    ptable.appendChild(ptr4);
    phoatdong.appendChild(ptable);

    //act
    let gact = document.getElementById('gact');
    let gdiv_wrap = document.createElement('div');
    gdiv_wrap.classList.add("wrap"); //add class

        let gdiv_time_cv = document.createElement('div');
        gdiv_time_cv.classList.add("time-cv");
            let gp_time = document.createElement('span');
            let gp_con = document.createElement('span');
            gp_con.innerHTML = " - ";
            let gp_time2 = document.createElement('span');
        let gdiv_content = document.createElement('div');
        gdiv_content.classList.add("content");
            let gh3 = document.createElement('h3');
            gh3.classList.add("location-name");
            let gh4 = document.createElement('h4');
            gh4.classList.add("position-name");
            let gp = document.createElement('p');
            gp.classList.add("descr");
    gdiv_content.appendChild(gh3);
    gdiv_content.appendChild(gh4);
    gdiv_content.appendChild(gp);

    gdiv_time_cv.appendChild(gp_time);
    gdiv_time_cv.appendChild(gp_con);
    gdiv_time_cv.appendChild(gp_time2);


    gdiv_wrap.appendChild(gdiv_time_cv);
    gdiv_wrap.appendChild(gdiv_content);

    gact.appendChild(gdiv_wrap);

    timeS.addEventListener("change", e => {
        span1.innerHTML = e.target.value;

        var d = new Date(e.target.value);
        var YYYY = d.getFullYear();
        var YY = YYYY.toString().substring(2);
        var MM = ("0" + (d.getMonth() + 1)).slice(-2);
        var DD = ("0" + d.getDate()).slice(-2);

        pspan1.innerHTML = MM + "/" + YYYY;
        gp_time.innerHTML = MM + "/" + YYYY;

    })
    timeE.addEventListener("change", e => {
        span3.innerHTML = e.target.value;

        var d = new Date(e.target.value);
        var YYYY = d.getFullYear();
        var YY = YYYY.toString().substring(2);
        var MM = ("0" + (d.getMonth() + 1)).slice(-2);
        var DD = ("0" + d.getDate()).slice(-2);

        pspan3.innerHTML = MM + "/" + YYYY;
        gp_time2.innerHTML = MM + "/" + YYYY;

    })
    organizationName.addEventListener("keyup", e => {
        span4.innerHTML = e.target.value;
        ptd1.innerHTML = e.target.value;
        gh3.innerHTML = e.target.value;

    })
    positionName.addEventListener("keyup", e => {
        span5.innerHTML = "- " + e.target.value;
        ptd21.innerHTML = e.target.value;
        gh4.innerHTML = e.target.value;

    })
    des.addEventListener("keyup", e => {
        span6.innerHTML = "- " + e.target.value;
        ptd41.innerHTML = e.target.value;
        gp.innerHTML = e.target.value;

    })
    del.addEventListener("click", () => {
        document.getElementById("hoatdong").removeChild(div_r_child);
        document.getElementById("phoatdong").removeChild(ptable);
        document.getElementById("gact").removeChild(gdiv_wrap);

        ul.removeChild(li);
        n_hd--;
    })
})
/*add chung chi */
document.getElementById("btn-add-cc").addEventListener('click', () => {
    n_chungchi++;
    let ul = document.getElementById("cc");
    let li = document.createElement("li");

    let div = document.createElement("div");
    div.classList.add('div-cc')

    let timeS = document.createElement("input");
    timeS.setAttribute("type", "date");
    timeS.classList.add('mini-input-time')
    let to = document.createElement("label");
    to.innerHTML = "&#8594 ";

    let certificate = document.createElement("input");
    certificate.setAttribute("type", "text")
    certificate.classList.add('mini-input')
    certificate.placeholder = "Enter your certificate";

    let del = document.createElement("i");

    del.classList.add('fas');
    del.classList.add('fa-times');
    del.classList.add('mini-del');

    div.append(timeS);
    div.append(document.createElement('br'));

    div.append(certificate);
    div.append(document.createElement('br'));

    li.append(div)
    li.append(del)
    ul.appendChild(li);

    let _div = document.createElement("div");
    _div.classList.add("div-l-child");
    let i_cv = document.createElement("i");
    i_cv.classList.add("fas");
    i_cv.classList.add("fa-certificate");
    i_cv.classList.add("info-icon");
    let span = document.createElement("span");
    let span2 = document.createElement("span");
    span2.classList.add("date");
    _div.appendChild(i_cv);
    _div.appendChild(span);
    _div.appendChild(span2);
    document.getElementById("chungchi").appendChild(_div);

    let pchungchi = document.getElementById('pchungchi');
    let ptable = document.createElement('table');
    ptable.classList.add("content-profile-right");
    let ptr1 = document.createElement('tr');
    let ptd1 = document.createElement('td');    //truong
    ptd1.classList.add("muc1");
    let ptd2 = document.createElement('td');
    ptd2.classList.add("thoigian-nam");
    ptr1.appendChild(ptd1);
    ptr1.appendChild(ptd2);
    ptable.appendChild(ptr1);
    pchungchi.appendChild(ptable);

    //certificate
    let gcer = document.getElementById('gcer');
    let gdiv_wrap = document.createElement('div');
    gdiv_wrap.classList.add("wrap"); //add class

        let gdiv_time_cv = document.createElement('div');
        gdiv_time_cv.classList.add("time-cv");
            let gp_time = document.createElement('span');
        let gdiv_content = document.createElement('div');
        gdiv_content.classList.add("content");
            let gh3 = document.createElement('h3');
            gh3.classList.add("location-name");
    gdiv_content.appendChild(gh3);

    gdiv_time_cv.appendChild(gp_time);

    gdiv_wrap.appendChild(gdiv_time_cv);
    gdiv_wrap.appendChild(gdiv_content);

    gcer.appendChild(gdiv_wrap);

    timeS.addEventListener("change", (e) => {
        span2.innerHTML = e.target.value;
        var d = new Date(e.target.value);
        var YYYY = d.getFullYear();
        var YY = YYYY.toString().substring(2);
        var MM = ("0" + (d.getMonth() + 1)).slice(-2);
        var DD = ("0" + d.getDate()).slice(-2);

        ptd2.innerHTML = YYYY;
        gp_time.innerHTML = MM + "/" + YYYY;


    })
    certificate.addEventListener("keyup", (e) => {
        span.innerHTML = e.target.value;
        ptd1.innerHTML = e.target.value;
        gh3.innerHTML = e.target.value;

    })
    del.addEventListener("click", () => {
        ul.removeChild(li);
        document.getElementById("chungchi").removeChild(_div);
        document.getElementById("pchungchi").removeChild(ptable);
        document.getElementById("gcer").removeChild(gdiv_wrap);

        n_chungchi--;
    })
})
/*add giai thuong */
document.getElementById("btn-add-giaithuong").addEventListener('click', () => {
    n_giaithuong++;
    let ul = document.getElementById("giaithuong");
    let li = document.createElement("li");

    let div = document.createElement("div");
    div.classList.add('div-giaithuong')

    let timeS = document.createElement("input");
    timeS.setAttribute("type", "date");
    timeS.classList.add('mini-input-time')
    let to = document.createElement("label");
    to.innerHTML = "&#8594 ";

    let award = document.createElement("input");
    award.setAttribute("type", "text")
    award.classList.add('mini-input')
    award.placeholder = "Enter your award";

    let del = document.createElement("i");

    del.classList.add('fas');
    del.classList.add('fa-times');
    del.classList.add('mini-del');

    div.append(timeS);
    div.append(document.createElement('br'));

    div.append(award);
    div.append(document.createElement('br'));

    li.append(div)
    li.append(del)
    ul.appendChild(li);

    let _div = document.createElement("div");
    _div.classList.add("div-l-child");
    let i_cv = document.createElement("i");
    i_cv.classList.add("fas");
    i_cv.classList.add("fa-award");
    i_cv.classList.add("info-icon");
    let span = document.createElement("span");
    let span2 = document.createElement("span");
    span2.classList.add("date");
    _div.appendChild(i_cv);
    _div.appendChild(span);
    _div.appendChild(span2);
    document.getElementById("gt").appendChild(_div);


    let pgiaithuong = document.getElementById('pgiaithuong');
    let ptable = document.createElement('table');
    ptable.classList.add("content-profile-right");
    let ptr1 = document.createElement('tr');
    let ptd1 = document.createElement('td');    //truong
    ptd1.classList.add("muc1");
    let ptd2 = document.createElement('td');
    ptd2.classList.add("thoigian-nam");
    ptr1.appendChild(ptd1);
    ptr1.appendChild(ptd2);
    ptable.appendChild(ptr1);
    pgiaithuong.appendChild(ptable);

    //awards
    let gawa = document.getElementById('gawa');
    let gdiv_wrap = document.createElement('div');
    gdiv_wrap.classList.add("wrap"); //add class

        let gdiv_time_cv = document.createElement('div');
        gdiv_time_cv.classList.add("time-cv");
            let gp_time = document.createElement('span');
        let gdiv_content = document.createElement('div');
        gdiv_content.classList.add("content");
            let gh3 = document.createElement('h3');
            gh3.classList.add("location-name");
    gdiv_content.appendChild(gh3);

    gdiv_time_cv.appendChild(gp_time);

    gdiv_wrap.appendChild(gdiv_time_cv);
    gdiv_wrap.appendChild(gdiv_content);

    gawa.appendChild(gdiv_wrap);


    timeS.addEventListener("change", (e) => {
        span2.innerHTML = e.target.value;
        var d = new Date(e.target.value);
        var YYYY = d.getFullYear();
        var YY = YYYY.toString().substring(2);
        var MM = ("0" + (d.getMonth() + 1)).slice(-2);
        var DD = ("0" + d.getDate()).slice(-2);

        ptd2.innerHTML = YYYY;
        gp_time.innerHTML = MM + "/" + YYYY;

    })
    award.addEventListener("keyup", (e) => {
        span.innerHTML = e.target.value;
        ptd1.innerHTML = e.target.value;
        gh3.innerHTML = e.target.value;

    })
    del.addEventListener("click", () => {
        document.getElementById("gt").removeChild(_div);
        document.getElementById("pgiaithuong").removeChild(ptable);
        document.getElementById("gawa").removeChild(gdiv_wrap);

        ul.removeChild(li);
        n_giaithuong--;
    })
})
/*add so thich */
document.getElementById("btn-add-sothich").addEventListener('click', () => {
    n_sothich++;
    let ul = document.getElementById("sothich");
    let li = document.createElement("li");
    let del = document.createElement("i");
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.classList.add('mini-input')
    del.classList.add('fas');
    del.classList.add('fa-times');
    del.classList.add('mini-del');
    li.append(input);
    li.append(del);
    ul.appendChild(li);

    let div = document.createElement("div");
    div.classList.add("div-l-child");
    let i_cv = document.createElement("i");
    i_cv.classList.add("fas");
    i_cv.classList.add("fa-window-minimize");
    i_cv.classList.add("info-icon");
    let span = document.createElement("span");
    div.appendChild(i_cv);
    div.appendChild(span);

    let psothich = document.getElementById('psothich');
    let li2 = document.createElement('li');
    psothich.appendChild(li2);

    let ghob = document.getElementById('ghob');
    let li3 = document.createElement('li');
    ghob.append(li3);

    document.getElementById("st").appendChild(div);
    input.addEventListener("keyup", (e) => {
        span.innerHTML = e.target.value;
        li2.innerHTML = e.target.value;
        li3.innerHTML = e.target.value;
    })
    del.addEventListener("click", () => {
        /*document.getElementById("st").renmoveChild(div);-----bugg*/
        ul.removeChild(li);
        document.getElementById("psothich").removeChild(li2);
        document.getElementById("ghob").removeChild(li3);
        n_sothich--;
    })
})
/*add thong tin them */
document.getElementById("btn-add-thongtinthem").addEventListener('click', () => {
    n_more++;
    let ul = document.getElementById("thongtinthem");
    let li = document.createElement("li");
    let del = document.createElement("i");
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.classList.add('mini-input')
    del.classList.add('fas');
    del.classList.add('fa-times');
    del.classList.add('mini-del');
    li.append(input);
    li.append(del);
    ul.appendChild(li);

    let div = document.createElement("div");
    div.classList.add("div-l-child");
    let span = document.createElement("span");
    div.appendChild(span);


    let pttt = document.getElementById("pthongtinthem");
    let pdiv = document.createElement('div');
    let pli = document.createElement('li');
    pli.classList.add("muc0");
    pdiv.appendChild(pli);
    pttt.appendChild(pdiv);

    let gmore = document.getElementById('gmore');
    let gli = document.createElement('li')
    gmore.append(gli)

    document.getElementById("ttt").appendChild(div);
    input.addEventListener("keyup", (e) => {
        span.innerHTML = "- " + e.target.value;
        pli.innerHTML = e.target.value;
        gli.innerHTML = e.target.value;
    })

    del.addEventListener("click", () => {
        document.getElementById("ttt").removeChild(div);
        document.getElementById("pthongtinthem").removeChild(pdiv);
        document.getElementById("gmore").removeChild(gli);
        ul.removeChild(li);
        n_more--;
    })
})

/* an hien sidebar */
document.getElementById("download-show").addEventListener("click", () => {
    if (document.getElementsByClassName("sidebar")[0].style.display == 'none') {
        document.getElementsByClassName("sidebar")[0].style.display = 'block';
    } else {
        document.getElementsByClassName("sidebar")[0].style.display = 'none';
    }
})


function ShowOrNot(titleElement, contentElement, btnElement) {
    titleElement.addEventListener('click', () => {
        if (contentElement.style.display == 'block') {
            contentElement.style.display = 'none';
            btnElement.style.display = 'none';
        } else {
            contentElement.style.display = 'block';
            btnElement.style.display = 'block';

        }
    })
}

ShowOrNot(document.getElementById('mxh-text'), document.getElementById('mxh'), document.getElementById('btn-add-mxh'));
ShowOrNot(document.getElementById('muctieu-text'), document.getElementById('muctieu'), document.getElementById('btn-add-muctieu'));
ShowOrNot(document.getElementById('hocvan-text'), document.getElementById('hocvan'), document.getElementById('btn-add-hocvan'));
ShowOrNot(document.getElementById('kn-text'), document.getElementById('kn'), document.getElementById('btn-add-kn'));
ShowOrNot(document.getElementById('kynang-text'), document.getElementById('kynang'), document.getElementById('btn-add-kynang'));
ShowOrNot(document.getElementById('duAn-text'), document.getElementById('duAn'), document.getElementById('btn-add-duAn'));
ShowOrNot(document.getElementById('hd-text'), document.getElementById('hd'), document.getElementById('btn-add-hd'));
ShowOrNot(document.getElementById('cc-text'), document.getElementById('cc'), document.getElementById('btn-add-cc'));
ShowOrNot(document.getElementById('giaithuong-text'), document.getElementById('giaithuong'), document.getElementById('btn-add-giaithuong'));
ShowOrNot(document.getElementById('sothich-text'), document.getElementById('sothich'), document.getElementById('btn-add-sothich'));
ShowOrNot(document.getElementById('thongtinthem-text'), document.getElementById('thongtinthem'), document.getElementById('btn-add-thongtinthem'));

//
function removeOutCV(div) {
    if (confirm("Bạn muốn xóa"))
        div.style.display = "none";
}

//

var a = document.getElementById("avatar");
var pa = document.getElementById("pavatar");
var ga = document.getElementById("gavatar");
function readURL(input) {
    if (input.files) {
        var reader = new FileReader();
        reader.readAsDataURL(input.files[0]);
        reader.onload = (e) => {
            a.src = e.target.result;
            pa.src = e.target.result;
            ga.src = e.target.result;
        }
    }
}

document.getElementById("path-text").addEventListener("change", (e) => {
    if (e.target.value) {
        document.getElementById("avatar").src = e.target.value;
        document.getElementById("pavatar").src = e.target.value;
        document.getElementById("gavatar").src = e.target.value;
    }
})

document.getElementById("name-input").addEventListener("keyup", (e) => {
    document.getElementById("name").innerHTML = e.target.value;
    document.getElementById("pname").innerHTML = e.target.value;
    document.getElementById("gname").innerHTML = e.target.value;

})
document.getElementById("sub-input").addEventListener("keyup", (e) => {
    document.getElementById("sub").innerHTML = e.target.value;
    document.getElementById("psub").innerHTML = e.target.value;
    document.getElementById("gsub").innerHTML = e.target.value;
})
document.getElementById("birthday-input").addEventListener("change", (e) => {
    document.getElementById("birthday").innerHTML = e.target.value;
    document.getElementById("pbirthday").innerHTML = e.target.value;
    document.getElementById("gbirthday").innerHTML = e.target.value;
})
document.getElementById("phone-input").addEventListener("keyup", (e) => {
    document.getElementById("phone").innerHTML = e.target.value;
    document.getElementById("pphone").innerHTML = e.target.value;
    document.getElementById("gphone").innerHTML = e.target.value;
})
document.getElementById("mail-input").addEventListener("keyup", (e) => {
    document.getElementById("mail").innerHTML = e.target.value;
    document.getElementById("pmail").innerHTML = e.target.value;
    document.getElementById("gmail").innerHTML = e.target.value;

})
document.getElementById("address-input").addEventListener("keyup", (e) => {
    document.getElementById("address").innerHTML = e.target.value;
    document.getElementById("paddress").innerHTML = e.target.value;
    document.getElementById("gaddress").innerHTML = e.target.value;
})

function getValue(radio) {
    if (radio.value === 'Nam') {
        document.getElementById("gender").innerHTML = document.getElementById("nam-text").innerHTML;
        document.getElementById("pgender").innerHTML = document.getElementById("nam-text").innerHTML;
        document.getElementById("ggender").innerHTML = document.getElementById("nam-text").innerHTML;
    }
    else {
        document.getElementById("gender").innerHTML = document.getElementById("nu-text").innerHTML;
        document.getElementById("pgender").innerHTML = document.getElementById("nu-text").innerHTML;
        document.getElementById("ggender").innerHTML = document.getElementById("nu-text").innerHTML;
    }
}


function setbar(ob1, ob2) {
    ob1.addEventListener("change", (e) => {
        ob2.style.width = e.target.value <= 10 ? e.target.value.toString() + "0%" : "100%";
    })
}
setbar(document.getElementById("nghe-core"), document.getElementById("nghe-bar"));
setbar(document.getElementById("noi-core"), document.getElementById("noi-bar"));
setbar(document.getElementById("doc-core"), document.getElementById("doc-bar"));
setbar(document.getElementById("viet-core"), document.getElementById("viet-bar"));
setbar(document.getElementById("comp-core"), document.getElementById("htin-bar"));


setbar2(document.getElementById("comp-core"), pcompbar);
setbar2(document.getElementById("nghe-core"), pnghebar);
setbar2(document.getElementById("noi-core"), pnoibar);
setbar2(document.getElementById("doc-core"), pdocbar);
setbar2(document.getElementById("viet-core"), pvietbar);

function setbar2(ob1, ob2) {
    ob1.addEventListener("change", (e) => {
        let s = 'progress' + e.target.value + '0';
        ob2.className = '';
        ob2.classList.add(s);

    })
}
//set value cho range
setbar3(document.getElementById("comp-core"), document.getElementById("gitskill"));
setbar3(document.getElementById("noi-core"), document.getElementById("gspeaking"));
setbar3(document.getElementById("nghe-core"), document.getElementById("glistening"));
setbar3(document.getElementById("viet-core"), document.getElementById("gwritting"));
setbar3(document.getElementById("doc-core"), document.getElementById("greading"));

function setbar3(ob1, ob2) {
    ob1.addEventListener("change", (e) => {
        ob2.value = e.target.value;
    })
}

setbar33(document.getElementById("comp-core"), document.getElementById("gitskill"));
setbar33(document.getElementById("noi-core"), document.getElementById("gspeaking"));
setbar33(document.getElementById("nghe-core"), document.getElementById("glistening"));
setbar33(document.getElementById("viet-core"), document.getElementById("gwritting"));
setbar33(document.getElementById("doc-core"), document.getElementById("greading"));

function setbar33(ob1, ob2) {
    ob2.addEventListener("change", (e) => {
        ob1.value = e.target.value;
    })
}
//ref
document.getElementById("tennguoithamchieu").addEventListener("keyup", (e) => {
    document.getElementById("tenntc").innerHTML = e.target.value;
    document.getElementById("ptenntc").innerHTML = e.target.value;
    document.getElementById("gname-ref").innerHTML = e.target.value;
})
document.getElementById("vitringuoithamchieu").addEventListener("keyup", (e) => {
    document.getElementById("vitrintc").innerHTML = e.target.value;
    document.getElementById("pvitrintc").innerHTML = e.target.value;
    document.getElementById("gpos-ref").innerHTML = e.target.value;
})
document.getElementById("sdtnguoithamchieu").addEventListener("keyup", (e) => {
    document.getElementById("sdtntc").innerHTML = e.target.value;
    document.getElementById("psdtntc").innerHTML = e.target.value;
    document.getElementById("gcontact-ref").innerHTML = e.target.value;

})

let formDownload = document.getElementById("form1");

function download() {
    const e = document.getElementById("form1");
    const e2 = document.getElementById("form2");
    const e3 = document.getElementById("form-cv3");

    html2pdf()
        .from(formDownload)
        .set({ filename: "CV.pdf" })
        .save();
}



var r = document.querySelector(':root');
function setColor(div) {
    r.style.setProperty('--main-color', div.style.backgroundColor)
}

function chooseForm1() {
    document.getElementById("form1").style.display = "none";
    document.getElementById("form2").style.display = "none";
    document.getElementById("form3").style.display = "none";
    document.getElementById("change-color-f1").style.display = "";
    document.getElementById("form1").style.display = "";
    formDownload = document.getElementById("form1");
}

function chooseForm2() {
    document.getElementById("form1").style.display = "none";
    document.getElementById("form2").style.display = "none";
    document.getElementById("form3").style.display = "none";
    document.getElementById("change-color-f1").style.display = "none";
    document.getElementById("form2").style.display = "";
    formDownload = document.getElementById("form2");
}

function chooseForm3() {
    document.getElementById("form1").style.display = "none";
    document.getElementById("form2").style.display = "none";
    document.getElementById("form3").style.display = "none";
    document.getElementById("change-color-f1").style.display = "none";
    document.getElementById("form3").style.display = "";
    formDownload = document.getElementById("form3");

    let gmtanghe=document.getElementById("gmtanghe");
    let gmtanoi=document.getElementById("gmtanoi");
    let gmtadoc=document.getElementById("gmtadoc");
    let gmtaviet=document.getElementById("gmtaviet");

    
    let gmtinhoc=document.getElementById("gmtinhoc");
    let gmtienganh=document.getElementById("gmtienganh");
    let gmmuctieunghenghiep=document.getElementById("gmmuctieunghenghiep");
    let gmkynangkhac=document.getElementById("gmkynangkhac");
    let gmsothich=document.getElementById("gmsothich");
    let gmhocvan=document.getElementById("gmhocvan");
    let gmkinhnghiem=document.getElementById("gmkinhnghiem");
    let gmhoatdong=document.getElementById("gmhoatdong");
    let gmduan=document.getElementById("gmduan");
    let gmchungchi=document.getElementById("gmchungchi");
    let gmgiaithuong=document.getElementById("gmgiaithuong");
    let gmthongtinthem=document.getElementById("gmthongtinthem");
    let gmnguoithamchieu=document.getElementById("gmnguoithamchieu");
    let gmcontact=document.getElementById("gmcontact");

    gmtanghe.innerHTML = "Nghe";
    gmtanoi.innerHTML = "Nói";
    gmtadoc.innerHTML = "Đọc";
    gmtaviet.innerHTML = "Viết";
    gmtinhoc.innerHTML = "Tin học văn phòng";
    gmtienganh.innerHTML = "Tiếng Anh";

    gmmuctieunghenghiep.innerHTML ="MỤC TIÊU NGHỀ NGHIỆP";
    gmkynangkhac.innerHTML ="KỸ NĂNG KHÁC";
    gmsothich.innerHTML ="SỞ THÍCH";
    gmhocvan.innerHTML = "HỌC VẤN";
    gmkinhnghiem.innerHTML = "KINH NGHIỆM";
    gmhoatdong.innerHTML = "HOẠT ĐỘNG";
    gmduan.innerHTML = "DỰ ÁN";
    gmchungchi.innerHTML = "CHỨNG CHỈ";
    gmgiaithuong.innerHTML = "GIẢI THƯỞNG"
    gmthongtinthem.innerHTML = "THÔNG TIN THÊM";
    gmnguoithamchieu.innerHTML = "NGƯỜI THAM CHIẾU";
    gmcontact.innerHTML = "liên lạc";
}