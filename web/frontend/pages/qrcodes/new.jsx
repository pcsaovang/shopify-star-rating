import { TitleBar } from "@shopify/app-bridge-react";
import { Page } from "@shopify/polaris";

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
        primaryAction={null}
      />
    </Page>
  );
}

export default ManageCode;
