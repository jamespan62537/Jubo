// mui
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

const CardComponent = ({ content, onClick }) => {
  return (
    <Card
      sx={{
        width: "20%",
        bgcolor: "#f5f5f5",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <CardContent>
        <Typography>{content}</Typography>
      </CardContent>
      {onClick && (
        <CardActions>
          <Button size="small" onClick={onClick}>
            編輯
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default CardComponent;
