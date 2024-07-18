import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  sender: string;
};

const ContactFormEmail = ({ message, sender }: ContactFormEmailProps) => {
  return (
    <Html lang="en">
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py- rounded-md">
              <Heading className="leading-tight">
                Received following messages from contact form
              </Heading>
              <Text>{message}</Text>
              <Hr />

              <Text>The sender&apos;s Email is: {sender}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactFormEmail;
