import React from "react";
import {
  Card,
  CardActions,
  CardMedia,
  Button,
  Typography,
  Box,
  ButtonBase,
} from "@mui/material";
import { media, card, cardActions, title, cardAction } from "./styles";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useNavigate } from "react-router-dom";

function truncarTexto(texto, longitudMaxima) {
  return texto.length > longitudMaxima
    ? `${texto.substring(0, longitudMaxima)}...`
    : texto;
}

export function Game({ game }) {
  const navigate = useNavigate();
  const openGame = () => {
    navigate(`/game/${game.id}`);
  };
  return (
    <Card sx={card}>
      <ButtonBase sx={cardAction} onClick={openGame}>
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
      </ButtonBase>
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
          size="small"
          variant="contained"
          color="secondary"
          onClick={openGame}
        >
          Detalles
        </Button>
      </CardActions>
    </Card>
  );
}
