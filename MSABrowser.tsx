import { Card, Typography } from "@mui/material";
import BasicTable from "../components/Table";

export default function MSABrowser() {
  return (
    <Card sx={{ p: 3, maxWidth: 1200, mt: 3 }}>
      <Typography variant="h5">Tabelka z danymi</Typography>
      <BasicTable />
    </Card>
  );
}
