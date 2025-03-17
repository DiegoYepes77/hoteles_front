import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createHotel } from '../services/Hotel';
import { alertError, alertLoad, alertSuccess } from './Alert';

function Hoteles() {
  const { register,reset, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
   alertLoad();
    createHotel(data)
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
        <Card.Header as="h5" className="text-center">Registrar Hotel</Card.Header>
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
                  <label className="form-label">Nombre Hotel</label>
                  <input
                    {...register("nombre", { required: "Nombre Hotel es obligatorio" })}
                    className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
                  />
                  {errors.nombre && <div className="invalid-feedback">{errors.nombre.message}</div>}
                </div>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <div className="mb-3">
                  <label className="form-label">Dirección</label>
                  <input
                    {...register("direccion", { required: "Dirección es obligatorio" })}
                    className={`form-control ${errors.direccion ? 'is-invalid' : ''}`}
                  />
                  {errors.direccion && <div className="invalid-feedback">{errors.direccion.message}</div>}
                </div>
              </Col>
              <Col md={6}>
                <div className="mb-3">
                  <label className="form-label">Teléfono</label>
                  <input
                    {...register("telefono", { required: "Teléfono es obligatorio" })}
                    className={`form-control ${errors.telefono ? 'is-invalid' : ''}`}
                    type="tel"
                  />
                  {errors.telefono && <div className="invalid-feedback">{errors.telefono.message}</div>}
                </div>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    {...register("email", {
                      required: "Email es obligatorio",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Email inválido"
                      }
                    })}
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    type="email"
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                </div>
              </Col>
              <Col md={6}>
                <div className="mb-3">
                  <label className="form-label">Cantidad</label>
                  <input
                    {...register("cantidad", {
                      required: "Cantidad es obligatorio",
                      min: { value: 1, message: "La cantidad debe ser al menos 1" }
                    })}
                    className={`form-control ${errors.cantidad ? 'is-invalid' : ''}`}
                    type="number"
                  />
                  {errors.cantidad && <div className="invalid-feedback">{errors.cantidad.message}</div>}
                </div>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <div className="mb-3">
                  <label className="form-label">RUC</label>
                  <input
                    {...register("ruc", { required: "RUC es obligatorio" })}
                    className={`form-control ${errors.ruc ? 'is-invalid' : ''}`}
                  />
                  {errors.ruc && <div className="invalid-feedback">{errors.ruc.message}</div>}
                </div>
              </Col>
              <Col md={6}>
                <div className="mb-3">
                  <label className="form-label">Razón Social</label>
                  <input
                    {...register("razon_social", { required: "Razón Social es obligatorio" })}
                    className={`form-control ${errors.razon_social ? 'is-invalid' : ''}`}
                  />
                  {errors.razon_social && <div className="invalid-feedback">{errors.razon_social.message}</div>}
                </div>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <div className="mb-3">
                  <label className="form-label">Dirección Fiscal</label>
                  <input
                    {...register("direccion_fiscal", { required: "Dirección Fiscal es obligatorio" })}
                    className={`form-control ${errors.direccion_fiscal ? 'is-invalid' : ''}`}
                  />
                  {errors.direccion_fiscal && <div className="invalid-feedback">{errors.direccion_fiscal.message}</div>}
                </div>
              </Col>
              <Col md={6}>
                <div className="mb-3">
                  <label className="form-label">Régimen Tributario</label>
                  <input
                    {...register("regimen_tributario", { required: "Régimen Tributario es obligatorio" })}
                    className={`form-control ${errors.regimen_tributario ? 'is-invalid' : ''}`}
                  />
                  {errors.regimen_tributario && <div className="invalid-feedback">{errors.regimen_tributario.message}</div>}
                </div>
              </Col>
            </Row>

            <div className="text-center mt-4">
              <Button variant="primary" type="submit">
                Registrar Hotel
              </Button>
            </div>
          </form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Hoteles;