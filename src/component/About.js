import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function About() {
  return (
    <div className="Products">
      <Navbar />
      <main className="pb-5 py-5 my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <h2 className="text-center mb-4">Virksomhedens historie</h2>
              <p>I 2023 grundlagde Bastian, Catalina og Kirstine en visionær virksomhed med en passion for at forene nørdekultur med kunstnerisk raffinement. Deres rejse begyndte som et samfundsprojekt, hvor de delte deres fælles fascination for nørdeuniverset og kreativ udfoldelse. Med en kombination af færdigheder skabte de et unikt koncept: en butik, der ikke blot tilbød nørdeprodukter, men også integrerede kunstnerisk flair og kvalitetshåndværk. Denne fusion blev grundlaget for deres virksomhed, der hurtigt voksede til at blive en hyldest til både nørderi og kunstens magi, og det fortsatte med at inspirere en voksende skare af kunder verden over.</p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-8 mx-auto">
              <h2 className="text-center mb-4">Holdet</h2>
              <div className="row">
                <div className="col-md-4">
                  <div className="card mb-4">
                    <img src="https://via.placeholder.com/300" className="card-img-top" alt="Team Member 1" />
                    <div className="card-body">
                      <h5 className="card-title">Bastian Mødekjær</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam eu bibendum bibendum, elit sapien bibendum elit, vel blandit enim eros vel velit.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card mb-4">
                    <img src="https://via.placeholder.com/300" className="card-img-top" alt="Team Member 2" />
                    <div className="card-body">
                      <h5 className="card-title">Catalina Paula Curca</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam eu bibendum bibendum, elit sapien bibendum elit, vel blandit enim eros vel velit.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card mb-4">
                    <img src="https://via.placeholder.com/300" className="card-img-top" alt="Team Member 3" />
                    <div className="card-body">
                      <h5 className="card-title">Kirstine Stumph Stevnsvig</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam eu bibendum bibendum, elit sapien bibendum elit, vel blandit enim eros vel velit.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-8 mx-auto">
                <h2 className="text-center mb-4">Værdier</h2>
                <p>Vi forpligter os til at kuratere kun de mest inspirerende og autentiske nørdeprodukter, der reflekterer vores passion for kreativitet og nysgerrighed. Vi stræber efter at skabe forbindelser med kunstnere og skabere, der deler vores engagement i at skabe unikke, kvalitetsprodukter. Vores virksomhed er forankret i bæredygtighed, hvor vi prioriterer materialer af højeste kvalitet og fremmer miljøvenlige produktionsmetoder. Vi tror på at styrke fællesskabet ved at støtte lokale kunstnere og bidrage til kunstneriske og nørdeevents. Vores mål er ikke blot at tilfredsstille vores kunders passioner, men også at inspirere og skabe en positiv indvirkning på vores omgivelser.</p>
            </div>
          </div>
        </div>
      </main>
      < Footer />
    </div>
  );
}

export default About;