lst = [];
curItem = null;
$(function() {  
    var data = [  
      {
        "value":"Honda Winner X V3 CBS",
        "label":"Honda Winner X V3 CBS - 42.000.000đ",
        "maSP":"SP001",
        "tenSP":"Honda Winner X V3 CBS",
        "DG":42000000,
        "DVT":"Cái",
        "Loai":"Xe Máy",
      },    
      {
        "value":"Honda Winner X V3 ABS",
        "label":"Honda Winner X V3 ABS - 46.000.000đ",
        "maSP":"SP002",
        "tenSP":"Honda Winner X V3 ABS",
        "DG":45000000,
        "DVT":"Cái",
        "Loai":"Xe Máy",
      },
      {
        "value":"Yamaha Exciter 155 VVA",
        "label":"Yamaha Exciter 155 VVA - 55.000.000đ",
        "maSP":"SP003",
        "tenSP":"Yamaha Exciter 155 VVA",
        "DG":45000000,
        "DVT":"Cái",
        "Loai":"Xe Máy",
      },      
 
      {
        "value":"Honda CB150R",
        "label":"Honda CB150R - 72.000.000đ",
        "maSP":"SP004",
        "tenSP":"Honda CB150R",
        "DG":72000000,
        "DVT":"Cái",
        "Loai":"Xe Máy",
      },      
      {
        "value":"Yamaha XS155R",
        "label":"Yamaha XS155R - 77.000.000đ",
        "maSP":"SP005",
        "tenSP":"Yamaha XS155R",
        "DG":77000000,
        "DVT":"Cái",
        "Loai":"Xe Máy",
      },
    ];  
    $( "#txtSanPham" ).autocomplete({  
      source: data,
      select: function(e,ui){
        curItem = ui.item;
        $("#lblChon").html("Bạn đã chọn <b>["+ ui.item.tenSP+"]</b> với giá "+ formatNumber(ui.item.DG) +" VNĐ");
      }
    });  
  });

  function formatNumber(n)
  {
    return new Intl.NumberFormat('vi-VN', { maximumSignificantDigits: 3 }).format(n);
  }

  function themSP(){
    lst.push(curItem);
    $("#totSP").text(lst.length);
  }