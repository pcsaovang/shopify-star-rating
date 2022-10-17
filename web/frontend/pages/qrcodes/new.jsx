import { TitleBar } from "@shopify/app-bridge-react";
import { Page } from "@shopify/polaris";
import { QRCodeForm } from "../../components";

function ManageCode() {
  const breadcrumbs = [
    {
      content: "QR codes",
      url: "/",
    },
  ];

  return (
    <Page>
      <TitleBar
        title="Create new QR code"
        breadcrumbs={breadcrumbs}
      />
      <QRCodeForm />
    </Page>
  );
}

export default ManageCode;
