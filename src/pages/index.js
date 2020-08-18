import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Healthcare Systems & Services
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">Solutions for a changing market</p>
          <p className="mt-8 md:mt-12">{/* <Button size="lg">Get Started</Button> */}</p>
          {/* <p className="mt-4 text-gray-600">Sed fermentum felis ut cursu</p> */}
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Overview of Services</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Annual</p>
              <p className="mt-4">
                {/* <ul className="list-disc">
                  <li>Federal and State cost preparation</li>
                  <li>Preparation and Documentation of year end audits</li>
                  <li>Preparation of working annual budget to be used for "what if" scenario development</li>
                  <li>Provide location specific Medicare Reimbursement Rate schedules</li>
                </ul> */}
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Monthly</p>
              <p className="mt-4">
                
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Data Mining</p>
              <p className="mt-4">
                
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Annual Services</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            <ul className="list-disc">
              <li>Federal and State cost report preparation</li>
              <li>Preparation and Documentation of year-end audits</li>
              <li>Preparation of working annual budget to be used for "what if" scenario development</li>
              <li>Provide location specific Medicare Reimbursement Rate schedules</li>
            </ul>
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Monthly Services
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            <ul className="list-disc">
              <li>Monthly financial statement preparation including reconciliation of all balance sheet accounts</li>
              <li>Audits of business office input for accuracy of ancillary services and monthly recording of patient revenue</li>
              <li>Provide documentation for HMO contract evaluation</li>
              <li>Pre-Cost Admission Program to determine the cost of a patient prior to admission</li>
              <li>Specialty reports provided on a monthly basis</li>
              <li>In detail trending 12 month specialty reports <i>not found </i>with other companies</li>
            </ul>
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Data Mining Services
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            <ul className="list-disc">
              <li>Pull cost report data for any SNF nation-wide.</li>
              <li>Download and compare multiple SNF's in any given region.</li>
            </ul>
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
       <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Other Services
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            <ul className="list-disc">
              <li>Perform 60 month projections for developers looking for financing options.</li>
              <li>Specialty analysis reports to assist operators in making educated decisions on the direction of their operation.</li>
            </ul>
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />



    {/* <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Our customers get results</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div>
      </div>
    </section> */}



    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">Our Staff</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section id="contact" className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
      <p className="mt-8 text-xl font-light">
        Contact information
      </p>
      <p className="mt-8">
        <strong>Email</strong>: larrylitman@gmail.com
        <br></br>
        <strong>Phone</strong>: 602-789-8104
        <br></br>
        <br></br>
        <strong>Email</strong>: tylerlitman@gmail.com
        <br></br>
        <strong>Phone</strong>: 602-391-9071
        {/* <Button size="xl">Get Started Now</Button> */}
      </p>
    </section>
  </Layout>
);
