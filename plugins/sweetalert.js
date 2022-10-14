import Swal from 'sweetalert2'

export default function ({}, inject) {

  const swalDefault = Swal.mixin({
    confirmButtonColor: '#E7142D',
    cancelButtonColor: '#7C7C7C',
    confirmButtonText:'確定',
    cancelButtonText:'取消',
    customClass:{
    }
  })

  inject('Swal', swalDefault)
}