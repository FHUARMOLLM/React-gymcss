import React from 'react';

const Class = () => {
  return (
    <section className="class section" id="Productos">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12 text-center mb-5">
            <h6 data-aos="fade-up">Obtén un cuerpo perfecto</h6>
            <h2 data-aos="fade-up" data-aos-delay="200">Nuestros Productos</h2>
          </div>
          <div className="mt-3 col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="400">
            <div className="class-thumb">
              <img src="./images/class/conjuntodepo.jpg" className="img-fluid" alt="Class" />
              <div className="class-info">
                <h3 className="mb-1">Ropa deportiva</h3>
                <span><strong>Marca:</strong> Nike </span>
                <span className="class-price">$50</span>
                <p className="mt-3">Nuestras clases de yoga te ayudarán a mejorar la flexibilidad y encontrar paz interior.</p>
              </div>
            </div>
          </div>
          <div className="mt-3 col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="600">
            <div className="class-thumb">
              <img src="./images/class/accesorios.jpg" className="img-fluid" alt="Class" />
              <div className="class-info">
                <h3 className="mb-1">accesorios</h3>
                <span><strong>Marca:</strong> Totto</span>
                <span className="class-price">$45</span>
                <p className="mt-3">Aumenta tu resistencia cardiovascular y quema calorías con nuestras clases de cardio dinámicas.</p>
              </div>
            </div>
          </div>
          <div className="mt-3 col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="500">
            <div className="class-thumb">
              <img src="./images/class/suplegym.jpg" className="img-fluid" alt="Class" />
              <div className="class-info">
                <h3 className="mb-1">Suplementos</h3>
                <span><strong>Marca:</strong> Optimus Nutrition</span>
                <span className="class-price">$75</span>
                <p className="mt-3">Entrena con intensidad en nuestras clases de crossfit diseñadas para mejorar tu resistencia y fuerza.</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Class;

