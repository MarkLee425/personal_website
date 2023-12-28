import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Tailwind,
  Text,
} from "@react-email/components";
import { useId } from "react";

interface EmailTemplateProps {
  email: string;
  content: string;
}

export const EmailTemplate = ({ email, content }: EmailTemplateProps) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans" key={useId()}>
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Career
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              From (
              <Link
                href={`mailto:${email}`}
                className="text-blue-600 no-underline"
              >
                {email}
              </Link>
              )
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              {content}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailTemplate;
