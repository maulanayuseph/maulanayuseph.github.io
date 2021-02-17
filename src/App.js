import React, {memo, useState} from 'react';
import './App.css';
import { base } from './Base';
import $ from 'jquery'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      dataWarga : {},
      fields: {},
      response: {},
      errors: {},
      alert : '',alertError : '', lengthdataWarga : '',
      showSuccess : false,showError : false,
      base64fotoKtp : '', base64fotoKK : '',
    }
  }

  componentDidMount() {
    $(".inputDataWarga").attr('style','display:none')
    $(".simpanButton").attr('disabled','disabled');
    let fields = this.state.fields;
    fields['Jenis_Kelamin'] = 'Laki-Laki';
    this.setState({ fields });
  }

  componentWillMount() {
    this.dataWargaRef = base.syncState('Datawarga', {
      context: this,
      state : 'dataWarga'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.dataWargaRef);
  }

  formatRupiah(bilangan) {
    var rev     = parseInt(bilangan);
    return 'Rp. '+rev.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  clickInputWarga() {
    $(".listDataWarga").attr('style','display:none')
    $(".inputDataWarga").attr('style','display:block')
    $(".alasanLainnya").attr('style','display:none')
    $("#bChecked").attr('checked',false)
    this.setState({
      fields : {
        Jenis_Kelamin : 'Laki-Laki',
        Foto_KTP : '',
        Foto_Kartu_Keluarga : '',
        Alasan_Membutuhkan_Bantuan : 0,
        Alasan_Lainnya : '',
      }
    })
  }

  clickBack() {
    $(".listDataWarga").attr('style','display:block')
    $(".inputDataWarga").attr('style','display:none')
  }

  changeAlasan(value) {
    let fields = this.state.fields;
    if (value === 'Lainnya') {
      fields['Alasan_Membutuhkan_Bantuan']  = value;
      $(".alasanLainnya").focus();
      $(".alasanLainnya").attr('style','display:block')
    } else {
      fields['Alasan_Membutuhkan_Bantuan']  = value;
      $(".alasanLainnya").attr('style','display:none')
    }
  }

  handleChange = (event) => {
    let fields = this.state.fields;
    fields[event.currentTarget.getAttribute('name')] = event.target.value;
    this.setState({ fields });
  }

  submitData(values) {
    const dataWarga = {...this.state.dataWarga}
    let count = Object.keys(dataWarga).length;
    let id = parseInt(count) + 1;

    if (values.Alasan_Lainnya) { values.Alasan_Membutuhkan_Bantuan = values.Alasan_Lainnya; }

    dataWarga[id] = {
      Nama    : values.Nama,
      NIK     : values.NIK,
      Nomor_Kartu_Keluarga : values.Nomor_Kartu_Keluarga,
      Foto_KTP : values.Foto_KTP,
      Foto_Kartu_Keluarga : values.Foto_Kartu_Keluarga,
      Umur : values.Umur,
      Jenis_Kelamin : values.Jenis_Kelamin,
      Alamat : values.Alamat,
      RT : values.RT,
      RW : values.RW,
      Penghasilan_Sebelum_Pandemi : values.Penghasilan_Sebelum_Pandemi,
      Penghasilan_Setelah_Pandemi : values.Penghasilan_Setelah_Pandemi,
      Alasan_Membutuhkan_Bantuan : values.Alasan_Membutuhkan_Bantuan
    }

    this.setState({dataWarga})
    
    alert('Input Data Warga Berhasil..');
    
    setTimeout(()=>{
      $(".inputDataWarga").attr('style','display:none')
      $(".simpanButton").attr('disabled','disabled');
      $(".listDataWarga").attr('style','display:block')
      $(".alasanLainnya").attr('style','display:none')
    }, 1000);
  }

  onSubmit = (event) => {
    event.preventDefault();
      if (this.handleValidation()) {
            let fields = this.state.fields;
            fields['Foto_KTP']            =   this.state.base64fotoKtp;
            fields['Foto_Kartu_Keluarga'] =   this.state.base64fotoKK;
            this.setState({ fields });
            this.submitData(fields);
    } else {
        alert('Form belum diisi dengan benar..')
        setTimeout(()=>{
            this.setState({
                showError  : false,
                errors : {}
            });
        }, 5000);
    }

  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    var formField     = document.forms[0]
    var fileKTP       = formField.querySelector('input[name="Foto_KTP"]').files[0]
    var fileKK        = formField.querySelector('input[name="Foto_Kartu_Keluarga"]').files[0]

    if (!fields["Nama"]) {
        formIsValid = false;
        errors["Nama"] = "Nama Wajib Diisi";
    }

    if (!fields["NIK"]) {
        formIsValid = false;
        errors["NIK"] = "NIK Wajib Diisi";
    }

    if (!fields["Nomor_Kartu_Keluarga"]) { 
      formIsValid = false;
      errors["Nomor_Kartu_Keluarga"] = "Nomor Kartu Keluarga Wajib Diisi";
    }

    if (fileKTP) {
      var sizefileKTP = formField.querySelector('input[name="Foto_KTP"]').files[0].size;
      var typefotoKtp = formField.querySelector('input[name="Foto_KTP"]').files[0].type;

      if (typefotoKtp != 'image/jpeg' && typefotoKtp != 'image/png' && typefotoKtp != 'image/jpg'  && typefotoKtp != 'image/bmp' || sizefileKTP > 2048000) {
        errors["Foto_KTP"] = "Foto KTP Maksimal 2MB, format harus JPG/JPEG/PNG/BMP";
        formIsValid = false;
      }
    } else {
      errors["Foto_KTP"] = "Foto KTP Wajib Diisi";
      formIsValid = false;
    }

    if (fileKK) {
      var sizefileKK = formField.querySelector('input[name="Foto_Kartu_Keluarga"]').files[0].size;
      var typefotoKK = formField.querySelector('input[name="Foto_Kartu_Keluarga"]').files[0].type;

      if (typefotoKK != 'image/jpeg' && typefotoKK != 'image/png' && typefotoKK != 'image/jpg'  && typefotoKK != 'image/bmp' || sizefileKK > 2048000) {
        errors["Foto_Kartu_Keluarga"] = "Foto Kartu Keluarga Maksimal 2MB, format harus JPG/JPEG/PNG/BMP";
        formIsValid = false;
      }
    } else {
      errors["Foto_Kartu_Keluarga"] = "Foto Kartu Keluarga Wajib Diisi";
      formIsValid = false;
    }

    if (!fields["Umur"]) { 
      formIsValid = false;
      errors["Umur"] = "Umur KTP Wajib Diisi dan Minimal 25 Tahun";
    }

    if (!fields["Jenis_Kelamin"]) { 
      formIsValid = false;
      errors["Jenis_Kelamin"] = "Jenis Kelamin Wajib Diisi";
    }

    if (!fields["Alamat"]) { 
      formIsValid = false;
      errors["Alamat"] = "Alamat Wajib Diisi";
    }

    if (!fields["RT"]) { 
      formIsValid = false;
      errors["RT"] = "RT Wajib Diisi";
    }

    if (!fields["RW"]) { 
      formIsValid = false;
      errors["RW"] = "RW Wajib Diisi";
    }

    if (!fields["Penghasilan_Sebelum_Pandemi"]) { 
      formIsValid = false;
      errors["Penghasilan_Sebelum_Pandemi"] = "Penghasilan Sebelum Pandemi Wajib Diisi";
    }

    if (!fields["Penghasilan_Setelah_Pandemi"]) { 
      formIsValid = false;
      errors["Penghasilan_Setelah_Pandemi"] = "Penghasilan Setelah Pandemi Wajib Diisi";
    }

    if (!fields["Alasan_Membutuhkan_Bantuan"]) { 
      formIsValid = false;
      errors["Alasan_Membutuhkan_Bantuan"] = "Alasan Membutuhkan Bantuan Wajib Diisi";
    } else if (fields["Alasan_Membutuhkan_Bantuan"] === "Lainnya" && !fields["Alasan_Lainnya"]) {
      formIsValid = false;
      errors["Alasan_Lainnya"] = "Alasan Lainnya Wajib Diisi";
    }
    
    this.setState({ errors: errors });
    return formIsValid;
  }

  clickSetuju (value) {
    if (value === false) {
      $(".simpanButton").attr('disabled','disabled');
    } else {
      $(".simpanButton").removeAttr('disabled');
    }
  }
  
  onFileChange(e,param) {
    var files = e.target.files;
    if (!files.length) {
        return false;
    } else {
        return this.createImage(files[0],param);
    }
  }

  createImage(file,param) {
    var reader = new FileReader();
    
    reader.onload = e => {
        if (param == 0) {
            this.setState({ 
               base64fotoKtp : e.target.result,
            })
        } else if (param == 1) {
          this.setState({ 
             base64fotoKK : e.target.result,
          })
      }
    };
    reader.readAsDataURL(file);
}

  render() {
    

    return (
          <div className="App">
            <header className="App-header">

                <div className="inputDataWarga">
                  <div className="w3-container w3-blue">
                    <h2>Form Input Data Warga Terdampak</h2>
                  </div>

                  <form onSubmit={this.onSubmit} className="w3-container" >
                    <div className="w3-row-padding">
                    <div className="w3-half">
                      <p>
                      <label>Nama</label>
                      <input className="w3-input width50" onChange={this.handleChange} name="Nama" type="text" value={this.state.fields["Nama"] || ''} />
                      <span style={{ color: "red" }}>{this.state.errors["Nama"]}</span></p>
                      <p>
                      <label>NIK</label>
                      <input className="w3-input width50" onChange={this.handleChange} name="NIK" type="number" value={this.state.fields["NIK"] || ''}/>
                      <span style={{ color: "red" }}>{this.state.errors["NIK"]}</span></p>
                      <p>
                      <label>Nomor Kartu Keluarga</label>
                      <input className="w3-input width50" onChange={this.handleChange} name="Nomor_Kartu_Keluarga" value={this.state.fields["Nomor_Kartu_Keluarga"] || ''} type="number" />
                      <span style={{ color: "red" }}>{this.state.errors["Nomor_Kartu_Keluarga"]}</span></p>
                      <p>
                      <label>Foto KTP</label>
                      <input className="w3-input width30" onChange={(event)=> { this.onFileChange(event,0) }} name="Foto_KTP" type="file" />
                      <span style={{ color: "red" }}>{this.state.errors["Foto_KTP"]}</span></p>
                      <p>
                      <label>Foto Kartu Keluarga</label>
                      <input className="w3-input width30" onChange={(event)=> { this.onFileChange(event,1) }} name="Foto_Kartu_Keluarga" type="file" />
                      <span style={{ color: "red" }}>{this.state.errors["Foto_Kartu_Keluarga"]}</span></p>
                      <p>
                      <label>Umur</label>
                      <input className="w3-input width30" onChange={this.handleChange} name="Umur" type="number" min="25" value={this.state.fields["Umur"] || ''}/>
                      <span style={{ color: "red" }}>{this.state.errors["Umur"]}</span></p>
                      <p>
                      <label>Jenis Kelamin</label>
                      </p><p>
                      <select className="w3-select width30" onChange={this.handleChange} name="Jenis_Kelamin" value={this.state.fields["Jenis_Kelamin"] || ''}>
                        <option value="Laki-Laki">Laki-Laki</option>
                        <option value="Perempuan">Perempuan</option>
                      </select>
                      <span style={{ color: "red" }}>&nbsp;{this.state.errors["Jenis_Kelamin"]}</span>
                      </p>
                      <p>
                      <label>Alamat</label>
                      <input className="w3-input" type="textarea" onChange={this.handleChange} name="Alamat" rows="4" maxLength="255" value={this.state.fields["Alamat"] || ''} />
                      <span style={{ color: "red" }}>{this.state.errors["Alamat"]}</span></p>
                    </div>
                    <div className="w3-half">
                    <p>
                      <label>RT</label>
                      <input className="w3-input width30" type="text" onChange={this.handleChange} name="RT" maxLength="10" value={this.state.fields["RT"] || ''} />
                      <span style={{ color: "red" }}>{this.state.errors["RT"]}</span></p>
                      <p>
                      <label>RW</label>
                      <input className="w3-input width30" type="text" onChange={this.handleChange} name="RW" maxLength="10" value={this.state.fields["RW"] || ''}/>
                      <span style={{ color: "red" }}>{this.state.errors["RW"]}</span></p>
                      <p>
                      <label>Penghasilan Sebelum Pandemi</label>
                      <input className="w3-input width50" type="number" onChange={this.handleChange} name="Penghasilan_Sebelum_Pandemi" value={this.state.fields["Penghasilan_Sebelum_Pandemi"] || ''} />
                      <span style={{ color: "red" }}>{this.state.errors["Penghasilan_Sebelum_Pandemi"]}</span></p>
                      <p>
                      <label>Penghasilan Setelah Pandemi</label>
                      <input className="w3-input width50" type="number" onChange={this.handleChange} name="Penghasilan_Setelah_Pandemi" value={this.state.fields["Penghasilan_Setelah_Pandemi"] || ''}/>
                      <span style={{ color: "red" }}>{this.state.errors["Penghasilan_Setelah_Pandemi"]}</span></p>
                      <p>
                      <label>Alasan membutuhkan bantuan</label></p>
                      <p>
                      <select className="w3-select width40" defaultValue="0" onChange={(e) => { e.preventDefault(); this.changeAlasan(e.target.value); }} name="Alasan_Membutuhkan_Bantuan" >
                        <option value="0" disabled>Pilih Alasan</option>
                        <option value="Kehilangan pekerjaan">Kehilangan pekerjaan</option>
                        <option value="Kepala keluarga terdampak atau korban Covid">Kepala keluarga terdampak atau korban Covid</option>
                        <option value="Tergolong fakir/miskin semenjak sebelum Covid">Tergolong fakir/miskin semenjak sebelum Covid</option>
                        <option value="Lainnya">Lainnya</option>
                      </select>
                      <span style={{ color: "red" }}>&nbsp;{this.state.errors["Alasan_Membutuhkan_Bantuan"]}</span>
                      </p>
                      <p>
                      <input className="w3-input alasanLainnya width50" onChange={this.handleChange} name="Alasan_Lainnya" value={this.state.fields["Alasan_Lainnya"] || ''} type="text" />
                      <span className="spanLainnya" style={{ color: "red" }}>{this.state.errors["Alasan_Lainnya"]}</span>
                      </p>
                      <div className="w3-panel w3-pale-green">
                        <input className="w3-check" id="bChecked" onChange={(e) => { this.clickSetuju(e.target.checked);}}  type="checkbox"/>
                        <label className="lblPersetujuan">&nbsp;Saya menyatakan bahwa data yang diisikan adalah benar dan siap mempertanggungjawabkan apabila ditemukan ketidaksesuaian dalam data tersebut.</label>
                      </div>
                      <p>
                        <button className="simpanButton" type="submit">Submit</button>

                        <button className="backButton" onClick={(e) => {
                            e.preventDefault();
                            this.clickBack();
                        }}>Kembali</button>
                      </p>
                    </div>
                    </div>
                  </form>

                </div>

              { 
                (this.state && this.state.dataWarga && this.state.dataWarga.length > 0) ?
                <div className="listDataWarga overflow">
                  <h2>Data Warga Komplek Panghegar Terdampak Covid-19</h2>
                  <table className="w3-table w3-bordered w3-responsive" align="center">
                    <thead>
                      <tr>
                        <th colSpan="14"><button onClick={(e) => {
                            e.preventDefault();
                            this.clickInputWarga();
                        }} className="blueLink">Input Data Warga</button></th>
                      </tr>
                    </thead>
                    <thead key="theadtrth">
                      <tr>
                        <th>No.</th>
                        <th>Nama</th>
                        <th>NIK</th>
                        <th>Nomor Kartu Keluarga</th>
                        <th>Foto KTP</th>
                        <th>Foto Kartu Keluarga</th>
                        <th>Umur</th>
                        <th>Jenis Kelamin</th>
                        <th>Alamat</th>
                        <th>RT</th>
                        <th>RW</th>
                        <th>Penghasilan Sebelum Pandemi</th>
                        <th>Penghasilan Setelah Pandemi</th>
                        <th>Alasan Membutuhkan Bantuan</th>
                      </tr>
                    </thead>
                    <tbody key="tbody">
                      { this.state.dataWarga.map((i,ind) => {
                          return(
                          <>
                          <tr key={i.Nama}>
                            <td>{ind}</td>
                            <td>{i.Nama}</td>
                            <td>{i.NIK}</td>
                            <td>{i.Nomor_Kartu_Keluarga}</td>
                            <td>
                              { (i.Foto_KTP) ? <> <img src={i.Foto_KTP} alt="Foto KTP" className="gambarSize" /> </> : '' }
                            </td>
                            <td>
                              { (i.Foto_Kartu_Keluarga) ? <><img src={i.Foto_Kartu_Keluarga} alt="Foto Kartu Keluarga" className="gambarSize" /></> : '' }
                            </td>
                            <td>{i.Umur}</td>
                            <td>{i.Jenis_Kelamin}</td>
                            <td>{i.Alamat}</td>
                            <td>{i.RT}</td>
                            <td>{i.RW}</td>
                            <td>{this.formatRupiah(i.Penghasilan_Sebelum_Pandemi)}</td>
                            <td>{this.formatRupiah(i.Penghasilan_Setelah_Pandemi)}</td>
                            <td>{i.Alasan_Membutuhkan_Bantuan}</td>
                          </tr>
                          </>
                          );
                      })}
                    </tbody>
                  </table>
                </div>
              :
              <>
                <div className="container">Loading...</div>
              </>
            }
            </header>

          </div>
    );

  }

}

export default App;
