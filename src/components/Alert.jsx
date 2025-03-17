import Swal from 'sweetalert2';

const alertLoad = async (data) => { 
    return Swal.fire({
        title: 'Procesando...',
        text: 'Por favor espere',
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        }
    });
}

const alertSuccess = async (data) => { 
    return  Swal.fire({
        icon: 'success',
        title: '¡Éxito!',
        text: 'Habitación registrada correctamente',
        confirmButtonColor: '#3085d6'
    });
}

const alertError = async (data) => { 
    return  Swal.fire({
        icon: 'error',
        title: 'Error',
        text: data,
        confirmButtonColor: '#d33'
    });
}


export {
    alertLoad,
    alertSuccess,
    alertError
}