import { Fragment } from 'react';
import './App.css';
import {
  Route,
  Routes,
} from "react-router-dom";
import Header from 'components/header';
import HomePage from 'pages/home';
import Footer from 'components/footer';
import GraphicsDesigning from 'pages/services/graphicsDesigning';
import Photography from 'pages/services/photography';
import SmsMarketing from 'pages/services/smsMarketing';
import SocialMediaMarketing from 'pages/services/socialMediaMarketing';
import Website from 'pages/services/website';
import EmailMarketing from 'pages/services/emailMarketing';
import SEO from 'pages/services/seo';
import Advertisements from 'pages/services/advertisements';
import Domain from 'pages/services/domain';
import ContentWriting from 'pages/services/contentWriting';
import ComapanyInfo from 'pages/companyInfo';
import Contact from 'pages/contact';

function App() {

  return (
    <Fragment>
      <Header />
      {/* <RouterProvider router={router} /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/graphics-designing" element={<GraphicsDesigning />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/sms-marketing" element={<SmsMarketing />} />
        <Route path="/social-media-marketing" element={<SocialMediaMarketing />} />
        <Route path="/webisite" element={<Website />} />
        <Route path="/email-marketing" element={<EmailMarketing />} />
        <Route path="/seo" element={<SEO />} />
        <Route path="/advertisements-postboost" element={<Advertisements />} />
        <Route path="/domain-webhost" element={<Domain />} />
        <Route path="/content-writing" element={<ContentWriting />} />

        <Route path="/services" element={<></>} />
        <Route path="/company-info" element={<ComapanyInfo />} />
        {/* <Route path="/academy" element={<></>} /> */}
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
