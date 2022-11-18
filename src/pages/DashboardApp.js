// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import Form from './form/Form';
import { DataProvider } from './form/DataContext.tsx';

export default function DashboardApp() {
  const theme = useTheme();

  return (
    <>
      <Page title="Inicio">
        <Container maxWidth="xl">
          <Typography variant="h4" sx={{ mb: 5 }}>
            Bienvenido
          </Typography>
        </Container>
        <DataProvider>
          <Form />
        </DataProvider>
      </Page>
    </>
  );
}
