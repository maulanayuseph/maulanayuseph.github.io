(this.webpackJsonpjdsfrontend=this.webpackJsonpjdsfrontend||[]).push([[0],{26:function(a,e,t){},27:function(a,e,t){},34:function(a,e,t){"use strict";t.r(e);var n=t(10),s=t.n(n),i=t(14),l=t.n(i),r=(t(26),t(20)),c=t(15),h=t(16),o=t(21),d=t(19),u=(t(27),t(17)),j=t.n(u),b=t(18).a.initializeApp({apiKey:"AIzaSyDKMz3VxqK5_6iJg-3R-ILGPFDuS72jw9s",authDomain:"chataja-test-33df4.firebaseapp.com",databaseURL:"https://chataja-test-33df4.firebaseio.com",projectId:"chataja-test-33df4",storageBucket:"chataja-test-33df4.appspot.com",messagingSenderId:"587652600191",appId:"1:587652600191:web:cfbdb3e312893471740a4a",measurementId:"G-PMFGYKH412"}),m=j.a.createClass(b.database()),p=t(7),g=t.n(p),x=t(2),O=function(a){Object(o.a)(t,a);var e=Object(d.a)(t);function t(a){var n;return Object(c.a)(this,t),(n=e.call(this,a)).handleChange=function(a){var e=n.state.fields;e[a.currentTarget.getAttribute("name")]=a.target.value,n.setState({fields:e})},n.onSubmit=function(a){if(a.preventDefault(),n.handleValidation()){var e=n.state.fields;e.Foto_KTP=n.state.base64fotoKtp,e.Foto_Kartu_Keluarga=n.state.base64fotoKK,n.setState({fields:e}),n.submitData(e)}else alert("Form belum diisi dengan benar.."),setTimeout((function(){n.setState({showError:!1,errors:{}})}),5e3)},n.props=a,n.state={dataWarga:{},fields:{},response:{},errors:{},alert:"",alertError:"",lengthdataWarga:"",showSuccess:!1,showError:!1,base64fotoKtp:"",base64fotoKK:""},n}return Object(h.a)(t,[{key:"componentDidMount",value:function(){g()(".inputDataWarga").attr("style","display:none"),g()(".simpanButton").attr("disabled","disabled");var a=this.state.fields;a.Jenis_Kelamin="Laki-Laki",this.setState({fields:a})}},{key:"componentWillMount",value:function(){this.dataWargaRef=m.syncState("Datawarga",{context:this,state:"dataWarga"})}},{key:"componentWillUnmount",value:function(){m.removeBinding(this.dataWargaRef)}},{key:"formatRupiah",value:function(a){return"Rp. "+parseInt(a).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}},{key:"clickInputWarga",value:function(){g()(".listDataWarga").attr("style","display:none"),g()(".inputDataWarga").attr("style","display:block"),g()(".alasanLainnya").attr("style","display:none"),g()("#bChecked").attr("checked",!1),this.setState({fields:{Jenis_Kelamin:"Laki-Laki",Foto_KTP:"",Foto_Kartu_Keluarga:"",Alasan_Membutuhkan_Bantuan:0,Alasan_Lainnya:""}})}},{key:"clickBack",value:function(){g()(".listDataWarga").attr("style","display:block"),g()(".inputDataWarga").attr("style","display:none")}},{key:"changeAlasan",value:function(a){var e=this.state.fields;"Lainnya"===a?(e.Alasan_Membutuhkan_Bantuan=a,g()(".alasanLainnya").focus(),g()(".alasanLainnya").attr("style","display:block")):(e.Alasan_Membutuhkan_Bantuan=a,g()(".alasanLainnya").attr("style","display:none"))}},{key:"submitData",value:function(a){var e=Object(r.a)({},this.state.dataWarga),t=Object.keys(e).length,n=parseInt(t)+1;a.Alasan_Lainnya&&(a.Alasan_Membutuhkan_Bantuan=a.Alasan_Lainnya),e[n]={Nama:a.Nama,NIK:a.NIK,Nomor_Kartu_Keluarga:a.Nomor_Kartu_Keluarga,Foto_KTP:a.Foto_KTP,Foto_Kartu_Keluarga:a.Foto_Kartu_Keluarga,Umur:a.Umur,Jenis_Kelamin:a.Jenis_Kelamin,Alamat:a.Alamat,RT:a.RT,RW:a.RW,Penghasilan_Sebelum_Pandemi:a.Penghasilan_Sebelum_Pandemi,Penghasilan_Setelah_Pandemi:a.Penghasilan_Setelah_Pandemi,Alasan_Membutuhkan_Bantuan:a.Alasan_Membutuhkan_Bantuan},this.setState({dataWarga:e}),alert("Input Data Warga Berhasil.."),setTimeout((function(){g()(".inputDataWarga").attr("style","display:none"),g()(".simpanButton").attr("disabled","disabled"),g()(".listDataWarga").attr("style","display:block"),g()(".alasanLainnya").attr("style","display:none")}),1e3)}},{key:"handleValidation",value:function(){var a=this.state.fields,e={},t=!0,n=document.forms[0],s=n.querySelector('input[name="Foto_KTP"]').files[0],i=n.querySelector('input[name="Foto_Kartu_Keluarga"]').files[0];if(a.Nama||(t=!1,e.Nama="Nama Wajib Diisi"),a.NIK||(t=!1,e.NIK="NIK Wajib Diisi"),a.Nomor_Kartu_Keluarga||(t=!1,e.Nomor_Kartu_Keluarga="Nomor Kartu Keluarga Wajib Diisi"),s){var l=n.querySelector('input[name="Foto_KTP"]').files[0].size,r=n.querySelector('input[name="Foto_KTP"]').files[0].type;("image/jpeg"!=r&&"image/png"!=r&&"image/jpg"!=r&&"image/bmp"!=r||l>2048e3)&&(e.Foto_KTP="Foto KTP Maksimal 2MB, format harus JPG/JPEG/PNG/BMP",t=!1)}else e.Foto_KTP="Foto KTP Wajib Diisi",t=!1;if(i){var c=n.querySelector('input[name="Foto_Kartu_Keluarga"]').files[0].size,h=n.querySelector('input[name="Foto_Kartu_Keluarga"]').files[0].type;("image/jpeg"!=h&&"image/png"!=h&&"image/jpg"!=h&&"image/bmp"!=h||c>2048e3)&&(e.Foto_Kartu_Keluarga="Foto Kartu Keluarga Maksimal 2MB, format harus JPG/JPEG/PNG/BMP",t=!1)}else e.Foto_Kartu_Keluarga="Foto Kartu Keluarga Wajib Diisi",t=!1;return a.Umur||(t=!1,e.Umur="Umur KTP Wajib Diisi dan Minimal 25 Tahun"),a.Jenis_Kelamin||(t=!1,e.Jenis_Kelamin="Jenis Kelamin Wajib Diisi"),a.Alamat||(t=!1,e.Alamat="Alamat Wajib Diisi"),a.RT||(t=!1,e.RT="RT Wajib Diisi"),a.RW||(t=!1,e.RW="RW Wajib Diisi"),a.Penghasilan_Sebelum_Pandemi||(t=!1,e.Penghasilan_Sebelum_Pandemi="Penghasilan Sebelum Pandemi Wajib Diisi"),a.Penghasilan_Setelah_Pandemi||(t=!1,e.Penghasilan_Setelah_Pandemi="Penghasilan Setelah Pandemi Wajib Diisi"),a.Alasan_Membutuhkan_Bantuan?"Lainnya"!==a.Alasan_Membutuhkan_Bantuan||a.Alasan_Lainnya||(t=!1,e.Alasan_Lainnya="Alasan Lainnya Wajib Diisi"):(t=!1,e.Alasan_Membutuhkan_Bantuan="Alasan Membutuhkan Bantuan Wajib Diisi"),this.setState({errors:e}),t}},{key:"clickSetuju",value:function(a){!1===a?g()(".simpanButton").attr("disabled","disabled"):g()(".simpanButton").removeAttr("disabled")}},{key:"onFileChange",value:function(a,e){var t=a.target.files;return!!t.length&&this.createImage(t[0],e)}},{key:"createImage",value:function(a,e){var t=this,n=new FileReader;n.onload=function(a){0==e?t.setState({base64fotoKtp:a.target.result}):1==e&&t.setState({base64fotoKK:a.target.result})},n.readAsDataURL(a)}},{key:"render",value:function(){var a=this;return Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)("header",{className:"App-header",children:[Object(x.jsxs)("div",{className:"inputDataWarga",children:[Object(x.jsx)("div",{className:"w3-container w3-blue",children:Object(x.jsx)("h2",{children:"Form Input Data Warga Terdampak"})}),Object(x.jsx)("form",{onSubmit:this.onSubmit,className:"w3-container",children:Object(x.jsxs)("div",{className:"w3-row-padding",children:[Object(x.jsxs)("div",{className:"w3-half",children:[Object(x.jsxs)("p",{children:[Object(x.jsx)("label",{children:"Nama"}),Object(x.jsx)("input",{className:"w3-input width50",onChange:this.handleChange,name:"Nama",type:"text",value:this.state.fields.Nama||""}),Object(x.jsx)("span",{style:{color:"red"},children:this.state.errors.Nama})]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("label",{children:"NIK"}),Object(x.jsx)("input",{className:"w3-input width50",onChange:this.handleChange,name:"NIK",type:"number",value:this.state.fields.NIK||""}),Object(x.jsx)("span",{style:{color:"red"},children:this.state.errors.NIK})]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("label",{children:"Nomor Kartu Keluarga"}),Object(x.jsx)("input",{className:"w3-input width50",onChange:this.handleChange,name:"Nomor_Kartu_Keluarga",value:this.state.fields.Nomor_Kartu_Keluarga||"",type:"number"}),Object(x.jsx)("span",{style:{color:"red"},children:this.state.errors.Nomor_Kartu_Keluarga})]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("label",{children:"Foto KTP"}),Object(x.jsx)("input",{className:"w3-input width30",onChange:function(e){a.onFileChange(e,0)},name:"Foto_KTP",type:"file"}),Object(x.jsx)("span",{style:{color:"red"},children:this.state.errors.Foto_KTP})]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("label",{children:"Foto Kartu Keluarga"}),Object(x.jsx)("input",{className:"w3-input width30",onChange:function(e){a.onFileChange(e,1)},name:"Foto_Kartu_Keluarga",type:"file"}),Object(x.jsx)("span",{style:{color:"red"},children:this.state.errors.Foto_Kartu_Keluarga})]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("label",{children:"Umur"}),Object(x.jsx)("input",{className:"w3-input width30",onChange:this.handleChange,name:"Umur",type:"number",min:"25",value:this.state.fields.Umur||""}),Object(x.jsx)("span",{style:{color:"red"},children:this.state.errors.Umur})]}),Object(x.jsx)("p",{children:Object(x.jsx)("label",{children:"Jenis Kelamin"})}),Object(x.jsxs)("p",{children:[Object(x.jsxs)("select",{className:"w3-select width30",onChange:this.handleChange,name:"Jenis_Kelamin",value:this.state.fields.Jenis_Kelamin||"",children:[Object(x.jsx)("option",{value:"Laki-Laki",children:"Laki-Laki"}),Object(x.jsx)("option",{value:"Perempuan",children:"Perempuan"})]}),Object(x.jsxs)("span",{style:{color:"red"},children:["\xa0",this.state.errors.Jenis_Kelamin]})]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("label",{children:"Alamat"}),Object(x.jsx)("input",{className:"w3-input",type:"textarea",onChange:this.handleChange,name:"Alamat",rows:"4",maxLength:"255",value:this.state.fields.Alamat||""}),Object(x.jsx)("span",{style:{color:"red"},children:this.state.errors.Alamat})]})]}),Object(x.jsxs)("div",{className:"w3-half",children:[Object(x.jsxs)("p",{children:[Object(x.jsx)("label",{children:"RT"}),Object(x.jsx)("input",{className:"w3-input width30",type:"text",onChange:this.handleChange,name:"RT",maxLength:"10",value:this.state.fields.RT||""}),Object(x.jsx)("span",{style:{color:"red"},children:this.state.errors.RT})]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("label",{children:"RW"}),Object(x.jsx)("input",{className:"w3-input width30",type:"text",onChange:this.handleChange,name:"RW",maxLength:"10",value:this.state.fields.RW||""}),Object(x.jsx)("span",{style:{color:"red"},children:this.state.errors.RW})]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("label",{children:"Penghasilan Sebelum Pandemi"}),Object(x.jsx)("input",{className:"w3-input width50",type:"number",onChange:this.handleChange,name:"Penghasilan_Sebelum_Pandemi",value:this.state.fields.Penghasilan_Sebelum_Pandemi||""}),Object(x.jsx)("span",{style:{color:"red"},children:this.state.errors.Penghasilan_Sebelum_Pandemi})]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("label",{children:"Penghasilan Setelah Pandemi"}),Object(x.jsx)("input",{className:"w3-input width50",type:"number",onChange:this.handleChange,name:"Penghasilan_Setelah_Pandemi",value:this.state.fields.Penghasilan_Setelah_Pandemi||""}),Object(x.jsx)("span",{style:{color:"red"},children:this.state.errors.Penghasilan_Setelah_Pandemi})]}),Object(x.jsx)("p",{children:Object(x.jsx)("label",{children:"Alasan membutuhkan bantuan"})}),Object(x.jsxs)("p",{children:[Object(x.jsxs)("select",{className:"w3-select width40",defaultValue:"0",onChange:function(e){e.preventDefault(),a.changeAlasan(e.target.value)},name:"Alasan_Membutuhkan_Bantuan",children:[Object(x.jsx)("option",{value:"0",disabled:!0,children:"Pilih Alasan"}),Object(x.jsx)("option",{value:"Kehilangan pekerjaan",children:"Kehilangan pekerjaan"}),Object(x.jsx)("option",{value:"Kepala keluarga terdampak atau korban Covid",children:"Kepala keluarga terdampak atau korban Covid"}),Object(x.jsx)("option",{value:"Tergolong fakir/miskin semenjak sebelum Covid",children:"Tergolong fakir/miskin semenjak sebelum Covid"}),Object(x.jsx)("option",{value:"Lainnya",children:"Lainnya"})]}),Object(x.jsxs)("span",{style:{color:"red"},children:["\xa0",this.state.errors.Alasan_Membutuhkan_Bantuan]})]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("input",{className:"w3-input alasanLainnya width50",onChange:this.handleChange,name:"Alasan_Lainnya",value:this.state.fields.Alasan_Lainnya||"",type:"text"}),Object(x.jsx)("span",{className:"spanLainnya",style:{color:"red"},children:this.state.errors.Alasan_Lainnya})]}),Object(x.jsxs)("div",{className:"w3-panel w3-pale-green",children:[Object(x.jsx)("input",{className:"w3-check",id:"bChecked",onChange:function(e){a.clickSetuju(e.target.checked)},type:"checkbox"}),Object(x.jsx)("label",{className:"lblPersetujuan",children:"\xa0Saya menyatakan bahwa data yang diisikan adalah benar dan siap mempertanggungjawabkan apabila ditemukan ketidaksesuaian dalam data tersebut."})]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("button",{className:"simpanButton",type:"submit",children:"Submit"}),Object(x.jsx)("button",{className:"backButton",onClick:function(e){e.preventDefault(),a.clickBack()},children:"Kembali"})]})]})]})})]}),this.state&&this.state.dataWarga&&this.state.dataWarga.length>0?Object(x.jsxs)("div",{className:"listDataWarga overflow",children:[Object(x.jsx)("h2",{children:"Data Warga Komplek Panghegar Terdampak Covid-19"}),Object(x.jsxs)("table",{className:"w3-table w3-bordered w3-responsive",align:"center",children:[Object(x.jsx)("thead",{children:Object(x.jsx)("tr",{children:Object(x.jsx)("th",{colSpan:"14",children:Object(x.jsx)("button",{onClick:function(e){e.preventDefault(),a.clickInputWarga()},className:"blueLink",children:"Input Data Warga"})})})}),Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"No."}),Object(x.jsx)("th",{children:"Nama"}),Object(x.jsx)("th",{children:"NIK"}),Object(x.jsx)("th",{children:"Nomor Kartu Keluarga"}),Object(x.jsx)("th",{children:"Foto KTP"}),Object(x.jsx)("th",{children:"Foto Kartu Keluarga"}),Object(x.jsx)("th",{children:"Umur"}),Object(x.jsx)("th",{children:"Jenis Kelamin"}),Object(x.jsx)("th",{children:"Alamat"}),Object(x.jsx)("th",{children:"RT"}),Object(x.jsx)("th",{children:"RW"}),Object(x.jsx)("th",{children:"Penghasilan Sebelum Pandemi"}),Object(x.jsx)("th",{children:"Penghasilan Setelah Pandemi"}),Object(x.jsx)("th",{children:"Alasan Membutuhkan Bantuan"})]})},"theadtrth"),Object(x.jsx)("tbody",{children:this.state.dataWarga.map((function(e,t){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:t}),Object(x.jsx)("td",{children:e.Nama}),Object(x.jsx)("td",{children:e.NIK}),Object(x.jsx)("td",{children:e.Nomor_Kartu_Keluarga}),Object(x.jsx)("td",{children:e.Foto_KTP?Object(x.jsxs)(x.Fragment,{children:[" ",Object(x.jsx)("img",{src:e.Foto_KTP,alt:"Foto KTP",className:"gambarSize"})," "]}):""}),Object(x.jsx)("td",{children:e.Foto_Kartu_Keluarga?Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("img",{src:e.Foto_Kartu_Keluarga,alt:"Foto Kartu Keluarga",className:"gambarSize"})}):""}),Object(x.jsx)("td",{children:e.Umur}),Object(x.jsx)("td",{children:e.Jenis_Kelamin}),Object(x.jsx)("td",{children:e.Alamat}),Object(x.jsx)("td",{children:e.RT}),Object(x.jsx)("td",{children:e.RW}),Object(x.jsx)("td",{children:a.formatRupiah(e.Penghasilan_Sebelum_Pandemi)}),Object(x.jsx)("td",{children:a.formatRupiah(e.Penghasilan_Setelah_Pandemi)}),Object(x.jsx)("td",{children:e.Alasan_Membutuhkan_Bantuan})]},e.Nama)})}))},"tbody")]})]}):Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"container",children:"Loading..."})})]})})}}]),t}(s.a.Component),_=function(a){a&&a instanceof Function&&t.e(3).then(t.bind(null,35)).then((function(e){var t=e.getCLS,n=e.getFID,s=e.getFCP,i=e.getLCP,l=e.getTTFB;t(a),n(a),s(a),i(a),l(a)}))};l.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(O,{})}),document.getElementById("root")),_()}},[[34,1,2]]]);
//# sourceMappingURL=main.5abd9185.chunk.js.map