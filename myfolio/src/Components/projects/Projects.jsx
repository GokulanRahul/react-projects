import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import JavascriptIcon from '@mui/icons-material/Javascript';
import CssIcon from '@mui/icons-material/Css';
import HtmlIcon from '@mui/icons-material/Html';
// 
import { SiReactos } from 'react-icons/si'




const tiers = [
  {
    title: 'Wikipedia',
    img: "./cut-pic.png",
    iconCss: <CssIcon />,
    iconHtml: <HtmlIcon />
  },
  {
    title: 'E-Commerce',
    subheader: 'Frame Work',
    img: "./shoping.jpg",
    iconjs: <JavascriptIcon />,
    iconCss: <CssIcon />,
    iconHtml: <HtmlIcon />,
    iconRe: <SiReactos />,

  },
  {
    title: 'Digitals',
    img: "./calc.png",
    iconjs: <JavascriptIcon />,
    iconCss: <CssIcon />,
    iconHtml: <HtmlIcon />
  },
];


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Projects() {
  return (
    <section id='Projects'>
      <ThemeProvider theme={defaultTheme} >
        <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
        />
        <CssBaseline />

        {/* Hero unit */}
        <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
          <Typography
            component="h1"
            variant="h3"
            align="center"
            color="text.secondary"
            gutterBottom
          >
            Projects
          </Typography>

        </Container>
        <Container maxWidth="md" component="main">
          <Grid container spacing={5} alignItems="flex-end">
            {tiers && tiers.map((tier) => (
              <Grid
                item
                key={tier.title}
                xs={12}
                sm={tier.title === 'Enterprise' ? 12 : 6}
                md={4}
              >
                <Card>
                  <CardHeader
                    title={tier.title}
                    subheader={tier.subheader}
                    titleTypographyProps={{ align: 'center' }}
                    action={tier.title === 'E-Commerce' ? <StarIcon /> : null}
                    subheaderTypographyProps={{
                      align: 'center',
                    }}
                    sx={{
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                          ? theme.palette.grey[200]
                          : theme.palette.grey[700],
                    }}
                  />
                  <CardContent>


                    <CardMedia
                      component="div"
                      sx={{
                        // 16:9
                        pt: '100%',
                        width: "100%"
                      }}
                      image={tier.img}
                    />

                  </CardContent>
                  <CardActions sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }} >
                    <Typography sx={{ color: "red" }}>{tier.iconHtml}</Typography>
                    <Typography sx={{ color: "yellowgreen" }}>{tier.iconCss}</Typography>
                    <Typography sx={{ color: "black" }}>{tier.iconjs}</Typography>
                    <Typography sx={{ color: "blue" }}>{tier.iconRe}</Typography>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

      </ThemeProvider>
    </section>
  );
}