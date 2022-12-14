import { Card, Page, Layout, SkeletonBodyText } from "@shopify/polaris";
import { Loading, TitleBar } from "@shopify/app-bridge-react";
import { QRCodeForm } from "../../components";

function QRCodeEdit() {
  const breadcrumbs = [{ content: "QR codes", url: "/" }];
  const isLoading = false;
  const isRefetching = false;
  const QRCode = {
    createdAt: "2022-06-13",
    destination: "checkout",
    title: "My first QR code",
    product: {},
  };

  if (isLoading || isRefetching) {
    return (
      <Page>
        <TitleBar
          title="Edit QR code"
          breadcrumbs={breadcrumbs}
          primaryAction="null"
        />
        <Loading />
        <Layout>
          <Layout.Section>
            <Card sectioned title="Title">
              <SkeletonBodyText />
            </Card>
            <Card title="Product">
              <Card.Section>
                <SkeletonBodyText lines={1} />
              </Card.Section>
              <Card.Section>
                <SkeletonBodyText lines={3} />
              </Card.Section>
              <Card.Section>
                <SkeletonBodyText lines={2} />
              </Card.Section>
            </Card>
          </Layout.Section>
          <Layout.Section secondary>
            <Card sectioned title="QR code" />
          </Layout.Section>
        </Layout>
      </Page>
    );
  }

  return (
    <Page>
      <TitleBar
        title="Edit QR code"
        breadcrumbs={breadcrumbs}
      />
      <QRCodeForm QRCode={QRCode} />
    </Page>
  );
}

export default QRCodeEdit;
