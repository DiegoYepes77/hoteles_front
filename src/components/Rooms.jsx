import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoom } from '../services/Room';
import { alertError, alertLoad, alertSuccess } from './Alert';

function Rooms() {
  const { register,reset, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    alertLoad();
  createRoom(data)
    .then((response) => {
        reset();
        alertSuccess(); 
    })
    .catch((error) => {
      console.error(error);
      alertError(error);
    });   
  };

  return (
    <Container className="mt-4">
      <Card>
        <Card.Header as="h5" className="text-center">Registrar Habitación</Card.Header>
        <Card.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col md={6}>
                <div className="mb-3">
                  <label className="form-label">ID Hotel</label>
                  <input
                    {...register("id_hotel", { required: "ID Hotel es obligatorio" })}
                    className={`form-control ${errors.id_hotel ? 'is-invalid' : ''}`}
                    type="number"
                  />
                  {errors.id_hotel && <div className="invalid-feedback">{errors.id_hotel.message}</div>}
                </div>
              </Col>
              <Col md={6}>
                <div className="mb-3">
                  <label className="form-label">Número de Habitación</label>
                  <input
                    {...register("room_number", { required: "Número de Habitación es obligatorio" })}
                    className={`form-control ${errors.room_number ? 'is-invalid' : ''}`}
                    type="number"
                  />
                  {errors.room_number && <div className="invalid-feedback">{errors.room_number.message}</div>}
                </div>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <div className="mb-3">
                  <label className="form-label">Tipo de Habitación</label>
                  <select
                    {...register("tipo_habitacion", { required: "Tipo de Habitación es obligatorio" })}
                    className={`form-control ${errors.tipo_habitacion ? 'is-invalid' : ''}`}
                  >
                    <option value="">Seleccione tipo</option>
                    <option value="JUNIOR">Junior</option>
                    <option value="SUITE">Suite</option>
                    <option value="STANDARD">Standard</option>
                  </select>
                  {errors.tipo_habitacion && <div className="invalid-feedback">{errors.tipo_habitacion.message}</div>}
                </div>
              </Col>
              <Col md={6}>
                <div className="mb-3">
                  <label className="form-label">Tipo de Acomodación</label>
                  <select
                    {...register("tipo_acomodacion", { required: "Tipo de Acomodación es obligatorio" })}
                    className={`form-control ${errors.tipo_acomodacion ? 'is-invalid' : ''}`}
                  >
                    <option value="">Seleccione acomodación</option>
                    <option value="SENCILLA">Sencilla</option>
                    <option value="DOBLE">Doble</option>
                    <option value="TRIPLE">Triple</option>
                  </select>
                  {errors.tipo_acomodacion && <div className="invalid-feedback">{errors.tipo_acomodacion.message}</div>}
                </div>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <div className="mb-3">
                  <label className="form-label">Precio por Noche</label>
                  <input
                    {...register("precio_noche", { 
                      required: "Precio por Noche es obligatorio",
                      min: { value: 0, message: "El precio debe ser mayor a 0" }
                    })}
                    className={`form-control ${errors.precio_noche ? 'is-invalid' : ''}`}
                    type="number"
                    step="0.01"
                  />
                  {errors.precio_noche && <div className="invalid-feedback">{errors.precio_noche.message}</div>}
                </div>
              </Col>
              <Col md={6}>
                <div className="mb-3">
                  <label className="form-label">Estado</label>
                  <select
                    {...register("estado", { required: "Estado es obligatorio" })}
                    className={`form-control ${errors.estado ? 'is-invalid' : ''}`}
                  >
                    <option value="">Seleccione estado</option>
                    <option value="disponible">Disponible</option>
                    <option value="ocupado">Ocupado</option>
                    <option value="mantenimiento">Mantenimiento</option>
                  </select>
                  {errors.estado && <div className="invalid-feedback">{errors.estado.message}</div>}
                </div>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <div className="mb-3">
                  <label className="form-label">Capacidad</label>
                  <input
                    {...register("capacidad", { 
                      required: "Capacidad es obligatorio",
                      min: { value: 1, message: "La capacidad debe ser al menos 1" }
                    })}
                    className={`form-control ${errors.capacidad ? 'is-invalid' : ''}`}
                    type="number"
                  />
                  {errors.capacidad && <div className="invalid-feedback">{errors.capacidad.message}</div>}
                </div>
              </Col>
              <Col md={6}>
                <div className="mb-3">
                  <label className="form-label">Descripción</label>
                  <textarea
                    {...register("descripcion", { required: "Descripción es obligatorio" })}
                    className={`form-control ${errors.descripcion ? 'is-invalid' : ''}`}
                    rows="3"
                  />
                  {errors.descripcion && <div className="invalid-feedback">{errors.descripcion.message}</div>}
                </div>
              </Col>
            </Row>

            <div className="text-center mt-4">
              <Button variant="primary" type="submit">
                Registrar Habitación
              </Button>
            </div>
          </form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Rooms;