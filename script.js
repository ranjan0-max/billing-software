var arr = []
var iteam = {
  atta_10kg: { hsn: 1101, gst: 0 },
  atta_35kg: { hsn: 1101, gst: 0 },
  atta_5kg: { hsn: 1101, gst: 0 },
  choker: { hsn: 230240, gst: 0 },
   wheat: { hsn: 1001, gst: 0 },
   atta_40kg: { hsn: 1101, gst: 0 }
}


window.addEventListener("load", function (e) {
  if (localStorage.getItem("billno") == null) {
    localStorage.setItem("billno", 0)
  }
  document.getElementById("ind").getElementsByTagName("input")[1].value = this.localStorage.getItem("billno")
  var datalist = this.document.getElementById("itm-name")
  var option = ""
  for (var i in iteam) {
    option += '<option value="' + i + '">'
  }
  datalist.innerHTML = option
})

document.getElementById("iteamname").addEventListener("change", function (e) {
  var ob = iteam[e.target.value]
  if (ob) {
    document.getElementById("hsn").value = ob.hsn
    document.getElementById("gst").value = ob.gst
  }

})



function save() {
    document.getElementById("ind").style.marginRight="40px"
  document.getElementById("cus-input").style.marginLeft="35px"
  var form = document.getElementById("submit-form")
  document.getElementById("save").style.display = "none"
  document.getElementById("delete").style.display = "none"
  document.getElementById("busdetail").style.display="block"
  form.style.display = "none";
  localStorage.setItem("billno", parseInt(document.getElementById("ind").getElementsByTagName("input")[1].value) + 1)
  updatecus();
  window.print()
  document.getElementById("ind").getElementsByTagName("input")[1].value = this.localStorage.getItem("billno")
  location.reload()

}

function sub(b, c) {
  b = tofix(b)
  c = tofix(c)
  var tens = [10, 100, 1000, 10000, 100000, 1000000, 10000000]
  var b1 = b.toString().split(".")
  var blen = b1[b1.length - 1].length
  var mult = tens[blen - 1]
  b = b * mult
  c = c * mult
  return ((b - c) / mult).toFixed(2);
}

function tofix(a) {
  a = ((parseInt(a * 100)) / 100).toFixed(2)
  return a
}

function sub_total() {
  var subtotal = 0
  for (var i of arr) {
    var subtotaldis = document.getElementById("subtotal-display")
    subtotal = subtotal + parseFloat(i.total)
    subtotaldis.getElementsByClassName("value")[0].innerText = subtotal;

  }
}

function insertrowupdate() {
  var data = document.getElementById("edit-form-holder").getElementsByTagName("input");
  var gstnumber = parseInt(data[3].value)
  var rate = parseInt(data[6].value)
  var quan = parseInt(data[4].value)
  var gst_amount = tofix(rate - (rate * (100 / (100 + gstnumber))))
  var original_cost = sub(tofix(rate), tofix(gst_amount));
  var total = tofix(original_cost * quan)
  var gst_amount_t = tofix(gst_amount * quan);
  arr[parseInt(data[0].value) - 1] = {
    sno: data[0].value,
    itmname: data[1].value,
    hsn: data[2].value,
    gst: data[3].value,
    quantity: data[4].value,
    per: data[5].value,
    rate: original_cost,
    total: total,
    total_gst_amount: gst_amount_t,
    original_rate: rate
  }
  document.getElementById("edit-form-holder").style.display = "none";
  createtable();

}


function insert() {
  var quan = parseInt(document.getElementById("quantity").value);
  var rate = parseInt(document.getElementById("rate").value);
  var gstnumber = parseInt(document.getElementById("gst").value);
  var table = document.getElementsByTagName("table")[0]
  var hnumber = document.getElementById("hsn").value;
  var iname = document.getElementById("iteamname").value;
  var unit = document.getElementById("per").value;
  var total = document.getElementById("total").value;
  var gst_amount = tofix(rate - (rate * (100 / (100 + gstnumber))))
  var original_cost = sub(tofix(rate), tofix(gst_amount));
  total = tofix(original_cost * quan)
  var gst_amount_t = tofix(gst_amount * quan);
  var row = {
    sno: arr.length + 1,
    itmname: iname,
    hsn: hnumber,
    gst: gstnumber,
    rate: original_cost,
    quantity: quan,
    per: unit,
    total: total,
    total_gst_amount: gst_amount_t,
    original_rate: rate
  }
  arr.push(row)
  createtable()
  for (var i = 0; i < 8; i++) {
    document.querySelectorAll("#submit-form td input")[i].value = "";
  }
  document.querySelector("#iteamname").focus();
}

function updatetotal_editform() {
  var quan = parseInt(document.getElementById("quantityupdate").value);
  var rate = parseInt(document.getElementById("rateupdate").value);
  var gst = parseInt(document.getElementById("gstupdate").value);

  var total = rate * quan;
  var total_in = document.getElementById("totalupdate")
  total_in.value = total;
}

