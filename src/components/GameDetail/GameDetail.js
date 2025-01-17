import React, { useEffect, useContext } from "react";
import {
  Paper,
  Typography,
  Divider,
  useMediaQuery,
  Button,
  Grid,
  Box,
} from "@mui/material";
import { useParams, Link } from "react-router-dom";
import { card, section, imageSection, media } from "./styles";
import { createTheme } from "@mui/material";
import { gamesContext } from "../../context/gamesContext";

export function GameDetail() {
  const { id } = useParams();
  const { game, getGame } = useContext(gamesContext);

  useEffect(() => {
    getGame(id);
  }, [getGame, id]);

  const theme = createTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isSmScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLgScreen = useMediaQuery(theme.breakpoints.up("md"));
  console.log(game.titulo);

  return (
    <Paper style={{ padding: "20px", borderRadius: "15px" }} elevation={6}>
      <div style={card}>
        <div style={section}>
          <Typography variant="h2" component="h2" sx={{ fontWeight: "Medium" }}>
            {game.titulo}
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Editorial:
            <Link style={{ textDecoration: "none", color: "#3f51b5" }}>
              {` ${game.editorial}`}
            </Link>
          </Typography>

          <Typography
            gutterBottom
            variant="h6"
            color="textSecondary"
            component="h2"
            sx={{ fontWeight: "bold" }}
          >
            {/* Desde: {game.adquisionDate} */}
          </Typography>

          {isXsScreen || isSmScreen ? (
            <div style={imageSection}>
              <img style={media} src={game.imageUrl} alt={game.titulo} />
            </div>
          ) : null}

          <Typography
            gutterBottom
            variant="body1"
            component="p"
            align="justify"
          >
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Box
            sx={{
              boxShadow: 1,
              bgcolor: "#e8e1e0",
              color: (theme) =>
                theme.palette.mode === "dark" ? "grey.300" : "grey.800",
              p: 0.1,
              m: 1,
              borderRadius: 2,
            }}
          >
            <ul>
              <li>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  color="textSecondary"
                  component="h2"
                  sx={{ fontWeight: "bold" }}
                >
                  A partir de {game.age} años
                </Typography>
              </li>
              <li>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  color="textSecondary"
                  component="h2"
                  sx={{ fontWeight: "bold" }}
                >
                  Numero de jugadores: {game.playerNum}
                </Typography>
              </li>
              <li>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  color="textSecondary"
                  component="h2"
                  sx={{ fontWeight: "bold" }}
                >
                  Duracion de juego:&nbsp;
                  {game.timeMins} mins
                </Typography>
              </li>
            </ul>
          </Box>

          <Divider style={{ margin: "20px 0" }} />

          {isXsScreen || isSmScreen ? (
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Button variant="contained" color="primary">
                Reservar
              </Button>
              <Button variant="contained" color="secondary">
                Ver disponibilidad
              </Button>
            </Grid>
          ) : null}
          {isLgScreen && (
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Button variant="contained" color="primary" size="large">
                Reservar
              </Button>
              <Button variant="contained" color="secondary" size="large">
                Ver disponibilidad
              </Button>
            </Grid>
          )}
          <Divider style={{ margin: "20px 0" }} />
          <Typography variant="body1">
            <strong>Comentarios - Coming Soon!</strong>
          </Typography>
          <Divider style={{ margin: "20px 0" }} />
        </div>
        {isLgScreen && (
          <div style={imageSection}>
            <img style={media} src={game.imageUrl} alt={game.titulo} />
          </div>
        )}
      </div>
    </Paper>
  );
}
