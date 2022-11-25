// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Page from '../../components/Page';
import RxList from './RxList';

export const RxListPage = () => {
  return (
    <>
      <Page title="RxList">
        <Container maxWidth="xl">
          <Typography variant="h4" sx={{ mb: 5 }}>
            Lista de recetas
          </Typography>
        </Container>
            <RxList />
      </Page>
    </>
  );
}
