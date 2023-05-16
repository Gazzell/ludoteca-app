import React from "react";
import {
  Card,
  CardActions,
  CardMedia,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { media, card, cardActions, title } from "./styles";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";

function truncarTexto(texto, longitudMaxima) {
  return texto.length > longitudMaxima
    ? `${texto.substring(0, longitudMaxima)}...`
    : texto;
}

export function Game({ game }) {
  return (
    <Card sx={card}>
      <CardMedia
        role="img"
        sx={media}
        image={game.imageUrl}
        title={game.editorial}
      />
      <Box position="absolute" top="20px" left="20px" color="white">
        <Typography sx={title} variant="h5">
          {truncarTexto(game.titulo, 8)}
        </Typography>
        <Typography variant="body2">
          <Typography component="span">
            <Typography component="span">De </Typography>
            <Typography component="span" fontWeight={"medium"}>
              {game.editorial}
            </Typography>
          </Typography>
        </Typography>
      </Box>
      <Box position="absolute" top="10px" right="10px" color="white">
        <Button style={{ color: "white" }} size="small" onClick={() => {}}>
          <MoreHorizIcon fontSize="medium" />
        </Button>
      </Box>

      <CardActions sx={cardActions}>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={() => {}}
        >
          Reservar
        </Button>
        <Button
          component={Link}
          to="/game/123"
          size="small"
          variant="contained"
          color="secondary"
          onClick={() => {}}
        >
          Detalles
        </Button>
      </CardActions>
    </Card>
  );
}
