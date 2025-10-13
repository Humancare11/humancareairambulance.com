import React from "react";
import { Helmet } from "react-helmet";

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      <Helmet>
        <title>Terms & Conditions | HumanCare Air Ambulance</title>
        <meta name="robots" content="noindex,follow" />
        <meta
          name="description"
          content="Terms and Conditions for HumanCare Air Ambulance"
        />
      </Helmet>

      <section className="w-full bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Terms and Conditions
          </h1>
          <p className="text-sm text-gray-500">
            Accessible from{" "}
            <span className="font-medium">HumanCareAirAmbulance.com</span>
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
        <article className="prose prose-lg max-w-none text-gray-700">
          <p>
            These terms and conditions outline the rules and regulations for the
            use of <span className="font-medium">Human Care’s Website</span>,
            located at{" "}
            <span className="font-medium">HumanCareAirAmbulance.com</span>.
          </p>
          <p>
            By accessing this website we assume you accept these terms and
            conditions. Do not continue to use Human Care Air Ambulance if you
            do not agree to take all of the terms and conditions stated on this
            page.
          </p>

          <h2>Cookies</h2>
          <p>
            We employ the use of cookies. By accessing Human Care Air Ambulance,
            you agreed to use cookies in agreement with the Human Care’s Privacy
            Policy.
          </p>

          <h2>License</h2>
          <p>
            Unless otherwise stated, Human Care and/or its licensors own the
            intellectual property rights for all material on Human Care Air
            Ambulance. All intellectual property rights are reserved. You may
            access this from Human Care Air Ambulance for your own personal use
            subjected to restrictions set in these terms and conditions.
          </p>
          <ul>
            <li>Republish material from Human Care Air Ambulance</li>
            <li>Sell, rent or sub-license material</li>
            <li>Reproduce, duplicate or copy material</li>
            <li>Redistribute content</li>
          </ul>

          <h2>Comments</h2>
          <p>
            Parts of this website offer an opportunity for users to post and
            exchange opinions and information. Human Care does not filter, edit,
            publish or review Comments prior to their presence on the website…
          </p>

          <h2>Hyperlinking to our Content</h2>
          <p>
            The following organizations may link to our Website without prior
            written approval: Government agencies, search engines, news
            organizations, and online directories…
          </p>

          <h2>iFrames</h2>
          <p>
            Without prior approval and written permission, you may not create
            frames around our Webpages that alter in any way the visual
            presentation or appearance of our Website.
          </p>

          <h2>Content Liability</h2>
          <p>
            We shall not be held responsible for any content that appears on
            your Website. You agree to protect and defend us against all claims
            arising from your Website.
          </p>

          <h2>Your Privacy</h2>
          <p>Please read our Privacy Policy.</p>

          <h2>Reservation of Rights</h2>
          <p>
            We reserve the right to request that you remove all links or any
            particular link to our Website. By continuously linking to our
            Website, you agree to be bound to and follow these linking terms and
            conditions.
          </p>

          <h2>Removal of Links</h2>
          <p>
            If you find any link on our website that is offensive, you are free
            to contact and inform us at any moment. We may consider requests but
            are not obligated to respond directly.
          </p>

          <h2>Disclaimer</h2>
          <p>
            To the maximum extent permitted by law, we exclude all
            representations, warranties, and conditions relating to our website
            and the use of this website…
          </p>

          {/* <p className="text-xs text-gray-500 mt-10">
            Last updated: {new Date().toLocaleDateString()}
          </p> */}
        </article>
      </section>
    </main>
  );
}
