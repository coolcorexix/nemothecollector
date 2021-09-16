import React, { ReactNode } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function Providers(props: { children: ReactNode }) {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LeRkD0cAAAAABvBsr_6czBNSI0a-9GAfDVwC18t">
      {props.children}
    </GoogleReCaptchaProvider>
  );
}

export default Providers;
