let math=+prompt('Nhập điểm Toán:')
let physics=+prompt('Nhập điểm Lý:')
let chemistry=+prompt('Nhập điểm Hóa:')
avg=(math+physics+chemistry)/3
if(avg<3.5){
    alert('Điểm trung bình = '+avg+' xếp hạng Yếu')
}else if(avg<5.0){
    alert('Điểm trung bình = '+avg+' xếp hạng Trung Bình')
}else if (avg<7.5){
    alert('Điểm trung bình = '+avg+' xếp hạng Khá')
}else if (avg<8.5){
    alert('Điểm trung bình = '+avg+' xếp hạng Giỏi')
}else{
    alert('Điểm trung bình = '+avg+' xếp hạng Xuất Sắc')
}