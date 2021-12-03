/* chuyen ngon ngu */
document.getElementById("language").addEventListener('change',()=>{
    let it = document.getElementById("comp-text");
    let it1 = document.getElementById("tin-text2");
    let it2 = document.getElementById("tin-text");
    let lang = document.getElementById("flag");
    let chooseform = document.getElementById("choose-form-text");
    let info=document.getElementById("info-title-text");
    let info2=document.getElementById("ttlh-text");
    let btn=document.getElementById("lb-upload");
    let or=document.getElementById("or-text");
    let path=document.getElementById("path-text");
    let name=document.getElementById("name-text");
    let sub=document.getElementById("sub-text");
    let bd=document.getElementById("date-text");
    let gender=document.getElementById("gender-text");
    let nam=document.getElementById("nam-text");
    let nu=document.getElementById("nu-text");
    let phone=document.getElementById("phone-text");
    let addr=document.getElementById("address-text");
    let mxh=document.getElementById("mxh-text");
    let muctieu=document.getElementById("muctieu-text");
    let muctieu2=document.getElementById("mtnn-text");
    let hocvan=document.getElementById("hocvan-text");
    let hocvan2=document.getElementById("td-text");
    let kinhnghiem=document.getElementById("kn-text");
    let kinhnghiem2=document.getElementById("knlv-text");
    let kynang=document.getElementById("kynang-text");
    let kynang2=document.getElementById("cknk-text");
    let eng=document.getElementById("eng-text");
    let eng2=document.getElementById("eng-text2");
    let nghe=document.getElementById("nghe-text");
    let noi=document.getElementById("noi-text");
    let doc=document.getElementById("doc-text");
    let viet=document.getElementById("viet-text");
    let nghe2=document.getElementById("nghe-text2");
    let noi2=document.getElementById("noi-text2");
    let doc2=document.getElementById("doc-text2");
    let viet2=document.getElementById("viet-text2");
    let hd=document.getElementById("hd-text");
    let hd2=document.getElementById("hoatdong-text");
    let cc=document.getElementById("cc-text");
    let cc2=document.getElementById("chungchi-text");
    let st=document.getElementById("sothich-text");
    let st2=document.getElementById("st-text");
    let gt=document.getElementById("giaithuong-text");
    let gt2=document.getElementById("gt-text");
    let ttt=document.getElementById("thongtinthem-text");
    let ttt2=document.getElementById("ttt-text");
    let duan=document.getElementById("duAn-text");
    let duan2=document.getElementById("duan-text");
    let nguoithamchieu=document.getElementById("ntc-text");
    let nguoithamchieu2=document.getElementById("nguoithamchieu-text");
    
    

    let pmtanghe=document.getElementById("pmtanghe");
    let pmtanoi=document.getElementById("pmtanoi");
    let pmtadoc=document.getElementById("pmtadoc");
    let pmtaviet=document.getElementById("pmtaviet");

    
    let pmtinhoc=document.getElementById("pmtinhoc");
    let pmtienganh=document.getElementById("pmtienganh");
    let pmmuctieunghenghiep=document.getElementById("pmmuctieunghenghiep");
    let pmkynang=document.getElementById("pmkynang");
    let pmkynangkhac=document.getElementById("pmkynangkhac");
    let pmsothich=document.getElementById("pmsothich");
    let pmhocvan=document.getElementById("pmhocvan");
    let pmkinhnghiem=document.getElementById("pmkinhnghiem");
    let pmhoatdong=document.getElementById("pmhoatdong");
    let pmduan=document.getElementById("pmduan");
    let pmchungchi=document.getElementById("pmchungchi");
    let pmgiaithuong=document.getElementById("pmgiaithuong");
    let pmthongtinthem=document.getElementById("pmthongtinthem");
    let pmnguoithamchieu=document.getElementById("pmnguoithamchieu");

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
    
   
    
    
    
    if(document.getElementById("language").value=='English'){
        it.innerHTML="IT";
        it1.innerHTML="IT";
        it2.innerHTML="Levels";
        lang.src="images/flagEng.jpg";
        chooseform.innerHTML="CHOOSE FORM CV";
        info.innerHTML="PERSONAL INFORMATION";
        info2.innerHTML="CONTACT INFO";
        btn.innerHTML="Choose img";
        or.innerHTML="OR";
        path.placeholder=" Enter the path";
        name.innerHTML="FULL NAME";
        sub.innerHTML="SUBTITLE";
        bd.innerHTML="BIRTHDAY";
        gender.innerHTML="GENDER";
        nam.innerHTML="Male";
        nu.innerHTML="Female";
        phone.innerHTML="PHONE";
        addr.innerHTML="ADDRESS";
        mxh.innerHTML="SOCIAL NETWORK";
        muctieu.innerHTML="CAREER GOALS";
        muctieu2.innerHTML="CAREER GOALS";
        hocvan.innerHTML="EDUCATION";
        hocvan2.innerHTML="EDUCATION";
        kinhnghiem.innerHTML="EXPERIENCE";
        kinhnghiem2.innerHTML="EXPERIENCE";
        kynang.innerHTML="OTHER SKILLS";
        kynang2.innerHTML="OTHER SKILLS";
        eng.innerHTML="ENGLISH";
        eng2.innerHTML="ENGLISH";
        nghe.innerHTML="Listening";
        noi.innerHTML="Speaking";
        doc.innerHTML="Reading";
        viet.innerHTML="Writing";
        hd.innerHTML="ACTIVITY";
        hd2.innerHTML="ACTIVITY";
        cc.innerHTML="CERTIFICATE";
        st.innerHTML="HOBBY";
        gt.innerHTML="PRIZE";
        cc2.innerHTML="CERTIFICATE";
        st2.innerHTML="HOBBY";
        gt2.innerHTML="PRIZE";
        ttt.innerHTML="MORE INFORMATION";
        ttt2.innerHTML="MORE INFORMATION";
        duan.innerHTML="PROJECT";
        duan2.innerHTML="PROJECT";
        nguoithamchieu.innerHTML="REFERENCE PERSON";
        nguoithamchieu2.innerHTML="REFERENCE PERSON";
        nghe2.innerHTML="Listening";
        noi2.innerHTML="Speaking";
        doc2.innerHTML="Reading";
        viet2.innerText="Writing";

        
        pmtanghe.innerHTML = "Listening";
        pmtanoi.innerHTML = "Speaking";
        pmtadoc.innerHTML = "Reading";
        pmtaviet.innerHTML = "Writing";
        pmtinhoc.innerHTML = "Computer";
        pmtienganh.innerHTML = "English";

        pmmuctieunghenghiep.innerHTML ="CAREER GOALS";
        pmkynang.innerHTML ="SKILLS";
        pmkynangkhac.innerHTML ="OTHER SKILL";
        pmsothich.innerHTML ="HOBBY";
        pmhocvan.innerHTML = "EDUCATION";
        pmkinhnghiem.innerHTML = "EXPERIENCE";
        pmhoatdong.innerHTML = "ACTIVITIES";
        pmduan.innerHTML = "PROJECT";
        pmchungchi.innerHTML = "CERTIFICATE";
        pmgiaithuong.innerHTML = "PRIZE"
        pmthongtinthem.innerHTML = "MORE INFORMATION";
        pmnguoithamchieu.innerHTML = "REFERENCE PERSON";

        gmtanghe.innerHTML = "Listening";
        gmtanoi.innerHTML = "Speaking";
        gmtadoc.innerHTML = "Reading";
        gmtaviet.innerHTML = "Writing";
        gmtinhoc.innerHTML = "IT SKILLS";
        gmtienganh.innerHTML = "ENGLISH";

        gmmuctieunghenghiep.innerHTML ="CAREER GOALs";
        gmkynangkhac.innerHTML ="OTHER SKILL";
        gmsothich.innerHTML ="HOBBIES";
        gmhocvan.innerHTML = "EDUCATION";
        gmkinhnghiem.innerHTML = "EXPERIENCES";
        gmhoatdong.innerHTML = "ACTIVITIES";
        gmduan.innerHTML = "PROJECTS";
        gmchungchi.innerHTML = "CERTIFICATE";
        gmgiaithuong.innerHTML = "AWARDS"
        gmthongtinthem.innerHTML = "MORE";
        gmnguoithamchieu.innerHTML = "REFERENCES";
        gmcontact.innerHTML = "Contact me";

        

        

    } 
    else if(document.getElementById("language").value=='Vietnamese'){
        it.innerHTML="TIN HỌC";
        it1.innerHTML="TIN HỌC";
        it2.innerHTML="Thành thạo";
        lang.src="images/flagVn.png";
        chooseform.innerHTML="CHỌN MẪU CV";
        info.innerHTML="THÔNG TIN CÁ NHÂN";
        info2.innerHTML="THÔNG TIN LIÊN HỆ";
        btn.innerHTML="Chọn ảnh";
        or.innerHTML="HOẶC";
        path.placeholder=" Nhập đường dẫn ảnh";
        name.innerHTML="HỌ TÊN";
        sub.innerHTML="TIÊU ĐỀ PHỤ";
        bd.innerHTML="NGÀY SINH";
        gender.innerHTML="GIỚI TÍNH";
        nam.innerHTML="Nam";
        nu.innerHTML="Nữ";
        phone.innerHTML="SĐT";
        addr.innerHTML="ĐỊA CHỈ";
        mxh.innerHTML="MẠNG XÃ HỘI";
        muctieu.innerHTML="MỤC TIÊU NGHỀ NGHIỆP";
        muctieu2.innerHTML="MỤC TIÊU NGHỀ NGHIỆP";
        hocvan.innerHTML="HỌC VẤN";
        hocvan2.innerHTML="TRÌNH ĐỘ HỌC VẤN";
        kinhnghiem.innerHTML="KINH NGHIỆM";
        kynang.innerHTML="CÁC KỸ NĂNG KHÁC";
        kynang2.innerHTML="CÁC KỸ NĂNG KHÁC";
        eng.innerHTML="TIẾNG ANH";
        eng2.innerHTML="TIẾNG ANH";
        
        nghe.innerHTML="Nghe";
        noi.innerHTML="Nói";
        doc.innerHTML="Đọc";
        viet.innerHTML="Viết";
        hd.innerHTML="HOẠT ĐỘNG";
        hd2.innerHTML="HOẠT ĐỘNG";
        cc.innerHTML="CHỨNG CHỈ";
        st.innerHTML="SỞ THÍCH";
        gt.innerHTML="GIẢI THƯỞNG";
        cc2.innerHTML="CHỨNG CHỈ";
        st2.innerHTML="SỞ THÍCH";
        gt2.innerHTML="GIẢI THƯỞNG";
        ttt.innerHTML="THÔNG TIN THÊM";
        ttt2.innerHTML="THÔNG TIN THÊM";
        duan.innerHTML="DỰ ÁN";
        duan2.innerHTML="DỰ ÁN";
        nguoithamchieu.innerHTML="NGƯỜI THAM CHIẾU";
        nguoithamchieu2.innerHTML="NGƯỜI THAM CHIẾU";
            
        nghe2.innerHTML="Nghe";
        noi2.innerHTML="Nói";
        doc2.innerHTML="Đọc";
        viet2.innerHTML="Viết";

        pmtanghe.innerHTML = "Nghe";
        pmtanoi.innerHTML = "Nói";
        pmtadoc.innerHTML = "Đọc";
        pmtaviet.innerHTML = "Viết";
        pmtinhoc.innerHTML = "Tin học văn phòng";
        pmtienganh.innerHTML = "Tiếng Anh";

        pmmuctieunghenghiep.innerHTML ="MỤC TIÊU NGHỀ NGHIỆP";
        pmkynang.innerHTML ="KỸ NĂNG";
        pmkynangkhac.innerHTML ="KỸ NĂNG KHÁC";
        pmsothich.innerHTML ="SỞ THÍCH";
        pmhocvan.innerHTML = "HỌC VẤN";
        pmkinhnghiem.innerHTML = "KINH NGHIỆM";
        pmhoatdong.innerHTML = "HOẠT ĐỘNG";
        pmduan.innerHTML = "DỰ ÁN";
        pmchungchi.innerHTML = "CHỨNG CHỈ";
        pmgiaithuong.innerHTML = "GIẢI THƯỞNG"
        pmthongtinthem.innerHTML = "THÔNG TIN THÊM";
        pmnguoithamchieu.innerHTML = "NGƯỜI THAM CHIẾU";


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

    

    

})