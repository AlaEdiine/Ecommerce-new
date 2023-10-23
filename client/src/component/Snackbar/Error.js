// import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import { enqueueSnackbar } from "notistack";

const Error = (message , variant) => {
  enqueueSnackbar( message, { variant });
};
export default Error;
