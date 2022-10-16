import { useNavigate, TitleBar, Loading } from "@shopify/app-bridge-react";
import {
  Card,
  EmptyState,
  Layout,
  Page,
  SkeletonBodyText,
} from "@shopify/polaris";
import { QRCodeIndex } from "../components";

function HomePage() {
  const navigate = useNavigate();
  const isLoading = false;
  const isRefetching = false;
  const QRCodes = [
    {
      createdAt: "2022-06-13",
      destination: "checkout",
      title: "My first QR code",
      id: 1,
      discountCode: "SUMMERDISCOUNT",
      product: {
        title: "Faded t-shirt",
      },
    },
    {
      createdAt: "2022-06-13",
      destination: "product",
      title: "My second QR code",
      id: 2,
      discountCode: "WINTERDISCOUNT",
      product: {
        title: "Cozy parka",
      },
    },
    {
      createdAt: "2022-06-13",
      destination: "product",
      title: "QR code for deleted product",
      id: 3,
      product: {
        title: "Deleted product",
      },
    },
  ];

  const qrCodeMarkup = QRCodes?.length ? (
    <QRCodeIndex QRCodes={QRCodes} loading={isRefetching} />
  ) : null;

  const loadingMarkup = isLoading ? (
    <Card sectioned>
      <Loading />
      <SkeletonBodyText />
    </Card>
  ) : null;

  const emptyStateMarkup =
    !isLoading && !QRCodes.length ? (
      <Card sectioned>
        <EmptyState
          heading="Create unique QR codes for your product"
          image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
          action={{
            content: "Create QR Code",
            onAction: () => navigate("/qrcodes/new"),
          }}
        >
          <p>
            Allow customers to scan codes and buy products using their phones.
          </p>
        </EmptyState>
      </Card>
    ) : null;

  return (
    <Page>
      <TitleBar
        title="QR Codes"
        primaryAction={{
          content: "Create QR Code",
          onAction: () => navigate("/qrcodes/new"),
        }}
      />
      <Layout>
        <Layout.Section>
          {loadingMarkup}
          {qrCodeMarkup}
          {emptyStateMarkup}
        </Layout.Section>
      </Layout>
    </Page>
  );
}

export default HomePage;