function updatetotal() {
  var quan = parseInt(document.getElementById("quantity").value);
  var rate = parseInt(document.getElementById("rate").value);
  var gst = parseInt(document.getElementById("gst").value);

  var total = rate * quan;
  var total_in = document.getElementById("total")
  total_in.value = total;
}

function del() {
  if (arr.length > 0) {
    arr.pop()
    createtable()
  }
  else {
    alert("tables is empty")
  }
  if (arr.length == 0) {
    var form = document.getElementById("submit-form")
    form.style.display = "table-row";
    var grandtotaldis = document.getElementById("grand-total")
    grandtotaldis.getElementsByClassName("value")[0].innerText = 0;
  }
}

function edit(index, updatedata) {
  var currntrow;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].sno == index) {
      currntrow = i;
      break;
    }
  }
  arr[currntrow] = updatedata
  createtable()
}

function rowclick(e) {
  var updateform = document.getElementById("edit-form-holder");
  updateform.style.display = "flex"
  var formdata = e.target.parentElement
  for (var i = 0; i < 8; i++) {
    if (i == 6) {
      updateform.getElementsByTagName("input")[i].value = arr[parseInt(formdata.cells.item(0).innerText) - 1].original_rate
      console.log(formdata.cells.item(0))
    }
    else {
      updateform.getElementsByTagName("input")[i].value = formdata.cells.item(i).innerText
    }
  }
}

function createtable() {
  var table = document.getElementsByTagName("table")[0];
  var len = table.rows.length
  for (var i = 2; i < len; i++) {
    table.deleteRow(2);
  }
  sub_total()
  var e, a, b, c, d;
  e = a = b = c = d = 0;

  var grandtotal = 0
  for (var [posi, i] of arr.entries()) {
    var row = table.insertRow()
    var grandtotaldis = document.getElementById("grand-total")
    grandtotal = grandtotal + parseFloat(i.total) + parseFloat(i.total_gst_amount)
    grandtotaldis.getElementsByClassName("value")[0].innerText = grandtotal;
    row.addEventListener("click", rowclick)
    row.insertCell().innerText = posi + 1
    row.insertCell().innerText = i.itmname
    row.insertCell().innerText = i.hsn
    row.insertCell().innerText = i.gst
    row.insertCell().innerText = i.quantity
    row.insertCell().innerText = i.per
    row.insertCell().innerText = i.rate
    row.insertCell().innerText = i.total
    if (i.gst == 5) {
      a = a + parseFloat(i.total_gst_amount)
    }
    else if (i.gst == 12) {
      b = b + parseFloat(i.total_gst_amount)
    }
    else if (i.gst == 18) {
      c = c + parseFloat(i.total_gst_amount)
    }
    else if (i.gst == 28) {
      d = d + parseFloat(i.total_gst_amount)
    }
  }
  console.log(arr)
  gstdis(a, b, c, d);


}

function updatecus() {
  var inputholder = document.getElementById("cus-input")
  let to = inputholder.getElementsByTagName("input")[0]
  let address = inputholder.getElementsByTagName("input")[1]
  let gst = inputholder.getElementsByTagName("input")[2]
  document.getElementById("show-to").innerText="To :- " + to.value
  document.getElementById("show-address").innerText="Address :- " + address.value
  document.getElementById("show-gst").innerText="GST No :- " + gst.value
  to.style.display="none"
  address.style.display="none"
  gst.style.display="none"

  var inputdateholder = document.getElementById("ind")
  var inputdate = inputdateholder.getElementsByTagName("input")[0]
  var inputbillno = inputdateholder.getElementsByTagName("input")[1]
  var vehical= inputdateholder.getElementsByTagName("input")[2]
//   console.log(inputvehical)
  document.getElementById("show-date").innerText = "Date :- " + inputdate.value
  document.getElementById("show-billno").innerText = "Bill No :- " + inputbillno.value
  document.getElementById("vehical-no").innerText= "Vehical No :- "+ vehical.value
  inputdate.style.display = "none"
  inputbillno.style.display = "none"
  vehical.style.display="none"
}

function gstdis(a, b, c, d) {
  var gst5dis = document.getElementById("gst5-display")
  var gst12dis = document.getElementById("gst12-display")
  var gst18dis = document.getElementById("gst18-display")
  var gst28dis = document.getElementById("gst28-display")
  gst5dis.getElementsByClassName("value")[0].innerText = a
  gst12dis.getElementsByClassName("value")[0].innerText = b
  gst18dis.getElementsByClassName("value")[0].innerText = c
  gst28dis.getElementsByClassName("value")[0].innerText = d
}

var inrow = document.getElementById("rate");
inrow.addEventListener("keypress", function (e) {
  var table = document.getElementsByTagName("table")[0]
  if (e.keyCode === 13) {
    insert()
  }
})