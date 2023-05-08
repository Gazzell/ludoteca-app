import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { media, card, title, cardActions } from "./styles";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export function Game({ game }) {
  // const formattedDate = game.adquisionDate.toDate();
  return (
    <Card sx={card}>
      <CardMedia
        role="img"
        sx={media}
        image={game.imageUrl}
        title={game.editorial}
      />
      <Box position="absolute" top="20px" left="20px" color="white">
        <Typography variant="h5" sx={{ fontWeight: "medium" }}>
          {game.titulo}
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
      <Box position="absolute" top="20px" right="20px" color="white">
        <Button style={{ color: "white" }} size="small" onClick={() => {}}>
          <MoreHorizIcon fontSize="large" />
        </Button>
      </Box>

      <Box display="flex" justifyContent="space-between" margin="13px">
        <Typography
          variant="body3"
          text="textSecondary"
          sx={{ fontWeight: "medium" }}
        >
          {game.playerNum + " Jugadores // " + game.timeMins + " minutos"}
        </Typography>
      </Box>
      <CardContent>
        <Typography sx={title} variant="h6" gutterBottom>
          {}
        </Typography>
      </CardContent>
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
          onClick={() => {}}
        >
          Detalles
        </Button>
      </CardActions>
    </Card>
  );
}
