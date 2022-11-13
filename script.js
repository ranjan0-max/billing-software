var arr = []
var iteam = {
  lays_10_rs: { hsn: 2106, gst: 12 },
  lays_20_rs: { hsn: 2106, gst: 12 },
  kur_kure_10_rs: { hsn: 2106, gst: 12 },
  kur_kure_20_rs: { hsn: 2106, gst: 12 },
  uncle_chips_10_rs: { hsn: 2106, gst: 12 },
  uncle_chips_20_rs: { hsn: 2106, gst: 12 },
  puff_corn_10_rs: { hsn: 2106, gst: 12 },
  kali_mirch: { hsn: 09041140, gst: 5 },
  mirch: { hsn: 09042219, gst: 5 },
  haldi_appu: { hsn: 09103030, gst: 5 },
  ajwain: { hsn: 09109914, gst: 5 },
  saunf: { hsn: 09096131, gst: 5 },
  dhaniya: { hsn: 09092190, gst: 5 },
  jeera: { hsn: 09093129, gst: 5 },
  marval_rozana_tea: { hsn: 09023020, gst: 5 },
  marvel_yellow_tea: { hsn: 0902, gst: 5 },
  khal: { hsn: 2306, gst: 5 },
  rice_gunjal_25_kg: { hsn: 1006, gst: 5 },
  rice_gunjal_5_kg: { hsn: 1006, gst: 5 },
  atta_noodle: { hsn: 1902, gst: 12 },
  dish_bar: { hsn: 3401, gst: 18 },
  patanjli_dish_bar: { hsn: 3401, gst: 18 },
  dalia: { hsn: 1103, gst: 5 },
  dant_kanti_100gm: { hsn: 3306, gst: 18 },
  dant_kanti_200gm: { hsn: 3306, gst: 18 },
  detol_harpic: { hsn: 3808, gst: 18 },
  patanji_ghee: { hsn: 0405, gst: 12 },
  patanji_hing: { hsn: 1301, gst: 5 },
  mad_angle: { hsn: 2106, gst: 12 },
  aashirvaad: { hsn: 1101, gst: 5 },
  aashirvaad_salt: { hsn: 2501, gst: 0 },
  savlon_handwash: { hsn: 34022010, gst: 18 },
  chaki_atta_35_kg: { hsn: 1101, gst: 0 },
  chaki_atta_10_kg: { hsn: 1101, gst: 0 },
  chaki_atta_5_kg: { hsn: 1101, gst: 0 },
  wheat: { hsn: 11021000, gst: 0 },
  suji_pkt: { hsn: 1101, gst: 5 },
  mill_atta: { hsn: 11010000, gst: 0 },
  chokar: { hsn: 23023000, gst: 0 },
  dana: { hsn: 23099020, gst: 0 },
  feed_brami: { hsn: 23099010, gst: 0 },
  feed_godrej: { hsn: 23099010, gst: 0 },
  feed_depak: { hsn: 23099010, gst: 0 },
  besan_non_branded: { hsn: 11063090, gst: 0 },
  kisan_sauce: { hsn: 2103, gst: 12 },
  vijay_rice: { hsn: 100610, gst: 0 },
  rice_1991: { hsn: 100610, gst: 0 },
  rice_1060_35kg: { hsn: 100630, gst: 5 },
  rice_1060_10kg: { hsn: 100630, gst: 5 },
  rice_1060_5kg: { hsn: 100630, gst: 5 },
  khal: { hsn: 2306, gst: 0 },
  rice_haryali: { hsn: 10064000, gst: 5 },
  salt: { hsn: 250100, gst: 0 },
  hatsun_ghee_1_lt: { hsn: 4059020, gst: 12 },
  hatsun_ghee_half_lt: { hsn: 4059020, gst: 12 },
  maida: { hsn: 11010000, gst: 0 },
  gur: { hsn: 17011310, gst: 0 },
  gur_for_animal: { hsn: 1701, gst: 0 },
  bundi: { hsn: 2106, gst: 5 },
  p_marka_oil_15_lt: { hsn: 1514912, gst: 5 },
  p_marka_oil_5_lt: { hsn: 1514912, gst: 5 },
  p_marka_oil_2_lt: { hsn: 1514912, gst: 5 },
  p_marka_oil_1_lt: { hsn: 1514912, gst: 5 },
  kala_chana: { hsn: 7132000, gst: 0 },
  raj_maa: { hsn: 7133300, gst: 0 },
  rice_nb: { hsn: 100610, gst: 0 },
  dove_shop: { hsn: 3401, gst: 18 },
  kissan_sauce: { hsn: 2103, gst: 12 },
  knour_shoup: { hsn: 2104, gst: 18 },
  life_boy_shop: { hsn: 3401, gst: 18 },
  lux_shop: { hsn: 3401, gst: 18 },
  rexsona_shop: { hsn: 3401, gst: 18 },
  life_boy_shop: { hsn: 3401, gst: 18 },
  haldi_chandan_shop: { hsn: 3401, gst: 18 },
  hand_wash_refill: { hsn: 3401, gst: 18 },
  rin_bar: { hsn: 3401, gst: 18 },
  sensodyne_colget: { hsn: 3306, gst: 18 },
  taj_mahel_tea: { hsn: 0902, gst: 5 },
  vim_bar: { hsn: 3405, gst: 18 },
  horlicks: { hsn: 1901, gst: 18 },
  syska_bulb: { hsn: 9405, gst: 12 },
  fortun_refind: { hsn: 1507901, gst: 5 },
  dalda_gagan: { hsn: 1516209, gst: 5 },
  gagan_refind_oil: { hsn: 15122910, gst: 5 },
  soya_refind: { hsn: 1507901, gst: 5 },
  safola_gold: { hsn: 1517909, gst: 5 },
  daal_chana: { hsn: 7132020, gst: 0 },
  malka: { hsn: 7134000, gst: 0 },
  mung_dhuli: { hsn: 7133100, gst: 0 },
  mung_chilka: { hsn: 7133100, gst: 0 },
  mung: { hsn: 7133100, gst: 0 },
  maa: { hsn: 7133100, gst: 0 },
  maa_chilka: { hsn: 7133100, gst: 0 },
  maa_dhuli: { hsn: 7133100, gst: 0 },
  dolar: { hsn: 7132000, gst: 0 },
  kabli_chana: { hsn: 7132000, gst: 0 },
  arhar: { hsn: 7139010, gst: 0 },
  masar: { hsn: 7134000, gst: 0 },
  yippee_noodle: { hsn: 19023010, gst: 0 },
  haldi_ram_namkin: { hsn: 21069099, gst: 12 },
  detol_shop: { hsn: 34011190, gst: 18 },
  lizol: { hsn: 3808, gst: 18 },
  dairy_milk_cocolate: { hsn: 18063200, gst: 18 },
  snakar: { hsn: 19053290, gst: 18 },
  born_vita: { hsn: 19019090, gst: 18 },
  dabar_lal_paste: { hsn: 33061020, gst: 18 },
  sugar: { hsn: 1701, gst: 5 },
  surf_excel: { hsn: 34029011, gst: 18 },
  colget_harbel: { hsn: 33061020, gst: 18 },
  shakar: { hsn: 1701, gst: 0 },
  rice_88: { hsn: 1006, gst: 5 },
  allu: { hsn: 0701, gst: 0 },
  nirol: { hsn: 3401, gst: 18 },
  till: { hsn: 1207, gst: 5 },
  ghadi_washing_pdr: { hsn: 3402, gst: 18 },
  clink_plus_sampoo_rs1: { hsn: 3305, gst: 18 },
  sunlick_sampoo_rs1: { hsn: 3305, gst: 18 },
  dove_sampoo_rs1: { hsn: 3305, gst: 18 },
  kissan_jam: { hsn: 2007, gst: 12 },
  knr_sup_all_type: { hsn: 2104, gst: 18 },
  liptan_green_tea: { hsn: 0902, gst: 5 },
  readlable_tea: { hsn: 0902, gst: 5 },
  taza_tea: { hsn: 0902, gst: 5 },
  wheel_w_pdr: { hsn: 3402, gst: 18 },
  oreio_bisckit: { hsn: 19053100, gst: 18 },
  bisckit_5050: { hsn: 19053100, gst: 18 },
  amrit_rus: { hsn: 1905, gst: 5 },
  coffe_jar: { hsn: 12011120, gst: 18 },
  bisckit_bacrry: { hsn: 19059020, gst: 18 },
  every_day_milk: { hsn: 0402, gst: 5 },
  meggi_noodle: { hsn: 19023010, gst: 12 },
  roongi: { hsn: 07133500, gst: 0 },
  badi_elachi: { hsn: 09083120, gst: 5 },
  elachi_loss: { hsn: 09083120, gst: 5 },
  daal_chini: { hsn: 09061910, gst: 5 },
  kaju: { hsn: 08013100, gst: 5 },
  badam_giri: { hsn: 08021200, gst: 12 },
  magaj: { hsn: 1207, gst: 5 },
  mdh_degimirch: { hsn: 0904, gst: 5 },
  mdh_kitchen_king: { hsn: 0910, gst: 5 },
  mdh_garam_masala: { hsn: 0910, gst: 5 },
  mdh_meet_masala: { hsn: 0910, gst: 5 },
  mdh_chiken_masala: { hsn: 0910, gst: 5 },
  fenyl_white: { hsn: 3402, gst: 18 },
  tara_mera: { hsn: 1207, gst: 0 },
  dodla_ghee: { hsn: 0405, gst: 12 },
  mungfali: { hsn: 120210, gst: 5 },
  rice_delhi_gold: { hsn: 1006, gst: 0 },
  pear_shpe: { hsn: 3401, gst: 18 },
  hamam_shpe: { hsn: 3401, gst: 18 },
  dakh: { hsn: 0806, gst: 5 },
  beasn_shaktibhog: { hsn: 1106, gst: 5 },
  svr_vrmcli: { hsn: 1902, gst: 12 },
  gini_15lt: { hsn: 151229, gst: 5 },
  gari_gola: { hsn: 1203, gst: 5 },
  bisckit_goodday: { hsn: 1905, gst: 18 },
  bisckit_glucos: { hsn: 1905, gst: 18 },
  bisckit_digestive: { hsn: 1905, gst: 18 },
  bisckit_marigold: { hsn: 1905, gst: 18 },
  kenlay: { hsn: "-", gst: 18 },
  harbel_handwash: { hsn: 3401, gst: 18 },
  borolab: { hsn: 3304, gst: 12 },
  neem_shop: { hsn: 3401, gst: 18 },
  alovera_shop: { hsn: 3401, gst: 18 },
  colget_detal_fresh: { hsn: 33061020, gst: 18 },
  colget_max_fresh: { hsn: 33061020, gst: 18 },
  colget_active_salt: { hsn: 33061020, gst: 18 },
  colget_brush: { hsn: 96032100, gst: 18 },
  til: { hsn: 120740, gst: 5 },
  gachak: { hsn: 1706, gst: 5 },
  mugfali: { hsn: 1202, gst: 5 },
  coke_2000_ml: { hsn: 22021010, gst: 28 },
  fanta_2000_ml: { hsn: 22021010, gst: 28 },
  sprite_2000_ml: { hsn: 22021010, gst: 28 },
  limca_2000_ml: { hsn: 22021010, gst: 28 },
  maza_1750_ml: { hsn: 22029920, gst: 28 },
  maza_150_ml: { hsn: 22029920, gst: 28 },
  coke_500_ml: { hsn: 22021010, gst: 28 },
  Limca_500_ml: { hsn: 22021010, gst: 28 },
  sprite_500_ml: { hsn: 22021010, gst: 28 },
  coke_250_ml: { hsn: 22021010, gst: 28 },
  limca_250_ml: { hsn: 22021010, gst: 28 },
  fanta_250_ml: { hsn: 22021010, gst: 28 },
  sprite_250_ml: { hsn: 22021010, gst: 28 },
  nimboo_250_ml: { hsn: 22029990, gst: 28 },
  maza_250_ml: { hsn: 22029920, gst: 28 },
  kinley_water_100_ml: { hsn: 22011010, gst: 28 }
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
    grandtotaldis.getElementsByClassName("value")[0].innerText = grandtotal.toFixed(4);
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
  var input = inputholder.getElementsByTagName("input")
  var inputdateholder = document.getElementById("ind")
  var inputdate = inputdateholder.getElementsByTagName("input")[0]
  var inputbillno = inputdateholder.getElementsByTagName("input")[1]
  document.getElementById("show-date").innerText = "Date :- " + inputdate.value
  document.getElementById("show-billno").innerText = "Bill No :- " + inputbillno.value
  inputdate.style.display = "none"
  inputbillno.style.display = "none"
}

function gstdis(a, b, c, d) {
  var gst5dis = document.getElementById("gst5-display")
  var gst12dis = document.getElementById("gst12-display")
  var gst18dis = document.getElementById("gst18-display")
  var gst28dis = document.getElementById("gst28-display")
  gst5dis.getElementsByClassName("value")[0].innerText = a.toFixed(2)
  gst12dis.getElementsByClassName("value")[0].innerText = b.toFixed(2)
  gst18dis.getElementsByClassName("value")[0].innerText = c.toFixed(2)
  gst28dis.getElementsByClassName("value")[0].innerText = d.toFixed(2)
}

var inrow = document.getElementById("rate");
inrow.addEventListener("keypress", function (e) {
  var table = document.getElementsByTagName("table")[0]
  if (e.keyCode === 13) {
    insert()
  }
})
