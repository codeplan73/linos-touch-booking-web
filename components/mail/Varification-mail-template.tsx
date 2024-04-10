import * as React from "react";
import Link from "next/link";

interface EmailTemplateProps {
  confirmLink: string;
}

export const VerificationEmailTemplate: React.FC<
  Readonly<EmailTemplateProps>
> = ({ confirmLink }) => (
  <div>
    <h1>Welcome, </h1>

    <p>
      Click <Link href={`${confirmLink}`}> here</Link> to confirm email.
    </p>
  </div>
);
