import { SnackbarProvider } from "notistack";
import * as React from "react";
import Footer from "./component/Footer";
import Menu from "./component/Menu";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { ShopContext } from "./ShopContext/Shopcontext";
import { useContext } from "react";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { styled } from '@mui/material/styles';
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});
const Profile = () => {
  const valueContext = useContext(ShopContext);

  return (
    <div>
      <SnackbarProvider autoHideDuration={2500} />
      {/* Navbar End */}
      {/* Breadcrumb Start */}
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-12">
            <nav className="breadcrumb bg-light mb-30">
              <a className="breadcrumb-item text-dark" href>
                Account
              </a>
              <span className="breadcrumb-item active">Profile</span>
            </nav>
          </div>
        </div>
      </div>
      {/* Breadcrumb End */}
      {/* Contact Start */}
      <div className="container">
        <div className="photo">
          <Box
            sx={{
              width: "100%",
              position: "relative",
              overflow: { xs: "none", sm: "initial" },
            }}
          >
            <Card
              orientation="horizontal"
              sx={{
                width: "100%",
                flexWrap: "wrap",
                [`& > *`]: {
                  "--stack-point": "500px",
                  minWidth:
                    "clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)",
                },
                // make the card resizable for demo
                overflow: "auto",
                resize: "horizontal",
              }}
            >
              <AspectRatio
                flex
                ratio="1"
                maxHeight={182}
                sx={{ minWidth: 182 , }}
              >

                <img
                  src={`http://localhost:3001/images/${valueContext.user.Photo}`}
                  loading="lazy"
                  alt=""
                />
   
              </AspectRatio>
              <Button component="label" variant="contained" startIcon={<DriveFolderUploadIcon />}>
    <DriveFolderUploadIcon></DriveFolderUploadIcon>  Upload file
      <VisuallyHiddenInput type="file" />
    </Button>
              <CardContent>
                <Typography fontSize="xl" fontWeight="lg">
                  {valueContext.user.FirstName} {valueContext.user.LastName}
                </Typography>
                <Typography
                  level="body-sm"
                  fontWeight="lg"
                  textColor="text.tertiary"
                >
                  Senior Journalist
                </Typography>
                <Sheet
                  sx={{
                    bgcolor: "background.level1",
                    borderRadius: "sm",
                    p: 1.5,
                    my: 1.5,
                    display: "flex",
                    gap: 2,
                    "& > div": { flex: 1 },
                  }}
                >
                  <div>
                    <Typography level="body-xs" fontWeight="lg">
                      Connected
                    </Typography>
                    <Typography fontWeight="lg">34</Typography>
                  </div>
                  <div>
                    <Typography level="body-xs" fontWeight="lg">
                      Followers
                    </Typography>
                    <Typography fontWeight="lg">980</Typography>
                  </div>
                  <div>
                    <Typography level="body-xs" fontWeight="lg">
                      Order Recommended
                    </Typography>
                    <Typography fontWeight="lg">4</Typography>
                  </div>
                </Sheet>
                <Box
                  sx={{ display: "flex", gap: 1.5, "& > button": { flex: 1 } }}
                >
                  <Button variant="outlined" color="neutral">
                    Chat
                  </Button>
                  <Button variant="solid" color="primary">
                    Follow
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </div>{" "}
        <br /> <br />
        <FormControl className="FormControl">
          <FormLabel>First Name</FormLabel>
          <Input className="inputFormlabel" placeholder="First Name" /> <br />
          <FormLabel>Last Name</FormLabel>
          <Input className="inputFormlabel" placeholder="Last Name" /> <br />
          <FormLabel>Email</FormLabel>
          <Input className="inputFormlabel" placeholder="Your email" /> <br />
          <FormLabel>Number Phone</FormLabel>
          <Input
            className="inputFormlabel"
            placeholder="Ex 00216 9914 9926"
          />{" "}
          <br />
          <FormControl>
            <FormLabel>Adress</FormLabel>
            <div className="FormControl2">
              <Input className="inputFormlabel2" placeholder="Adress" />
              <Input className="inputFormlabel2" placeholder="City" />
              <Input className="inputFormlabel2" placeholder="Zip Code" />
            </div>
          </FormControl>{" "}
          <br />
          <Button loading>Default</Button>
          <Button size="lg" color="success">
            Success
          </Button>
        </FormControl>
      </div>

      {/* Contact End */}
    </div>
  );
};

export default Profile;
